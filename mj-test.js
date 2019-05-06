var mjAPI = require('mathjax-node')

console.log('Calling start')
mjAPI.start()

console.log('Calling typeset')
mjAPI.typeset({
  math: 'E = mc^2',
  format: 'TeX',
  svg: true
}, (data) => {
  console.log('Data received')
  console.log(data)
})
