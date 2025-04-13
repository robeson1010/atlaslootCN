s=`data["Naxxramas"] = {
	MapID = 3456,
	InstanceID = AtlasLoot:GameVersion_LT(AtlasLoot.WRATH_VERSION_NUM,533,nil),
	AtlasModule = ATLAS_MODULE_NAME,
	AtlasMapID = "Naxxramas",
	AtlasMapFile = "CL_Naxxramas",
	AtlasMapFile_AL = "Naxxramas",
	ContentType = RAID_CONTENT,
	ContentPhase = 6,
	LevelRange = GetForVersion({60, 60, 60},{60, 60, 60}),
	items = {
		-- The Arachnid Quarter
		{ -- NAXAnubRekhan
			name = AL["Anub'Rekhan"],
			npcID = 15956,
			Level = 999,
			DisplayIDs = {{15931}},
			AtlasMapBossID = "1",
			NameColor = BLUE,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22369 }, -- Desecrated Bindings
				{ 5,  22362 }, -- Desecrated Wristguards
				{ 6,  22355 }, -- Desecrated Bracers
				{ 8,  22935 }, -- Touch of Frost
				{ 9,  22938 }, -- Cryptfiend Silk Cloak
				{ 10, 22936 }, -- Wristguards of Vengeance
				{ 11, 22939 }, -- Band of Unanswered Prayers
				{ 12, 22937 }, -- Gem of Nerubis
			},
        
		},
		{ -- NAXGrandWidowFaerlina
			name = AL["Grand Widow Faerlina"],
			npcID = 15953,
			Level = 999,
			DisplayIDs = {{15940}},
			AtlasMapBossID = "2",
			NameColor = BLUE,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22369 }, -- Desecrated Bindings
				{ 5,  22362 }, -- Desecrated Wristguards
				{ 6,  22355 }, -- Desecrated Bracers
				{ 8,  22943 }, -- Malice Stone Pendant
				{ 9,  22941 }, -- Polar Shoulder Pads
				{ 10, 22940 }, -- Icebane Pauldrons
				{ 11, 22942 }, -- The Widow's Embrace
				{ 12, 22806 }, -- Widow's Remorse
			},
            [NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22369 }, -- Desecrated Bindings
				{ 5,  22362 }, -- Desecrated Wristguards
				{ 6,  22355 }, -- Desecrated Bracers
				{ 8,  22943 }, -- Malice Stone Pendant
				{ 9,  22941 }, -- Polar Shoulder Pads
				{ 10, 22940 }, -- Icebane Pauldrons
				{ 11, 22942 }, -- The Widow's Embrace
				{ 12, 22806 }, -- Widow's Remorse
			},
		},
		{ -- NAXMaexxna
			name = AL["Maexxna"],
			npcID = 15952,
			Level = 999,
			DisplayIDs = {{15928}},
			AtlasMapBossID = "3",
			NameColor = BLUE,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22371 }, -- Desecrated Gloves
				{ 5,  22364 }, -- Desecrated Handguards
				{ 6,  22357 }, -- Desecrated Gauntlets
				{ 8,  22947 }, -- Pendant of Forgotten Names
				{ 9,  23220 }, -- Crystal Webbed Robe
				{ 10, 22954 }, -- Kiss of the Spider
				{ 11, 22807 }, -- Wraith Blade
				{ 12, 22804 }, -- Maexxna's Fang
			},
		},
		-- The Plague Quarter
		{ -- NAXNoththePlaguebringer
			name = AL["Noth the Plaguebringer"],
			npcID = 15954,
			Level = 999,
			DisplayIDs = {{16590}},
			AtlasMapBossID = "1",
			NameColor = PURP,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22370 }, -- Desecrated Belt
				{ 5,  22363 }, -- Desecrated Girdle
				{ 6,  22356 }, -- Desecrated Waistguard
				{ 8,  23030 }, -- Cloak of the Scourge
				{ 9,  23031 }, -- Band of the Inevitable
				{ 10, 23028 }, -- Hailstone Band
				{ 11, 23029 }, -- Noth's Frigid Heart
				{ 12, 23006 }, -- Libram of Light
				{ 13, 23005 }, -- Totem of Flowing Water
				{ 14, 22816 }, -- Hatchet of Sundered Bone
			},
		},
		{ -- NAXHeigantheUnclean
			name = AL["Heigan the Unclean"],
			npcID = 15936,
			Level = 999,
			DisplayIDs = {{16309}},
			AtlasMapBossID = "2",
			NameColor = PURP,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22370 }, -- Desecrated Belt
				{ 5,  22363 }, -- Desecrated Girdle
				{ 6,  22356 }, -- Desecrated Waistguard
				{ 8,  23035 }, -- Preceptor's Hat
				{ 9,  23033 }, -- Icy Scale Coif
				{ 10, 23019 }, -- Icebane Helmet
				{ 11, 23036 }, -- Necklace of Necropsy
				{ 12, 23068 }, -- Legplates of Carnage
			},
		},
		{ -- NAXLoatheb
			name = AL["Loatheb"],
			npcID = 16011,
			Level = 999,
			DisplayIDs = {{16110}},
			AtlasMapBossID = "3",
			NameColor = PURP,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22366 }, -- Desecrated Leggings
				{ 5,  22359 }, -- Desecrated Legguards
				{ 6,  22352 }, -- Desecrated Legplates
				{ 8,  23038 }, -- Band of Unnatural Forces
				{ 9,  23037 }, -- Ring of Spiritual Fervor
				{ 10, 23042 }, -- Loatheb's Reflection
				{ 11, 23039 }, -- The Eye of Nerub
				{ 12, 22800 }, -- Brimstone Staff
			},
		},
		-- The Military Quarter
		{ -- NAXInstructorRazuvious
			name = AL["Instructor Razuvious"],
			npcID = 16061,
			Level = 999,
			DisplayIDs = {{16582}},
			AtlasMapBossID = "1",
			NameColor = _RED,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22372 }, -- Desecrated Sandals
				{ 5,  22365 }, -- Desecrated Boots
				{ 6,  22358 }, -- Desecrated Sabatons
				{ 8,  23017 }, -- Veil of Eclipse
				{ 9,  23219 }, -- Girdle of the Mentor
				{ 10, 23018 }, -- Signet of the Fallen Defender
				{ 11, 23004 }, -- Idol of Longevity
				{ 12, 23009 }, -- Wand of the Whispering Dead
				{ 13, 23014 }, -- Iblis, Blade of the Fallen Seraph
			},
		},
		{ -- NAXGothiktheHarvester
			name = AL["Gothik the Harvester"],
			npcID = 16060,
			Level = 999,
			DisplayIDs = {{16279}},
			AtlasMapBossID = "2",
			NameColor = _RED,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22372 }, -- Desecrated Sandals
				{ 5,  22365 }, -- Desecrated Boots
				{ 6,  22358 }, -- Desecrated Sabatons
				{ 8,  23032 }, -- Glacial Headdress
				{ 9,  23020 }, -- Polar Helmet
				{ 10, 23023 }, -- Sadist's Collar
				{ 11, 23021 }, -- The Soul Harvester's Bindings
				{ 12, 23073 }, -- Boots of Displacement
			},
		},
		{ -- NAXTheFourHorsemen
			name = AL["The Four Horsemen"],
			npcID = {16064, 16065, 16062, 16063},
			Level = 999,
			DisplayIDs = {{16155},{16153},{16139},{16154}},
			AtlasMapBossID = "3",
			NameColor = _RED,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22351 }, -- Desecrated Robe
				{ 5,  22350 }, -- Desecrated Tunic
				{ 6,  22349 }, -- Desecrated Breastplate
				{ 8,  23071 }, -- Leggings of Apocalypse
				{ 9,  23025 }, -- Seal of the Damned
				{ 10, 23027 }, -- Warmth of Forgiveness
				{ 11, 22811 }, -- Soulstring
				{ 12, 22809 }, -- Maul of the Redeemed Crusader
				{ 13, 22691 }, -- Corrupted Ashbringer
			},
		},
		-- The Construct Quarter
		{ -- NAXPatchwerk
			name = AL["Patchwerk"],
			npcID = 16028,
			Level = 999,
			DisplayIDs = {{16174}},
			AtlasMapBossID = 1,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22368 }, -- Desecrated Shoulderpads
				{ 5,  22361 }, -- Desecrated Spaulders
				{ 6,  22354 }, -- Desecrated Pauldrons
				{ 8,  22960 }, -- Cloak of Suturing
				{ 9,  22961 }, -- Band of Reanimation
				{ 10, 22820 }, -- Wand of Fates
				{ 11, 22818 }, -- The Plague Bearer
				{ 12, 22815 }, -- Severance
			},
		},
		{ -- NAXGrobbulus
			name = AL["Grobbulus"],
			npcID = 15931,
			Level = 999,
			DisplayIDs = {{16035}},
			AtlasMapBossID = 2,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22368 }, -- Desecrated Shoulderpads
				{ 5,  22361 }, -- Desecrated Spaulders
				{ 6,  22354 }, -- Desecrated Pauldrons
				{ 8,  22968 }, -- Glacial Mantle
				{ 9,  22967 }, -- Icy Scale Spaulders
				{ 10, 22810 }, -- Toxin Injector
				{ 11, 22803 }, -- Midnight Haze
				{ 12, 22988 }, -- The End of Dreams
			},
		},
		{ -- NAXGluth
			name = AL["Gluth"],
			npcID = 15932,
			Level = 999,
			DisplayIDs = {{16064}},
			AtlasMapBossID = 3,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22983 }, -- Rime Covered Mantle
				{ 5,  22981 }, -- Gluth's Missing Collar
				{ 6,  22994 }, -- Digested Hand of Power
				{ 7,  23075 }, -- Death's Bargain
				{ 8,  22813 }, -- Claymore of Unholy Might
				{ 16, 22368 }, -- Desecrated Shoulderpads
				{ 17, 22369 }, -- Desecrated Bindings
				{ 18, 22370 }, -- Desecrated Belt
				{ 19, 22372 }, -- Desecrated Sandals
				{ 20, 22361 }, -- Desecrated Spaulders
				{ 21, 22362 }, -- Desecrated Wristguards
				{ 22, 22363 }, -- Desecrated Girdle
				{ 23, 22365 }, -- Desecrated Boots
				{ 24, 22354 }, -- Desecrated Pauldrons
				{ 25, 22355 }, -- Desecrated Bracers
				{ 26, 22356 }, -- Desecrated Waistguard
				{ 27, 22358 }, -- Desecrated Sabatons
			},
		},
		{ -- NAXThaddius
			name = AL["Thaddius"],
			npcID = 15928,
			Level = 999,
			DisplayIDs = {{16137}},
			AtlasMapBossID = 4,
			[NORMAL_DIFF] = {
				{ 1,  22726 }, -- Splinter of Atiesh
				{ 2,  22727 }, -- Frame of Atiesh
				{ 4,  22367 }, -- Desecrated Circlet
				{ 5,  22360 }, -- Desecrated Headpiece
				{ 6,  22353 }, -- Desecrated Helmet
				{ 8,  23000 }, -- Plated Abomination Ribcage
				{ 9,  23070 }, -- Leggings of Polarity
				{ 10, 23001 }, -- Eye of Diminution
				{ 11, 22808 }, -- The Castigator
				{ 12, 22801 }, -- Spire of Twilight
			},
		},
		-- Frostwyrm Lair
		{ -- NAXSapphiron
			name = AL["Sapphiron"],
			npcID = 15989,
			Level = 999,
			DisplayIDs = {{16033}},
			AtlasMapBossID = "1",
			NameColor = GREEN,
			[NORMAL_DIFF] = {
				{ 1,  23050 }, -- Cloak of the Necropolis
				{ 2,  23045 }, -- Shroud of Dominion
				{ 3,  23040 }, -- Glyph of Deflection
				{ 4,  23047 }, -- Eye of the Dead
				{ 5,  23041 }, -- Slayer's Crest
				{ 6,  23046 }, -- The Restrained Essence of Sapphiron
				{ 7,  23049 }, -- Sapphiron's Left Eye
				{ 8,  23048 }, -- Sapphiron's Right Eye
				{ 9,  23043 }, -- The Face of Death
				{ 10, 23242 }, -- Claw of the Frost Wyrm
				{ 16, 23549 }, -- Fortitude of the Scourge
				{ 17, 23548 }, -- Might of the Scourge
				{ 18, 23545 }, -- Power of the Scourge
				{ 19, 23547 }, -- Resilience of the Scourge
			},
		},
		{ -- NAXKelThuzard
			name = AL["Kel'Thuzad"],
			npcID = 15990,
			Level = 999,
			DisplayIDs = {{15945}},
			AtlasMapBossID = "2",
			NameColor = GREEN,
			[NORMAL_DIFF] = {
				{ 1,  23057 }, -- Gem of Trapped Innocents
				{ 2,  23053 }, -- Stormrage's Talisman of Seething
				{ 3,  22812 }, -- Nerubian Slavemaker
				{ 4,  22821 }, -- Doomfinger
				{ 5,  22819 }, -- Shield of Condemnation
				{ 6,  22802 }, -- Kingsfall
				{ 7,  23056 }, -- Hammer of the Twisting Nether
				{ 8,  23054 }, -- Gressil, Dawn of Ruin
				{ 9,  23577 }, -- The Hungering Cold
				{ 10, 22798 }, -- Might of Menethil
				{ 11, 22799 }, -- Soulseeker
				{ 13, 22520 }, -- The Phylactery of Kel'Thuzad
				{ 16, 23061 }, -- Ring of Faith
				{ 17, 23062 }, -- Frostfire Ring
				{ 18, 23063 }, -- Plagueheart Ring
				{ 19, 23060 }, -- Bonescythe Ring
				{ 20, 23064 }, -- Ring of the Dreamwalker
				{ 21, 23067 }, -- Ring of the Cryptstalker
				{ 22, 23065 }, -- Ring of the Earthshatterer
				{ 23, 23066 }, -- Ring of Redemption
				{ 24, 23059 }, -- Ring of the Dreadnaught
				{ 26, 22733 }, -- Staff Head of Atiesh
			},
		},
		{ -- NAXTrash
			name = AL["Trash"],
			ExtraList = true,
			[NORMAL_DIFF] = {
				{ 1,  23664 }, -- Pauldrons of Elemental Fury
				{ 2,  23667 }, -- Spaulders of the Grand Crusader
				{ 3,  23069 }, -- Necro-Knight's Garb
				{ 4,  23226 }, -- Ghoul Skin Tunic
				{ 5,  23663 }, -- Girdle of Elemental Fury
				{ 6,  23666 }, -- Belt of the Grand Crusader
				{ 7,  23665 }, -- Leggings of Elemental Fury
				{ 8,  23668 }, -- Leggings of the Grand Crusader
				{ 9,  23237 }, -- Ring of the Eternal Flame
				{ 10, 23238 }, -- Stygian Buckler
				{ 11, 23044 }, -- Harbinger of Doom
				{ 12, 23221 }, -- Misplaced Servo Arm
				{ 16, 22376 }, -- Wartorn Cloth Scrap
				{ 17, 22373 }, -- Wartorn Leather Scrap
				{ 18, 22374 }, -- Wartorn Chain Scrap
				{ 19, 22375 }, -- Wartorn Plate Scrap
				{ 21, 23055 }, -- Word of Thawing
				{ 22, 22682 }, -- Frozen Rune
			},
		},`
