const { generators } = require('.')
const fs = require('fs')
const { camel } = require('case')
const read = file => fs.readFileSync(file, 'utf8')
const write = (file, str) => fs.writeFileSync(file, str)
const pathOf = (group, individual) => `./generators/${group}/${individual}.js`
const modify = (group, individual, fn) => {
  const newStr = fn(read(pathOf(group, individual)))
  if (newStr) write(pathOf(group, individual), newStr)
}
const modifyAll = fn => {
  Object.keys(generators).forEach(group => {
    generators[group].forEach(individual => {
      pathOf(group, individual)
      modify(group, individual, fn)
    })
  })
}

//modifyAll(str => !str.includes('module.exports') && ('module.exports = ' + str))
//modifyAll(str => !str.includes('generatorOf') && ("var generatorOf = require('../../generator-of');\n\nmodule.exports = generatorOf(" + str.substr(17) + ")")) 
//modifyAll(str => str.split('Math.random').join('this.random'))

// Object.keys(generators).forEach(group => {
//   const code = 
// `
// module.exports = {
//   ${generators[group].map(ind => `${camel(ind)}: require('./${ind}')`).join(',\n  ')}
// }
// `
// write(`./generators/${group}/index.js`, code)
// })

// indexCode = `
// module.exports = {
//   ${Object.keys(generators).map(group => `${camel(group)}: require('./${group}')`).join(',\n  ')}
// }
// `
//write('./generators/index.js', indexCode)