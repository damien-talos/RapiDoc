/* eslint-disable */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { nothing, noChange } from 'lit';
import { directive, AsyncDirective, PartType } from 'lit/async-directive.js';
import { isPrimitive } from 'lit/directive-helpers.js';

// import { Pauser, PseudoWeakRef } from 'lit/private-async-helpers.js';

const HTML_RESULT = 1;

const isPromise = (x) => !isPrimitive(x) && typeof x.then === 'function';

/**
 * Holds a reference to an instance that can be disconnected and reconnected,
 * so that a closure over the ref (e.g. in a then function to a promise) does
 * not strongly hold a ref to the instance. Approximates a WeakRef but must
 * be manually connected & disconnected to the backing instance.
 */
class PseudoWeakRef {
    constructor(ref) {
        this._ref = ref;
    }
    /**
     * Disassociates the ref with the backing instance.
     */
    disconnect() {
        this._ref = undefined;
    }
    /**
     * Reassociates the ref with the backing instance.
     */
    reconnect(ref) {
        this._ref = ref;
    }
    /**
     * Retrieves the backing instance (will be undefined when disconnected)
     */
    deref() {
        return this._ref;
    }
}
/**
 * A helper to pause and resume waiting on a condition in an async function
 */
class Pauser {
    constructor() {
        this._promise = undefined;
        this._resolve = undefined;
    }
    /**
     * When paused, returns a promise to be awaited; when unpaused, returns
     * undefined. Note that in the microtask between the pauser being resumed
     * an an await of this promise resolving, the pauser could be paused again,
     * hence callers should check the promise in a loop when awaiting.
     * @returns A promise to be awaited when paused or undefined
     */
    get() {
        return this._promise;
    }
    /**
     * Creates a promise to be awaited
     */
    pause() {
        var _a;
        (_a = this._promise) !== null && _a !== void 0 ? _a : (this._promise = new Promise((resolve) => (this._resolve = resolve)));
    }
    /**
     * Resolves the promise which may be awaited
     */
    resume() {
        var _a;
        (_a = this._resolve) === null || _a === void 0 ? void 0 : _a.call(this);
        this._promise = this._resolve = undefined;
    }
}

// Effectively infinity, but a SMI.
const _infinity = 0x3fffffff;

export class UnsafeHTMLAsyncDirective extends AsyncDirective {
  static directiveName = 'unsafeHTMLAsync';

  static resultType = HTML_RESULT;

  //   #value = nothing;

  //   /** @type {import('lit').TemplateResult} */
  //   #templateResult = nothing;

  //   /**
  //    *
  //    * @param {import('lit/directive.js').PartInfo} partInfo
  //    */
  //   constructor(partInfo) {
  //     super(partInfo);
  //     if (partInfo.type !== PartType.CHILD) {
  //       throw new Error(
  //         `${
  //           (/** @type {UnsafeHTMLAsyncDirective} */(this.constructor)).directiveName
  //         }() can only be used in child bindings`,
  //       );
  //     }
  //   }

  //   /**
  //    *
  //    * @param {string|typeof nothing | typeof noChange | undefined | null} promise
  //    */
  //   render(promise) {
  //     Promise.resolve(promise).then((value) => {
  //       if (value === nothing || value == null) {
  //         this.#templateResult = undefined;
  //         return (this.#value = value);
  //       }
  //       if (value === noChange) {
  //         return value;
  //       }
  //       if (typeof value !== 'string') {
  //         throw new Error(
  //           `${
  //             ((/** @type {UnsafeHTMLAsyncDirective} */(this.constructor))).directiveName
  //           }() called with a non-string value`,
  //         );
  //       }
  //       if (value === this.#value) {
  //         return this.#templateResult;
  //       }
  //       this.#value = value;
  //       /** @type {TemplateStringsArray} */
  //       const strings = [value];
  //       (strings).raw = strings;
  //       // WARNING: impersonating a TemplateResult like this is extremely
  //       // dangerous. Third-party directives should not do this.
  //       (this.#templateResult = {
  //         // Cast to a known set of integers that satisfy ResultType so that we
  //         // don't have to export ResultType and possibly encourage this pattern.
  //         // This property needs to remain unminified.
  //         _$litType$: (this.constructor).resultType,
  //         strings,
  //         values: [],
  //       });
  //       this.setValue(this.#templateResult);
  //     });
  //     return noChange;
  //   }

