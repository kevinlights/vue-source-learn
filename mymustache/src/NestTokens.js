
/**
 * 折叠的嵌套 token 
 * 将 # 与 / 之间有 tokens 整合起来，作为下标为 3 的数组
 */
export default function nextTokens(tokens) {
  let nestedTokens = []

  // 使用 栈 来保存 tokens
  let sections = []
  // 一直指向 nestedTokens 结果数组，
  // 入栈时 向下层移动，出栈时，向上层移动
  let collector = nestedTokens

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case '#':
        // // 遇到 # 则入栈
        // // 给该  token 下标为 2 的项创建数组引用，以收集子元素
        // token[2] = []
        // sections.push(token)
        // // console.log(token[1] + ' pushed to stack')
        // nestedTokens.push(token)

        // 使用收集器
        collector.push(token)
        sections.push(token)
        // 将收集器指向新的位置，即要嵌套的子数组的位置
        collector = token[2] = []
        break
      case '/':
        // 遇到 / 则出栈
        let section = sections.pop()
        // console.log(section[1] + ' popped')
        // 把弹出来的项加入结果
        // nestedTokens.push(section)
        // 收集器要返回到上一层的数组位置，即栈的队尾，下标为2的数组
        collector = sections.length > 0 ?
          sections[sections.length - 1][2] : nestedTokens
        break
      default:
        // // 判断当前栈中是否为空
        // if (sections.length == 0) {
        //   nestedTokens.push(token)
        // } else {
        //   // 如果不为空，则加入结果数组
        //   sections[sections.length - 1][2].push(token)
        // }

        // 不管当前的 collector 是谁，推入 collector 即可
        collector.push(token)
    }
  }
  return nestedTokens
}