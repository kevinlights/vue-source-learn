import vnode from './vnode'
import createElement from './createElement'
import patchVnode from './patchVnode'

export default function patch(oldVnode, newVnode) {
  // 判断第一个参数是 DOM 还是 vnode
  if (oldVnode.sel == '' || oldVnode.sel == undefined) {
    // 包装成 vnode
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, undefined, undefined, oldVnode)
  }
  // 判断 oldVnode 和 newVnode 是否是同一个节点 
  if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
    patchVnode(oldVnode, newVnode)
  } else {
    // 删除旧的，插入新的
    let newVnodeElm = createElement(newVnode)
    // if (oldVnode.elm && newVnodeElm) {
    if (oldVnode.elm) {
      // 向基准元素的父元素中插入新元素，插入位置为基准元素之前
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
      // oldVnode.elm.parentNode.insertBefore(newVnode.elm, oldVnode.elm)
    }
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}