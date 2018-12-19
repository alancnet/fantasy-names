var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$real$malaysians(type) {
	var names1 = ["Aadila", "Aaida", "Aaisha", "Aamina", "Aanisa", "Aarifa", "Aasima", "Aasiya", "Aatifa", "Aatika", "Aayaat", "Abeer", "Adeeba", "Adhraaa", "Afaaf", "Afeefa", "Afnaan", "Afraah", "Ahlaam", "Aliyya", "Almaasa", "Amaani", "Amal", "Amatullah", "Ameena", "Ameera", "Amniyya", "Anbara", "Aneesa", "Aqeela", "Ariyya", "Arwa", "Aseela", "Asmaa", "Atheer", "Atiyya", "Awaatif", "Awda", "Azeema", "Azeeza", "Azza", "Fakeeha", "Faraah", "Fareeda", "Farha", "Farhaana", "Farhat", "Faseeha", "Fateena", "Fat'hiyaa", "Fawqiyya", "Fawzaana", "Fawzia", "Fidda", "Fikra", "Fikriyya", "Firdaus", "Fuaada", "Gaitha", "Ghaada", "Ghaaliba", "Ghaaliya", "Ghaaziya", "Ghaidaa", "Ghazaala", "Ghuzaila", "Haafiza", "Haajara", "Haakima", "Haala", "Haamida", "Haaniya", "Haaritha", "Haazima", "Habeeba", "Hadbaaa", "Hadeel", "Hadiyya", "Hafsa", "Haibaa", "Haifaaa", "Hakeema", "Haleema", "Hamaama", "Hamda", "Hamdoona", "Hameeda", "Hamna", "Hamsa", "Hanaaa", "Hanaan", "Haniyya", "Hanoona", "Hasana", "Haseena", "Hasnaa", "Hawraa", "Hazeela", "Hiba", "Hikma", "Hilmiyya", "Himma", "Hishma", "Hissa", "Hiwaaya", " Huda", "Hujja", "Humaina", "Humaira", "Husniyya", "Huwaida", "Ibtisaama", "Iffat", "Ilhaam", "Imtinaan", "Inaaya", "Insaaf", "Intisaar", "Israa", "Izza", "Jadeeda", "Jaleela", "Jameela", "Jannat", "Jasra", "Jawhara", "Jeelaan", "Juhaina", "Jumaana", "Jumaima", "Juwairiya", "Kaatima", "Kaazima", "Kabeera", "Kameela", "Kareema", "Kawkab", "Kawthar", "Khaalida", "Khadeeja", "Khaira", "Khairiya", "Khaleela", "Khawla", "Khulood", "Kifaaya", "Kinaana", "Kulthum", "Laaiqa", "Labeeba", "Laila", "Lateefa", "Layaali", "Lubaaba", "Lubna", "Lutfiyya", "Maajida", "Maariya", "Maazina", "Madeeha", "Mahaa", "Mahbooba", "Mahdeeya", "Mahdhoodha", "Mahfoodha", "Mahmooda", "Maimoona", "Maisara", "Majdiyya", "Majeeda", "Maleeha", "Maleeka", "Manaahil", "Manaal", "Manaara", "Mardiyya", "Marjaana", "Marwa", "Marzooqa", "Mas'ooda", "Masroora", "Mastoora", "Mawhiba", "Mawzoona", "Mayyaada", "Mazeeda", "Minnah", "Misbaah", "Miska", "Mubaaraka", "Mubeena", "Mudrika", "Mufeeda", "Mufliha", "Muhjar", "Mu'hsina", "Mujaahida", "Mumina", "Mu'mina", "Mumtaaza", "Muna", "Muneefa", "Muneera", "Munisa", "Muntaha", "Musfira", "Musheera", "Mushtaaqa", "Mutee'a", "Muzaina", " Muzna", "Naadiya", "Naafoora", "Naaifa", "Naaila", "Nabeeha", "Nabeela", "Nada", "Nadeera", "Nadheera", "Nadiyya", "Nafeesa", "Nahla", "Najaat", "Najeeba", "Najeema", "Najiyya", "Najlaa", "Najma", "Najwa", "Nakheel", "Nameera", "Naqaa", "Naqiyya", "Naseeba", "Naseefa", "Naseema", "Naseera", "Nasreen", "Nawaal", "Nawaar", "Nawfa", "Nawwaara", "Nazeeha", "Nazeema", "Nazmiyya", "Nisma", "Noora", "Nooriyya", "Nuha", "Nu'ma", "Nusaiba", "Nuzha", "Qaaida", "Qamraaa", "Qisma", "Raabia", "Raabiya", "Raadiya", "Raafida", "Raaida", "Raaniya", "Rabdaa", "Radiyya", "Radwa", "Rafeeda", "Rafeeqa", "Raheema", "Rahma", "Raihaana", "Raita", "Ramla", "Ramza", "Ramziyya", "Randa", "Rashaa", "Rasheeda", "Rasheeqa", "Rawda", "Rayyana", "Razeena", "Reema", "Rif'a", "Rifqa", "Rihaab", "Rumaana", "Ruqayya", "Rutaiba", "Ruwaida", "Saabiqa", "Saabira", "Saafiyya", "Saahira", "Saajida", "Saaliha", "Saalima", "Saamiqa", "Saamyya", "Saara", "Sabaaha", "Sabeeha", "Sabeeka", "Sabiyya", "Sabreen", "Sabriyya", "Sadeeda", "Sadeeqa", "Safaaa", "Safiyya", "Safwa", "Sahar", "Sahheeda", "Sahla", "Sajaa", "Sajiyya", " Sakeena", "Saleema", "Salma", "Salwa", "Sameeha", "Sameera", "Samraa", "Sanaaa", "Sanad", "Sawada", "Shaafia", "Shaahida", "Shaahira", "Shaakira", "Shaamila", "Shabeeba", "Shadhaa", "Shafaaa", "Shafee'a", "Shafeeqa", "Shahaada", "Shahaama", "Shaheera", "Shahla", "Shaimaaa", "Shajee'a", "Shakeela", "Shakoora", "Sham'a", "Shamaail", "Shameema", "Shaqeeqa", "Shareefa", "Shukriyya", "Siddeeqa", "Sireen", "Sitaara", "Suhaa", "Suhaad", "Suhaila", "Sukaina", "Sulama", "Sultana", "Sumaita", "Sumayya", "Sumbula", "Sundus", "Taaliba", "Taamira", "Tahaani", "Tahiyya", "Tahleela", "Tamanna", "Tameema", "Taqiyya", "Tareefa", "Tasneem", "Tawfeeqa", "Tawheeda", "Tayyiba", "Thaabita", "Thaamira", "Thamra", "Thanaa", "Tharwa", "Tuhfa", "Tulaiha", "Turfa", "Ulyaa", "Umaima", "Umaira", "Ummu Kulthoom", "Urwa", "Waajida", "Wadee'a", "Wadha", "Wafaaa", "Waheeba", "Waheeda", "Wajdiyya", "Wajeeha", "Waleeda", "Waliyya", "Waneesa", "Warda", "Wardiyya", "Waseema", "Wasmaaa", "Widdad", "Yaasmeen", "Yaasmeena", "Zaahira", "Zaaida", "Zahra", "Zahraaa", "Zainab", "Zaitoona", "Zakiyya", "Zarqaa", "Zeena", "Zubaida", "Zuhaira", "Zuhra", "Zuhriyaa", "Zulfa", "Zumruda"];
	var names2 = ["Adi Puteri", "Adi Putri", "Adiputeri", "Adiputri", "Aishah", "Aisyah", "Ayu", "Azura", "Biru", "Bongsu", "Bulat", "Bunga", "Cahaya", "Cempaka", "Chahaya", "Cik", "Dara", "Dayang", "Delima", "Dewi", "Dian", "Embun", "Esah", "Fajar", "Hapsah", "Harum", "Haryati", "Hayati", "Heryati", "Hijau", "Indah", "Intan", "Izzati ", "Jaya", "Jenab", "Juwita", "Kartika", "Kartini", "Katijah", "Kembang", "Kemboja", "Kemuning", "Khatijah", "Kuning", "Kuntum", "Latipah", "Linda", "Mahsuri", "Mahura", "Manjalara", "Mariah", "Mariam", "Mas", "Mas Ayu", "Masayu", "Mastini", "Mawar", "Maya", "Mayang", "Mayang Sari", "Melati", "Melur", "Meriam", "Minah", "Munah", "Murni", "Nawar", "Nilam", "Nirmala", "Pertiwi", "Puspa", "Puspasari", "Puspawangi", "Puspawati", "Puteh", "Puteri", "Putih", "Putri", "Sa'adong", "Saadong", "Sari", "Sayang", "Sepiah", "Seri", "Siti", "Sri", "Suria", "Suriani", "Suriawati", "Surintan", "Tempawan", "Teratai", "Tijah", "Tipah", "Ungu", "Wangi", "Wati", "Yati", "Zamrud"];
	var names3 = ["Aabdeen", "Aabid", "Aadam", "Aadil", "Aaish", "Aakif", "Aamir", "Aaqil", "Aarif", "Aasim", "Aatif", "Aayid", "Abbaad", "Abbaas", "Abdul Azeez", "Abdul Baari", "Abdul Baasid", "Abdul Fattaah", "Abdul Ghafoor", "Abdul Ghani", "Abdul Haadi", "Abdul Hai", "Abdul Hakeem", "Abdul Haleem", "Abdul Hameed", "Abdul Jabbaar", "Abdul Jaleel", "Abdul Kader", "Abdul Kareem", "Abdul Khaliq", "Abdul Lateef", "Abdul Maalik", "Abdul Majeed", "Abdul Noor", "Abdul Qayyoom", "Abdul Quddoos", "Abdul Rauf", "Abdul Waahid", "Abdul Wadood", "Abdul Wahaab", "Abdullah", "Abdur Raheem", "Abdur Rahmaan", "Abdur Raqeeb", "Abdur Rasheed", "Abdur Razzaaq", "Abdus Salam", "Abdus Samad", "Abdut Tawwab", "Abood", "Abyad", "Adeeb", "Adham", "Adnaan", "Afeef", "Ahmed", "Aiman", "Akram", "Alawi", "Ali", "Amaan", "Amaanullah", "Ameen", "Ameer", "Amjad", "Ammaar", "Amru", "Anas", "Annnees", "Anwar", "Aqeel", "Arafaat", "Arhab", "Arkaan", "Arshad", "Asad", "Aseel", "Asghar", "Ashqar", "Ashraf", "Aslam", "Asmar", "Awad", "Awf", "Awn", "Awni", "Ayyoob", "Azhaar", "Azmi", "Azzaam", "Baahir", "Baaqir", "Baasim", "Badr", "Badraan", "Badri", "Badruddeen", "Baheej", "Bakar", "Bandar", "Basheer", "Bassaam", "Bassil", "Bilaal", "Bishr", "Burhaan", "Daamir", "Daawood", "Daif", "Daifallah", "Daleel", "Dhaafir", "Dhaahir", "Dhaakir", "Dhaki", "Dhareef", "Faadi", "Faadil", "Faai Z", "Faaid", " Faaiq", "Faalih", "Faaris", "Faarooq", "Faatih", "Faatin", "Fahd", "Faheem", "Fahmi", "Faisal", "Faraj", "Farajallah", "Fareed", "Farhaan", "Fateen", "Fat'hi", "Fawwaaz", "Fawz", "Fawzi", "Fayyaad", "Fikri", "Fuaad", "Furqaan", "Ghaali", "Ghaalib", "Ghaamid", "Ghaazi", "Ghassaan", "Haafil", "Haajid", "Haamid", "Haani", "Haarith", "Haaroon", "Haashid", "Haashim", "Haatim", "Haazim", "Haitham", "Hakam", "Hamad", "Hamdaan", "Hamdi", "Hamood", "Hamza", "Haneef", "Hanlala", "Hasan", "Hazm", "Hibbaan", "Hilaal", "Hilmi", "Hishaam", "Hudhaifa", "Humaid", "Humaidaan", "Huraira", "Husaam", "Husain", "Husni", "Ibrahim", "Idrees", "Ihaab", "Ikram", "Ilyaas", "Imaad", "Imraan", "Irfaan", "Isaam", "Ishaaq", "Ismad", "Ismaeel", "Iyaad", "Izzaddeen", "Izzat", "Jaabir", "Jaad", "Jaadallah", "Jaarallah", "Jaasim", "Jaasir", "Jafar", "Jalaal", "Jam,Aan", "Jamaal", "Jameel", "Jareer", "Jasoor", "Jawaad", "Jawhar", "Jihaad", "Jiyaad", "Jubair", "Jumail", "Junaid", "Kaalim", "Kaamil", "Kaarim", "Kabeer", "Kaleem", "Kamaal", "Kamaaluddeen", "Kameel", "Kanaan", "Katheer", "Khaalid", "Khairi", "Khaleefa", "Khaleel", "Labeeb", "Labeeb", "Luqmaan", "Lutfi", "Luwai", "Ma,Roof", "Maahir", "Maaiz", "Maa'iz", "Maajid", "Maazin", "Mahboob", " Mahdi", "Mahfooz", "Mahmood", "Mahuroos", "Maisara", "Maisoon", "Majdi", "Mamdooh", "Mamoon", "Mansoor", "Marwaan", "Marzooq", "Mashal", "Masood", "Mastoor", "Mawdood", "Mazeed", "Miqdaad", "Miqdaam", "Misfar", "Mishaari", "Moosha", "Mu,Aawiya", "Muaaid", "Muammar", "Mubarak", "Mubashshir", "Mudrik", "Mufeed", "Muhaajir", "Muhammad", "Muhsin", "Muhyddeen", "Mujahid", "Mukarram", "Mukhtaar", "Mundhir", "Muneeb", "Muneef", "Muneer", "Munjid", "Munsif", "Muntasir", "Murshid", "Musaaid", "Mus'ab", "Musaddiq", "Musheer", "Mushtaaq", "Muslih", "Muslim", "Mustaba", "Mutammam", "Mutasim", "Mu'taz", "Muthanna", "Mutlaq", "Muzammil", "Naadir", "Naaif", "Naaji", "Naasif", "Naasiruddeen", "Naazil", "Naazim", "Nabeeh", "Nabeel", "Nadeem", "Nadheer", "Najeeb", "Najeem", "Naseem", "Naseer", "Nashat", "Nassaar", "Nawaar", "Nawf", "Nawfal", "Nazmi", "Neeshaan", "Nizaam", "Nizaar", "Noori", "Nu'maan", "Numair", "Qaaid", "Qaasim", "Qais", "Quraish", "Qutb", "Raadi", "Raafi", "Raaid", "Raaji", "Raakaan", "Raamiz", "Raashid", "Rabi", "Rafeeq", "Raihaan", "Rajaa", "Rajab", "Ramalaan", "Ramzi", "Rashaad", "Rasheeq", "Rayyaan", "Razeen", "Rida", "Ridwaan", "Rifaah", "Rifat", "Riyaal", "Rushdi", "Rushdi", "Ruwaid", "Saabiq", "Saabir", "Saadiq", "Saahir", "Saajid", " Saalih", "Saalim", "Saami", "Saamir", "Sabaah", "Sabri", "Sad", "Sadi", "Sadoon", "Saeed", "Safar", "Safwaan", "Sahl", "Saif", "Sakeen", "Salaah", "Saleel", "Saleem", "Saleet", "Salmaan", "Samir", "Saood", "Saqr", "Shaafi", "Shaaheen", "Shaahir", "Shaakir", "Shaamikh", "Shaamil", "Shabaan", "Shaddaad", "Shafeeq", "Shaheed", "Shaheed", "Shaheer", "Shakeel", "Shameem", "Shaqeeq", "Sharaf", "Sharaf", "Shawqi", "Shihaab", "Shuaib", "Shujaa", "Shukri", "Shuraih", "Siddeeqi", "Sidqi", "Silmi", "Siraaj", "Sirajuddeen", "Subhi", "Sufyaan", "Suhaib", "Suhail", "Sulaimaan", "Sultan", "Suwailim", "Taaha", "Taahir", "Taaj", "Taajuddeen", "Taalib", "Taamir", "Taariq", "Taiseer", "Talaal", "Talha", "Tameem", "Tammaam", "Taqi", "Tareef", "Tawfeeq", "Tawheed", "Tayyib", "Thaamir", "Thaaqib", "Tufail", "Turki", "Ubaida", "Umair", "Umar", "Unais", "Uqbah", "Usaama", "Uthmaa N", "Uwais", "Waail", "Waatiq", "Waddaah", "Wajdi", "Wajeeb", "Wajeeh", "Waleed", "Waseef", "Waseem", "Wisaam", "Yaasir", "Ya'eesh", "Yahya", "Ya'qoob", "Yoonus", "Yoosuf", "Yusri", "Zaahid", "Zaahir", "Zaaid", "Zaamil", "Zaghlool", "Zaid", "Zaidaan", "Zain", "Zainuddeen", "Zakariyya", "Zaki", "Zameel", "Zayyaan", "Ziyaad", "Zubair", "Zufar", "Zuhair", "Zuraara"];
	var names4 = ["Adi", "Adi Putera", "Adi Putra", "Adiputera", "Adiputra", "Agung", "Agus", "Ahad", "Andika", "Anuar", "Atan", "Awang", "Baba", "Bachok", "Bagus", "Bambang", "Basuki", "Bayu", "Benderang", "Bestari", "Bijaya", "Bintang", "Biru", "Bongsu", "Budi", "Budiarto", "Bujang", "Bulat", "Che", "Chik", "Danang", "Danial", "Daniel", "Daud", "Daut", "Demak", "Demang", "Deraman", "Deris", "Desa", "Dollah", "Dumadi", "Elias", "Elyas", "Embong", "Fajar", "Gana", "Gombak", "Hamengku", "Haron", "Hijau", "Hitam", "Indera", "Ishak", "Isnin", "Izzat", "Jati", "Jaya", "Jebat", "Jejaka", "Jiwa", "Johan", "Jumaat", "Jusoh", "Kamat", "Kamis", "Kechik", "Kepli", "Kesuma", "Khamis", "Kipli", "Kuning", "Labuh", "Lanang", "Leman", "Lokman", "Lukman", "Luncai", "Mail", "Malim", "Mamat", "Mat", "Megat", "Merdeka", "Muda", "Mulia", "Nerang", "Noh", "Omar", "Osman", "Perang", "Perwira", "Puteh", "Putera", "Putih", "Putra", "Rabu", "Rai", "Raja", "Sabtu", "Sagari", "Sangkara", "Selamat", "Selasa", "Seman", "Senin", "Shuib", "Sugriwa", "Suib", "Sulong", "Sulung", "Suria", "Tanggang", "Taufan", "Teh", "Tempawi", "Teruna", "Tuah", "Uda", "Ujang", "Ungu", "Usop", "Wira", "Yaacob", "Yaakob", "Yaakop", "Yahaya", "Yeop", "Yunos", "Zakaria", "Zulkarnain", "Zulkifli", "Zulkipli"];

	tp = type;

	i = Math.floor(this.random() * 10); {
		if (i < 5) {
			if (type === 1) {
				rnd = Math.floor(this.random() * names1.length);
				rnd2 = Math.floor(this.random() * names3.length);
				names = names1[rnd] + " binti " + names3[rnd2];
			} else {
				rnd = Math.floor(this.random() * names1.length);
				rnd2 = Math.floor(this.random() * names1.length);
				names = names1[rnd] + " bin " + names1[rnd2];
			}
		} else {
			if (type === 1) {
				rnd = Math.floor(this.random() * names2.length);
				rnd2 = Math.floor(this.random() * names4.length);
				names = names2[rnd] + " binti " + names4[rnd2];
			} else {
				rnd = Math.floor(this.random() * names2.length);
				rnd2 = Math.floor(this.random() * names2.length);
				names = names2[rnd] + " bin " + names2[rnd2];
			}
		}
		return names;
	}

})