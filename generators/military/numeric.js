var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$military$numeric() {
	var names = ["Nadazero", "Unaone", "Bissotwo", "Terrathree", "Kartefour", "Pantafive", "Soxisix", "Setteseven", "Oktoeight", "Novenine"];

	var r1 = Math.floor(this.random() * names.length);
	var r2 = Math.floor(this.random() * (names.length - 1));
	if (r2 >= r1) r2 = r2 + 1;

	return names[r1] + " " + names[r2];
})