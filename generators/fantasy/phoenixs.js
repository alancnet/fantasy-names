var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$fantasy$phoenixs() {
	var nm1 = ["Ash", "Ashes", "Aura", "Aurora", "Beacon", "Beak", "Beam", "Blaze", "Blazetalon", "Blink", "Bonfi", "Brilliancy", "Brim", "Cinder", "Cinders", "Crux", "Dawn", "Dazzle", "Deja", "Dusty", "Elemence", "Ember", "Eos", "Eterna", "Eternus", "Feathers", "Ferno", "Fiere", "Flambeau", "Flame", "Flametalon", "Flare", "Flash", "Flayme", "Fume", "Fury", "Fye", "Fyre", "Genesis", "Glaze", "Glint", "Gloss", "Glow", "Heat", "Icarus", "Ignite", "Illume", "Illumine", "Inferno", "Juvenate", "Kindle", "Light", "Lucent", "Lumino", "Luminos", "Morte", "Nether", "Nite", "Onyx", "Pharos", "Pire", "Plume", "Pyre", "Radiance", "Raise", "Ray", "Raye", "Revi", "Rise", "Ryse", "Ryze", "Scorch", "Scorchey", "Sheen", "Shimmer", "Shine", "Slag", "Soar", "Sol", "Solar", "Solaris", "Soleil", "Soot", "Soots", "Soul", "Spark", "Sparkle", "Sparkles", "Spirit", "Sprout", "Smoke", "Sunbeam", "Sunny", "Surge", "Tinder", "Torch", "Vitality", "Vitally", "Viva", "Vu", "Zeal"];


	i = Math.floor(this.random() * 10); {
		rnd = Math.floor(this.random() * nm1.length);
		names = nm1[rnd];
		return names;
	}

})