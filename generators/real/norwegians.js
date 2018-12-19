var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$real$norwegians(type) {
	var nm1 = ["Åge", "Åsmund", "Øistein", "Øivind", "Ørjan", "Øystein", "Øyvind", "Aage", "Adrian", "Agnar", "Aksel", "Aleksander", "Alf", "Alfred", "Ali", "Amund", "Anders", "Andre", "Andreas", "Anton", "Are", "Arild", "Arne", "Arnfinn", "Arnold", "Arnstein", "Arnt", "Arthur", "Arve", "Arvid", "Asbjørn", "Asgeir", "Aslak", "Asle", "Atle", "Audun", "Axel", "Bård", "Børge", "Børre", "Bendik", "Bengt", "Benjamin", "Bent", "Bernt", "Birger", "Bjørn", "Bjørnar", "Bjarne", "Bjarte", "Brage", "Carl", "Cato", "Chris", "Christer", "Christian", "Christoffer", "Christopher", "Dag", "Dagfinn", "Dan", "Daniel", "David", "Dennis", "Edgar", "Edvard", "Edvin", "Egil", "Einar", "Eirik", "Eivind", "Elias", "Emil", "Endre", "Erik", "Erlend", "Erling", "Ernst", "Eskil", "Espen", "Even", "Filip", "Finn", "Frank", "Fred", "Freddy", "Fredrik", "Frode", "Gøran", "Gard", "Gaute", "Geir", "Georg", "Gisle", "Gjermund", "Glenn", "Gudmund", "Gunnar", "Gustav", "Håkon", "Håvard", "Haakon", "Hallgrim", "Hallvard", "Halvard", "Halvor", "Hans", "Harald", "Harry", "Helge", "Henning", "Henrik", "Henry", "Herman", "Hugo", "Idar", "Ingar", "Inge", "Ingvald", "Ingvar", "Isak", "Ivan", "Ivar", "Iver", "Jørgen", "Jørn", "Jacob", "Jakob", "Jan", "Jarl", "Jarle", "Jens", "Jesper", "Jim", "Jo", "Joachim", "Joakim", "Joar", "Johan", "Johannes", "John", "Johnny", "Jon", "Jonas", "Jonathan", "Jonny", "Jostein", "Julian", "Kåre", "Kaare", "Kai", "Karl", "Karsten", "Kasper", "Ken", "Kenneth", "Kent", "Ketil", "Kevin", "Kim", "Kjartan", "Kjell", "Kjetil", "Klaus", "Knut", "Kolbjørn", "Kristen", "Kristian", "Kristoffer", "Kurt", "Lars", "Lasse", "Leif", "Leiv", "Mads", "Magnar", "Magne", "Magnus", "Marcus", "Marius", "Markus", "Martin", "Mathias", "Mats", "Michael", "Mikael", "Mikkel", "Morten", "Nicolai", "Niklas", "Nikolai", "Nils", "Odd", "Oddbjørn", "Oddmund", "Oddvar", "Odin", "Ola", "Olaf", "Olav", "Ole", "Oliver", "Oscar", "Oskar", "Ottar", "Otto", "Ove", "Pål", "Patrick", "Paul", "Peder", "Per", "Peter", "Petter", "Preben", "Ragnar", "Rasmus", "Raymond", "Reidar", "Remi", "Richard", "Roald", "Roar", "Robert", "Robin", "Roger", "Rolf", "Ronald", "Ronny", "Roy", "Ruben", "Runar", "Rune", "Sander", "Sebastian", "Sigbjørn", "Sigmund", "Sigurd", "Sigve", "Simen", "Simon", "Sindre", "Sivert", "Sjur", "Snorre", "Sondre", "Ståle", "Stefan", "Steffen", "Stein", "Steinar", "Sten", "Stian", "Stig", "Svein", "Sveinung", "Sven", "Svend", "Svenn", "Sverre", "Terje", "Thomas", "Thor", "Thorbjørn", "Thore", "Thorleif", "Tobias", "Tom", "Tomas", "Tommy", "Tony", "Tor", "Torbjørn", "Tord", "Tore", "Torfinn", "Torgeir", "Torleif", "Tormod", "Torstein", "Trond", "Truls", "Trygve", "Trym", "Ulf", "Ulrik", "Vebjørn", "Vegar", "Vegard", "Vetle", "Victor", "Vidar", "Viggo", "Viktor", "Yngvar", "Yngve"];
	var nm2 = ["Åse", "Åshild", "Aase", "Ada", "Agnes", "Aina", "Alexandra", "Alfhild", "Alice", "Alma", "Amalie", "Amanda", "Andrea", "Andrine", "Ane", "Anette", "Anita", "Anja", "Ann", "Anna", "Anne", "Anne ", "Annette", "Annie", "Anniken", "Anny", "Arnhild", "Asbjørg", "Aslaug", "Asta", "Astri", "Astrid", "Aud", "Audhild", "Barbro", "Beate", "Benedicte", "Benedikte", "Bente", "Bergljot", "Berit", "Birgit", "Birgitte", "Bjørg", "Bodhild", "Bodil", "Borghild", "Borgny", "Brit", "Brita", "Britt", "Dagmar", "Dagny", "Dina", "Edel", "Edith", "Eirin", "Eldbjørg", "Eli", "Elin", "Eline", "Elisabeth", "Elise", "Ella", "Ellen", "Ellinor", "Elna", "Elsa", "Else", "Emilie", "Emma", "Erna", "Ester", "Esther", "Eva", "Evelyn", "Evy", "Frøydis", "Frida", "Fride", "Fryd", "Gerd", "Gerda", "Gina", "Gjertrud", "Greta", "Grete", "Grethe", "Gro", "Gry", "Gudrun", "Gunhild", "Gunn", "Gunnhild", "Gunvor", "Guri", "Guro", "Haldis", "Hanna", "Hannah", "Hanne", "Hedda", "Hege", "Heidi", "Helen", "Helena", "Helene", "Helga", "Helle", "Henny", "Henriette", "Hilda", "Hilde", "Hildegunn", "Hildur", "Hjørdis", "Ida", "Ina", "Ine", "Inga", "Ingebjørg", "Ingeborg", "Inger", "Ingjerd", "Ingrid", "Ingunn", "Ingvild", "Iren", "Irene", "Iris", "Iselin", "Jane", "Janne", "Jannicke", "Jeanette", "Jenny", "Johanna", "Johanne", "Jorid", "Jorun", "Jorunn", "Judith", "Julfrid", "Julia", "Julie", "Kaja", "Kamilla", "Karen", "Kari", "Karianne", "Karin", "Karina", "Karoline", "Kate", "Kathrine", "Katrine", "Kine", "Kirsten", "Kirsti", "Kjellaug", "Kjersti", "Klara", "Kristin", "Kristina", "Kristine", "Laila", "Laura", "Lena", "Lene", "Lill", "Lillian", "Lilly", "Lina", "Linda", "Line", "Linn", "Linnea", "Lisa", "Lisbeth", "Lise", "Liv", "Live", "Lone", "Lotte", "Målfrid", "Madeleine", "Magnhild", "Mai", "Maiken", "Maja", "Malene", "Malin", "Maren", "Margaret", "Margareth", "Margit", "Margot", "Margrete", "Margrethe", "Mari", "Maria", "Mariann", "Marianne", "Marie", "Marion", "Marit", "Marita", "Marta", "Marte", "Martha", "Marthe", "Martine", "Mary", "Mathilde", "May", "Merete", "Merethe", "Mette", "Mia", "Michelle", "Mina", "Miriam", "Mona", "Monica", "Monika", "Natalie", "Nelly", "Nina", "Nora", "Oda", "Oddbjørg", "Oddlaug", "Oddny", "Oddrun", "Oddveig", "Olaug", "Oline", "Pernille", "Petra", "Pia", "Rønnaug", "Ragna", "Ragnhild", "Rakel", "Randi", "Rannveig", "Ranveig", "Rebecca", "Rebekka", "Reidun", "Renate", "Rigmor", "Rikke", "Rita", "Ruth", "Sølvi", "Sandra", "Sara", "Sarah", "Selma", "Sidsel", "Signe", "Sigrid", "Sigrun", "Sigrunn", "Silje", "Siri", "Sissel", "Siv", "Siw", "Sofie", "Solbjørg", "Solfrid", "Solveig", "Sonja", "Stina", "Stine", "Sunniva", "Susanne", "Svanhild", "Sylvi", "Sylvia", "Synnøve", "Synne", "Tanja", "Thea", "Therese", "Tina", "Tine", "Tiril", "Tone", "Tonje", "Tora", "Torbjørg", "Tordis", "Torhild", "Toril", "Torild", "Torill", "Torunn", "Tove", "Trine", "Trude", "Turid", "Tuva", "Ulrikke", "Unn", "Unni", "Valborg", "Vera", "Veronica", "Veronika", "Vibeke", "Victoria", "Vigdis", "Vilde", "Vivi", "Vivian", "Yvonne"];
	var nm3 = ["Hermansen", "Eikeli", "Olsen", "Norstoga", "Berntsen", "Odegaard", "Oddvarson", "Isaksen", "Aalberg", "Abel", "Aunan", "Berg", "Berge", "Buhaug", "Dahl", "Graven", "Hammer", "Hansen", "Krabsethve", "Lande", "Lysvand", "Myking", "Myran", "Nordvik", "Oldervik", "Ramdall", "Rokhaug", "Rudd", "Saltvik", "Silnes", "Steen", "Svendsen", "Thanem", "Aabel", "Aaberg", "Aaby", "Aadland", "Aagaard", "Aagard", "Aaker", "Aakre", "Aall", "Aamland", "Aamo", "Aamodt", "Aamot", "Aandahl", "Aanderaa", "Aanenson", "Aanes", "Aaraas", "Aarbakke", "Aarflot", "Aarhus", "Aarnes", "Aarones", "Aaroy", "Aarrestad", "Aarseth", "Aarstad", "Aarvold", "Aas", "Aase", "Aasen", "Aasland", "Aavik", "Abrahamsen", "Aga", "Agard", "Agdestein", "Agle", "Agnor", "Aker", "Akre", "Albertsen", "Alden", "Aleksandersen", "Allum", "Alm", "Alme", "Almen", "Alstad", "Amble", "Amdahl", "Amundsen", "Anda", "Andal", "Andersen", "Andreasen", "Andreassen", "Andresen", "Anfinson", "Anker", "Antonsen", "Arne", "Arnesen", "Arneson", "Arntzen", "Aros", "Arvesen", "Asheim", "Ask", "Askeland", "Asker", "Asleson", "Asp", "Aspen", "Asper", "Asphaug", "Asplund", "Aukland", "Aune", "Austad", "Axelsen", "Axness", "Baardsen", "Baardson", "Bach", "Backe", "Backer", "Baglien", "Bakke", "Bakken", "Bakker", "Balke", "Balstad", "Bang", "Barsness", "Barstad", "Bech", "Becken", "Beito", "Belgum", "Bell", "Belland", "Bendixen", "Bentsen", "Bentson", "Bentzen", "Berdahl", "Bergan", "Berge", "Berger", "Bergesen", "Berget", "Bergh", "Bergland", "Bergo", "Bergum", "Berland", "Bernsen", "Berntsen", "Berrefjord", "Bertelsen", "Berthelsen", "Berven", "Billing", "Bingen", "Birkeland", "Birky", "Bjelland", "Bjerke", "Bjorge", "Bjorgen", "Bjork", "Bjorklund", "Bjorn", "Bjornsen", "Bjornson", "Bjornstad", "Blegen", "Blix", "Blom", "Boberg", "Boen", "Boge", "Bogen", "Boger", "Bogh", "Bohle", "Bohler", "Bole", "Boler", "Bolle", "Bolstad", "Bonde", "Bondevik", "Borge", "Borgen", "Borger", "Borja", "Borre", "Borresen", "Borseth", "Borsheim", "Borstad", "Bortnem", "Botner", "Botten", "Boyum", "Braaten", "Bradt", "Brager", "Brandvold", "Bratland", "Bratt", "Bratvold", "Bredahl", "Bredesen", "Breeland", "Breivik", "Brekhus", "Brekke", "Brekken", "Breland", "Bremseth", "Brenden", "Brenna", "Brevig", "Brevik", "Broas", "Brodersen", "Brogger", "Bronstad", "Brovold", "Bru", "Bruer", "Bruhn", "Bruland", "Brundtland", "Brunsvold", "Brustad", "Bruun", "Bryne", "Bu", "Bue", "Buer", "Buras", "Burke", "Bye", "Bylund", "Calland", "Cappelen", "Carlsen", "Carstensen", "Caspersen", "Castberg", "Christensen", "Christiansen", "Christoffersen", "Christophersen", "Clasen", "Clausen", "Claussen", "Clemensen", "Conradi", "Dahl", "Dahlberg", "Dahlby", "Dahle", "Dahlem", "Dahlen", "Dahler", "Dahling", "Dal", "Dalby", "Dale", "Dalen", "Dammen", "Danielsen", "Davidsen", "Devold", "Distad", "Dock", "Dokken", "Dotseth", "Drag", "Drage", "Dullum", "Dybdahl", "Dyrdahl", "Ege", "Egeberg", "Egeland", "Egge", "Eggebraaten", "Eggen", "Eggum", "Egland", "Egner", "Eid", "Eide", "Eidem", "Eidsness", "Eike", "Eiken", "Eiker", "Eilertsen", "Ekern", "Elden", "Eliasen", "Eliassen", "Ellefsen", "Ellestad", "Ellingsen", "Elstad", "Enberg", "Endresen", "Enevoldsen", "Eng", "Enge", "Engebretsen", "Engelstad", "Engen", "Enger", "Engh", "England", "Enstad", "Erdahl", "Erichsen", "Ericksen", "Eriksen", "Erland", "Ersland", "Erstad", "Eskildsen", "Espe", "Espeland", "Espeseth", "Esse", "Estrem", "Evensen", "Evenstad", "Evjen", "Fadness", "Fagerland", "Falla", "Falstad", "Farnes", "Fehn", "Felland", "Femrite", "Fett", "Fevold", "Finne", "Finseth", "Finstad", "Fiske", "Fjeld", "Fjelde", "Fjelstad", "Fjerstad", "Flaa", "Flaten", "Flatten", "Flattum", "Floden", "Flom", "Fodness", "Folden", "Folkestad", "Folland", "Folstad", "Forde", "Formo", "Fornes", "Forren", "Forseth", "Fortun", "Fosberg", "Foss", "Fosse", "Fossen", "Fossum", "Frandsen", "Frantzen", "Franzen", "Freberg", "Frederiksen", "Fredriksen", "Fretheim", "Froiland", "Froseth", "Frostad", "Frydenlund", "Fugleberg", "Fuglestad", "Fure", "Furness", "Gaarder", "Gandrud", "Gard", "Garnes", "Garness", "Gaustad", "Geving", "Gilbertsen", "Gill", "Gjerde", "Gjertsen", "Goplen", "Grambo", "Granberg", "Grande", "Granlund", "Granum", "Gregersen", "Grendahl", "Greseth", "Grieg", "Grimsrud", "Grimstad", "Grinde", "Grondahl", "Gronlund", "Gronseth", "Groven", "Gubrud", "Gudmundson", "Guldbrandsen", "Gulseth", "Gulsvig", "Gundersen", "Gunderson", "Gyldenlove", "Haagen", "Haagensen", "Haaland", "Haarstad", "Haavik", "Haestad", "Haga", "Hage", "Hagelin", "Hagen", "Hagtvedt", "Halldorson", "Hallum", "Halse", "Halseth", "Halvorsen", "Halvorson", "Hamar", "Hambro", "Hammer", "Hamre", "Handal", "Handeland", "Hanevold", "Hansen", "Hanssen", "Hanstad", "Haraldsen", "Hareide", "Harstad", "Hassel", "Hatlestad", "Haug", "Haugaard", "Haugan", "Hauge", "Haugen", "Hauger", "Haugerud", "Haugland", "Haugli", "Haukland", "Hawken", "Hedstrom", "Hee", "Hegdahl", "Hegg", "Hegge", "Heggem", "Heggen", "Hegland", "Heglund", "Hegna", "Hegstad", "Heiberg", "Heide", "Heien", "Heier", "Heim", "Heimark", "Helberg", "Helgeland", "Helgesen", "Helland", "Hellberg", "Helle", "Hellem", "Hellerud", "Helseth", "Helsing", "Hemmingsen", "Hendriksen", "Henjum", "Henning", "Henningsen", "Henrichsen", "Henriksen", "Hermansen", "Herre", "Hestenes", "Hetland", "Hille", "Hillestad", "Hippe", "Hjelle", "Hoel", "Hoem", "Hoen", "Hoey", "Hoff", "Hoffart", "Hoffstad", "Hofland", "Hofstad", "Hoiland", "Hoium", "Holan", "Holberg", "Hole", "Holen", "Holien", "Holm", "Holme", "Holmlund", "Holmsen", "Holsen", "Holst", "Holstad", "Holt", "Holtan", "Holte", "Holten", "Holter", "Holum", "Homme", "Homstad", "Hope", "Hopp", "Horgen", "Horn", "Horne", "Hotvedt", "Houg", "Houge", "Hougen", "Hovda", "Hovde", "Hovden", "Hove", "Hovet", "Hovland", "Hoye", "Hoyland", "Huitfeldt", "Hunstad", "Husby", "Huseby", "Huseth", "Huso", "Hustad", "Hylen", "Ibsen", "Ihle", "Ingebretsen", "Ingebretson", "Ingebritson", "Isaksen", "Isberg", "Island", "Istre", "Ivars", "Iversen", "Jacobsen", "Jahr", "Jakhelln", "Jakobsen", "Jakobson", "Jansen", "Jeglum", "Jelle", "Jellum", "Jensen", "Jenssen", "Jepsen", "Jespersen", "Johannessen", "Johansen", "Johnsen", "Johnsrud", "Jonassen", "Jordahl", "Jorde", "Jorgensen", "Jorstad", "Juel", "Juhl", "Julson", "Juul", "Juve", "Kaas", "Kaasa", "Kalberg", "Kallestad", "Kallevig", "Kampen", "Karlsen", "Karlstad", "Ketelsen", "Kielland", "Kildahl", "Kile", "Kilen", "Kinn", "Kirkeby", "Kise", "Kittleson", "Kjelland", "Kjellberg", "Kjos", "Klepp", "Kleppe", "Kleve", "Kleven", "Knudsen", "Knudsvig", "Knutsen", "Kolberg", "Kolden", "Kolstad", "Koppang", "Kopperud", "Korsmo", "Koss", "Krag", "Kragness", "Kringen", "Kristensen", "Kristiansen", "Krogstad", "Kvale", "Kvam", "Kvamme", "Laake", "Lade", "Lageson", "Lambertsen", "Land", "Landa", "Lande", "Landsverk", "Langager", "Langeland", "Langerud", "Langland", "Langlie", "Langness", "Langseth", "Larsen", "Lassen", "Laugen", "Lauridsen", "Lauritsen", "Lauritzen", "Laursen", "Lauve", "Lehne", "Leite", "Lerche", "Lerud", "Lerum", "Lia", "Lian", "Lie", "Lieberg", "Lied", "Lien", "Lier", "Likness", "Lillegard", "Lindahl", "Lindseth", "Lindvig", "Linge", "Loberg", "Loe", "Lofthus", "Loga", "Loken", "Lokken", "Lomen", "Lone", "Lonning", "Lorentzen", "Lorenzen", "Lovaas", "Lovas", "Lovdahl", "Lovig", "Lovik", "Lovland", "Ludvigsen", "Lund", "Lunde", "Lunden", "Lunder", "Lunn", "Lura", "Lutsi", "Lybeck", "Lye", "Lykken", "Lyng", "Lyngstad", "Lysne", "Lystad", "Madland", "Madsen", "Magnus", "Magnussen", "Malmin", "Manger", "Mannes", "Marcussen", "Marken", "Markussen", "Martinsen", "Martinson", "Marum", "Mathiasen", "Mathiesen", "Mathisen", "Mathre", "Matthiesen", "Matthiessen", "Mattsen", "Mauseth", "Meas", "Mehl", "Mehle", "Mehus", "Meland", "Melberg", "Melby", "Mele", "Melgaard", "Melhus", "Meling", "Melland", "Mellem", "Mellum", "Meloy", "Mensen", "Michaelsen", "Michelsen", "Mickelsen", "Mickelson", "Midthun", "Mikkelsen", "Minge", "Mjelde", "Mo", "Moe", "Moen", "Mogen", "Mogensen", "Moland", "Molstad", "Mong", "Monge", "Monsen", "Morck", "Morgensen", "Mork", "Morken", "Morland", "Morstad", "Mortensen", "Mosby", "Moseby", "Moseng", "Mossing", "Mostad", "Mostrom", "Moy", "Munch", "Mundahl", "Munsen", "Murer", "Muri", "Myhr", "Myhre", "Myklebust", "Myre", "Myren", "Naas", "Naess", "Narum", "Natvig", "Negaard", "Nelsen", "Nerby", "Nerison", "Nesby", "Nese", "Nesheim", "Ness", "Nesset", "Nesseth", "Netland", "Nicolaisen", "Nicolaysen", "Nielsen", "Nilsen", "Nilssen", "Nodland", "Nohr", "Norberg", "Nordahl", "Nordberg", "Nordby", "Nordhagen", "Nordheim", "Nordholm", "Nordhus", "Nordland", "Nordlie", "Nordmark", "Nordness", "Nordrum", "Nore", "Nored", "Norgaard", "Norgard", "Norheim", "Norland", "Norred", "Norum", "Noss", "Nyhus", "Nyland", "Nylund", "Nystrom", "Nystuen", "Odden", "Odegaard", "Odland", "Oen", "Offerdahl", "Oftedahl", "Ohlsen", "Ohm", "Ohnstad", "Oie", "Oien", "Oines", "Okland", "Olden", "Olesen", "Olsen", "Olstad", "Omdahl", "Onsager", "Onstad", "Opdahl", "Opheim", "Opland", "Oppegard", "Opsal", "Orten", "Orvik", "Osberg", "Ose", "Osen", "Osland", "Osmundsen", "Osness", "Ostberg", "Ostby", "Ostenson", "Osterberg", "Osterholt", "Ostlund", "Ostrem", "Otness", "Otterness", "Ottesen", "Ottosen", "Ottum", "Ouren", "Overbay", "Overbey", "Overby", "Overland", "Owe", "Oye", "Oyen", "Paasche", "Paulsen", "Paulsrud", "Pedersen", "Petersen", "Pettersen", "Pollen", "Poulsen", "Prestegard", "Preus", "Ramberg", "Ramsland", "Ramstad", "Ranum", "Rasch", "Rasmussen", "Ree", "Reinertsen", "Reishus", "Reistad", "Reitan", "Reiten", "Rendahl", "Riis", "Rike", "Rindahl", "Rindal", "Rinde", "Ringdahl", "Ringen", "Ringstad", "Rise", "Ritland", "Roberg", "Rod", "Rodberg", "Roe", "Roed", "Roen", "Rogne", "Rogness", "Rogstad", "Roinestad", "Roisum", "Rolstad", "Rong", "Rongstad", "Ronning", "Ronningen", "Rosdahl", "Roseth", "Rosett", "Rosholt", "Rostad", "Rosten", "Roys", "Royse", "Rud", "Rudi", "Rue", "Ruen", "Runde", "Rustad", "Rusten", "Ruud", "Rye", "Ryen", "Rygg", "Rygh", "Ryland", "S", "Sabo", "Saetern", "Saether", "Sagen", "Sahlberg", "Salberg", "Salmonsen", "Salvesen", "Samuelsen", "Sand", "Sandahl", "Sandberg", "Sande", "Sanden", "Sander", "Sando", "Sandvig", "Sandvik", "Sanner", "Sannes", "Satter", "Saugstad", "Schanke", "Schau", "Schei", "Schou", "Seim", "Selberg", "Selland", "Selvig", "Sem", "Sether", "Setter", "Siem", "Simensen", "Simonsen", "Sivert", "Sivertsen", "Skaar", "Skagen", "Skar", "Skare", "Skaug", "Skeie", "Skog", "Skogen", "Skoglund", "Skogstad", "Skora", "Skramstad", "Skyberg", "Slette", "Sletten", "Slinde", "Smeby", "Smedberg", "Smestad", "Snare", "Sogard", "Sogge", "Soland", "Solbakken", "Solberg", "Solem", "Solheim", "Solie", "Sollie", "Solum", "Solverson", "Sommerfeldt", "Sommerfelt", "Sondrol", "Sorbo", "Sorby", "Sorem", "Soren", "Sorensen", "Sorlie", "Sornes", "Sorum", "Sparre", "Spilde", "Staff", "Stai", "Stangeland", "Stava", "Stave", "Stavig", "Steenrod", "Steensen", "Steffensen", "Stein", "Steinback", "Stenberg", "Stene", "Stennes", "Stensby", "Stensen", "Stenseth", "Stensland", "Stensrud", "Stephensen", "Stiansen", "Stien", "Stigen", "Stoa", "Stoen", "Stohl", "Stokke", "Stolen", "Stordahl", "Stordalen", "Storlie", "Stormo", "Strand", "Strande", "Stray", "Strom", "Stromme", "Strommen", "Sund", "Sundahl", "Sundby", "Sunde", "Sundet", "Sundheim", "Sundt", "Sveen", "Svehla", "Svendsen", "Svenningsen", "Sveum", "Sween", "Sylte", "Syvertsen", "Tanberg", "Tanck", "Tandberg", "Tande", "Tangen", "Tastad", "Teig", "Teigen", "Teigland", "Tellefsen", "Tenold", "Teslow", "Tharaldson", "Thaulow", "Theisen", "Thoe", "Thoen", "Thomassen", "Thomsen", "Thon", "Thoresen", "Thorkelson", "Thorkildsen", "Thornes", "Thorsen", "Thorson", "Thorstad", "Thue", "Thuesen", "Thune", "Thygesen", "Tingelstad", "Tjessem", "Tobiassen", "Tofte", "Tollefsen", "Tollefsrud", "Tonnesen", "Tonnessen", "Torgersen", "Torkelsen", "Torkelson", "Torvik", "Trelstad", "Treschow", "Tronnes", "Truelsen", "Trygstad", "Tuft", "Tufte", "Tvedt", "Tveit", "Ueland", "Ulberg", "Ulland", "Ullmann", "Ulven", "Ulvestad", "Underberg", "Underdahl", "Urdahl", "Ure", "Uren", "Urness", "Vaernes", "Vagen", "Valebrokk", "Valen", "Valla", "Valle", "Valstad", "Vangen", "Vangsness", "Varland", "Varvik", "Vea", "Vee", "Veen", "Veierod", "Velde", "Velten", "Vennerod", "Vetlesen", "Veum", "Vig", "Vigen", "Vignes", "Vik", "Viken", "Vinje", "Viste", "Vold", "Volden", "Voll", "Volle", "Waadeland", "Waag", "Waage", "Waaler", "Waerness", "Wagle", "Wahl", "Wahlberg", "Walberg", "Walstad", "Wangberg", "Wangen", "Wangsness", "Wassum", "Watland", "Watne", "Weberg", "Wee", "Welde", "Welhaven", "Wermager", "Westby", "Westgard", "Westrum", "Wien", "Wigdahl", "Wigen", "Wiig", "Wik", "Wike", "Wiker", "Wiland", "Wilberg", "Wilhelmsen", "Williamsen", "Winding", "Winjum", "With", "Wold", "Wolden", "Woll", "Wollan", "Wolle", "Wollen", "Wollum"];


	i = Math.floor(this.random() * 10); {
		rnd2 = Math.floor(this.random() * nm3.length);
		if (type === 1) {
			rnd = Math.floor(this.random() * nm2.length);
			names = nm2[rnd] + " " + nm3[rnd2];
		} else {
			rnd = Math.floor(this.random() * nm1.length);
			names = nm1[rnd] + " " + nm3[rnd2];
		}
		return names;
	}

})