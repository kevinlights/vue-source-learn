// import h from './mysanbbdom/h'
import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

var patch = init([ // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule, // attaches event listeners
])
// let myVnode1 = h('div', {}, 'test')
let myVnode1 = h('ul', {}, [
  h('li', { key: 'a' }, 'a'),
  h('li', { key: 'b' }, 'b'),
  h('li', { key: 'c' }, 'c'),
  h('li', { key: 'd' }, 'd'),
])
// myVnode1 = h('div', {}, h('p', {}, 'a'))
console.info(myVnode1)

let container = document.getElementById("container")
let btn = document.getElementById("btn")
patch(container, myVnode1)


let myVnode2 = h('ul', {}, [
  h('li', { key: 'e' }, 'e'),
  h('li', { key: 'a' }, 'a'),
  h('li', { key: 'b' }, 'b'),
  h('li', { key: 'c' }, 'c'),
  h('li', { key: 'd' }, 'd'),
])

btn.onclick = function () {
  // click
  patch(myVnode1, myVnode2)

}

