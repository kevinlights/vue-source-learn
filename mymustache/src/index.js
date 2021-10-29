import Scanner from './Scanner'

window.MyMustache = {
  render(templateStr, data) {
    console.info(templateStr)
    let scanner = new Scanner(templateStr)
    // let words = scanner.scanUntil('{{')
    // 交替执行
    let word
    while (!scanner.eos()) {
      word = scanner.scanUntil('{{')
      console.log(word)
      scanner.scan('{{')
      word = scanner.scanUntil('}}')
      console.log(word)
      scanner.scan('}}')
    }
  }
}