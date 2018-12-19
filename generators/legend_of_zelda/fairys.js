var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$legend_of_zelda$fairys(type) {
	var nm1 = ["B", "C", "D", "F", "G", "H", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "Z"];
	var nm2 = ["ea", "ae", "ai", "ao", "aa", "au", "ei", "ee", "ia", "ie", "io", "oo", "oa"];
	var nm3 = ["f", "k", "l", "m", "n", "r", "s"];
	var nm4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ie", "ia", "ea", "ae", "io", "eo", "ai"];
	var nm5 = ["w", "r", "t", "l", "k", "h", "g", "f", "d", "s", "m", "n", "v", "c"];
	var nm6 = ["a", "e", "i", "o", "u"];
	var nm7 = ["", "", "", "", "", "", "t", "h", "s", "l", "n", "m"];


	i = Math.floor(this.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(this.random() * nm1.length);
			rnd2 = Math.floor(this.random() * nm4.length);
			rnd3 = Math.floor(this.random() * nm5.length);
			rnd4 = Math.floor(this.random() * nm6.length);
			rnd5 = Math.floor(this.random() * nm7.length);
			names = nm1[rnd] + nm4[rnd2] + nm5[rnd3] + nm6[rnd4] + nm7[rnd5];
		} else {
			rnd = Math.floor(this.random() * nm1.length);
			rnd2 = Math.floor(this.random() * nm2.length);
			rnd3 = Math.floor(this.random() * nm3.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
		}
		return names;
	}

})