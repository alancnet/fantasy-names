var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$real$pashtuns(type) {
	var nm1 = ["Abasin", "Aimal", "Alam", "Alamzeb", "Amail", "Amu", "Andam", "Angar", "Arman", "Arsalan", "Asfand", "Asfandyar", "Atal", "Atsak", "Aurang", "Awalmir", "Azlan", "Azmaray", "Babrak", "Bacha", "Badam", "Bahram", "Bahrawar", "Bakht", "Bakht Rawan", "Bakhtawar", "Balach", "Balay", "Baryal", "Baryalai", "Baseer", "Batoor", "Baz", "Bazgar", "Bazir", "Behroz", "Beltoon", "Chargul", "Chinar", "Dagar", "Darab", "Darmal", "Darwesh", "Daryab", "Daulat", "Dawar", "Diar", "Dilawar", "Droon", "Elam", "Emal", "Faridun", "Gahez", "Ghairat", "Ghakhtalay", "Ghalji", "Ghamay", "Gharsanay", "Ghatool", "Ghazan", "Ghorzang", "Ghuncha Gul", "Ghurghusht", "Gogal", "Gorbat", "Gran", "Gul", "Gul Baz", "Gul Jan", "Gul Mast", "Gul Rang", "Gul Yar", "Gul Zaman", "Gul Zar", "Gulab", "Hask", "Helmand", "Hewad", "Hukam", "Izat", "Janan", "Janat Gul", "Jandol", "Kakay", "Karlan", "Karlani", "Khaista", "Khak", "Khandawar", "Khialay", "Khog", "Khushal", "Khushdil", "Khwazun", "Khyber", "Kochai", "Lajbar", "Lakhkar", "Lal", "Lashkar", "Lawang", "Lawangin", "Lmar", "Mairanay", "Maiwand", "Malang", "Malyar", "Manan", "Marghoz", "Marjan", "Marwand", "Mashal", "Mateen", "Mir Wais", "Mirzal", "Mohambar", "Nang", "Nangial", "Noomyalay", "Nufail", "Olasyar", "Pamir", "Pashtoon", "Pason", "Patang", "Patman", "Patwal", "Patyal", "Paywastun", "Pelabo", "Perzo", "Pohand", "Pordal", "Powenda", "Psarlay", "Qajeer Gul", "Qalandar", "Raham Dil", "Rangeen", "Reday", "Rekhteen", "Reshteen", "Rokhan", "Roshan", "Rustam", "Sabawoon", "Sadin", "Sahar", "Sahar Gul", "Salar", "Samandar", "Samoon", "Samsor", "Sangar", "Sangin", "Sangrez", "Sanobar", "Sarban", "Sarbaz", "Sartor", "Sayel", "Selab", "Selani", "Shahzar", "Shamroz", "Sher Dil", "Sherin", "Shin Gul", "Shindi Gul", "Shino", "Shpol", "Shpoon", "Shuja", "Sifat", "Sohrab", "Sparlay", "Spin", "Spin Gul", "Spinzar", "Storay", "Sur Gul", "Taban", "Tanim", "Taroon", "Tawas", "Teri", "Tofan", "Tolwak", "Tor Gul", "Toryal", "Toti", "Turan", "Turialai", "Wadaan", "Wakdar", "Wakman", "Wali", "Yama", "Yoon", "Zafran", "Zaland", "Zalmay", "Zapran", "Zar Gul", "Zar Wali", "Zarak", "Zaram", "Zarang", "Zarbat", "Zardab", "Zardad", "Zargar", "Zarghun", "Zarhawar", "Zarhgay", "Zarin", "Zarkanay", "Zarlesh", "Zarmast", "Zaryab", "Zgard", "Ziar", "Ziarmal", "Zigar", "Zmarak", "Zmaray", "Zorak", "Zorawar", "Zwak", "Zwandun"];
	var nm2 = ["Afia", "Aghala", "Ambrin", "Angeza", "Apana", "Ariana", "Badrai", "Bakhtawara", "Bala Nashta", "Balbala", "Banafsha", "Barsala", "Bazira", "Benazira", "Bibi", "Bibi Rokhana", "Brekhna", "Breshna", "Diwa", "Durkhanai", "Farishta", "Gabina", "Galai", "Ghatola", "Ghorashka", "Ghotai", "Ghuncha", "Gorgora", "Grana", "Gul Bano", "Gul Ghutai", "Gul Lakhta", "Gul Makai", "Gul Mina", "Gul Panrha", "Gul Sanga", "Gul Warin", "Gulalai", "Gulchin", "Gulnar", "Hala", "Helai", "Hila", "Hina", "Husay", "Kashmala", "Khaista", "Khaperai", "Kharo", "Khatol", "Khkulay", "Khush Bakhta", "Khwaga", "Kochai", "Kontara", "Laila", "Lailuma", "Lakhta", "Lalma", "Lalzari", "Lamba", "Lawanga", "Lema", "Mahjabin", "Mahnur", "Mahzala", "Malala", "Malalai", "Malghalara", "Mina", "Mukai", "Munawara", "Murchakai", "Muska", "Naghma", "Nangialai", "Narenja", "Natkai", "Nawyata", "Nazanina", "Nazdana", "Nazo", "Niazmina", "Orbakhta", "Orbala", "Orzala", "Palwasha", "Panra", "Parghunda", "Pariwarsh", "Parkha", "Pashmina", "Patasa", "Peghra", "Perkha", "Pokhla", "Ranrha", "Rayan", "Rekhmina", "Reshmina", "Reshtina", "Roshina", "Saba", "Salgay", "Sandara", "Sanga", "Sangina", "Selai", "Senzela", "Shaghalay", "Shahay", "Shahlalai", "Shaista", "Shamla", "Shandana", "Shanzai", "Shaperai", "Shastai", "Shazmina", "Sherin", "Shinkai", "Shinogai", "Shughla", "Silai", "Spalmay", "Sparghai", "Spezala", "Spogmai", "Spozhmai", "Storai", "Tabana", "Talwasa", "Tanima", "Tor Pikai", "Ugay", "Uzhmakai", "Wadaana", "Wagma", "Wahida", "Wajia", "Warda", "Wawrina", "Wranga", "Wrashmin", "Wreshmin", "Zainba", "Zaituna", "Zakia", "Zala", "Zalanda", "Zaloba", "Zamda", "Zar Bibi", "Zar Masta", "Zar Mina", "Zar Wareen", "Zarbaha", "Zareena", "Zareesh", "Zarghuna", "Zarka", "Zarlakhta", "Zarlashta", "Zarmina", "Zarsanga", "Zarshala", "Zartaj", "Zartash", "Zhala", "Zhalai", "Zohal", "Zufash"];
	var nm3 = ["Abidi", "Abro", "Afridi", "Agha", "Ahmedani", "Akhoond", "Alpial", "Alvi", "Ansari", "Arain", "Ashkani", "Askari", "Atcha", "Aujla", "Awan", "Babar", "Badinij", "Bahawalanzai", "Bahmani", "Baig", "Bajwa", "Bakhwal", "Baloch", "Bangash", "Bangial", "Banuchi", "Baqri", "Barazani", "Barelvi", "Barlas", "Barr", "Basra", "Bhabra", "Bhango", "Bhatia", "Bhatti", "Bhullar", "Bhutta", "Bijarani", "Brahmani", "Bukhari", "Buledi", "Bulfati", "Burki", "Butt", "Buzdar", "Chachar", "Chagatai", "Chahal", "Chamkanni", "Chandio", "Changwani", "Chatha", "Chaudhry", "Chauhan", "Chechi", "Cheema", "Chishti", "Chughtai", "Chutani", "Dall", "Damanis", "Dar", "Dareshak", "Darzada", "Dasti", "Daulat Khel", "Davi", "Dawar", "Dehwar", "Derawal", "Dhariwal", "Dhillon", "Dilazak", "Dogar", "Domki", "Douli", "Duggal", "Durrani", "Faqir", "Fareedi", "Farooqi", "Firdausi", "Gabol", "Gadai", "Gadhi", "Gajani", "Gakhar", "Gandapur", "Gardezi", "Gashkori", "Ghazali", "Ghazini", "Ghilzai", "Ghuman", "Gichki", "Gilani", "Gilani", "Gill", "Gondal", "Goraya", "Gorgage", "Gorshani", "Gujjar", "Gul", "Gurmani", "Hafiz Khel", "Hamadani", "Hashmi", "Hasni", "Hassan", "Hesbani", "Hiraj", "Hooth", "Hundal", "Hussain", "Hussaini", "Hyderi", "Ibrahim", "Idrisi", "Isfahani", "Jadgal", "Jadoon", "Jafari", "Jagirani", "Jahangiri", "Jakhrani", "Jalali", "Jalbani", "Jamali", "Jamshidi", "Jandran", "Janwari", "Jappa", "Jarwar", "Jat", "Jatoi", "Jattak", "Jhalawan", "Jiskani", "Jogi", "Johiya", "Kaira", "Kakakhel", "Kakar", "Kakazai", "Kallu", "Kalmati", "Kalpar", "Kalyal", "Kambarzahi", "Kamboh", "Karlal", "Kasana", "Kashani", "Kashmiri Shaikh", "Kassar", "Kathia", "Kayani", "Kazmi", "Kenagzai", "Kermani", "Kethwal", "Khakwani", "Khalil", "Khalol", "Khara", "Kharoti", "Khaskheli", "Khatana", "Khattak", "Khawaja", "Kheazai", "Khetran", "Khloro", "Khokhar", "Khorasani", "Khosa", "Khudiadadzai", "Khulozai", "Khushk", "Kichlu", "Kirmani", "Kohli", "Korai", "Kuchelai", "Kuchis", "Kundi", "Kurd", "Lak", "Lakhani", "Langah", "Langhani", "Lango", "Lanjwani", "Lari", "Lehri", "Lodhi", "Loharani", "Lone", "Longi", "Lund", "Maan", "Maghdud Khel", "Magsi", "Mahar", "Mahmud Khel", "Mahsud", "Mahtam", "Makhdoom", "Malhotra", "Malik", "Mamund", "Mangi", "Marri", "Marwat", "Mashwanis", "Masood", "Meghwar", "Memon", "Mengal", "Mian", "Minhas", "Mir", "Mirwani", "Mirza", "Mirza", "Mohamedzai", "Mohmand", "Montazeri", "Mousavi", "Mughal", "Muhammadzai", "Muker", "Mullagori", "Musakhel", "Muslim Khatris", "Naeem", "Najafi", "Nanda", "Naqvi", "Nausherwani", "Niazi", "Nishapuri", "Nizamani", "Noorani", "Noorzai", "Nothazai", "Nutkani", "Orakzai", "Osmani", "Paracha", "Pasha", "Passi", "Patel", "Pirzada", "Pitafi", "Popalzai", "Qadiri", "Qaimkhani", "Qaisrani", "Qalat", "Qambrani", "Qazi", "Qizilbash", "Qureshi", "Rahija", "Rahmanzai", "Raisani", "Rajpar", "Rajput", "Ramay", "Rana", "Ranjha", "Rathore", "Razavi", "Reza", "Rind", "Rizvi", "Rodini", "Sabzvari", "Sadat", "Sadozai", "Sahi", "Sahni", "Sajjadi", "Salarzai", "Salehi", "Samma", "Sanjarzai", "Sanjrani", "Sarbani", "Sarpara", "Sasooli", "Satti", "Sayyid", "Sethwi", "Shah", "Shahwani", "Shaikh", "Shambhani", "Shanzay", "Sheikh", "Sherzai", "Shilmani", "Shinwari", "Shirani", "Sial", "Siddiqui", "Sistani", "Solangi", "Sulemani", "Sumalani", "Sumbal", "Suri", "Syed", "Tahirkheli", "Talpur", "Taqvi", "Tareen", "Tarkani", "Tauqi", "Tirmizi", "Tokhi", "Turabi", "Turkhel", "Umar Khel", "Umarzai", "Umrani", "Unar", "Usmani", "Uthman khel", "Virk", "Wadeyla", "Wassan", "Wasti", "Wazir", "Wur", "Yazdani", "Yousafzai", "Yusaf Khel", "Zaidi", "Zain", "Zand", "Zardari", "Zehri", "Zubairi"];


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