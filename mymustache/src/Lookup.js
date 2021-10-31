/**
 * 在 dataObj 对象中，使用连续点符号的 keyName 查找属性值
 * 如 a.b.c
 * @param {*} dataObj 
 * @param {*} keyName 
 */
export default function lookup(dataObj, keyName) {
  if (keyName.indexOf('.') == -1) {
    return dataObj[keyName]
  } else if (keyName == '.') {
    // 简单数组的情况
    return dataObj
  }
  let tmp = dataObj
  let keys = keyName.split('.')
  for (let i = 0; i < keys.length; i++) {
    tmp = tmp[keys[i]]
  }
  return tmp
} 