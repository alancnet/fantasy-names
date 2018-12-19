var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$lord_of_the_rings_online$beorning(type) {﻿
	var nm1 = ["Ag", "Aln", "Aran", "Arn", "Bald", "Beorn", "Beran", "Borg", "Both", "Dag", "Darn", "Dreng", "Dug", "Eld", "Erad", "Eran", "Ern", "Fer", "Forn", "Frid", "Froth", "Gal", "Glum", "Gluth", "Grim", "Har", "Hart", "Heim", "Hroth", "Ig", "Ingel", "Is", "Iw", "Jal", "Jar", "Jarn", "Jorn", "Log", "Lor", "Lyd", "Lyth", "Mag", "Mar", "Morn", "Moth", "Nard", "Ned", "Nef", "Nor", "Old", "Ord", "Ot", "Oth", "Rand", "Rath", "Ric", "Rod", "Sig", "Skal", "Skol", "Stig", "Tar", "Theod", "Thor", "Throt", "Val", "Vald", "Vig", "Vul", "Wal", "Wald", "Wid", "Wul"];
	var nm2 = ["ald", "angar", "ard", "aric", "bald", "beorn", "bert", "bold", "brand", "dar", "dhor", "dam", "dan", "fald", "fara", "fast", "forn", "gár", "geir", "gils", "grim", "hame", "har", "helm", "here", "kald", "kar", "karl", "kin", "mód", "mar", "mark", "moth", "mund", "ohd", "ond", "or", "oric", "rand", "rath", "rek", "ric", "sel", "sorn", "stin", "styr", "tar", "taric", "thorn", "torn", "var", "vat", "vir", "vith", "wald", "war", "wine", "wulf"];
	var nm3 = ["Aer", "Amal", "Arin", "Ava", "Beorn", "Bera", "Beran", "Birn", "Bog", "Bruni", "Din", "Dis", "Dom", "Dyr", "Eir", "Esil", "Eth", "Ey", "Fast", "Faye", "Feor", "Fyn", "Gail", "Gel", "Gerth", "Gis", "Grim", "Gud", "Hall", "Har", "Hild", "Hrim", "Huld", "Hun", "Ilin", "Ingi", "Ior", "Is", "Jen", "Jern", "Jil", "Jor", "Kat", "Kath", "Kay", "Kyn", "Leot", "Lif", "Lin", "Lyn", "Maer", "Mag", "Mar", "Mel", "Nel", "Nor", "Nyr", "Od", "Ol", "Ovi", "Ovin", "Raen", "Ran", "Rhon", "Ril", "Sal", "Sig", "Sol", "Svan", "Ul", "Ulin", "Ulvin", "Una", "Vel", "Ven", "Vil", "Vyl", "Waen", "Wen", "Win", "Wyl"];
	var nm4 = ["a", "aen", "aeya", "anda", "ara", "ava", "aya", "bi", "bina", "bwyn", "byn", "da", "dira", "dis", "dora", "eith", "elde", "ena", "era", "eva", "ewyn", "fast", "firth", "frida", "fyn", "garth", "gifu", "ginny", "gun", "helda", "hena", "hera", "hild", "la", "laug", "lin", "loth", "nida", "nis", "nwyn", "ny", "olin", "ora", "otta", "owyn", "rin", "risa", "rlin", "run", "thrith", "tina", "tira", "tyn", "vera", "vild", "vor", "vyn", "wed", "wild", "winne", "wyn"];


	i = Math.floor(this.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(this.random() * nm3.length);
			rnd2 = Math.floor(this.random() * nm4.length);
			names = nm3[rnd] + nm4[rnd2];
		} else {
			rnd = Math.floor(this.random() * nm1.length);
			rnd2 = Math.floor(this.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2];
		}
		return names;
	}

})