  constructor() {
    super(...arguments);
    this.__lastRenderedIndex = _infinity;
    this.__values = [];
    this.__weakThis = new PseudoWeakRef(this);
    this.__pauser = new Pauser();
  }

  render(...args) {
    let _a;
    return (_a = args.find((x) => !isPromise(x))) !== null && _a !== void 0 ? _a : noChange;
  }

  update(_part, args) {
    const previousValues = this.__values;
    let previousLength = previousValues.length;
    this.__values = args;
    const weakThis = this.__weakThis;
    const pauser = this.__pauser;
    // If our initial render occurs while disconnected, ensure that the pauser
    // and weakThis are in the disconnected state
    if (!this.isConnected) {
      this.disconnected();
    }
    for (let i = 0; i < args.length; i++) {
      // If we've rendered a higher-priority value already, stop.
      if (i > this.__lastRenderedIndex) {
        break;
      }
      const value = args[i];
      // Render non-Promise values immediately
      if (!isPromise(value)) {
        this.__lastRenderedIndex = i;
        // Since a lower-priority value will never overwrite a higher-priority
        // synchronous value, we can stop processing now.
        const strings = [value];
            strings.raw = strings;
        return {
            // Cast to a known set of integers that satisfy ResultType so that we
            // don't have to export ResultType and possibly encourage this pattern.
            // This property needs to remain unminified.
            _$litType$: HTML_RESULT, // (this.constructor).resultType,
            strings,
            values: [],
          };
      }
      // If this is a Promise we've already handled, skip it.
      if (i < previousLength && value === previousValues[i]) {
        continue;
      }
      // We have a Promise that we haven't seen before, so priorities may have
      // changed. Forget what we rendered before.
      this.__lastRenderedIndex = _infinity;
      previousLength = 0;
      // Note, the callback avoids closing over `this` so that the directive
      // can be gc'ed before the promise resolves; instead `this` is retrieved
      // from `weakThis`, which can break the hard reference in the closure when
      // the directive disconnects
      Promise.resolve(value).then(async (result) => {
        // If we're disconnected, wait until we're (maybe) reconnected
        // The while loop here handles the case that the connection state
        // thrashes, causing the pauser to resume and then get re-paused
        while (pauser.get()) {
          await pauser.get();
        }
        // If the callback gets here and there is no `this`, it means that the
        // directive has been disconnected and garbage collected and we don't
        // need to do anything else
        const _this = weakThis.deref();
        if (_this !== undefined) {
          const index = _this.__values.indexOf(value);
          // If state.values doesn't contain the value, we've re-rendered without
          // the value, so don't render it. Then, only render if the value is
          // higher-priority than what's already been rendered.
          if (index > -1 && index < _this.__lastRenderedIndex) {
            _this.__lastRenderedIndex = index;
            const strings = [result];
            strings.raw = strings;
            _this.setValue({
              // Cast to a known set of integers that satisfy ResultType so that we
              // don't have to export ResultType and possibly encourage this pattern.
              // This property needs to remain unminified.
              _$litType$: HTML_RESULT, // (this.constructor).resultType,
              strings,
              values: [],
            });
          }
        }
      });
    }
    return noChange;
  }

  disconnected() {
    this.__weakThis.disconnect();
    this.__pauser.pause();
  }

  reconnected() {
    this.__weakThis.reconnect(this);
    this.__pauser.resume();
  }
}

/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
export const unsafeHTMLAsync = directive(UnsafeHTMLAsyncDirective);
