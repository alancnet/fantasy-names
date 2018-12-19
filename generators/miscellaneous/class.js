var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$miscellaneous$class(type) {
	var nm1 = ["Adept", "Agent", "Alchemist", "Arachnomancer", "Arcanist", "Archer", "Archmage", "Barbarian", "Bard", "Battlemage", "Battlemind", "Beastmaster", "Berserker", "Binder", "Bishop", "Blade Dancer", "Bladesinger", "Bounty Hunter", "Brawler", "Butcher", "Cavalier", "Chameleon", "Champion", "Cleric", "Conjurer", "Corsair", "Crusader", "Cyborg", "Dancer", "Dark Knight", "Death Knight", "Demon Hunter", "Demonbinder", "Demonologist", "Diabolist", "Disciple", "Doomcaster", "Doomlord", "Dragon Knight", "Dragon Rider", "Dragonfire Adept", "Druid", "Elementalist", "Emissary", "Enchanter", "Engineer", "Geomancer", "Ghostwalker", "Gladiator", "Guardian", "Gunslinger", "Harbinger", "Healer", "Hellreaver", "Hexblade", "Highwayman", "Hunter", "Illusionist", "Incarnate", "Infiltrator", "Inquisitor", "Jester", "Knight", "Legionnaire", "Lord", "Loremaster", "Mage", "Magehunter", "Maiden", "Marauder", "Marine", "Marshal", "Master", "Mauler", "Medic", "Mercenary", "Monk", "Moonlord", "Moonmaster", "Mystic", "Mystic Knight", "Navigator", "Necromancer", "Ninja", "Oracle", "Outrider", "Paladin", "Paragon", "Pirate", "Priest", "Prophet", "Puppet Master", "Ranger", "Ravager", "Rogue", "Runecaster", "Sage", "Samurai", "Scavenger", "Scout", "Seer", "Sentinel", "Shadowblade", "Shadowdancer", "Shadowsmith", "Shadowstalker", "Shaman", "Siren", "Skyguard", "Skymage", "Slayer", "Sniper", "Sorcerer", "Soulcaster", "Soulguard", "Soulknife", "Spellcaster", "Spelldancer", "Spellsinger", "Spellsword", "Spellthief", "Spiritwalker", "Spy", "Spymaster", "Stalker", "Stormcaster", "Stormlord", "Stormsinger", "Summoner", "Sunlord", "Sunmaster", "Swashbuckler", "Tactician", "Tempest", "Templar", "Thief", "Totemist", "Transmuter", "Trapsmith", "Trickster", "Valkyrie", "Vampire", "Viking", "Warden", "Warlock", "Warlord", "Warmage", "Warmaster", "Warpriest", "Warrior", "Weapon Master", "Weaver", "Windwalker", "Witch", "Witch Doctor"];
	var nm2 = ["Forgotten Knight", "Vampiric Servant", "Imperial Battlemage", "Dark Necromancer", "Woodland Guardian", "Roaming Lich", "Primitive Spearman", "Tribal Spearman", "Tribal Warrior", "Shadow Dweller", "Imperial Crusader", "Feral Savage", "Stormborn Warrior", "Draconic Priest", "Shadow Walker", "Imperial Scout", "Shadow Archer", "Mystic Spellbinder", "Solar Knight", "Runeguard", "Restless Spirit", "Draconic Knight", "Priest of Light", "Monk of Faith", "Tribal Chief", "Tribal Warlord", "Tribal Bowman", "Primitive Bowman", "Tempest Warrior", "Adept", "Agent", "Alchemist", "Arachnomancer", "Arcane Adept", "Arcane Agent", "Arcane Alchemist", "Arcane Archer", "Arcane Archmage", "Arcane Battlemage", "Arcane Berserker", "Arcane Binder", "Arcane Bishop", "Arcane Brawler", "Arcane Champion", "Arcane Conjurer", "Arcane Cyborg", "Arcane Dancer", "Arcane Disciple", "Arcane Enchanter", "Arcane Engineer", "Arcane Guardian", "Arcane Harbinger", "Arcane Healer", "Arcane Hellreaver", "Arcane Hunter", "Arcane Infiltrator", "Arcane Knight", "Arcane Lord", "Arcane Mage", "Arcane Marauder", "Arcane Master", "Arcane Mercenary", "Arcane Mystic", "Arcane Ninja", "Arcane Oracle", "Arcane Paragon", "Arcane Pirate", "Arcane Ranger", "Arcane Ravager", "Arcane Runecaster", "Arcane Samurai", "Arcane Scavenger", "Arcane Scout", "Arcane Seer", "Arcane Sentinel", "Arcane Skyguard", "Arcane Skymage", "Arcane Sniper", "Arcane Sorcerer", "Arcane Spellcaster", "Arcane Spelldancer", "Arcane Spellthief", "Arcane Spy", "Arcane Spymaster", "Arcane Stalker", "Arcane Summoner", "Arcane Swashbuckler", "Arcane Tempest", "Arcane Templar", "Arcane Thief", "Arcane Trapsmith", "Arcane Trickster", "Arcane Valkyrie", "Arcane Vampire", "Arcane Warden", "Arcane Warlord", "Arcane Warmage", "Arcane Warmaster", "Arcane Warpriest", "Arcane Warrior", "Arcane Weaponmaster", "Arcane Weaver", "Arcane Witch", "Arcane Witch Doctor", "Arcanist", "Archer", "Archmage", "Barbarian", "Bard", "Battle Alchemist", "Battle Arcanist", "Battle Archer", "Battle Archmage", "Battle Bard", "Battle Berserker", "Battle Bishop", "Battle Brawler", "Battle Cleric", "Battle Conjurer", "Battle Crusader", "Battle Cyborg", "Battle Dancer", "Battle Disciple", "Battle Enchanter", "Battle Engineer", "Battle Guardian", "Battle Harbinger", "Battle Healer", "Battle Hellreaver", "Battle Hunter", "Battle Magehunter", "Battle Marauder", "Battle Medic", "Battle Mercenary", "Battle Oracle", "Battle Paragon", "Battle Priest", "Battle Ranger", "Battle Ravager", "Battle Runecaster", "Battle Sage", "Battle Scout", "Battle Seer", "Battle Shaman", "Battle Siren", "Battle Skymage", "Battle Sniper", "Battle Sorcerer", "Battle Soulcaster", "Battle Spellcaster", "Battle Spelldancer", "Battle Spy", "Battle Spymaster", "Battle Stalker", "Battle Tempest", "Battle Templar", "Battle Totemist", "Battle Trickster", "Battle Valkyrie", "Battle Viking", "Battle Warden", "Battle Warlock", "Battle Warrior", "Battle Weaver", "Battle Witch", "Battlemage", "Battlemaster", "Battlemind", "Battlemonk", "Beastmaster", "Berserker", "Binder", "Bishop", "Blade Dancer", "Bladesinger", "Blood Adept", "Blood Alchemist", "Blood Archer", "Blood Battlemage", "Blood Berserker", "Blood Binder", "Blood Champion", "Blood Conjurer", "Blood Dancer", "Blood Disciple", "Blood Enchanter", "Blood Guardian", "Blood Harbinger", "Blood Hunter", "Blood Knight", "Blood Lord", "Blood Mage", "Blood Marauder", "Blood Master", "Blood Mystic", "Blood Oracle", "Blood Paragon", "Blood Pirate", "Blood Ranger", "Blood Ravager", "Blood Runecaster", "Blood Scavenger", "Blood Sentinel", "Blood Sorcerer", "Blood Spellcaster", "Blood Spelldancer", "Blood Spellthief", "Blood Spy", "Blood Spymaster", "Blood Stalker", "Blood Summoner", "Blood Tempest", "Blood Templar", "Blood Trickster", "Blood Valkyrie", "Blood Vampire", "Blood Warden", "Blood Warlord", "Blood Warmage", "Blood Warmaster", "Blood Warpriest", "Blood Warrior", "Blood Weaponmaster", "Blood Weaver", "Blood Witch", "Blood Witch Doctor", "Bounty Hunter", "Brawler", "Butcher", "Cavalier", "Chameleon", "Champion", "Chaos Adept", "Chaos Agent", "Chaos Alchemist", "Chaos Arcanist", "Chaos Archer", "Chaos Archmage", "Chaos Bard", "Chaos Battlemage", "Chaos Berserker", "Chaos Bishop", "Chaos Brawler", "Chaos Champion", "Chaos Cleric", "Chaos Conjurer", "Chaos Cyborg", "Chaos Disciple", "Chaos Druid", "Chaos Engineer", "Chaos Harbinger", "Chaos Hunter", "Chaos Illusionist", "Chaos Incarnate", "Chaos Knight", "Chaos Legionnaire", "Chaos Lord", "Chaos Mage", "Chaos Marine", "Chaos Mercenary", "Chaos Necromancer", "Chaos Ninja", "Chaos Paragon", "Chaos Pirate", "Chaos Prophet", "Chaos Ranger", "Chaos Ravager", "Chaos Rogue", "Chaos Runecaster", "Chaos Sentinel", "Chaos Skyguard", "Chaos Sniper", "Chaos Sorcerer", "Chaos Spellcaster", "Chaos Spy", "Chaos Spymaster", "Chaos Stalker", "Chaos Tempest", "Chaos Templar", "Chaos Thief", "Chaos Trickster", "Chaos Valkyrie", "Chaos Vampire", "Chaos Viking", "Chaos Warden", "Chaos Warlock", "Chaos Warlord", "Chaos Warmage", "Chaos Warmaster", "Chaos Warrior", "Chaos Weaver", "Chaos Witch Doctor", "Chaosbinder", "Cleric", "Conjurer", "Corrupted Adept", "Corrupted Alchemist", "Corrupted Archmage", "Corrupted Battlemage", "Corrupted Champion", "Corrupted Cleric", "Corrupted Disciple", "Corrupted Druid", "Corrupted Guardian", "Corrupted Healer", "Corrupted Hunter", "Corrupted Infiltrator", "Corrupted Inquisitor", "Corrupted Knight", "Corrupted Legionnaire", "Corrupted Lord", "Corrupted Mage", "Corrupted Magehunter", "Corrupted Master", "Corrupted Medic", "Corrupted Mercenary", "Corrupted Monk", "Corrupted Mystic", "Corrupted Necromancer", "Corrupted Ninja", "Corrupted Oracle", "Corrupted Paladin", "Corrupted Paragon", "Corrupted Pirate", "Corrupted Priest", "Corrupted Prophet", "Corrupted Ranger", "Corrupted Runecaster", "Corrupted Sage", "Corrupted Samurai", "Corrupted Scavenger", "Corrupted Scout", "Corrupted Seer", "Corrupted Sentinel", "Corrupted Shaman", "Corrupted Siren", "Corrupted Skyguard", "Corrupted Skymage", "Corrupted Sniper", "Corrupted Sorcerer", "Corrupted Soulcaster", "Corrupted Spellcaster", "Corrupted Spelldancer", "Corrupted Spellsword", "Corrupted Spellthief", "Corrupted Spy", "Corrupted Spymaster", "Corrupted Swashbuckler", "Corrupted Tempest", "Corrupted Templar", "Corrupted Thief", "Corrupted Totemist", "Corrupted Trapsmith", "Corrupted Trickster", "Corrupted Valkyrie", "Corrupted Vampire", "Corrupted Viking", "Corrupted Warden", "Corrupted Warlock", "Corrupted Warlord", "Corrupted Warmage", "Corrupted Warmaster", "Corrupted Warpriest", "Corrupted Warrior", "Corrupted Weaponmaster", "Corrupted Weaver", "Corrupted Witch", "Corrupted Witch Doctor", "Corruption Battlemage", "Corsair", "Crusader", "Cyborg", "Dancer", "Dark Knight", "Death Champion", "Death Cleric", "Death Incarnate", "Death Knight", "Death Lord", "Death Mage", "Death Paragon", "Death Sentinel", "Death Summoner", "Death Tempest", "Death Warden", "Death Warlock", "Death Warrior", "Death Weaver", "Death Witch", "Demon Archer", "Demon Conjurer", "Demon Dancer", "Demon Disciple", "Demon Hunter", "Demon Incarnate", "Demon Knight", "Demon Legionnaire", "Demon Lord", "Demon Mage", "Demon Master", "Demon Mercenary", "Demon Paragon", "Demon Ranger", "Demon Ravager", "Demon Rogue", "Demon Scavenger", "Demon Scout", "Demon Sentinel", "Demon Skyguard", "Demon Skymage", "Demon Slayer", "Demon Sniper", "Demon Sorcerer", "Demon Soulcaster", "Demon Spellcaster", "Demon Spelldancer", "Demon Spy", "Demon Spymaster", "Demon Stalker", "Demon Summoner", "Demon Tempest", "Demon Thief", "Demon Totemist", "Demon Trapsmith", "Demon Trickster", "Demon Valkyrie", "Demon Vampire", "Demon Warden", "Demon Warlock", "Demon Warlord", "Demon Warmage", "Demon Warmaster", "Demon Warrior", "Demon Weaponmaster", "Demon Weaver", "Demon Witch", "Demon Witch Doctor", "Demonbinder", "Demonic Agent", "Demonic Alchemist", "Demonic Archer", "Demonic Battlemage", "Demonic Berserker", "Demonic Brawler", "Demonic Champion", "Demonic Crusader", "Demonic Dancer", "Demonic Disciple", "Demonic Enchanter", "Demonic Engineer", "Demonic Harbinger", "Demonic Healer", "Demonic Hellreaver", "Demonic Hunter", "Demonic Infiltrator", "Demonic Inquisitor", "Demonic Knight", "Demonic Legionnaire", "Demonic Lord", "Demonic Mage", "Demonic Magehunter", "Demonic Marauder", "Demonic Master", "Demonic Mercenary", "Demonic Necromancer", "Demonic Paragon", "Demonic Prophet", "Demonic Ranger", "Demonic Ravager", "Demonic Rogue", "Demonic Runecaster", "Demonic Samurai", "Demonic Scavenger", "Demonic Scout", "Demonic Sentinel", "Demonic Shaman", "Demonic Siren", "Demonic Skyguard", "Demonic Skymage", "Demonic Sniper", "Demonic Sorcerer", "Demonic Soulcaster", "Demonic Spellcaster", "Demonic Spelldancer", "Demonic Spellsword", "Demonic Spellthief", "Demonic Spy", "Demonic Spymaster", "Demonic Stalker", "Demonic Summoner", "Demonic Tempest", "Demonic Thief", "Demonic Totemist", "Demonic Trapsmith", "Demonic Trickster", "Demonic Valkyrie", "Demonic Vampire", "Demonic Warden", "Demonic Warlock", "Demonic Warlord", "Demonic Warmage", "Demonic Warmaster", "Demonic Warrior", "Demonic Weaponmaster", "Demonic Weaver", "Demonic Witch", "Demonic Witch Doctor", "Demonologist", "Diabolist", "Disciple", "Doomcaster", "Doomlord", "Dragon Archer", "Dragon Archmage", "Dragon Battlemage", "Dragon Berserker", "Dragon Bishop", "Dragon Champion", "Dragon Cleric", "Dragon Crusader", "Dragon Dancer", "Dragon Disciple", "Dragon Guardian", "Dragon Hunter", "Dragon Knight", "Dragon Lord", "Dragon Mage", "Dragon Marauder", "Dragon Master", "Dragon Monk", "Dragon Mystic", "Dragon Necromancer", "Dragon Ninja", "Dragon Oracle", "Dragon Paragon", "Dragon Priest", "Dragon Prophet", "Dragon Ranger", "Dragon Rider", "Dragon Rogue", "Dragon Sage", "Dragon Samurai", "Dragon Scout", "Dragon Seer", "Dragon Sentinel", "Dragon Shaman", "Dragon Siren", "Dragon Skyguard", "Dragon Skymage", "Dragon Slayer", "Dragon Sniper", "Dragon Sorcerer", "Dragon Soulcaster", "Dragon Spelldancer", "Dragon Spy", "Dragon Spymaster", "Dragon Summoner", "Dragon Swashbuckler", "Dragon Tempest", "Dragon Templar", "Dragon Valkyrie", "Dragon Vampire", "Dragon Viking", "Dragon Warden", "Dragon Warlock", "Dragon Warmage", "Dragon Warpriest", "Dragon Warrior", "Dragon Weaver", "Dragon Witch", "Dragonbinder", "Dragonfire Adept", "Dread Pirate", "Dread Prophet", "Dread Ranger", "Dread Ravager", "Dread Rogue", "Dread Runecaster", "Dread Samurai", "Dread Sentinel", "Dread Shaman", "Dread Siren", "Dread Skyguard", "Dread Skymage", "Dread Sniper", "Dread Sorcerer", "Dread Soulcaster", "Dread Spellcaster", "Dread Spy", "Dread Spymaster", "Dread Stalker", "Dread Tempest", "Dread Thief", "Dread Totemist", "Dread Trickster", "Dread Valkyrie", "Dread Vampire", "Dread Viking", "Dread Warden", "Dread Warlock", "Dread Warlord", "Dread Warmage", "Dread Warmaster", "Dread Warrior", "Dread Weaponmaster", "Dread Weaver", "Dread Witch", "Dread Witch Doctor", "Druid", "Elemental Adept", "Elemental Agent", "Elemental Alchemist", "Elemental Arcanist", "Elemental Archer", "Elemental Archmage", "Elemental Battlemage", "Elemental Champion", "Elemental Cleric", "Elemental Conjurer", "Elemental Disciple", "Elemental Druid", "Elemental Enchanter", "Elemental Engineer", "Elemental Healer", "Elemental Hellreaver", "Elemental Knight", "Elemental Lord", "Elemental Mage", "Elemental Master", "Elemental Medic", "Elemental Mercenary", "Elemental Monk", "Elemental Mystic", "Elemental Necromancer", "Elemental Ninja", "Elemental Oracle", "Elemental Paragon", "Elemental Pirate", "Elemental Priest", "Elemental Prophet", "Elemental Ranger", "Elemental Ravager", "Elemental Runecaster", "Elemental Sage", "Elemental Samurai", "Elemental Scout", "Elemental Seer", "Elemental Sentinel", "Elemental Shaman", "Elemental Skyguard", "Elemental Skymage", "Elemental Sniper", "Elemental Sorcerer", "Elemental Soulcaster", "Elemental Spellcaster", "Elemental Spelldancer", "Elemental Spellsword", "Elemental Spellthief", "Elemental Spy", "Elemental Spymaster", "Elemental Stalker", "Elemental Summoner", "Elemental Swashbuckler", "Elemental Tempest", "Elemental Templar", "Elemental Thief", "Elemental Totemist", "Elemental Trapsmith", "Elemental Trickster", "Elemental Viking", "Elemental Warden", "Elemental Warlock", "Elemental Warlord", "Elemental Warmage", "Elemental Warmaster", "Elemental Warpriest", "Elemental Warrior", "Elemental Weaponmaster", "Elemental Weaver", "Elemental Witch", "Elemental Witch Doctor", "Elementalist", "Emissary", "Enchanter", "Engineer", "Fallen Adept", "Fallen Archmage", "Fallen Battlemage", "Fallen Bishop", "Fallen Disciple", "Fallen Guardian", "Fallen Hellreaver", "Fallen Knight", "Fallen Mage", "Fallen Magehunter", "Fallen Master", "Fallen Medic", "Fallen Mercenary", "Fallen Monk", "Fallen Mystic", "Fallen Necromancer", "Fallen Ninja", "Fallen Oracle", "Fallen Paladin", "Fallen Paragon", "Fallen Pirate", "Fallen Priest", "Fallen Prophet", "Fallen Ranger", "Fallen Runecaster", "Fallen Sage", "Fallen Samurai", "Fallen Scavenger", "Fallen Scout", "Fallen Seer", "Fallen Sentinel", "Fallen Shaman", "Fallen Siren", "Fallen Skyguard", "Fallen Skymage", "Fallen Sniper", "Fallen Sorcerer", "Fallen Soulcaster", "Fallen Spellcaster", "Fallen Spelldancer", "Fallen Spellsword", "Fallen Spy", "Fallen Spymaster", "Fallen Swashbuckler", "Fallen Tempest", "Fallen Templar", "Fallen Thief", "Fallen Totemist", "Fallen Trapsmith", "Fallen Trickster", "Fallen Valkyrie", "Fallen Vampire", "Fallen Viking", "Fallen Warden", "Fallen Warlock", "Fallen Warlord", "Fallen Warmage", "Fallen Warmaster", "Fallen Warpriest", "Fallen Warrior", "Fallen Weaponmaster", "Fallen Weaver", "Fallen Witch", "Fallen Witch Doctor", "Frost Adept", "Frost Agent", "Frost Archer", "Frost Archmage", "Frost Battlemage", "Frost Champion", "Frost Conjurer", "Frost Cyborg", "Frost Disciple", "Frost Enchanter", "Frost Guardian", "Frost Knight", "Frost Legionnaire", "Frost Lord", "Frost Mage", "Frost Magehunter", "Frost Marauder", "Frost Master", "Frost Medic", "Frost Mercenary", "Frost Monk", "Frost Paragon", "Frost Ranger", "Frost Ravager", "Frost Rogue", "Frost Sage", "Frost Sentinel", "Frost Sorcerer", "Frost Spellcaster", "Frost Spelldancer", "Frost Tempest", "Frost Valkyrie", "Frost Viking", "Frost Warlord", "Frost Warmage", "Frost Weaver", "Frostbinder", "Geomancer", "Ghostwalker", "Gladiator", "Guardian", "Gunslinger", "Harbinger", "Healer", "Hellfire Adept", "Hellfire Agent", "Hellfire Alchemist", "Hellreaver", "Hexblade", "Highwayman", "Hunter", "Illusion Adept", "Illusion Agent", "Illusion Alchemist", "Illusion Archmage", "Illusion Bard", "Illusion Battlemage", "Illusion Conjurer", "Illusion Mage", "Illusion Master", "Illusion Paragon", "Illusion Rogue", "Illusion Skymage", "Illusion Sorcerer", "Illusion Spellcaster", "Illusion Spelldancer", "Illusion Tempest", "Illusion Trapsmith", "Illusion Warmage", "Illusion Warrior", "Illusion Weaver", "Illusion Witch", "Illusionist", "Infiltrator", "Inquisitor", "Jester", "Knight", "Legionnaire", "Lord", "Loremaster", "Mage", "Magehunter", "Maiden", "Marauder", "Marine", "Marshal", "Master", "Mauler", "Medic", "Mercenary", "Monk", "Moonlord", "Moonmaster", "Mystic", "Mystic Knight", "Navigator", "Necromancer", "Necromantic Dancer", "Necromantic Disciple", "Necromantic Enchanter", "Necromantic Engineer", "Necromantic Harbinger", "Necromantic Paragon", "Necromantic Prophet", "Necromantic Sentinel", "Necromantic Skymage", "Necromantic Sorcerer", "Necromantic Soulcaster", "Necromantic Spellcaster", "Necromantic Spelldancer", "Necromantic Spellsword", "Necromantic Stalker", "Necromantic Tempest", "Necromantic Valkyrie", "Necromantic Vampire", "Necromantic Warden", "Necromantic Warlock", "Necromantic Warlord", "Necromantic Warmage", "Necromantic Warmaster", "Necromantic Warrior", "Necromantic Weaver", "Necromantic Witch", "Necromantic Witch Doctor", "Ninja", "Oracle", "Outrider", "Paladin", "Paragon", "Pirate", "Priest", "Prophet", "Puppet Master", "Pyro Adept", "Pyro Agent", "Pyro Arcanist", "Pyro Archer", "Pyro Archmage", "Pyro Battlemage", "Pyro Berserker", "Pyro Brawler", "Pyro Champion", "Pyro Cleric", "Pyro Conjurer", "Pyro Crusader", "Pyro Disciple", "Pyro Engineer", "Pyro Guardian", "Pyro Infiltrator", "Pyro Knight", "Pyro Legionnaire", "Pyro Lord", "Pyro Mage", "Pyro Master", "Pyro Mercenary", "Pyro Mystic", "Pyro Necromancer", "Pyro Ninja", "Pyro Paragon", "Pyro Ranger", "Pyro Ravager", "Pyro Rogue", "Pyro Sentinel", "Pyro Skymage", "Pyro Sorcerer", "Pyro Spellcaster", "Pyro Spelldancer", "Pyro Spellthief", "Pyro Spy", "Pyro Spymaster", "Pyro Stalker", "Pyro Tempest", "Pyro Templar", "Pyro Totemist", "Pyro Trapsmith", "Pyro Trickster", "Pyro Warden", "Pyro Warlock", "Pyro Warlord", "Pyro Warmage", "Pyro Warmaster", "Pyro Warrior", "Pyro Weaponmaster", "Pyro Weaver", "Pyro Witch", "Pyro Witch Doctor", "Ranger", "Ravager", "Rogue", "Runecaster", "Sage", "Samurai", "Scavenger", "Scout", "Seer", "Sentinel", "Shadow Adept", "Shadow Agent", "Shadow Alchemist", "Shadow Arcanist", "Shadow Archer", "Shadow Archmage", "Shadow Bard", "Shadow Battlemage", "Shadow Bishop", "Shadow Brawler", "Shadow Champion", "Shadow Cleric", "Shadow Conjurer", "Shadow Corsair", "Shadow Crusader", "Shadow Cyborg", "Shadow Dancer", "Shadow Disciple", "Shadow Druid", "Shadow Enchanter", "Shadow Engineer", "Shadow Guardian", "Shadow Harbinger", "Shadow Healer", "Shadow Hellreaver", "Shadow Hunter", "Shadow Illusionist", "Shadow Incarnate", "Shadow Infiltrator", "Shadow Inquisitor", "Shadow Knight", "Shadow Legionnaire", "Shadow Lord", "Shadow Mage", "Shadow Magehunter", "Shadow Marauder", "Shadow Master", "Shadow Mercenary", "Shadow Mystic", "Shadow Necromancer", "Shadow Ninja", "Shadow Oracle", "Shadow Paragon", "Shadow Priest", "Shadow Prophet", "Shadow Ranger", "Shadow Ravager", "Shadow Rogue", "Shadow Runecaster", "Shadow Samurai", "Shadow Scavenger", "Shadow Scout", "Shadow Seer", "Shadow Sentinel", "Shadow Shaman", "Shadow Siren", "Shadow Skyguard", "Shadow Skymage", "Shadow Slayer", "Shadow Sniper", "Shadow Sorcerer", "Shadow Soulcaster", "Shadow Spellcaster", "Shadow Spelldancer", "Shadow Spellthief", "Shadow Spy", "Shadow Spymaster", "Shadow Stalker", "Shadow Summoner", "Shadow Swashbuckler", "Shadow Tempest", "Shadow Templar", "Shadow Thief", "Shadow Totemist", "Shadow Trapsmith", "Shadow Trickster", "Shadow Valkyrie", "Shadow Vampire", "Shadow Viking", "Shadow Warden", "Shadow Warlock", "Shadow Warlord", "Shadow Warmage", "Shadow Warmaster", "Shadow Warpriest", "Shadow Warrior", "Shadow Weaponmaster", "Shadow Weaver", "Shadow Witch", "Shadowbinder", "Shadowblade", "Shadowcraft Adept", "Shadowcraft Archer", "Shadowcraft Disciple", "Shadowcraft Ranger", "Shadowcraft Sentinel", "Shadowcraft Sorcerer", "Shadowcraft Tempest", "Shadowcraft Weaver", "Shadowdancer", "Shadowsmith", "Shadowstalker", "Shaman", "Siren", "Skyguard", "Skymage", "Slayer", "Sniper", "Sorcerer", "Soulcaster", "Soulguard", "Soulknife", "Spellcaster", "Spelldancer", "Spellsinger", "Spellsword", "Spellthief", "Spiritwalker", "Spy", "Spymaster", "Stalker", "Stormcaster", "Stormlord", "Stormsinger", "Summoner", "Sunlord", "Sunmaster", "Swashbuckler", "Tactician", "Tempest", "Templar", "Thief", "Totemist", "Transmuter", "Trapsmith", "Trickster", "Valkyrie", "Vampire", "Viking", "Warden", "Warlock", "Warlord", "Warmage", "Warmaster", "Warpriest", "Warrior", "Weaponmaster", "Weaver", "Windwalker", "Witch", "Witch Doctor"];


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