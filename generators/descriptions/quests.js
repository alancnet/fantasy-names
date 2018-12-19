var generatorOf = require('../../generator-of');

module.exports = generatorOf(function generator$descriptions$quests(type) {
	var tp = type;
	var nm1 = ["You there", "Excuse me", "Forgive me", "Pardon me", "Please", "Please excuse me", "'Scuse me"];
	var nm2 = ["adventurer", "hero", "traveler", "champion"];
	var nm3 = ["Hear me out for a minute", "Help out a person in need", "I need a favor of you", "I need a helping hand", "I need you to intervene", "I need you to save us", "I need your help", "I'm glad you're here", "I'm in need of your assistance", "I'm in need of your service", "I'm relieved to see you", "Please, help me out", "Please, lend me your hand", "Spare me some of your time", "Would you lend me your aid", "You're a sight for sore eyes", "You've come at the right time", "You've got to help me", "Your assistance is required", "Your skills are required"];
	var nm4 = ["As you can see, my village has come under heavy attack, so we need you to stop those", "The outer farms have come under attack, I'm sure we'll be next to receive a beating by those brutes, but you might be able to stop those", "It's just a matter of time before we're surrounded. Scout reports have come in and tell of about a dozen hunting parties. We need you to deal with a few of them, curse those", "Trouble is on the horizon, in a matter of days we'll be attacked and we might not be strong enough to stop it. Hero, we need your help. Go out and disrupt their activities, slow down those", "A storm is coming and it's no ordinary storm. A war is upon is, but we're not ready yet. This is where you come into our plan. We need you to take a small party and sabotage the incoming army, that'll give us enough time to deal with those", "We've been under constant harassment, our food has been stolen along with our gold and we're powerless to do anything to stop them. Hero, we need you to get rid of those", "I've been ordered to deal with a recent threat to our lands, but I'm afraid the reports were wrong. The reports mentioned only a few, but there are about a dozen of them. Hero, I need you to kill those", "Times are dire, very dire indeed. Our town has been surrounded by small groups of savages and it's just a matter of time before they attack. Fortunately they haven't formed a big group yet, so they should be easier to deal with. Hero, please get rid of those", "We're winning the war, but it has come at a great cost. We're low on capable fighters to deal with the last remnants of our enemies, but we must rid our lands of all enemies. Hero, go out there and deal with those", "The time to strike is now, but we're low on manpower, so I need you to join us. If we don't strike now, we'll never get rid of them. Join us and fight those", "They're burning down everything! Everything.. everything is turning to ashes.. My family.. they even... Hero, I need you to avenge my family and get rid of those", "I don't think I can control my fury any longer, hero. My wife, they ki.. they kil.. .. Hero, please, you've got to help me. Retribution and vengeance are necessary, please unleash it upon those", "Eye for an eye! Blood for blood! If they wish to play dirty, so will we. Hero, you've seen what they've done to our lands, it's time to unleash our vengeance upon those", "We're on the offensive at last, but the battle has not been won just yet. To win we will have to go all out and we can use every fighter we can get. Hero, join us and help us kill those", "The battle is almost over, but we can't loosen up just yet. The enemy is retreating, but we cannot let them regroup. Go out and deal with all", "We did it, we won the battle! Unfortunately not every enemy is so keen on giving in just yet. Make sure they do, get rid of those", "They've burned down half our village with wicked sorcery. Hero, I don't know what foul magic they wield, but we cannot let them go unpunished. Please unleash justice upon those", "Why won't they just leave us alone? We've got nothing left to give, yet they keep coming back for more. Hero, please, I beg of you, get rid of those", "They've got my family! They said if I didn't pay their ransom they'd.. they would.. Hero, I have no money, you're my only help. Please save my family from the clutches of those", "Everything is gone! Everything! How dare they steal from me? How dare they! Filthy miscreants. Hero, please retrieve my goods from those outlaws. They won't give them up without a fight, which is fine by me. Kill those", "I've been betrayed, betrayed by my own foolishness. I knew I shouldn't have hired mercenaries, instead of fighting the enemy they joined them. Hero, teach them a lesson in honor and make sure they remember it. Curse those", "Hero, we have no time to spare. A hunting party is on its way to kill us. Please, I need your help. Lend us your sword and deal with those", "Their numbers are growing at an alarming rate, it's only a matter of time before they'll strike. Hero, I need you to go out there and disrupt their activities, kill them, destroy their camps, do whatever it takes to stop those", "Vile creatures have crept up in our lands. Reports of attacks are trickling in slowly, but we cannot afford to sit back idly. This could get out of control very quickly. Hero, seek them out and deal with those", "Is there no mercy in this world? First they destroyed our crops, then they killed our livestock and yet they still want more. I'm afraid our lives might be next in line. Hero, please, go out and deal with those", "Time is of the essence. A hunting party raided a nearby village not too long ago and they're probably hiding in the nearby hills. We need to deal with them now before they either attack again or grow in force. It's time to bring justice to those", "I'm surrounded by cowards. We were robbed by a group of vermin, they took all they could and killed most of those who tried to stop them. I did what I could, but if everybody helped we would've overpowered them easily. Hero, please retrieve our goods and get rid of those", "Seven years it has been, seven years since we secured our lands and we could live in peace. But now they're back and they're stronger than ever. Hero, we'll need your help to get rid of those", "I'm sick and tired of living in fear. Fear of being robbed, fear of being killed and fear of any harm being done to those I love by those vicious lowlifes. Hero, please get rid of those", "Our crops have failed and to make matters worse, we're constantly harassed, robbed and sometimes even killed by those pesky brutes. Hero, would you be so kind as to get rid of those", "My generosity has been taken advantage of. The other day I took in travelers in need of shelter, they repaid me by robbing me. I called for the guards and they came in time, but unfortunately they were no match. Please, hero, retrieve my goods and get rid of those", "Justice demands retribution! In this case it requires death! Hero, a group of filthy miscreants killed some of our farmers without mercy. We will not let them go unpunished. Hero, be so kind and deal with those", "They came in the night and took the life of some of the villagers. Friends, family, husbands and wives, gone in a flash. We know who did it, but we lack the power to avenge our fallen. Please, hero, be our vengeance and unleash our fury upon those", "I'm afraid dangerous criminals have escaped the prison and they didn't leave without taking some lives. Hero, we need your aid to bring these criminals to justice and they've just signed their death warrant. Find them and kill those", "We have lived in peace with the neighboring tribe for years, but all that has changed. They attacked us, claiming they own our lands and we should leave or they would make us leave. Hero, this cannot stand, we've lost good people, please bring justice to those", "We've had a feud with a neighboring village for years and I will not deny both sides share some blame, but they have gone too far now. Last week they came in the night, killed some of our most skilled people and left. Hero, we need your help to bring justice to those", "As you can see these lands have been corrupted. For the longest time we didn't know what caused it, but now we do. It's the vile magic used by those wicked beings at the foot of the mountains. Hero, please go there and get rid of them before they taint everything, get rid of those", "I know your efforts were a big driving force in pushing back the enemy, but I'm afraid I must ask even more of you now. It's true, the enemy is on the run, but we'd be fools to let them run and regroup. Hero, I need you to do the dirty work. Seek them out and get rid of those", "Things have been too quiet lately, far too quiet. Our scouts report many small armies have set up camp on the borders of our lands, war is surely upon us. We need you to disrupt their activities, slow them down while we gather more forces. Do anything you can to halt those", "There was once a noble order of druids who lived in the nearby forest. They still live there, but they are no longer noble, far from it. Their rituals seem more demonic than anything else and we cannot let them go on. Hero, please get rid of those", "Nature is unsettled and for good reason too. Some type of demonic force has crept up in these lands, small at first, but they grow stronger every day. It's only a matter of time before we can no longer stop them. Please, hero, seek out their source, destroy it and get rid of those", "Reports indicate an evil presence in our lands. We're not sure what or who they are yet, but we suspect they were our own. Traitors, cowards and lowlifes, they've found some kind of new source of power and plan to use it against us. Hero, seek them out and destroy those", "We've been under constant attack and none of our efforts to retaliate have paid of, they see us coming from afar, so it's time for new tactics. Hero, I need you and a small group of capable fighters to infiltrate their camp during the cover of the night. Destroy those", "We know enemy scouts have managed to infiltrate our camp, they have stolen essential information which could compromise everything we've worked for. I need you to infiltrate their camp and tamper with the documents. Destroy the originals and get rid of the scouts, they might know too much. We'll show those", "Fighting those filthy vermin who dare challenge our empire is both a great honor and a pleasure. However, it seems they have grown in strength lately thanks to some new siege weapon. Hero, seek out that weapon and destroy it. Kill any who stand in your way, we'll teach a lesson or two to those", "We managed to push back the enemy and all who remain are hiding in the temples. We need you to infiltrate the temples and get rid of their barricades so our troops can move in. Kill any who stand in your way. There will be no place to hide for those", "I'm afraid some of our scouts have been captured. We never leave one of our own behind, so we must free them, but sending in a small army will be the death of them for sure. Those monsters will kill our scouts once they see us, they take no risks. So we need you to go on your own, infiltrate their camp and save our troops. Curse those", "A recent outbreak of some weird disease has caused the townsfolk to go insane. Unfortunately we have no cure and their disease will lead to a painful death. Hero, I know this is a terrible task to ask of you, but we need you to end their suffering. Know that we found who's responsible, we'll get those", "We've begun our assault on the citadel, but we need a few elite fighters to flank the enemy, infiltrate their armies and disable those siege engines. They've proven to be far too deadly. It shouldn't be hard to disguise yourself as one of them in the chaos of battle, but you will be in real danger once you destroy those engines. But I know you can handle those", "I need you to keep quiet about this, but reports show an increase of enemy forces in our lands. We don't know how accurate these reports are, but I need you to find those forces and disrupt their activities. With your help we'll get rid of those"];
	var nm5 = ["abominable", "beastly", "cruel", "disgusting", "filthy", "heinous", "hideous", "horrible", "miserable", "nasty", "stinking", "terrible", "treacherous", "ugly", "vicious", "vile", "vulgar", "wicked", "worthless", "wretched"];
	var nm6 = ["aliens", "barbarians", "beings", "brutes", "creatures", "dwarves", "elves", "fiends", "gnomes", "goblins", "humans", "lowlives", "miscreants", "monsters", "orcs", "trolls", "undead", "vermin"];
	var nm7 = ["I'm in no state to fight, but I know you'll manage without me.", "Unfortunately I cannot join you, but I have faith in you, I know you'll succeed.", "I cannot join you, for I have other tasks to attend to, but I know you don't need me anyway.", "I wish I could join you, but alas I cannot. Know that I've put all my faith in you, you will succeed. I know it.", "I had hoped I could you join, but unfortunately I cannot. But I doubt you'd need my help anyway.", "I won't be able to join you, but I have full confidence in you. I know you'll succeed.", "My duties prevent me from going with you, but I doubt I'd be needed anyway.", "I'll join you, if you'll have me. It'll be my pleasure.", "I'd love to join you, but it'll be up to you. I don't want to get in the way.", "I offer you my assistance, but it's up to you if you want me to join you or not.", "I'll be coming along with you, at least, as long as you don't mind.", "If you don't mind, I'd like to come along. It's your choice though.", "If you think you'll need any help, I'm willing to come along.", "It'll be dangerous, but I'm willing to come along if you need me to."];
	var nm8 = ["Please, take care of those", "We're counting on you to deal with those", "You are fully capable to handle those", "I'm sure you're capable to deal with those", "I doubt you'll have problems with the", "I don't think you'll have much troubles dealing with those", "Hero, act swiftly when dealing with the", "Be strong and swift when fighting the", "They'll be no match for you, those", "Be careful hero, don't underestimate those", "Tread carefully hero, only a fool would underestimate the", "Be warry hero, they're stronger than they look those"];
	var nm9 = ["You don't have to kill them all, just make sure they'll never return.", "There's no need to kill all of them, just put the fear in them.", "I'm not asking you to kill all of them, just make sure you do what I ask of you.", "Killing them all won't be needed of course, I'm sure your skills will do enough damage to them.", "Killing all of them won't be necessary, someone like you will be able to do plenty of damage to them.", "If you can, kill as many of them as possible. We want to live in peace and safety.", "Kill as many of them as you'd like, just make sure you don't forget your main goal.", "You can kill as many of them as you wish, destroy all of them if you want, curse those lowlives.", "Try to take down as many of them as possible, the less of a threat they pose the better.", "You can take out as many of them as you like, the less of those lowlives there are in this world, the better.", "Try to kill all those who stand in your way, we don't need their filth in our lands.", "Make sure they regret the day they ever set foot in our lives. ", "Destroy them in any way you can, make sure they'll regret attacking us.", "Deal with any who stand in your path, your success is vital, hero.", "Let none of them stand in your way, losing is not an option."];
	var nm10 = ["I have little possessions left, but I'll reward you with what I have.", "I'm afraid there's not much left I can reward you with, but I think I can still make it worth your troubles.", "Unfortunately there's not much I have to reward you with, but I think there's a few bits and pieces left.", "It pains me to say I won't be able to reward you with a lot, but I'll do my best to make it worth your while.", "I had hoped I'd be able to reward you handsomely, but unfortunately I don't have a lot left.", "I'll be able to reward you decently, it's nothing fancy, but it'll be worth your while.", "I wish I had something better to reward you with, but what I have ain't too bad either.", "There's no big reward at the end of the line, but I think my reward will be more than fair.", "I hope you're not looking for a big reward, but we'll still be able to reward you with somethind decent.", "I wish I could pay you far more than I can, but what I can pay isn't less than what's fair either.", "Should you succeed I will be able to repay you handsomely, it'll be worth your troubles.", "I will be able to reward you greatly, should you return successfully.", "I'm happy to say I'll be able to reward you handsomely for your troubles.", "Fortunately I have enough left to reward you greatly for the efforts you have to go through.", "I cannot thank you enough for your help, I'll make sure to reward you greatly once you return."];
	var nm11 = ["Good luck hero, we're counting on you.", "Justice will prevail hero and today you are our justice.", "Please succeed hero, we believe in you.", "Best of luck hero, although I doubt you'd need it.", "I know you'll succeed, but do be careful.", "Make haste hero, but tread carefully.", "I'm looking forward to your return, hero. Good luck.", "I hope you return swiftly hero, we believe in you.", "Best of luck hero, make sure you return in one piece.", "Good luck hero, not that you need it, but a little extra won't hurt.", "Blessed journey champion, may you return swiftly and in one piece.", "For justice and honor!", "Be swift and strike true hero, we're counting on you.", "Now hurry, champion, there's no time to waste. ", "You best get going, there's no time to waste. We're counting on you.", "Safe journey, hero. We believe in you."];

	var nm12 = ["Hear me out for a minute", "Help out a person in need", "I could really use a helping hand", "I could really use your assistance", "I could use your help", "I hope you could help me out", "I need a favor of you", "I need a helping hand", "I need your help", "I'm glad you're here", "I'm in need of your assistance", "I'm in need of your service", "I'm relieved to see you", "Please, help me out", "Please, lend me your hand", "Spare me some of your time", "Would you lend me your aid", "You're a sight for sore eyes", "You've come at the right time", "You've got to help me", "Your help would be much apprecited"];
	var nm13 = ["A disease is plaguing the critters of our forest, it's horrible. Fortunately I think I can find a cure, but I will need some of those critters to study them and try out the cure. Hero, take these traps, set them out in the forest and wait for them to trap a creature. Bring me back about 6 critters, it doesn't matter what kind. Just be careful of other creatures which might get stuck in the traps as well, they might not be as friendly.", "A recent storm has done quite a bit of damage to my ship and I'm supposed to set sail within the next few days. My ship is far from sailable, there's holes all over it. Would you mind helping me by collecting the materials I need to repair the ship? I will need wooden planks, nails and a lot of tar.", "A storm has destroyed part of our museum, a terrible tragedy. All of those relics, covered in rubble once again or worse, they might be destroyed. We're still working on clearing the rubble, but it's taking too long, those relics have to be recovered before they destroyed forever. Please, hero, find as many relics as you can, but be careful! There's a lot of loose rubble, don't get caught by surprise.", "Everything is collapsing on us, or at least it will if we don't something about it right now! But I only have 2 hands, I can't do everything by myself. We need more power to stabilize the engines, more oil to grease the cogs and, well, I could use a drink right about now. Fetch me what I need so I can prevent this place from crumbling down upon us.", "I can't stand those pesky kids, they're always trying to mess with my artistic flow. Thanks to them I lost 8 pages of my art, scattered in the wind, never to be seen again. Would you mind looking for them? They blew south, but I'm afraid to go look for them, who knows what those kids will do when I leave.", "I craft jewelry for a living, but I'm running out of jewels. My old supplier hasn't returned in months and I have no idea what happened to him, but I really need more gems. I heard there's quite a lot of them in the abandoned mines to the North, but I cannot leave my shop, what if a customer comes along? Would you be so kind and gather me some gems, I doubt that abandoned mine is dangerous, it's just a mine.", "I have to harvest the apple trees in my fields, but I'm afraid I hurt my back and I'm unable to work. If you could do some of the harvesting it would be much appreciated.", "I love bugs, I love them so much I collect them and I must collect them all, I must! There's a bug I don't have in my collection yet, it's the obsidian beetle. It lives high up in the trees. Unfortunately I'm too tiny to climb those trees. I need you to catch those amazing creatures for me, I only need 4 of them, no wait, I'll need 8. Soon my bug army will be complete!", "I love the feeling of moss beneath my feet, it's probably the greatest feeling ever. Now, I've come up with a plan which will cover the floors of my house in moss, so I can always experience the greatest feeling ever. The best moss grows in darkwood forest to the South, but I'm too scared to go in there and get the moss myself. It's so dark and creepy in there. Could you gather the moss for me?", "I need more antlers, a whole lot more. You see, I use antlers in all of my decorating and I just build a new addition to my house, so I will have to do a whole lot of decorating. There are plenty of deer in the forests around us, please gather their antlers for me. The deer meat will fill up my stocks nicely as well, wouldn't want to waste anything now, would we.", "I need more coconuts, a whole lot more. They're amazing, I don't think there's anything you can't use a coconut for. You can eat their flesh, drink their juice, use them for lotions, use them for medicines, they can enhance beauty and much more. Please, gather me as much coconuts as you can find, I think I just came up with an amazing business idea.", "I need to do more research, a lot more research and for that I need my books. All of my books are neatly organized in my library, but my legs aren't what they used to be, I can no longer climb the ladders to reach the upper shelves. Please, would you be so kind and fetch me the books I need. My research is very important after all.", "I need you to deliver a message to our four leaders, this message could change the fate of our civilization. But remember hero, our leaders are proud, perhaps a little too proud. The order in which you'll deliver the message to them will affect their opinion of you and the way they think they're viewed by us, so choose wisely who you pick first and last.", "I need you to find me a snowflake, but it has to be a special snowflake! It'll be a gift for a very special person, so only a special snowflake will do. Take this special casing I've designed to catch the snowflake with, it'll make sure it's perfectly preserved. It snows a lot towards the top of the mountain, so it shouldn't be too difficult for you. But remember, it has to be a special snowflake!", "I think I'm lost. No, I know I'm lost. Nothing looks familiar here and I mean at all. Oh I should've never left our camp. I know our camp is near a lake and we came into the forest from the North, but I have no idea where North is, I have no idea where anything is. Hero, please, you've got to help me, help me find my way back to camp, I don't want to be in this forest anymore, I want to go home.", "I want to pull a prank on my sister and I have the best idea to do so. You see, she's scared of spiders, so I want to put some spiders in her bed. Hahaha, I can't wait to see her face when she discovers them. Anyway, I need you to collect some spiders for me. Put them in this jar, I don't want to have to touch them, they're cree.. I mean, they might get away if they're not in a jar.", "I'm afraid my horses have escaped, they now roam my fields and I've failed my attempts at getting them back. It's not safe for them out there, too many predators. Hero, could you please return them to me?", "I'm afraid my ship's crew is made up of a bunch of fools. They managed to drop a whole load of cannonballs into the waters below. I really need those balls back, would you mind diving down and gathering them for me? Don't worry, they're not that heavy, you won't drown. I think.", "I'm all out of eggs. I know this is a silly thing to ask of you, but I need you to go out and collect me more eggs. Not just any eggs though, I need eggs of the pigmy ostrich. They're the perfect size for what I have planned, it's going to be amazing.", "I'm preparing a feast for a celebration, but those worthless suppliers forgot to bring me sugar. Sugar! How can you have a feast without sugar? No sugar means no desserts. No cake, no pudding, nothing! Fortunately one of the nearby farmers grows sugar beet. Please be so kind and gather me some of those sugar beets, but make sure you check in with the farmer first.", "I'm running out of medical supplies, but I won't be able to gather more. The thing is, I'm afraid of bugs and other creepy crawlies. Unfortunately they create what I need. Spider web makes a great gauze and honey is a great disinfectant. What's even better is they're both natural and free! If only they weren't made by those creepy, tiny creatures. Please, gather honey and spider web for me so I can continue my job.", "I'm setting up a fireworks show for a celebration next week, but I feel like I need to add more to really make it a true spectacle. I have most of the materials, but what I really need is more gunpowder. Unfortunately the supplier in town won't sell me any more gunpowder, he says in my hands it would mean the end of this town. Psh, he has no faith in my, as if I'd make such a foolish mistake. Anyway, please buy me 3 more barrels of gunpowder, then the show will be truly amazing.", "I've been swamped with customers lately, which is great for business, but it's about time I improved their sleeping conditions. They deserve the best after all. I heard feathers of the cotton goose are incredibly soft, they would make a perfect stuffing for my pillows. Would you mind gathering my such feathers? Those geese live at the lake to the North.", "In the middle of the night our camp was attacked by a boar. That's right, attacked! It came in, trashed the place and ran off, but not without taking half the camp with it. All our stuff is scattered throughout the forest and that beast is still out there. Hero, please help us find our stuff so we can get out of here as soon as possible. I don't want to spend another minute near that monster.", "My beautiful pond has been ruined. Ruined! All my fish are gone, my poor, poor fish. I need you to catch me new ones. But don't catch me any old fish, they have to be the best looking fish you've ever seen. Oddly enough they tend to hang around the docks a lot. I wonder why. Maybe it's a safe haven or something. Anyway, who cares, I need those fish in my pond.", "My brother is such an idiot, he keeps pulling pranks on me and I'm sick and tired of it. It's time for payback and I know the perfect way to do it. My brother is scared of forest spirits, they're not real, but I'm going to make him believe they are. I've made this wooden mask, but I need some more items to make it really scary. Would you mind collect some for me? I need rainbow fowl feathers, some glimmerweed to make the eyes glow and a whole lot of seaweed.", "My daughter has fallen sick and she has to stay in bed for a few more days, but she really wants to go out and play. So I thought, why not bring the outside to her. Unfortunately I cannot leave her, she needs me to be here. Would you mind collecting some objects from outside? She really loves the beach and the forest, so a great big seashell and some colorful flowers are sure to cheer her up.", "My daughter lost her pet rabbit. Somehow it managed to escape. I'm sure it has be around here somewhere, but I cannot find it. Would you mind helping me look for it, it couldn't have gone far, it's probably just hiding in fear. Don't worry, it won't bit. I think.", "My family is coming over in 2 days and I want to make them my secret recipe pie, unfortunately I need a few more ingredients to make it. I need you to get me some flour, a couple of eggs, some spiderlegs, half a dozen beetle husks and a cup of sugar. Oh this cake is going to be amazing! You can have a piece if you'd like.", "My greatest invention yet is almost complete. Unfortunately I'm missing a few bits and I need you to collect them for me. I need about two handfuls of cogs, a bunch of wires and a couple of lightbulbs. Oh and there's a screw loose, so I'll need a new screw as well.", "My husband has fallen ill, he won't wake up no matter what I do. I believe we need to make him drink tea brewed from silverleaf, but they only grow higher up the mountain and I cannot leave my husband's side. Please, hero, gather a handful of silverleaf as quick as you can.", "My son has run from home in a fit of anger, but he still hasn't returned. He has been gone for 8 hours now. This is so unlike him, he's usually back within 1 or 2 hours. This is all my fault, I make a terrible parent. What if something happened to him? No, I mustn't think that. Hero, please bring back my boy, I beg you.", "Nature has gone wild, everything is overgrown and it doesn't seem to be stopping. Soon all of town will be part of those vicious vines. Hero, we need you to cut through those vines and clear the village enough to prevent it from being swallowed. Something must be giving these plants more power, see if you can find its source if you can.", "Oh I'm such a fool! I decided to play hide and seek with the neighborhood kids, but my eyes aren't what they used to be and those kids are too good at hiding. I can't find them anywhere. Please, help me find them, I don't want anything bad to happen to those munchkins.", "Our beautiful shrine has been ruined, I don't know who did it, but that's not important anyway. What's important right now is that we fix the shrine of the moon goddess and return it to its former beauty. I need you to go out and collect me some glowcap mushrooms, silverleaf willow branches and floating candles, I will gather the rest. Make haste, please.", "Our magic barrier has protected this town for ages and it will do so far ages to come, however, our town keeps growing and soon we'll have to build outside of the protection of our magic. So we need to extend the shield, with more magic! I need you to take these crystals and place them far outside of the barrier, far enough for us to expand for years to come. Say these words to activate them, then come back to me so I can fine synchronize all crystals. Be careful hero, who knows what's outside this barrier.", "Poachers have come into our forests and they're hunting all the animals in it. The forest is littered with all sorts of traps, the animals don't stand a chance, if we don't do anything there won't be any animals left at all. Hero, please go out there and destroy their traps, but be careful not to get caught in one yourself, it has happened to a few of us.", "The other day I caught a huge fish. It was enormous! And by enormous I mean it was the biggest fish I've ever seen, it was probably the biggest fish anybody has ever and will ever see. Unfortunately, after I managed to catch it, the fish got away. It took my fishing rod with it and I really need it back. I'd go and get it myself, but it's underwater and I'm pretty sure that fish has a vendetta against me now. Would you mind getting it for me?", "There is so much left to do, but so little time to do it in. I need to clean the stables, I need to sow the fields, feed my livestock, hunt for food and so much more. Please, could you help me with some of my tasks? I'm afraid my farm would collapse without your help.", "There's a magnificent old creature which roams our lands. It's an elephant, older than almost all of us, but unfortunately its age is taking its toll. The predators are no longer afraid to attack it, more and more scars show up on its skin each day. Normally we'd let nature run its course, but this elephant is special, it means a lot to us. Hero, could you please try to lead the elephant towards our town, we have a build a sanctuary for it, so it can live out its final days in peace.", "There's this girl I like and I mean really like. I want to impress her, but I don't know how. Do you have any ideas? I know she likes flowers, especially the ivory rose, but it's rare and I haven't managed to find a single one yet. They're supposed to grow in the swamp nearby, but I'm beginning to think they're just a myth. Could you give the marsh one last look? It would mean the world to me!", "This old treasure map has been handed down from generation to generation and now it is mine. I decided to figure out where it leads to, but I'm a little lost now. The treasure should be around here, but I can't figure out the last part of this map. Mind helping me out with this?", "We have a whole lot of work left to do in order to finish this castle, but many of our works have become lazy and they lack motivation. I need somebody to motivate them and I think you're the right person for the job. Go out there and give my workers a kick in the butt. Not literally of course, that would hurt them. Just make sure they remember what we're working on, that should ignite their inspiration again. If not, well, I guess a real kick in butt might be needed for some.", "We need more coal for our forge or else we won't be able to supply the army with more weapons, but the mines have been overrun with weird creatures. Hero, please, venture into those mines and gather us coal, those creatures will be too scared to do anything to somebody as terrifying as you. Uh, no offense.", "We need more firewood for the winter, but my foolish boyfriend managed to hurt his back while trying to fell too big of a tree. Would you mind gathering firewood for us, I'd do it myself, but now that my boyfriend can't work I have twice the work to do.", "We're at war and war means we go through a whole lot of weaponry, ammunition and food. Obviously we can't reuse used food, but we can make use of used ammunition and weapons of the fallen. Hero, I need you to venture out into the fields to the West and gather the arrows and weapons laying around. It should be safe enough to do so now.", "We're completely overwhelmed. The war is at its peak and more and more injured come into our hospital in search of aid, but we're running low in supplies. None of us can afford to leave the injured to seek out more supplies, so we need you to do so. Please gather Peaceblossom, sea urchin needles, silkweb and honey.", "We've been struck by a dry spell, no rain has touched our lands for months and we're starting to feel its toll. Many of us are already too weak to do any real work and I'm afraid our first death will occur in a matter of days. Hero, please join me to the water pools, they're our last hope. If we bring 4 donkeys who should be able to carry plenty of water to at least save us for a while.", "Winter is coming and I fear my food supplies might be too low. I got injured during a hunting trip and I still haven't recovered. Please, would you go out and do some hunting for me? 10 boars should be enough to last me long enough along with the supplies I do have.", "You look like a person who likes to fish, but I doubt you're better than me. Let's put that to the test. We each get 10 minutes to catch the biggest fish we can find, if you can defeat me I'll reward you, but that's a very big if. About as big as the fish I'm going to catch, hahaha."];
	var nm14 = ["I don't have have a lot of possessions, but I'll reward you with what I can.", "I'm afraid there's not much I can reward you with, but I think I can still make it worth your troubles.", "Unfortunately there's not much I have to reward you with, but I think there's a few bits and pieces laying around.", "It pains me to say I won't be able to reward you with a lot, but I'll do my best to make it worth your while.", "I had hoped I'd be able to reward you handsomely, but unfortunately I don't have a lot left.", "I'll be able to reward you decently, it's nothing fancy, but it'll be worth your while.", "I wish I had something better to reward you with, but what I have ain't too bad either.", "I will do my best to give you a suitable reward, but I can't promise it will be amazing.", "I don't have something amazing to reward you with, but I'll still be able to reward you with somethind decent.", "I wish I could pay you far more than I can, but what I can pay isn't less than what's fair either.", "If you decide to help me I will repay you handsomely, it'll be worth your troubles.", "I will be able to reward you greatly, if you decide to help me of course.", "I'm happy to say I'll be able to reward you handsomely for your troubles.", "Fortunately I have enough left to reward you well if you decide to help me.", "I cannot thank you enough for your help, I'll make sure to reward you greatly once you return."];
	var nm15 = ["I appreciate all the help I can get.", "I can't thank you enough for your help.", "I know it's an odd task, but your help would be appreciated.", "I won't be able to thank you enough for your help.", "I'd be very grateful if you did help me.", "Your help would be a blessing.", "Your help would be most welcome.", "Your help would be much appreciated.", "Your help would mean a lot to me.", "Your help would mean the world to me."];

	var rnd1 = Math.floor(this.random() * nm1.length);
	var rnd2 = Math.floor(this.random() * nm2.length);
	var rnd3 = Math.floor(this.random() * nm3.length);
	var rnd4 = Math.floor(this.random() * nm4.length);
	var rnd5 = Math.floor(this.random() * nm5.length);
	var rnd6 = Math.floor(this.random() * nm6.length);
	var rnd7 = Math.floor(this.random() * nm7.length);
	var rnd8 = Math.floor(this.random() * nm8.length);
	var rnd9 = Math.floor(this.random() * nm8.length);
	var rnd10 = Math.floor(this.random() * nm10.length);
	var rnd11 = Math.floor(this.random() * nm11.length);
	var rnd12 = Math.floor(this.random() * nm12.length);
	var rnd13 = Math.floor(this.random() * nm13.length);
	var rnd14 = Math.floor(this.random() * nm14.length);
	var rnd15 = Math.floor(this.random() * nm15.length);

	if (tp === 1) {
		var name = nm1[rnd1] + ", " + nm2[rnd2] + ". " + nm12[rnd12] + ".";
		var name2 = nm13[rnd13]
		var name4 = nm14[rnd14];
	} else {
		var name = nm1[rnd1] + ", " + nm2[rnd2] + ". " + nm3[rnd3] + ".";
		var name2 = nm4[rnd4] + " " + nm5[rnd5] + " " + nm6[rnd6] + ". " + nm7[rnd7];
		var name3 = nm8[rnd8] + " " + nm6[rnd6] + ". " + nm9[rnd9];
		var name4 = nm10[rnd10] + " " + nm11[rnd11];
	}



	var result = "";
	result += name;
	result += "\n";
	result += "\n";
	result += name2;

	result += "\n";
	if (tp != 1) {
		result += name3;
		result += "\n";
		result += "\n";
	} else if (tp === 1) {
		result += "\n";
	}
	result += name4;
	return result;
})