import vnode from './vnode'

/**
 * h('div', {}, 'text')
 * h('div', {}, [])
 * h('div', {}, h())
 * 
 * @param {*} sel 
 * @param {*} data 
 * @param {*} c 
 */
export default function (sel, data, c) {
  if (arguments.length != 3) {
    throw new Error('length of arguments must be 3.')
  }
  if (typeof c == 'string' || typeof c == 'number') {
    // h('div', {}, 'text')
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    // h('div', {}, [])
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('Invalid array')
      }
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    // h('div', {}, h())
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('Invalid parameters')
  }
}