import createElement from "./createElement"

export default function patchVnode(oldVnode, newVnode) {
  // 1. 判断是否是同一个对象
  if (oldVnode == newVnode) return
  // 2. check if newVnode has text prop
  if (newVnode.text && (newVnode.children == undefined || newVnode.children.length == 0)) {
    // 3. compare the text between old and new vnode
    if (newVnode.text != oldVnode.text) {
      // children of old vnode will be removed automatically
      oldVnode.elm.innerText = newVnode.text
    }
  } else {
    if (oldVnode.children && oldVnode.children.length > 0) {
      // 5. new and old both have non empty children
      console.info('both have children')
      // 未处理的 oldVnode 指针 
      let un = 0
      for (let i = 0; i < newVnode.children.length; i++) {
        let ch = newVnode.children[i]
        // 遍历，检查 oldVnode 中的 key 相同的项
        let isExists = false
        for (let j = 0; j < oldVnode.children.length; j++) {
          let och = oldVnode.children[j]
          if (och.key == ch.key && och.sel && ch.sel) {
            isExists = true
            break
          }
        }
        console.info(ch, isExists)
        if (!isExists) {
          let dom = createElement(ch)
          ch.elm = dom
          if (un < oldVnode.children.length) {
            oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm)
          } else {
            oldVnode.elm.appendChild(dom)
          }
        } else {
          un++
          // check if the index is changed
          if (i != j) {
            
          }
        }
      }
    } else {
      // 4. old is text, new has non empty children
      oldVnode.elm.innerHTML = ''
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children[i])
        oldVnode.elm.appendChild(dom)
      }
    }
  }
}