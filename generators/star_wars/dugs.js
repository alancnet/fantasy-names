var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$star_wars$dugs() {
	var nm1 = ["b", "d", "g", "gr", "j", "k", "n", "p", "pr", "r", "s", "t", "tr", "v"];
	var nm2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ei", "ou", "aa", "ai"];
	var nm3 = ["b", "br", "bh", "d", "dd", "dw", "g", "gn", "gr", "gw", "gg", "k", "kw", "kh", "ln", "lw", "lg", "lb", "lt", "nr", "nb", "nd", "ng", "ns", "rd", "r", "rg", "rn", "s", "sw", "ss", "w"];
	var nm4 = ["", "", "", "d", "hx", "n", "s", "x"];
	var nm5 = ["", "", "", "b", "d", "g", "gr", "j", "k", "n", "p", "pr", "r", "s", "t", "tr", "v"];
	var nm6 = ["", "", "a", "e", "i", "o", "u"];
	var nm7 = ["d", "n", "r", "s"];


	i = Math.floor(this.random() * 10); {
		rnd = Math.floor(this.random() * nm1.length);
		rnd2 = Math.floor(this.random() * nm2.length);
		rnd3 = Math.floor(this.random() * nm3.length);
		rnd2b = Math.floor(this.random() * nm2.length);
		rnd5 = Math.floor(this.random() * nm3.length);
		rnd2d = Math.floor(this.random() * nm2.length);
		rnd3c = Math.floor(this.random() * nm3.length);
		rnd2e = Math.floor(this.random() * nm2.length);
		rnd7 = Math.floor(this.random() * nm7.length);
		rnd6 = Math.floor(this.random() * nm6.length);
		namelast = nm3[rnd5] + nm2[rnd2d] + nm3[rnd3c] + nm2[rnd2e] + nm7[rnd7] + nm6[rnd6];
		if (i < 5) {
			rnd4 = Math.floor(this.random() * nm4.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd2b] + nm4[rnd4] + " " + namelast;
		} else {
			rnd3b = Math.floor(this.random() * nm3.length);
			rnd2c = Math.floor(this.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd2b] + nm3[rnd3b] + nm2[rnd2c] + " " + namelast;
		}
		return names;
	}

})