var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$game_of_thrones$westeros(type) {
	var names1 = ["Aalya", "Abagal", "Abrey", "Arby", "Addysen", "Edeline", "Adrya", "Adryana", "Adrielle", "Ayleen", "Aymee", "Alisha", "Ariyana", "Alarina", "Alara", "Alenis", "Alerah", "Anera", "Alessa", "Alexes", "Alira", "Arice", "Anicia", "Aline", "Alise", "Ellisha", "Elison", "Alissa", "Alia", "Aliza", "Arlis", "Almia", "Alora", "Alysia", "Alis", "Alaysha", "Alson", "Alssa", "Amarda", "Amyra", "Ambre", "Amelira", "Arina", "Eyme", "Aimya", "Arah", "Anabes", "Anari", "Anaris", "Anysa", "Anrea", "Arika", "Aniza", "Aniga", "Annarel", "Annalys", "Annyte", "Annila", "Ensley", "Anya", "Arecel", "Arrely", "Aryana", "Aranna", "Arenna", "Arrei", "Arlenna", "Ashlei", "Ashlanna", "Ashlyh", "Astris", "Aobrey", "Aurola", "Avya", "Avelley", "Ayara", "Ayenna", "Eyla", "Baylee", "Barbenna", "Beylee", "Bellin", "Bernyce", "Bethally", "Bancey", "Brandis", "Brealla", "Breannei", "Breyna", "Breniell", "Breonna", "Brigot", "Brianel", "Brinna", "Brannelle", "Bredgit", "Bienne", "Brienna", "Brise", "Bryeana", "Brynna", "Briyenn", "Catryn", "Catlyn", "Cemrin", "Camyla", "Camylle", "Carynne", "Caryss", "Carlys", "Carmin", "Carlys", "Catlina", "Cathelyne", "Cayra", "Celia", "Cercilia", "Celesse", "Ceria", "Cerlina", "Charlyse", "Chyanne", "Chyenne", "Chlowee", "Chrysha", "Christys", "Cliara", "Cliera", "Claere", "Clara", "Clare", "Clarysse", "Cladin", "Cira", "Dainis", "Dania", "Darna", "Dannya", "Darlyne", "Dasina", "Dayana", "Deranna", "Delylah", "Dyana", "Dyanne", "Dyanna", "Donnis", "Dorthy", "Elen", "Enith", "Elayna", "Elayne", "Eleana", "Eleanah", "Ellena", "Elyana", "Elyse", "Elize", "Ellya", "Elrie", "Elna", "Emely", "Emilee", "Emilya", "Emmelyne", "Esthis", "Eyva", "Evelyne", "Fiyona", "Fryda", "Gabielle", "Gabrelle", "Giya", "Gianas", "Giannis", "Gillis", "Giyana", "Glorina", "Grayce", "Graycie", "Gwendys", "Heyley", "Heiley", "Haleigh", "Hayana", "Heighden", "Haylise", "Helenys", "Helna", "Ilyana", "Ireyne", "Airis", "Aiana", "Aianna", "Jacline", "Jaida", "Jaide", "Jaidyn", "Jaelyn", "Jaeda", "Jaedyn", "Jaena", "Jaeneth", "Jaslin", "Jasline", "Jeyna", "Jeyla", "Jesmyn", "Jaenis", "Jenifire", "Jaennis", "Jilliyan", "Jocey", "Joenne", "Josey", "Jorlyn", "Jadith", "Julina", "Julienna", "Juline", "Jelissa", "Kaysie", "Kaenna", "Kaelys", "Kaina", "Khailee", "Kaylee", "Kailyn", "Kaithlyn", "Khailey", "Kiara", "Kiren", "Kari", "Katherin", "Kathlyn", "Kathryn", "Katlyn", "Katryna", "Keila", "Keira", "Kailsey", "Kendris", "Kianne", "Keynna", "Kenyse", "Khelsie", "Kaela", "Kiyana", "Kiyara", "Klissa", "Krestenne", "Kristyne", "Kyra", "Kina", "Kylis", "Kyra", "Laycie", "Laina", "Lannia", "Laerra", "Laryss", "Laurane", "Lauris", "Lauryn", "Lyla", "Lehna", "Laenah", "Leyanna", "Lenila", "Lelani", "Laena", "Lexia", "Lexise", "Lina", "Liyana", "Liya", "Lylian", "Liliyana", "Lilliyan", "Linly", "Laina", "Lenda", "Lendsey", "Laisa", "Laoren", "Lorenah", "Lusia", "Luciya", "Lyndia", "Maycey", "Maecy", "Maedalyn", "Maralynn", "Maddeson", "Madeleine", "Madilyn", "Madysen", "Maygen", "Maianae", "Melleah", "Maliya", "Maellery", "Mansy", "Marya", "Mariya", "Marinah", "Mariyam", "Maryana", "Mariyanna", "Marybel", "Mariela", "Marielyn", "Malina", "Marilla", "Marleigh", "Marleina", "Marleya", "Mertha", "Mariyam", "Meya", "Mayra", "Mearow", "Melarie", "Melahnie", "Mellinna", "Melinsa", "Meralith", "Myna", "Milah", "Minella", "Miana", "Miranna", "Mereya", "Melian", "Meya", "Monira", "Mysa", "Nalia", "Natari", "Nathaleya", "Nira", "Neina", "Nera", "Nyla", "Nysah", "Nyra", "Olira", "Palina", "Rana", "Riyana", "Ranel", "Raina", "Reyanna", "Relina", "Reila", "Reina", "Renei", "Rila", "Rina", "Rosyn", "Railey", "Saede", "Salna", "Samaya", "Sanda", "Sarsah", "Sarisa", "Sesa", "Sava", "Sanah", "Selsa", "Selira", "Sanira", "Shennen", "Sheran", "Shana", "Shela", "Sharley", "Sofina", "Soniya", "Sanya", "Sophey", "Staicey", "Stelsa", "Sosan", "Suesane", "Sylvina", "Taliya", "Taniya", "Talana", "Taria", "Tanea", "Tarla", "Taryne", "Teya", "Tayla", "Teressa", "Tesha", "Thalina", "Tila", "Tiyana", "Tiffally", "Teena", "Tacy", "Trysta", "Valeris", "Vanesha", "Valian", "Vevienne"];
	var names2 = ["Adarien", "Aden", "Adian", "Adrew", "Aeron", "Aidin", "Alavin", "Alberet", "Aldo", "Alecor", "Alfered", "Alix", "Alon", "Alrah", "Alran", "Alren", "Alvar", "Ammett", "Andaren", "Anderon", "Ando", "Andren", "Anron", "Anthor", "Antorn", "Aran", "Aren", "Arin", "Arnol", "Arrel", "Arren", "Arton", "Artor", "Arvin", "Arving", "Ascar", "Ashter", "Ashtin", "Asten", "Athen", "Auster", "Bailin", "Bander", "Banneth", "Barden", "Barret", "Barrian", "Barrish", "Barrock", "Barroth", "Benam", "Bennar", "Billon", "Blane", "Bodrin", "Brack", "Bracks", "Braddish", "Braddock", "Bradyn", "Braeden", "Braedon", "Brandeth", "Brannyn", "Brant", "Branton", "Brarton", "Brayan", "Brenn", "Brennard", "Briden", "Brod", "Broden", "Brodin", "Bron", "Bronden", "Brunn", "Bruze", "Bryce", "Brydan", "Bryen", "Bryer", "Brynnan", "Byran", "Byrant", "Byrron", "Cadder", "Callith", "Callor", "Calrin", "Camern", "Camren", "Carden", "Carn", "Carrel", "Carron", "Carsen", "Carth", "Cason", "Cayde", "Cayle", "Cedrick", "Cerran", "Chandren", "Channer", "Charad", "Charlin", "Charres", "Chass", "Chrass", "Chrestan", "Christor", "Clarreth", "Clarrik", "Clarton", "Clatton", "Clayse", "Codin", "Colbat", "Colliff", "Colren", "Colrin", "Colton", "Conin", "Connas", "Connin", "Corban", "Corbus", "Cordin", "Coren", "Corlin", "Corrad", "Corren", "Crann", "Crodell", "Croll", "Cryus", "Culler", "Curtass", "Dallar", "Dallen", "Dallin", "Dalran", "Daltis", "Daman", "Dander", "Danire", "Dannis", "Dannys", "Dantis", "Darick", "Daris", "Dariss", "Darne", "Darnis", "Darran", "Darren", "Darreth", "Darrik", "Darrin", "Darrok", "Darron", "Darvin", "Darvon", "Davios", "Davis", "Davith", "Dawsin", "Dayron", "Decran", "Dennas", "Denzin", "Deonte", "Deran", "Dercin", "Derren", "Derrock", "Derron", "Desmor", "Deston", "Devran", "Devron", "Dextran", "Dilron", "Dirron", "Donnal", "Donovar", "Dontar", "Dontin", "Dorin", "Dorran", "Dorrick", "Dougas", "Dovan", "Drack", "Drak", "Dramen", "Dramon", "Dran", "Drannyl", "Dravor", "Drevyn", "Dromen", "Dromin", "Duncas", "Duran", "Dustran", "Dwan", "Dwigher", "Dylar", "Dyron", "Edam", "Eddard", "Edder", "Eddin", "Edgarth", "Efran", "Elden", "Eliar", "Ellion", "Elmar", "Elras", "Elrin", "Emannar", "Emersen", "Emilar", "Entan", "Erac", "Erner", "Erock", "Ethon", "Everan", "Evin", "Eyan", "Fabiar", "Felir", "Fellar", "Fernar", "Gabrin", "Gannon", "Garrat", "Garrel", "Garvy", "Gerrad", "Gerrar", "Gidden", "Gilbar", "Gordar", "Graffin", "Grag", "Grahar", "Graige", "Grandin", "Grandon", "Grasson", "Gravven", "Gregor", "Grenn", "Grennan", "Greysor", "Gurnar", "Gurner", "Harald", "Harden", "Harlik", "Harrin", "Harrion", "Hectar", "Herrath", "Horden", "Howar", "Hugar", "Hurdon", "Inan", "Ivarn", "Jackar", "Jacke", "Jacor", "Jaddon", "Jaesse", "Jakor", "Jallen", "Jami", "Janas", "Jarack", "Jarad", "Jarak", "Jaran", "Jardan", "Jarden", "Jaremy", "Jares", "Jarger", "Jaron", "Jarrad", "Jarson", "Jarvas", "Javer", "Javor", "Jaxar", "Jayse", "Jaze", "Jeffary", "Jeran", "Jessar", "Jevan", "Jimmer", "Jorah", "Joran", "Jorgan", "Jorge", "Jorran", "Jorrel", "Jorvan", "Josian", "Jovarn", "Julan", "Jullen", "Jullon", "Juran", "Justan", "Kaegan", "Karden", "Karne", "Karrem", "Karron", "Karsan", "Kartis", "Kase", "Kavvin", "Kayl", "Kean", "Keat", "Kegan", "Kennat", "Keren", "Kerith", "Kevan", "Kevven", "Khort", "Kierat", "Kiran", "Kivan", "Kober", "Kollion", "Korb", "Korban", "Koryn", "Kyllan", "Lanard", "Lancion", "Landar", "Landor", "Lanner", "Laroy", "Larris", "Lartel", "Lawren", "Lawsen", "Layn", "Lerris", "Levir", "Liram", "Lorgan", "Lucan", "Lucas", "Luras", "Lurs", "Malrik", "Manrel", "Marak", "Marcyl", "Marcyn", "Margan", "Markas", "Marthew", "Marvion", "Mateo", "Mavrock", "Maxar", "Maxir", "Melvan", "Mikal", "Miltar", "Mitchar", "Morsan", "Morsh", "Mortin", "Mykal", "Myke", "Myle", "Narmen", "Nathar", "Nelsor", "Neral", "Nestar", "Niclas", "Nithan", "Olivar", "Orland", "Orwen", "Patrack", "Paxtan", "Payten", "Portar", "Pranar", "Prestan", "Preytan", "Raman", "Randar", "Rass", "Reben", "Rechar", "Rendal", "Rewan", "Rickar", "Riler", "Robart", "Roberd", "Rodner", "Rody", "Rohar", "Rolan", "Romarn", "Ronard", "Ronas", "Ruban", "Rud", "Ruger", "Russal", "Rydan", "Ryden", "Rylen", "Rylon", "Sabas", "Saloman", "Samn", "Samurel", "Sarrac", "Seamas", "Seban", "Seldan", "Semar", "Serion", "Shale", "Sharun", "Sibas", "Simon", "Sowyer", "Stanler", "Stefon", "Stephas", "Sterlan", "Stuar", "Styve", "Sulvan", "Tadd", "Tarik", "Tarner", "Tavion", "Terren", "Theodal", "Thomos", "Timos", "Tirius", "Tobas", "Tobin", "Toman", "Tranis", "Travan", "Trentan", "Trevas", "Trevyr", "Trovion", "Trytas", "Tylan", "Tylar", "Tyral", "Tyron", "Varn", "Vernan", "Warne", "Warrek", "Waylar", "Weslar", "Wyllam", "Xanner", "Zakar", "Zandren", "Zane", "Zarin", "Zyre"];
	var names3 = ["Algood", "Allyrion", "Ambrose", "Appleton", "Arryn", "Ashford", "Ashwood", "Baelish", "Ball", "Banefort", "Bar Emmon", "Baratheon", "Beesbury", "Belmore", "Bettley", "Bigglestone", "Blackbar", "Blackfyre", "Blackmont", "Blackmyre", "Blacktyde", "Blackwood", "Blanetree", "Blount", "Boggs", "Bole", "Bolling", "Bolton", "Borrell", "Botley", "Bracken", "Branch", "Brax", "Bridges", "Broom", "Brune", "Buckler", "Buckwell", "Bulwer", "Burley", "Bushy", "Butterwell", "Byrch", "Bywater", "Cafferen", "Cargyll", "Caron", "Cassel", "Casterly", "Caswell", "Cave", "Celtigar", "Cerwyn", "Chambers", "Charlton", "Chelsted", "Chester", "Chyttering", "Clegane", "Clifton", "Cockshaw", "Codd", "Coldwater", "Cole", "Condon", "Conklyn", "Connington", "Corbray", "Cordwayner", "Costayne", "Cox", "Crabb", "Crakehall", "Crane", "Cray", "Cressy", "Crowl", "Cuy", "Dalt", "Darke", "Darklyn", "Darry", "Dayne", "Deddings", "Doggett", "Dondarrion", "Donniger", "Drinkwater", "Drox", "Drumm", "Dunn", "Durrandon", "Durwell", "Dustin", "Edgerton", "Egen", "Elesham", "Erenford", "Errol", "Estermont", "Estren", "Falwell", "Farman", "Farring", "Farwynd", "Fell", "Fenn", "Ferren", "Fisher", "Flint", "Florent", "Follard", "Foote", "Footly", "Forrester", "Fossoway", "Fowler", "Frey", "Gardener", "Gargalen", "Garner", "Gaunt", "Glover", "Goodbrook", "Goodbrother", "Gower", "Graceford", "Grafton", "Grandison", "Graves", "Greenfield", "Greengood", "Grell", "Grey", "Greyiron", "Greyjoy", "Greystark", "Grimm", "Haigh", "Hamell", "Harclay", "Hardy", "Hardyng", "Harlaw", "Harroway", "Harte", "Hastwyck", "Hasty", "Hawick", "Hawthorne", "Hayford", "Herston", "Hersy", "Hetherspoon", "Hewett", "Hightower", "Hoare", "Hogg", "Hollard", "Holt", "Hornwood", "Horpe", "Humble", "Hunt", "Hunter", "Hutcheson", "Inchfield", "Ironmaker", "Ironsmith", "Jast", "Jordayne", "Justman", "Karstark", "Keath", "Kellington", "Kenning", "Kettleblack", "Kidwell", "Knott", "Ladybright", "Lake", "Langward", "Lannister", "Lefford", "Leygood", "Liddle", "Lightfoot", "Locke", "Lolliston", "Long", "Longthorpe", "Lonmouth", "Lorch", "Lothston", "Lowther", "Lyberr", "Lychester", "Lydden", "Lynderly", "Magnar", "Mallery", "Mallister", "Manderly", "Manning", "Manwoody", "Marbrand", "Marsh", "Martell", "Massey", "Meadows", "Melcolm", "Merlyn", "Merryweather", "Mertyns", "Middlebury", "Mollen", "Moore", "Mooton", "Moreland", "Mormont", "Morrigen", "Moss", "Mudd", "Mullendore", "Musgood", "Myatt", "Myre", "Nayland", "Netley", "Norcross", "Norrey", "Norridge", "Oakheart", "Oldflowers", "Orkwood", "Orme", "Osgrey", "Overton", "Paege", "Parren", "Payne", "Peake", "Peasebury", "Peat", "Peckledon", "Penrose", "Perryn", "Piper", "Plumm", "Pommingham", "Poole", "Prester", "Pryor", "Pyle", "Pyne", "Qoherys", "Qorgyle", "Quagg", "Rambton", "Redbeard", "Redding", "Redfort", "Redwyne", "Reed", "Reyne", "Rhysling", "Risley", "Rogers", "Rollingford", "Roote", "Rosby", "Rowan", "Roxton", "Royce", "Ruthermont", "Ruttiger", "Ryger", "Rykker", "Ryswell", "Saltcliffe", "Santagar", "Sarsfield", "Seaworth", "Selmy", "Serrett", "Serry", "Sharp", "Shatterstone", "Shawney", "Shepherd", "Shermer", "Shett", "Slate", "Sloane", "Slynt", "Smallwood", "Sparr", "Spicer", "Stackhouse", "Stackspear", "Staedmon", "Stane", "Stark", "Staunton", "Stokeworth", "Stonehouse", "Stonetree", "Stout", "Strickland", "Strong", "Sunderland", "Sunderly", "Sunglass", "Swann", "Swyft", "Swygert", "Tallhart", "Tarbeck", "Tarly", "Tarth", "Tawney", "Teague", "Templeton", "Terrick", "Thenn", "Thorne", "Toland", "Tollett", "Torrent", "Towers", "Toyne", "Trant", "Tudbury", "Tully", "Turnberry", "Tyrell", "Uffering", "Uller", "Umber", "Upcliff", "Vaith", "Vance", "Varner", "Velaryon", "Vikary", "Volmark", "Vypren", "Vyrwel", "Wagstaff", "Waterman", "Waxley", "Wayn", "Waynwood", "Weaver", "Webber", "Wells", "Wendwater", "Wensington", "Westbrook", "Westerling", "Whent", "Whitehill", "Willum", "Wode", "Woodfoot", "Woods", "Woodwright", "Woolfield", "Wull", "Wydman", "Wyl", "Wylde", "Wynch", "Wythers", "Yarwyck", "Yelshire", "Yew", "Yronwood"];
	var names4 = ["Aerin", "Apperford", "Archyr", "Baerley", "Bailer", "Barler", "Barner", "Barrin", "Batler", "Baxter", "Bayle", "Bender", "Bergen", "Blest", "Boatwright", "Bowman", "Brackwell", "Brakker", "Brander", "Brask", "Brewlan", "Bryne", "Caerlight", "Cale", "Caleman", "Campiron", "Cannion", "Cantell", "Cantrill", "Carner", "Carpenter", "Carring", "Cartwell", "Catell", "Centyre", "Chafferly", "Chaffton", "Chaimbers", "Chalk", "Challinder", "Chandyll", "Chapmyre", "Chaseman", "Cherman", "Cherrane", "Cheswright", "Clarick", "Cleaber", "Coldrin", "Collinner", "Cranner", "Cratter", "Crook", "Crooler", "Crowlin", "Daxer", "Dragen", "Dyser", "Faerson", "Falcin", "Falker", "Farrest", "Farrin", "Feller", "Fender", "Fisher", "Flay", "Fletcher", "Foler", "Foral", "Frosher", "Furrow", "Fyshe", "Fyste", "Gaege", "Garner", "Glovelyn", "Graen", "Granes", "Granit", "Haerd", "Hallaw", "Harker", "Harner", "Hayard", "Himan", "Honn", "Hoper", "Hutter", "Inmain", "Kannor", "Kell", "Keller", "Kneight", "Knigh", "Krey", "Lanser", "Lash", "Leadbetter", "Linster", "Lormer", "Maeson", "Maller", "Malls", "Malver", "Merchin", "Merser", "Morrass", "Morshall", "Mullynn", "Nalor", "Narder", "Oatwright", "Palker", "Parge", "Parne", "Parsin", "Perk", "Perle", "Phyre", "Piler", "Plunder", "Porter", "Practor", "Pravost", "Purell", "Pyne", "Pyre", "Rane", "Ravyne", "Ridman", "Rok", "Rowman", "Ryser", "Sadelyn", "Sadlyn", "Saller", "Salver", "Sapner", "Sargen", "Sawler", "Selle", "Selter", "Sentel", "Seral", "Shaed", "Shield", "Shiphard", "Skanler", "Skinner", "Skipperth", "Slait", "Smithe", "Smyte", "Spenler", "Spirre", "Spyre", "Sringer", "Staelle", "Stally", "Stanlire", "Stanner", "Stewar", "Stingryn", "Syder", "Tainer", "Taler", "Taller", "Tallman", "Taner", "Tarbor", "Tarlor", "Tarner", "Tascer", "Tavner", "Thaller", "Thicketh", "Ticker", "Tiren", "Tradd", "Traever", "Trante", "Trapp", "Trinner", "Troter", "Tyde", "Tymber", "Vaele", "Vallie", "Vass", "Waker", "Waller", "Warrin", "Wars", "Warth", "Wern", "Woodgard", "Worner", "Wrought", "Wyne"];


	if (type === 1) {
		var namesFirst = names1;
	} else {
		var namesFirst = names2;
	}

	i = Math.floor(this.random() * 10); {
		if (i < 5) {
			rnd = Math.floor(this.random() * namesFirst.length);
			rnd2 = Math.floor(this.random() * names3.length);
			names = namesFirst[rnd] + " " + names3[rnd2];
		} else {
			rnd = Math.floor(this.random() * namesFirst.length);
			rnd2 = Math.floor(this.random() * names4.length);
			names = namesFirst[rnd] + " " + names4[rnd2];
		}
		return names;
	}

})