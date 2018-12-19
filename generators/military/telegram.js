var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$military$telegram() {
	var names = ["Adam", "Boston", "Chicago", "Denver", "Edward", "Frank", "George", "Henry", "Ida", "John", "King", "Lincoln", "Mary", "New York", "Ocean", "Peter", "Queen", "Roger", "Sugar", "Thomas", "Union", "Victor", "William", "Xray", "Young", "Zero"];

	var r1 = Math.floor(this.random() * names.length);
	var r2 = Math.floor(this.random() * (names.length - 1));
	if (r2 >= r1) r2 = r2 + 1;

	return names[r1] + " " + names[r2];
})