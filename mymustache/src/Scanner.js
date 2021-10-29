/**
 * Scanner
 */

export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr
    // 定义指针位置
    this.pos = 0
    // 尾部字符串
    this.tail = templateStr
  }

  /**
   * 只扫描 {{}} ，无返回值
   */
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      // 当前位置向前移动 tag 长度
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  /**
   * 扫描除 {{}} 外的其他字符
   * 即一直扫描，直到遇到特定字符
   * 并返回之前的所有字符
   */
  scanUntil(stopTag) {
    // 记录开始位置
    const pos_backup = this.pos
    // 当尾部字符串不是以结束符开头的时候，就一直往后扫描
    while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
      this.pos++
      // 重新定义尾部字符串，包括当前位置字符
      this.tail = this.templateStr.substring(this.pos)
    }
    return this.templateStr.substring(pos_backup, this.pos)
  }

  eos() {
    // 是否到达最大查找长度
    return this.pos == this.templateStr.length
  }

}