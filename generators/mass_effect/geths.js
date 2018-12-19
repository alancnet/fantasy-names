var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$mass_effect$geths() {
	var names1 = ["Unit", "Platform", "Mod", "System", "SysMod", "GU", "G-Unit", "Geth-Unit", "Module"];
	var names3 = ["a", "b", "c", "e", "s", "x"];
	var names4 = ["Armada", "Batallion", "Alpha", "Omega", "Myriad", "Sundry", "Horde", "Brigade", "Phalanx", "Host", "Enigma", "Terminus", "Prophet", "Genesis", "Dawn", "Oracle", "Anomaly", "Centurion", "Obelisk", "Pinnacle", "Goliath", "Apex", "Vortex", "Vertex", "Armageddon", "Oblivion", "Eternity", "Daemon", "Demise", "Destiny"];


	i = Math.floor(this.random() * 10); {
		if (i < 6) {
			rnd = Math.floor(this.random() * names1.length);
			var names2 = Math.floor((this.random() * 250) + 1);
			rnd1 = Math.floor(this.random() * names3.length);
			names = names1[rnd] + "-" + names2 + names3[rnd1];
		} else {
			rnd0 = Math.floor(this.random() * names4.length);
			names = names4[rnd0];
		}
		return names;
	}

})