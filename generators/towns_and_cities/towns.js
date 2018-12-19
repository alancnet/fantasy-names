var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$towns_and_cities$towns() {
	var nm1 = ["MillerVille", "Timeston", "Krosstoen", "Limesvilles", "Cherrytown", "Fortaare", "Kelna", "Strongfair", "Solime", "Wolfpine", "Little Ivywood", "Peatsland", "Haling Cove", "Eastcliff", "Emall", "Emelle", "Holden", "Walden", "Venzor", "Roselake", "Beachmarsh", "Beachcastle", "Butterpond", "Snowbush", "Fallholt", "Ironhaven", "Woodpine", "Black Crystal", "Falcon Haven", "Redwick Bush", "Clare View Point", "Crossroads", "Skystead", "Everwinter", "Wolfwater", "Shadowfen", "King's Watch", "Redwater", "Dragontail", "Mournstead", "Lunaris", "Solaris", "Aynor", "Naporia", "Onryx", "Aria", "Aerilon ", "Aquarin ", "Aramoor ", "Azmar ", "Begger's Hole ", "Black Hollow ", "Blue Field ", "Briar Glen ", "Brickelwhyte ", "Broken Shield ", "Boatwright ", "Bullmar ", "Carran ", "City of Fire ", "Coalfell ", "Cullfield ", "Darkwell ", "Deathfall ", "Doonatel ", "Dry Gulch ", "Easthaven ", "Ecrin ", "Erast ", "Far Water ", "Firebend ", "Fool's March ", "Frostford ", "Goldcrest ", "Goldenleaf ", "Greenflower ", "Garen's Well ", "Haran ", "Hillfar ", "Hogsfeet ", "Hollyhead ", "Hull ", "Hwen ", "Icemeet ", "Ironforge ", "Irragin ", "Jarren's Outpost ", "Jongvale ", "Kara's Vale ", "Knife's Edge ", "Lakeshore ", "Leeside ", "Lullin ", "Marren's Eve ", "Millstone ", "Moonbright ", "Mountmend ", "Nearon ", "New Cresthill ", "Northpass ", "Nuxvar ", "Oakheart ", "Oar's Rest ", "Old Ashton ", "Orrinshire ", "Ozryn ", "Pavv ", "Pella's Wish ", "Pinnella Pass ", "Pran ", "Quan Ma ", "Queenstown ", "Ramshorn ", "Red Hawk ", "Rivermouth ", "Saker Keep ", "Seameet ", "Ship's Haven ", "Silverkeep ", "South Warren ", "Snake's Canyon ", "Snowmelt ", "Squall's End ", "Swordbreak ", "Tarrin ", "Three Streams ", "Trudid ", "Ubbin Falls ", "Ula'ree ", "Veritas ", "Violl's Garden ", "Wavemeet ", "Whiteridge ", "Willowdale ", "Windrip ", "Wintervale ", "Wellspring ", "Westwend ", "Wolfden ", "Xynnar ", "Yarrin ", "Yellowseed ", "Zao Ying ", "Zeffari ", "Zumka ", "Ormkirk", "Dunwich", "Anghor Thom", "Anghor Wat", "Kamouraska", "Astrakhan", "Arkkukari", "Arkala", "Halivaara", "Hammaslahti", "Hankala", "Elinmylly", "Hepojoki", "Kalmankaltio", "Kalmaniemi", "Katinhanta", "Kuoppa", "Kuuma", "Livohka", "Loukussa", "Mestauskalio", "Meteli", "Murtovaara", "Myrrka", "Niska", "Pomovaara", "Nishka", "Risteys", "Varisvaara", "Erstonia", "Cappadocia", "Grimsby", "Aberystwyth", "Aberdyfi ", "Aberdeen ", "Aberuthven", "Accrington", "Acomb", "Acton", "Matlock", "Glanyrafon", "Armagh", "Ardglass", "Aston", "Auchendinny", "Auchenshuggle", "Achnasheen", "Auchtermuchty", "Auchterarder", "Exeter", "Axminster", "Westray", "Lundy", "Orkney", "Ballachulish", "Balerno", "Ballymena", "Ballinamallard", "Ballater", "Balmoral", "Holbeck", "Beckinsale", "Troutbeck", "Beckton", "Bexley", "Blencathra", "Blencogo", "Blaenau", "Ffestiniog", "Leurbost", "Bournemouth", "Eastbourne", "Ashbourne", "Blackburn", "Bannockburn", "Bradford", "Bredon", "Aylesbury", "Dewsbury", "Bury", "Middlesbrough", "Edinburgh", "Bamburgh", "Peterborough", "Jedburgh", "Grimsby", "Tenby", "Kincardine", "Cardended", "Lancaster", "Doncaster", "Gloucester", "Caister", "Worcester", "Chester", "Cirencester", "Colchester", "Caerdydd", "Caerleon", "Carlisle", "Caerfyrddin", "Chepstow", "Barcombe", "Farncombe", "Ilfracombe", "Coombe", "Ascot", "Draycott", "Swadlincote", "Culcheth", "Cumdivock", "Dalry", "Dalmellington", "Airedale", "Rochdale", "Saxondale", "Croydon", "Horndean", "Todmorden", "Abingdon", "Bredon", "Willesden", "Drumchapel", "Drumnacanvy", "Drumnadrochit", "Dundee", "Dumbarton", "Dungannon", "Romsey", "Athelney", "Ely", "Hornsey", "Sheffield", "Huddersfield", "Wakefield", "Mansfield", "Macclesfield", "Mirfield", "Chesterfield", "Murrayfield", "Huddersfield", "Findochty", "Holmfirth", "Burrafirth", "Bradford", "Ampleforth", "Watford", "Fanfoss", "Aysgarth", "Gillamoor", "Garrigill", "Rutherglen", "Glenarm", "Guthram", "Rotherham", "Newham", "Tottenham", "Oldham", "Newsham", "Faversham", "Rotherhithe", "Hythe", "Erith", "Holmfirth", "Hempholme", "Woolhope", "Glossop", "Howe", "Norfolk", "Dewhurst", "Woodhurst", "Spalding", "Lockinge", "Inverness", "Keld", "Threlkeld", "Penketh", "Culcheth", "Kilmarnock", "Kilead", "Kilkenny", "Kincardine", "Kinallen", "Coningsby", "Kirkwall", "Ormskirk", "Colkirk", "Falkirk", "Lanteglos", "Lhanbryde", "Lanercost", "Llanybydder", "Langdale", "Tow", "Lewes", "Barnsley", "Hadleigh", "Lindow", "Llyn", "Lingmell", "Appleby", "Wigston", "Windermere", "Grasmere", "Cromer", "Tranmere", "Wimborne", "Mossley", "Bournemouth", "Portsmouth", "Monmouth", "Nancledra", "Nantgarw", "Nantwich", "Skegness", "Furness", "Norton", "Norbury", "Norwich", "Pantmawr", "Penzance", "Pendle", "Penrith", "Putlochry", "Pitmedden", "Polperro", "Poltragow", "Pontypridd", "Pontheugh", "Hartlepool", "Blackpool", "Porthcawl", "Porthaethwy", "Davenport", "Penshaw", "Openshaw", "Shepshed", "Shipton", "Stanmore", "Stamford", "Stanlow", "Hampstead", "Berkhamsted", "Lybster", "Scrabster", "Damerel", "Padstow", "Strathmore", "Streatham", "Sudbury", "Sutton", "Swindon", "Swinford", "Cleethorpes", "Thorpeness", "Huthwaite", "Tregaron", "Travercraig", "Tillicoultry", "Tillydrone", "Lowestoft", "Tywardreath", "Tunstead", "Warrington", "Coniston", "Clacton", "Everton", "Broughton", "Luton", "Merton", "Stratford", "Wealdstone", "Southwold", "Norwich", "Alnwick", "Bromwich", "Runswick", "Lerwick", "Wheldrake", "Wimborne", "Tamworth", "Farnworth", "Holsworthy", "Bredwardine", "Orilon ", "Aquarine ", "Aramore", "Azmarin ", "Beggar's Hole ", "Black Hallows  ", "Briar Glen ", "Bracklewhyte  ", "Bellmare ", "Cirrane ", "Caelfall ", "Crullfeld ", "Murkwell  ", "Durnatel  ", "Easthallow ", "Acrine ", "Erostey    ", "Forstford ", "Goulcrest ", "Hirane", "Hillford ", "Ilragorn  ", "Leefside  ", "Mirstone ", "Nerton  ", "Aroonshire ", "Alryne  ", "Pirn    ", "Torrine  ", "Tardide ", "Veritas  ", "Whitebridge ", "Wallowdale ", "Wolford", "Yarlford", "Zalfari ", "Urmkirkey", "Dornwich", "Kameeraska", "Astrakane", "Archmouth", "Arkaley", "Aelinmiley", "Myrefall", "Garmsby", "Aberstwyth", "Alderdyfi ", "Alderrdeen ", "Aeberuthey", "Accreton", "Alcombey", "Arcton", "Martslock", "Glarnyraefon", "Aermagh", "Aeston", "Auchendale", "Archensheen", "Auctermunty", "Aucteraden", "Arkmunster", "Arkney", "Bellechulish", "Baerney", "Bailymena", "Ballingsmallard", "Ballaeter", "Bellmoral", "Hullbeck", "Beckinsdale", "Troutberk", "Berkton", "Berxley", "Blancathey", "Blencalgo", "Bellenau", "Larcbost", "Fournemouth", "Eastborne", "Ashborne", "Bleakburn", "Banrockburn", "Bradfordshire", "Braedon", "Islesbury", "Dawsbury", "Middlesborough", "Edinborourgh", "Bamborourgh", "Peterbrugh", "Jedborourgh", "Gramsby", "Taernsby", "Kingcardine", "Cardend", "Laencaster", "Duncaster", "Glanchester", "Warcester", "Sirencester", "Calchester", "Caershire", "Carleone", "Chaepstow", "Barncombe", "Ferncombe", "Ilfreycombe", "Graycott", "Swindlincote", "Calcheth", "Cewmann", "Dalelry", "Dalmerlington", "Aeredale", "Rachdale", "Craydon", "Haerndean", "Taedmorden", "Arbington", "Braedon", "Willsden", "Durmchapel", "Domburton", "Dangarnon", "Gormsey", "Aethelney", "Eelry", "Harnsey", "Sherfield", "Hardersfield", "Waekefield", "Mensfield", "Marclesfield", "Mirefield", "Cesterfield", "Murlayfield", "Addersfield", "Ferndochty", "Helmfirth", "Burrafirth", "Bardford", "Aempleforth", "Warthford", "Farnfoss", "Iyesgarth", "Gilramore", "Garigill", "Rptherglen", "Glaenarm", "Garthram", "Ruthorham", "Eldham", "Favorsham", "Ritherhithe", "Ayrith", "Helmfirth", "Foolshope", "Galssop", "Hewe", "Narfolk", "Dalhurst", "Woodhaerst", "Larkinge", "Eanverness", "Kald", "Thralkeld", "Penkurth", "Calcherth", "Calmarnock", "Kilerth", "Kinecardine", "Kineallen", "Carningsby", "Kirekwall", "Armskirk", "Caelkirk", "Fallkirk", "Laenteglos", "Lhanbyrde", "Lanercoast", "Llaneybyder", "Longdale", "Taewe", "Laewaes", "Burnsley", "Haedleigh", "Landow", "Llyne", "Linemell", "Wingston", "Wandermere", "Crasmere", "Cromerth", "Transmere", "Wombourne", "Moressley", "Barnemouth", "Paethsmouth", "Marnmouth", "Narnclaedra", "Nantgarth", "Narthwich", "Skargness", "Northon", "Northbury", "Northwich", "Paentmarwy", "Paendley", "Pernrith", "Perthlochry", "Pitmerden", "Palperroth", "Peltragow", "Pontybridge", "Hurtlepool", "Blackridgepool", "Porthcrawl", "Porthaethwidge", "Doveport", "Panshaw", "Perlshaw", "Sharpton", "Stawford", "Sanlow", "Harmstead", "Barkamsted", "Daemarrel", "Pathstow", "Stathmore", "Stratham", "Satbury", "Sarton", "Swindmore", "Swanford", "Claethorpes", "Thorpes", "Harthwaite", "Tergaron", "Tylwaerdreath", "Tarnstead", "Warlington", "Conriston", "Clarcton", "Alverton", "Boroughton", "Larton", "Malrton", "Stathford", "Waeldestone", "Alnerwick", "Barmwich", "Sharnwick", "Larnwick", "Whaelrdrake", "Wanborne", "Tarmsworth", "Fernsworth", "Halsworthy", "Braedwardith"];


	i = Math.floor(this.random() * 10); {
		rnd = Math.floor(this.random() * nm1.length);
		names = nm1[rnd];
		return names;
	}

})