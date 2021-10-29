
import parseTemplateToTokens from './Parser'

window.MyMustache = {
  render(templateStr, data) {
    console.info(templateStr)
    let tokens = parseTemplateToTokens(templateStr)
    console.log(tokens)
  }
}