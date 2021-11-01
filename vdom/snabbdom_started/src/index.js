import h from './mysanbbdom/h'
import patch from './mysanbbdom/patch'

const container = document.getElementById('container')
const btn = document.getElementById('btn')

var myVnode1 = h('h1', {}, 'hello')

var myVnode2 = h('ul', {}, [
  h('li', {}, 'a'),
  h('li', {}, 'b'),
  h('li', {}, 'c'),
  h('li', {}, 'd'),
  h('li', {}, [
    h('ol', {}, [
      h('li', {}, 'a'),
      h('li', {}, 'b'),
      h('li', {}, 'c'),
      h('li', {}, 'd'),
    ]),
  ]),
])

var myVnode3 = h('section', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
])

var myVnode4 = h('section', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'E' }, 'E'),
])

var myVnode5 = h('section', {}, 'origin')
var myVnode6 = h('section', {}, 'changed')

// 1. text -> text
// patch(container, myVnode5)
// btn.onclick = () => {
//   patch(myVnode5, myVnode6)
// }

// 2. text -> children
// patch(container, myVnode5)
// btn.onclick = () => {
//   patch(myVnode5, myVnode4)
// }

// 3. children -> children
patch(container, myVnode3)
btn.onclick = () => {
  patch(myVnode3, myVnode4)
}