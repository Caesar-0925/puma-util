export const encryptStr = (str) =>
  window.btoa(unescape(encodeURIComponent(str)))

export const decryptStr = (str) => decodeURIComponent(escape(window.atob(str)))

export const noop = () => {}

export const validateObjKeys = (obj, keys) =>
  keys.every((key) => obj.hasOwnProperty(key))
