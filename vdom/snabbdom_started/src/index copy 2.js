import h from './mysanbbdom/h'

let myVnode1 = h('div', {}, 'test')
myVnode1 = h('div', {}, [
  h('p', {}, h('p', {}, 'a')),
  h('p', {}, 'b'),
  h('p', {}, 'c'),
  h('p', {}, [
    h('p', {}, 'a'),
    h('p', {}, 'b'),
    h('p', {}, 'c'),
  ]),
])
myVnode1 = h('div', {}, h('p', {}, 'a'))
console.info(myVnode1)