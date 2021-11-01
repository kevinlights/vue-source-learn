/**
 * 创建节点，将 vnode 创建成 dom
 * @param {*} vnode - text|Array 目标节点
 */
export default function createElement(vnode) {
  let domNode = document.createElement(vnode.sel)
  // 有子节点还是有文本
  if (vnode.text != ''
    && (vnode.children == undefined || vnode.children.length == 0)) {
    domNode.innerText = vnode.text
  } else if (Array.isArray(vnode.children)
    && vnode.children.length > 0) {
    // 递归创建子节点
    for (let i = 0; i < vnode.children.length; i++) {
      // 1: return value
      domNode.appendChild(createElement(vnode.children[i]))
      // 2: reference
      // createElement(vnode.children[i])
      // domNode.appendChild(vnode.children[i].elm)
    }
  }
  // 将结果放到 elm 属性中
  vnode.elm = domNode
  // 返回 elm
  return vnode.elm
}