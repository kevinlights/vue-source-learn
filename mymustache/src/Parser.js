import Scanner from './Scanner'

/**
 * 将模板字符串处理成 tokens 数组
 */
export default function parseTemplateToTokens(templateStr) {
  let tokens = []
  let scanner = new Scanner(templateStr)

  // 交替执行
  let word
  while (!scanner.eos()) {
    // 开始标记之前的字符
    word = scanner.scanUntil('{{')
    if (word) {
      tokens.push(['text', word])
    }
    scanner.scan('{{')

    word = scanner.scanUntil('}}')
    if (word) {
      // 判断是否是 # 和 /
      if (word[0] == '#') {
        tokens.push(['#', word.substring(1)])
      } else if (word[0] == '/') {
        tokens.push(['/', word.substring(1)])
      } else {
        tokens.push(['name', word])
      }
    }
    scanner.scan('}}')
  }
  return tokens
}