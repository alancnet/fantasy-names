var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$miscellaneous$animal_groups() {
	var nm1 = ["Aerie", "Amalgamation", "Army", "Arrangement", "Array", "Ascension", "Association", "Audience", "Babbling", "Band", "Barrage", "Bask", "Batch", "Battalion", "Battery", "Bazaar", "Bevy", "Bilge", "Blathering", "Bloat", "Body", "Brigade", "Brood", "Bunch", "Bundle", "Burrow", "Business", "Calling", "Caravan", "Cast", "Chain", "Chattering", "Clan", "Clearing", "Clique", "Clot", "Cloud", "Clowder", "Club", "Clump", "Cluster", "Clutch", "Coalition", "Collection", "Colony", "Column", "Community", "Company", "Conclave", "Concourse", "Confab", "Conflux", "Congerie", "Conjuring", "Congregation", "Congress", "Conspiracy", "Corps", "Coterie", "Coupling", "Covey", "Creche", "Crowd", "Crush", "Deluge", "Den", "Deposit", "Descent", "Design", "Detail", "Display", "Dominion", "Draft", "Drift", "Drove", "Enterprise", "Exaltation", "Exhibition", "Faction", "Fair", "Fall", "Family", "Flight", "Flock", "Flood", "Following", "Force", "Form", "Formation", "Fusion", "Gaggle", "Game", "Gang", "Gathering", "Generation", "Gibbering", "Gloom", "Grapple", "Grasp", "Haunt", "Haze", "Heap", "Herd", "Hive", "Horde", "Host", "House", "Hurtle", "Jam", "Kindle", "Knot", "Laze", "Lead", "League", "Legion", "Line", "Lineup", "Litter", "Loll", "Lot", "Lounge", "Mass", "Meet", "Meeting", "Melding", "Menage", "Menagerie", "Merger", "Merging", "Mob", "Monopoly", "Movement", "Muffle", "Multitude", "Murder", "Muster", "Nebula", "Nest", "Network", "Nursery", "Order", "Outfit", "Pack", "Pandemonium", "Parade", "Parish", "Party", "Pedigree", "Plunge", "Posse", "Prattling", "Press", "Pride", "Progeny", "Pursuit", "Quash", "Rabble", "Raft", "Regiment", "Relish", "Ring", "Rise", "Rookery", "Run", "Sanctuary", "School", "Scion", "Score", "Scourge", "Screech", "Siege", "Sequence", "Set", "Shoal", "Shock", "Show", "Shower", "Shroud", "Sleuth", "Slide", "Smothering", "Soar", "Society", "Squad", "Squelch", "Storm", "Suite", "Swarm", "Swoop", "Syndicate", "System", "Team", "Throng", "Tribe", "Trip", "Troop", "Troubling", "Troupe", "Tumble", "Tumult", "Turnout", "Twaddling", "Twiddling", "Union", "Unit", "Venture", "Venue", "Volley", "Waddle", "Wake", "Walk", "Wallow", "Wedge", "Welter", "Wing", "Wreck"];


	i = Math.floor(this.random() * 10); {
		rnd = Math.floor(this.random() * nm1.length);
		names = nm1[rnd];
		nm1.splice(rnd, 1);
		return names;
	}

})