//console.log(s.replace(/\[NORMAL_DIFF\] = \{[\n \t]*(\{[\n \t]*\d+,[\n \t]*\d+[\n \t]*\}, (-- [a-zA-Z0-9 ]+)?[\n \t]*)+[\n \t]*\},/gu,'xxx'))
let map={"22349":236231,"22350":236251,"22351":236242,"22352":236238,"22353":236236,"22354":236237,"22355":236235,"22356":236232,"22357":236233,"22358":236234,"22359":236253,"22360":236249,"22361":236254,"22362":236247,"22363":236252,"22364":236250,"22365":236248,"22366":236246,"22367":236241,"22368":236240,"22369":236245,"22370":236244,"22371":236243,"22372":236239,"22373":22373,"22374":22374,"22375":22375,"22376":22376,"22520":236350,"22682":236656,"22691":236317,"22726":22726,"22727":22734,"22733":22733,"22798":236340,"22799":236346,"22800":236284,"22801":236305,"22802":236343,"22803":236292,"22804":236269,"22806":236263,"22807":236265,"22808":236306,"22809":236321,"22810":236293,"22811":236322,"22812":236344,"22813":236299,"22815":236287,"22816":236270,"22818":236288,"22819":236347,"22820":236290,"22821":236349,"22935":236256,"22936":236255,"22937":236257,"22938":236258,"22939":236259,"22940":236260,"22941":236262,"22942":236264,"22943":236261,"22947":236266,"22954":236268,"22960":236289,"22961":236291,"22967":236294,"22968":236295,"22981":236300,"22983":236298,"22988":236297,"22994":236301,"23000":236304,"23001":236302,"23004":236308,"23005":236276,"23006":236271,"23009":236310,"23014":236312,"23017":236307,"23018":236311,"23019":237275,"23020":236315,"23021":236313,"23023":236316,"23025":236318,"23027":236320,"23028":236274,"23029":236275,"23030":236272,"23031":236273,"23032":236278,"23033":236281,"23035":236279,"23036":236277,"23037":236283,"23038":236286,"23039":236285,"23040":236337,"23041":236334,"23042":236282,"23043":236336,"23044":236219,"23045":236333,"23046":236331,"23047":236329,"23048":236330,"23049":236328,"23050":236327,"23053":236342,"23054":236339,"23055":23055,"23056":236348,"23057":236345,"23059":236013,"23060":236031,"23061":236105,"23062":236085,"23063":236067,"23064":236190,"23065":236150,"23066":236116,"23067":236041,"23068":236280,"23069":236220,"23070":236303,"23071":236319,"23072":236335,"23073":236314,"23075":236296,"23219":236309,"23220":236267,"23221":236221,"23226":236222,"23237":236223,"23238":236224,"23242":236338,"23545":236324,"23547":236323,"23548":236326,"23549":236325,"23577":236341,"23663":236225,"23664":236226,"23665":236230,"23666":236227,"23667":236228,"23668":236229}
console.log(s.replace(/\[NORMAL_DIFF\] = \{[\n \t]*(\{[\n \t]*\d+,[\n \t]*\d+[\n \t]*\}, (-- [a-zA-Z0-9 ',-]+)?[\n \t]*)+[\n \t]*\},/gu,function(m,a,b){
    let SOD=m.replace(/{[\n \t]*(\d+),[\n \t]*(\d+)[\n \t]*\}/g,function(m,a,b){
        return `{ ${a}, ${map[b]||b}}`
    }).replace(/NORMAL_DIFF/,'SOD_DIFF');
    return m+'\n\t\t\t\t'+SOD;
}))