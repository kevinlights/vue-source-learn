/**
 * 组装对象
 * @param {*} sel 
 * @param {*} data 
 * @param {*} children 
 * @param {*} text 
 * @param {*} elm 
 * @returns 
 */
export default function(sel, data, children, text, elm) {
  const key = data.key
  return {
    sel, data, children, text, elm, key
  }
}