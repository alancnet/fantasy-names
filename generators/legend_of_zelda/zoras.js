var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$legend_of_zelda$zoras(type) {
	var nm1 = ["", "", "", "", "", "h", "j", "k", "m", "n", "p", "t", "v", "z"];
	var nm2 = ["a", "i", "o", "e"];
	var nm3 = ["j", "k", "l", "p", "r", "t", "v"];
	var nm4 = ["", "", "", "", "", "m", "n", "s", "r"];

	var nm5 = ["", "", "", "", "l", "n", "r", "m", "h", "f"];
	var nm6 = ["a", "u", "o", "e"];
	var nm7 = ["r", "t", "l", "n", "r", "t", "l", "ph", "v", "m"];
	var nm8 = ["", "", "", "", "", "", "n", "h"];


	i = Math.floor(this.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(this.random() * nm5.length);
			rnd2 = Math.floor(this.random() * nm6.length);
			rnd3 = Math.floor(this.random() * nm7.length);
			rnd4 = Math.floor(this.random() * nm8.length);
			rnd5 = Math.floor(this.random() * nm6.length);
			if (i < 5) {
				if (rnd < 4) {
					while (rnd4 < 6) {
						rnd4 = Math.floor(this.random() * nm8.length);
					}
				}
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd5] + nm8[rnd4];
			} else {
				rnd6 = Math.floor(this.random() * nm6.length);
				rnd7 = Math.floor(this.random() * nm7.length);
				names = nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd5] + nm7[rnd7] + nm6[rnd6] + nm8[rnd4];
			}
		} else {
			rnd = Math.floor(this.random() * nm1.length);
			rnd2 = Math.floor(this.random() * nm2.length);
			rnd3 = Math.floor(this.random() * nm3.length);
			rnd4 = Math.floor(this.random() * nm4.length);
			rnd5 = Math.floor(this.random() * nm2.length);
			if (i < 5) {
				if (rnd < 5) {
					while (rnd4 < 5) {
						rnd4 = Math.floor(this.random() * nm4.length);
					}
				}
			}
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4];
		}
		return names;
	}

})