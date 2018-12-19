var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$pets$monkeys(type) {
	var nm1 = ["Aesford", "Agamore", "Al", "Albert", "Aldric", "Aldwin", "Alex", "Alfred", "Aluin", "Amery", "Ami", "Amin", "Anderson", "Ansel", "Archibald", "Archie", "Ardel", "Art", "Arvis", "Austyn", "Aviel", "Avrey", "Azhaire", "Baggins", "Bailoch", "Baird", "Baldin", "Balding", "Baldrick", "Banner", "Bardrick", "Barnett", "Bart", "Bartel", "Bartholomew", "Beal", "Beamer", "Bean", "Beans", "Beaufort", "Beckham", "Benedict", "Benkamin", "Bennett", "Bilbo", "Blade", "Blain", "Blake", "Blanford", "Bobo", "Bonsai", "Booger", "Boomer", "Boyden", "Braddock", "Bradock", "Brand", "Brandon", "Brian", "Briant", "Brice", "Brick", "Brion", "Brock", "Brommel", "Brone", "Bruno", "Bryce", "Bubbles", "Buffin", "Burgess", "Burns", "Bursone", "Buttons", "Cadman", "Cadwallow", "Caelan", "Caldwell", "Cauley", "Ceith", "Champ", "Charles", "Charlie", "Cheeks", "Chester", "Cheston", "Cinamon", "Claiborne", "Clayborne", "Clevor", "Clifford", "Cliffton", "Clyde", "Coco", "Colt", "Colten", "Coltrane", "Conan", "Congo", "Copper", "Corrin", "Cort", "Court", "Cris", "Criss", "Criston", "Cuinn", "Dalbert", "Dalon", "Damian", "Damien", "Damon", "Dangles", "Darien", "Darwin", "Daryl", "Daryll", "Davey", "Daxton", "Dayne", "Dennie", "Dennis", "Dennys", "Desmond", "Devel", "Dever", "Devil", "Devon", "Dewey", "Digits", "Dillon", "Donahue", "Doufus", "Doug", "Dougie", "Douglas", "Dribble", "Dristan", "Drud", "Drudle", "Dufus", "Duran", "Durand", "Dwayne", "Dyfed", "Edan", "Eddrick", "Edgar", "Edmond", "Edmund", "Edwin", "Einhard", "Ektor", "Eldwin", "Eli", "ElmeFudd", "Elmer", "Elston", "Ely", "Englebert", "Eston", "Ethan", "EveSteven", "Ezrah", "Farnley", "Felton", "Filbert", "Finian", "FitJames", "Fitz", "Fitzgerald", "Flinigan", "Forba", "Forte", "Fortune", "Franco", "Frank", "Frankie", "Franklin", "Franz", "Fred", "Frederick", "Fresco", "Freud", "Fritz", "Fudd", "Fynbar", "Gabe", "Gadget", "Gale", "Garafeld", "Garrison", "Garry", "Gaston", "Gaven", "Geoffrey", "George", "Giggles", "Gilbert", "Ginger", "Gizmo", "Godfrey", "Goose", "Graham", "Gregson", "Griffin", "Grissom", "Hal", "Halcombe", "Haldane", "Hamlet", "Hamlin", "Hanford", "Hanir", "Hannes", "Hansel", "Hanz", "Harding", "Harold", "Harrison", "Harry", "Hart", "Harvey", "Heart", "Heath", "Hector", "Henry", "Heston", "Hid", "Hide", "Hillocke", "Holcombe", "Honan", "Hoodwink", "Horatio", "Hubert", "Hudson", "Hugh", "Hunter", "Huntir", "Hutch", "Hyde", "Inis", "Irwyn", "Isis", "Ismael", "Jackle", "Jackson", "Jacques", "Jaeger", "Jakson", "James", "Jameson", "Jaren", "Jarl", "Jaronimo", "Jarren", "Jasper", "Jay", "Jeckyl", "Jedi", "Jonathan", "Jones", "Jovan", "Jules", "Kane", "Kealy", "Keanu", "Kearne", "Kelwyn", "Kendal", "Kenny", "Kenzor", "Kevin", "Kile", "Kinlyn", "Kirk", "Kirkland", "Kye", "Lamond", "Leandro", "Leo", "Lionell", "Locke", "Lothair", "Love", "Luc", "Lynx", "Mac", "Makale", "Marlow", "Mate", "Matherson", "Mathew", "Maveen", "Maxwell", "Meaka", "Meldrik", "Mikael", "Mikey", "Millard", "Milton", "Misha", "Moe", "Mohawk", "Momo", "Monk", "Monte", "Monty", "Mooch", "Moose", "Morgan", "Moryn", "Murdock", "Naners", "Nanners", "Nathan", "Nathaniel", "Nayo", "Nemo", "Nick", "Nino", "Noell", "Norman", "Norvin", "Norwin", "Nuna", "Obrian", "Octo", "Oddball", "Olson", "Orlando", "Orson", "Owen", "Owyn", "Parley", "Peanut", "Pebbles", "Pelias", "Percival", "Picard", "Pickle", "Pickles", "Pierce", "Pim", "Pimky", "Pookie", "Powell", "Preston", "Pylos", "Quincy", "Quinley", "Quinn", "Radcliffe", "Raff", "Raider", "Rain", "Ralf", "Rally", "Ralph", "Randell", "Raul", "Rayman", "Raymundo", "Reece", "Reign", "Renaldo", "Rex", "Rian", "Rick", "Roadh", "Rodrik", "Roe", "Roger", "Rolan", "Rollo", "Roman", "Rowell", "Rufus", "Rupert", "Rutger", "Ryeman", "Ryzard", "Saff", "Salvadore", "Sarmon", "Saruman", "Scottey", "Scratches", "Sean", "Sheridan", "Sider", "Siennor", "Silver", "Sim", "Simon", "Sinamon", "Skinner", "Skywalker", "Solo", "Soo", "Spike", "Spinner", "Stadler", "Stanley", "Steven", "Stig", "Stinky", "Stuart", "Sun", "Swinger", "Sylvanus", "Sylver", "Tarzan", "Taz", "Teal", "Teig", "Terry", "Thaddeus", "Theo", "Theodore", "Thor", "Tickles", "Tobias", "Toland", "Tom", "Tommy", "Torrey", "Torzan", "Toug", "Trace", "Tredwall", "Trennan", "Tristen", "Tumble", "Tumbler", "Tumbles", "Udol", "Ulrich", "Valiant", "Verdinand", "Victor", "Vincent", "Wacman", "Wade", "Waldorf", "Walworth", "Warth", "Wayne", "Wendall", "Whisper", "Whitey", "Wiley", "William", "Wilmer", "Woolsey", "Wyatt", "Yules", "Zack", "Zackery", "Zaine", "Zax", "Zev", "Zevir", "Zion"];
	var nm2 = ["Aala", "Aaliyah", "Abi", "Abigail", "Adeline", "Adelisa", "Adelle", "Adelynn", "Adey", "Agatha", "Agne", "Aileen", "Aina", "Alannah", "Alaysa", "Alea", "Alene", "Alerah", "Alexi", "Alexis", "Alia", "Alice", "Alisa", "Alisanne", "Alise", "Alyvia", "Amalia", "Amazonne", "Amber", "Andrea", "Andromeda", "Ane", "Anie", "Annabel", "Annalise", "Anne", "Antoniette", "April", "Apryl", "Arabella", "Ariana", "Arlene", "Arlette", "Arlyne", "Aruse", "Ashlynn", "Ashlynne", "Asya", "Atira", "Atonia", "Aviana", "Avrill", "Avryll", "Avyanne", "Ayalah", "Aylene", "Azia", "Barbar", "Beatrice", "Bernadette", "Betty", "Bibi", "Blanch", "Blossom", "Bobo", "Bodice", "Bonney", "Bonny", "Boo", "Braelyn", "Brandyn", "Brette", "Breynine", "Bridget", "Brionna", "Brittany", "Bubbles", "Caffey", "Calli", "Cameron", "Camille", "Caress", "Caressi", "Carlina", "Carolina", "Caroline", "Cassidi", "Catherine", "Caylona", "Celeste", "Celestina", "Chance", "Chancey", "Chante", "Chantey", "Charis", "Charise", "Charlaine", "Charleen", "Charlotte", "Chelsey", "Chensey", "Chickpea", "Christey", "Christie", "Ciri", "Clara", "Cloe", "Clover", "Colbi", "Colette", "Collette", "Coralyn", "Courtney", "Crescent", "Daedrey", "Dakota", "Dalia", "Dane", "Dania", "Daphne", "Darlin", "Darline", "Darling", "Dawn", "Deirdre", "Delilah", "Delissa", "Deona", "Devynne", "Diera", "Dilah", "Dina", "Dolores", "Donna", "Dorothey", "Dorothy", "Drew", "Edda", "Edeline", "Edina", "Edlin", "Edna", "Eleanor", "Eleanore", "Eleonora", "Elf", "Elfey", "Elissa", "Eliza", "Elizabeth", "Elle", "Ellen", "Ellie", "Ellisha", "Ellyn", "Elspeth", "Elvira", "Ember", "Emmeline", "Estella", "Esther", "Evelin", "Eveline", "Fabi", "Fabienne", "Fae", "Faethe", "Faith", "Farynne", "Fatina", "Faye", "Felicity", "Fiona", "Fleur", "Fluffer", "Frances", "Francine", "Frieda", "Fritzi", "Gaelle", "Gayle", "Genevieve", "Georgina", "Geralyne", "Gertrude", "Giggle", "Giggles", "Gilberta", "Goldie", "Goldine", "Guenevere", "Guinevere", "Gwendolyn", "Hanna", "Hannah", "Hariette", "Harriet", "Hayleigh", "Helga", "Helsa", "Henrietta", "Herminey", "Hilda", "Hilde", "Hirmette", "Honey", "Hope", "Ignacia", "Iris", "Irmine", "Isis", "Ivanne", "Ivy", "Jaine", "Jamee", "Jamie", "Jane", "Jasmine", "Jean", "Jeanette", "Jeanina", "Jemima", "Jessamina", "Jessay", "Jessy", "Joann", "Joanne", "Jolee", "Josalynn", "Josette", "Joy", "Joyce", "Jude", "Judie", "Judy", "July", "June", "Juniper", "K.C.", "Kady", "Kaira", "Kalee", "Kaley", "Karci", "Karin", "Kasey", "Kasinda", "Kassidi", "Katharina", "Katherine", "Katy", "Kayci", "Kaye", "Kayleen", "Kelcey", "Kelly", "Kenny", "Keye", "Kila", "Kira", "Kirby", "Kirsten", "Kristena", "Kyra", "Laughlin", "Lavy", "Leah", "Leela", "Lena", "Lev", "Libby", "Lil", "Lila", "Liliel", "Lillyana", "Lily", "Lindy", "Linette", "Lisa", "Lisabette", "Lisette", "Liz", "Lizzie", "Loraine", "Lottie", "Louve", "Love", "Lucille", "Luna", "Lydia", "Lyna", "Lynna", "Mabe", "Mabel", "Mable", "Mackenzie", "Macy", "Madelene", "Maggie", "Maila", "Maiya", "Makenzi", "Malia", "Malory", "Margaret", "Marge", "Mariah", "Marie", "Marlena", "Marth", "Matilda", "Maurielle", "Mavy", "May", "Maya", "Meredit", "Merry", "Mikko", "Mila", "Mindy", "Mireille", "Miriam", "Moira", "Mona", "Mora", "Nadim", "Nahele", "Nalani", "Nancy", "Nannette", "Nellielle", "Nevi", "Nica", "Norelle", "Noweh", "Oli", "Olivia", "Olyve", "Olyvia", "Opal", "Ophion", "Oralie", "Orian", "Pearl", "Pickle", "Pickles", "Poly", "Princess", "Prue", "Pumpkin", "Rain", "Reily", "Reina", "Rhyanna", "Robin", "Rosalind", "Rossalin", "Ruby", "Ruth", "Sancha", "Sandra", "Shadia", "Shaya", "Shaylynn", "Sheena", "Sheila", "Shelbi", "Simone", "Sylvara", "Sylver", "Sylvi", "Tabitha", "Talori", "Tanessa", "Tanya", "Tasha", "Tawnya", "Taylor", "Theres", "Tiara", "Tracy", "Trinka", "Tyra", "Vevina", "Victoria", "Victorina", "Violet", "Vivian", "Ynes", "Zavrina", "Zerlinda", "Zoey", "Zulema", "Zurina"];
	var names = "";


	i = Math.floor(this.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(this.random() * nm2.length);
			names = nm2[rnd];
		} else {
			rnd = Math.floor(this.random() * nm1.length);
			names = nm1[rnd];
		}
		return names;
	}

})