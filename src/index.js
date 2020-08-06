export const decryptStr = (str) =>
  decodeURIComponent(unescape(window.atob(str)))

export const encryptStr = (str) => window.btoa(escape(encodeURIComponent(str)))

export const noop = () => {}

export const validateObjKeys = (obj, keys) =>
  keys.every((key) => obj.hasOwnProperty(key))
