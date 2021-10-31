import lookup from './Lookup'

/**
 * 处理 token 子数组
 * 这个函数要递归调用 renderTemplate 函数
 * 调用次数由 data 决定
 * @param {*} token 
 * @param {*} data 
 * @returns 
 */
const parseArray = (token, data) => {
  // 得到数组数据，暂时只处理数组类型
  let v = lookup(data, token[1])
  
  let resultStr = ''
  // 遍历 v 数组
  for (let i = 0; i < v.length; i++) {
    // 需要考虑 {{.}} 的情况
    resultStr += renderTemplate(token[2], v[i])
  }
  return resultStr
}


/**
 * 将 tokens 转变为 dom 字符串
 */
export default function renderTemplate(tokens, data) {
  let resultStr = ''
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    if (token[0] == 'text') {
      resultStr += token[1]
    } else if (token[0] == 'name') {
      resultStr += lookup(data, token[1])
    } else if (token[0] == '#') {
      resultStr += parseArray(token, data)
    }
  }
  return resultStr
}