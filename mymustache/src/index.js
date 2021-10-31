
import parseTemplateToTokens from './Parser'
import renderTemplate from './Render'

window.MyMustache = {
  render(templateStr, data) {
    let tokens = parseTemplateToTokens(templateStr)
    let domStr = renderTemplate(tokens, data)
    return domStr
  }
}