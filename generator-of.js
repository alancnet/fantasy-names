function generatorOf(generator, context) {
  if (!context) context = {
    random: function() { return Math.random() }
  }
  function generate(type) {
    return generator.call(context, type)
  }
  generate.withRandom = function(random) {
    return generatorOf(generator, {
      random: random
    })
  }
  return generate;
}
module.exports = generatorOf