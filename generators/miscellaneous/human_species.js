var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$miscellaneous$human_species() {
	var nm1 = ["Abditus (Concealed)", "Abstrusus (Secret)", "Acer (Fierce)", "Aequus (Calm)", "Albus (White)", "Alius (Other)", "Altus (High)", "Amicus (Friendly)", "Angustus (Narrow)", "Antiquus (Ancient)", "Arcanus (Silent)", "Arenarius (Sandy)", "Aureus (Golden)", "Avarus (Greedy)", "Bardus (Stupid)", "Beatus (Fortunate)", "Bellus (Handsome)", "Bombycinus (Silken)", "Brevis (Short)", "Caecigenus (Born blind)", "Caecus (Blind)", "Caeruleus (Dark colored/blue)", "Candidulus (Shining)", "Candidus (Beautiful)", "Castus (Pure)", "Celer (Swift)", "Celsus (Lofty)", "Cineraceus (Gray)", "Comatus (Hairy)", "Creper (Obscure)", "Cretatus (Chalked)", "Cupidus (Desirous)", "Delicatus (Delicate)", "Diffusus (Spread out)", "Diligens (Diligent)", "Distinctus (Distinct)", "Distortus (Distorted)", "Dives (Rich)", "Divinus (Divine)", "Doctus (Learned)", "Dolosus (Crafty)", "Domesticus (Domestic)", "Dulcis (Pleasant)", "Efferatus (Savage)", "Efferus (Savage)", "Elatus (Exalted)", "Emendatus (Perfect)", "Emendosus (Wrong)", "Exemius (Exceptional)", "Exiguus (Scanty)", "Extrarius (Foreign)", "Facetus (Elegant)", "Falsus (False)", "Ferox (Savage)", "Ferreus (Iron)", "Ferus (Wild)", "Festivus (Lively)", "Fidelis (Loyal)", "Fidus (Faithful)", "Finitimus (Neighbouring)", "Firmus (Strong)", "Flavus (Yellow)", "Fornicatus (Arched)", "Fortis (Strong)", "Fortunatus (Fortunate)", "Frigidus (Cold)", "Frivolus (Worthless)", "Furtivus (Secret)", "Furvus (Dark/black)", "Fuscus (Brown)", "Fusus (Spread out)", "Generosus (Noble)", "Gibber (Humpbacked)", "Gilvus (Pale yellow)", "Glaber (Hairless)", "Gloriousus (Glorious)", "Gracilis (Slender)", "Grandaevus (Very old)", "Hospitus (Strange)", "Hostificum (Hostile)", "Humilis (Humble)", "Idem (Identical)", "Immortalis (Immortal)", "Infinitus (Countless)", "Infirmus (Weak)", "Ingens (Huge)", "Inocgnito (Unknown)", "Inopinatus (Unexpected)", "Insanus (Insane)", "Inscitus (Ignorant)", "Inutilis (Useless)", "Iratus (Angry)", "Iucundus (Pleasant)", "Liber (Free)", "Liberalis (Generous)", "Lucifugus (Light shunning)", "Macer (Lean)", "Maculosus (Spotted)", "Magnanimus (Brave)", "Magnus (Large)", "Maior (Greater/older)", "Malus (Bad)", "Malus (Wicked)", "Maritumus (Maritime)", "Maximus (Greatest)", "Mediocris (Mediocre)", "Medius (Middle)", "Melior (Better)", "Merus (Pure)", "Minus (Smaller)", "Minutus (Small)", "Mirabilis (Amazing)", "Mirandus (Wonderful)", "Misellus (Wretched)", "Miser (Wretched)", "Monstruosus (Monstrous)", "Mortalis (Mortal)", "Nasutus (Large nosed)", "Nemorivagus (Wood wandering)", "Nescius (Ignorant)", "Niveus (Snowy)", "Nivosus (Snowy)", "Noctivagus (Night wandering)", "Noctuabundus (Night travelling)", "Nocturnus (Nightly)", "Nopinus (Unexpected)", "Novellus (New)", "Obesus (Fat)", "Organicus (Musical)", "Otiosus (Idle)", "Paluster (Marshy)", "Pannosus (Ragged)", "Pannuceus (Wrinkled)", "Parvulus (Very small)", "Parvus (Little)", "Perpetuus (Perpetual)", "Pessimus (Worst)", "Picturatus (Painted)", "Pictus (Artistic)", "Potens (Mighty)", "Primus (First)", "Pristinus (Ancient)", "Pristinus (Former)", "Proavitus (Ancestoral)", "Procellosus (Stormy)", "Procerus (Tall)", "Properus (Quick)", "Pudicus (Chaste)", "Pulchellus (Pretty)", "Pulcher (Beautiful)", "Pullus (Dark colored)", "Rabidus (Savage)", "Ratus (Calculated)", "Recidivus (Returning)", "Remissus (Gentle)", "Remotus (Distant)", "Repositus (Remote)", "Ridiculus (Ridiculous)", "Rubens (Red)", "Rufus (Red)", "Russus (Red)", "Sacer (Sacred)", "Sacratus (Sacred)", "Salsus (Salty)", "Saxeus (Rocky)", "Saxosus (Rocky)", "Scius (Knowing)", "Secendus (Following)", "Secundus (Second)", "Sedatus (Quiet)", "Silus (Snun-nosed)", "Silvester (Wooded)", "Similis (Similar)", "Sincerus (Pure)", "Solus (Sole)", "Sonans (Noisy)", "Sordidus (Dirty)", "Sparus (Scattered)", "Squameus (Scaly)", "Squamosus (Scaly)", "Stultus (Foolish)", "Suavis (Sweet)", "Sucinus (Of Amber)", "Summus (Furthest)", "Superbus (Arrogant)", "Supremus (Highest)", "Taciturnus (Silent)", "Tardus (Slow)", "Tenuis (Weak)", "Tristis (Grim)", "Tumulosus (Hilly)", "Turbulentus (Muddy)", "Turpis (Disgraceful)", "Ultimus (Farthest)", "Vagus (Wandering)", "Velox (Fast)", "Versutus (Dexterous)", "Verus (True)", "Vesanus (Insane)", "Viridis (Green)"];


	i = Math.floor(this.random() * 10); {
		rnd = Math.floor(this.random() * nm1.length);
		names = "Homo " + nm1[rnd];
		nm1.splice(rnd, 1);
		return names;
	}

})