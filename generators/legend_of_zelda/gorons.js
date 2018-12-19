var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$legend_of_zelda$gorons() {
	var nm1 = ["B", "D", "G", "K", "M", "N", "R", "T"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "o"];
	var nm3 = ["b", "br", "bl", "d", "dr", "dl", "g", "gr", "gl", "gg", "g", "gr", "gl", "gg", "g", "gr", "gl", "gg", "g", "gr", "gl", "gg", "l", "lg", "lb", "ld", "m", "mr", "md", "mb", "n", "nd", "nl", "nb", "ng", "r", "rb", "rg", "rd", "rk", "rm", "rtr", "t", "z", "kb", "kl", "km", "kn", "kd", "b", "d", "g", "k", "l", "m", "n", "r", "t", "z", "b", "d", "g", "k", "l", "m", "n", "r", "t", "z", "b", "d", "g", "k", "l", "m", "n", "r", "t", "z", "b", "d", "g", "k", "l", "m", "n", "r", "t", "z", "b", "d", "g", "k", "l", "m", "n", "r", "t", "z"];
	var nm4 = ["", "", "", "", "", "", "", "", "", "", "", "", "k", "g", "ck", "gs", "m", "n", "s"];


	i = Math.floor(this.random() * 10); {
		rnd = Math.floor(this.random() * nm1.length);
		rnd2 = Math.floor(this.random() * nm2.length);
		rnd3 = Math.floor(this.random() * nm3.length);
		rnd4 = Math.floor(this.random() * nm4.length);
		rnd5 = Math.floor(this.random() * nm2.length);
		if (i < 4) {
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm4[rnd4];
		} else {
			rnd6 = Math.floor(this.random() * nm3.length);
			rnd7 = Math.floor(this.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm4[rnd4];
			if (i > 7) {
				rnd8 = Math.floor(this.random() * nm3.length);
				rnd9 = Math.floor(this.random() * nm2.length);
				names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd5] + nm3[rnd6] + nm2[rnd7] + nm3[rnd8] + nm2[rnd9] + nm4[rnd4];
			}
		}
		return names;
	}

})