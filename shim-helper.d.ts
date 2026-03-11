type GetPolyfill<T> = () => T

/**
 * Creates a shim function that installs a polyfill onto an object property
 * using define-properties (non-enumerable, non-configurable if already native).
 *
 * @param object - The target object to install the polyfill on
 * @param property - The property name to shim
 * @param getPolyfill - A function that returns the polyfill implementation
 * @returns A `shim()` function that installs the polyfill and returns it
 */
declare function shimHelper<TObject extends object, TKey extends string, TPolyfill>(
  object: TObject,
  property: TKey,
  getPolyfill: GetPolyfill<TPolyfill>
): () => TPolyfill

export = shimHelper

// this ts defintion was by claude