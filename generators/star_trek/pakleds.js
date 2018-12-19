var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$star_trek$pakleds(type) {
	var nm1 = ["B", "D", "G", "H", "K", "L", "N", "M", "P", "R"];
	var nm2 = ["a", "e", "o", "i", "u"];
	var nm3 = ["b", "d", "g", "h", "k", "l", "n", "m", "p", "r"];
	var nm4 = ["b", "d", "g", "h", "k", "l", "n", "m", "p", "r", "", ""];
	var nm5 = ["b", "d", "g", "k", "l", "m", "p", "r", "gg", "kk", "ll", "rr"];


	i = Math.floor(this.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(this.random() * nm1.length);
			rnd2 = Math.floor(this.random() * nm2.length);
			rnd3 = Math.floor(this.random() * nm3.length);
			rnd4 = Math.floor(this.random() * nm4.length);
			while (rnd4 === rnd3) {
				rnd4 = Math.floor(this.random() * nm4.length);
			}
			rnd5 = Math.floor(this.random() * nm2.length);
			rnd6 = Math.floor(this.random() * nm3.length);
			rnd7 = Math.floor(this.random() * nm4.length);
			while (rnd6 === rnd7) {
				rnd7 = Math.floor(this.random() * nm4.length);
			}
			rnd8 = Math.floor(this.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd5] + nm3[rnd6] + nm4[rnd7] + nm2[rnd8];
		} else {
			rnd = Math.floor(this.random() * nm1.length);
			rnd2 = Math.floor(this.random() * nm2.length);
			rnd3 = Math.floor(this.random() * nm3.length);
			rnd4 = Math.floor(this.random() * nm4.length);
			while (rnd4 === rnd3) {
				rnd4 = Math.floor(this.random() * nm4.length);
			}
			rnd5 = Math.floor(this.random() * nm2.length);
			rnd6 = Math.floor(this.random() * nm3.length);
			rnd7 = Math.floor(this.random() * nm4.length);
			while (rnd6 === rnd7) {
				rnd7 = Math.floor(this.random() * nm4.length);
			}
			rnd8 = Math.floor(this.random() * nm2.length);
			rnd9 = Math.floor(this.random() * nm5.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm2[rnd5] + nm3[rnd6] + nm4[rnd7] + nm2[rnd8] + nm5[rnd5];
		}
		return names;
	}

})