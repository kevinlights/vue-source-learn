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

// vnode
var myVnode1 = h('a', { props: { href: 'https://www.baidu.com', target: '_blank' } }, 'baidu')

var myVnode2 = h('div', { class: { box: 'true' } }, 'I am a div')

var myVnode3 = h('ul', {}, [
  h('li', {}, 'a'),
  h('li', {}, 'b'),
  h('li', {}, 'c'),
])
console.info(myVnode3)

var container = document.getElementById('container')

patch(container, myVnode3)