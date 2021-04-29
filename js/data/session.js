var session = {
   buffs: '["2458","27578","22888","22817","9885","20906","20217","19838","13452","12451","12460","13810"]',
   rotation: '[{"id":"23894","active":true},{"id":"27580","active":false},{"id":"11567","active":true,"minrage":"40","maincd":"4"},{"id":"11609","active":false,"minrage":"40"},{"id":"20662","active":true,"starttime":"52"},{"id":"1680","active":true,"minrage":"50","maincd":"2"},{"id":"12328","active":true,"time":"29","crusaders":"0"},{"id":"1719","active":false,"time":"44"},{"id":"11551","active":false},{"id":"11585","active":false,"maxrage":"25"},{"id":"26296","active":false,"time":"50","haste":"30"},{"id":"20572","active":false,"time":"35"},{"id":"2687","active":true},{"id":"17528","active":true,"time":"39","crusaders":"0"},{"id":"16322","active":false,"time":"39"},{"id":"23255","active":false},{"id":"11597","active":true,"globals":"1"},{"id":"11605","active":false}]',
   sources: '["quest","crafting","dungeon","onyxia","mc","bwl","zg","aq20","aq40","naxx","worldboss","pvp","other"]',
   phases: '["1","2","3","4","5","6"]',
   talents: '[{"n":"Arms","t":[3,0,3,0,5,0,0,1,3,0,2,0,0,0,0,0,0,0]},{"n":"Fury","t":[0,5,0,5,0,0,0,5,5,2,5,0,1,0,0,5,1]},{"n":"Protection","t":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]',
   gear: '{"head":[{"id":12587,"selected":false,"dps":"925.95"},{"id":20623,"selected":false},{"id":21329,"selected":false},{"id":18817,"selected":false,"dps":"931.03"},{"id":22418,"selected":false},{"id":9375,"selected":false,"dps":"897.31"},{"id":20521,"selected":false,"dps":"922.64"},{"id":21460,"selected":false},{"id":19372,"selected":false,"dps":"930.15"},{"id":21999,"selected":false},{"id":16866,"selected":false,"dps":"905.91"},{"id":22411,"selected":false,"dps":"912.33"},{"id":16731,"selected":false,"dps":"911.66"},{"id":16963,"selected":false,"dps":"907.29"},{"id":12640,"selected":true,"dps":"937.16"},{"id":13404,"selected":false,"dps":"912.16"},{"id":23244,"selected":false,"dps":"925.73"},{"id":16478,"selected":false,"dps":"927.05"}],"neck":[{"id":19491,"selected":false,"dps":"935.18"},{"id":21664,"selected":false},{"id":22150,"selected":false},{"id":17111,"selected":false,"dps":"925.86"},{"id":21505,"selected":false},{"id":18205,"selected":false,"dps":"926.58"},{"id":21809,"selected":false},{"id":11933,"selected":false,"dps":"927.13"},{"id":15411,"selected":false,"dps":"935.82"},{"id":18404,"selected":true,"dps":"936.99"},{"id":22340,"selected":false},{"id":19377,"selected":false,"dps":"937.05"},{"id":23023,"selected":false},{"id":23053,"selected":false},{"id":19856,"selected":false},{"id":17044,"selected":false,"dps":"926.53"}],"shoulder":[{"id":20683,"selected":false},{"id":20212,"selected":false},{"id":15051,"selected":false,"dps":"935.55"},{"id":19878,"selected":false},{"id":21330,"selected":false},{"id":19394,"selected":false,"dps":"948.82"},{"id":22419,"selected":false},{"id":16868,"selected":false,"dps":"933.61"},{"id":21639,"selected":false},{"id":16961,"selected":false,"dps":"932.04"},{"id":21805,"selected":false},{"id":23243,"selected":false,"dps":"945.70"},{"id":16480,"dps":"948.82"},{"id":20517,"selected":false,"dps":"938.71"},{"id":22001,"selected":false},{"id":16733,"selected":false,"dps":"935.07"},{"id":12927,"selected":true,"dps":"937.10"},{"id":12082,"selected":false,"dps":"927.99"}],"back":[{"id":13340,"selected":true,"dps":"937.27"},{"id":21701,"selected":false},{"id":19436,"selected":false,"dps":"942.83"},{"id":21710,"selected":false},{"id":21621,"selected":false},{"id":20073,"selected":false},{"id":23030,"selected":false},{"id":17102,"selected":false,"dps":"933.81"},{"id":17107,"selected":false,"dps":"928.15"},{"id":21394,"selected":false},{"id":21187,"selected":false},{"id":18204,"selected":false,"dps":"932.34"},{"id":18689,"selected":false,"dps":"930.09"},{"id":18541,"selected":false,"dps":"939.30"},{"id":21456,"selected":false},{"id":23045,"selected":false},{"id":13397,"selected":false,"dps":"931.76"},{"id":19084,"selected":false,"dps":"930.13"},{"id":19907,"selected":false},{"id":20691,"selected":false}],"chest":[{"id":15050,"selected":false,"dps":"915.21"},{"id":19690,"selected":false},{"id":21814,"selected":false},{"id":12757,"selected":false,"dps":"929.14"},{"id":21997,"selected":false},{"id":16865,"selected":false,"dps":"913.51"},{"id":12895,"selected":false,"dps":"918.97"},{"id":16730,"selected":false,"dps":"914.83"},{"id":16966,"selected":false,"dps":"910.54"},{"id":14637,"selected":false,"dps":"930.24"},{"id":21331,"selected":false},{"id":11926,"selected":false,"dps":"925.40"},{"id":23226,"selected":false},{"id":19405,"selected":false,"dps":"927.71"},{"id":22191,"selected":false},{"id":18530,"selected":false,"dps":"926.88"},{"id":23000,"selected":false},{"id":16477,"selected":false,"dps":"929.56"},{"id":22872,"dps":"924.80"},{"id":19904,"selected":false},{"id":11726,"selected":true,"dps":"937.00"},{"id":19822,"selected":false},{"id":13944,"selected":false,"dps":"927.05"},{"id":21680,"selected":false}],"wrist":[{"id":20687,"selected":false},{"id":12936,"selected":true,"dps":"937.51"},{"id":19578,"selected":false,"dps":"942.56"},{"id":16959,"selected":false,"dps":"932.73"},{"id":21457,"selected":false},{"id":21996,"selected":false},{"id":16861,"selected":false,"dps":"931.02"},{"id":16735,"selected":false,"dps":"930.60"},{"id":21184,"selected":false},{"id":18533,"selected":false,"dps":"935.95"},{"id":21618,"selected":false},{"id":21602,"selected":false},{"id":21491,"selected":false},{"id":19824,"selected":false},{"id":13400,"selected":false,"dps":"938.94"},{"id":19146,"selected":false,"dps":"942.38"},{"id":18812,"selected":false,"dps":"937.87"},{"id":22936,"selected":false}],"hands":[{"id":18823,"selected":false,"dps":"931.90"},{"id":15063,"selected":true,"dps":"937.54"},{"id":14551,"selected":false,"dps":"922.24"},{"id":19143,"selected":false,"dps":"939.48"},{"id":21581,"selected":false},{"id":21998,"selected":false},{"id":16863,"selected":false,"dps":"930.03"},{"id":21674,"selected":false},{"id":21479,"selected":false},{"id":16737,"selected":false,"dps":"924.69"},{"id":16964,"selected":false,"dps":"920.96"},{"id":21672,"selected":false},{"id":16484,"dps":"935.73"},{"id":23286,"selected":false,"dps":"922.45"},{"id":13162,"selected":false,"dps":"926.98"},{"id":22714,"selected":false},{"id":12639,"selected":false,"dps":"919.85"},{"id":13963,"selected":false,"dps":"921.83"},{"id":19157,"dps":"935.17"}],"waist":[{"id":20204,"selected":false,"dps":"938.64"},{"id":21994,"selected":false},{"id":16864,"selected":false,"dps":"931.90"},{"id":21586,"selected":false},{"id":20216,"selected":false},{"id":20213,"selected":false},{"id":21503,"selected":false},{"id":16736,"selected":false,"dps":"930.13"},{"id":13142,"selected":false,"dps":"929.98"},{"id":23219,"selected":false},{"id":18505,"selected":false,"dps":"926.19"},{"id":13959,"selected":true,"dps":"937.51"},{"id":19137,"selected":false,"dps":"953.66"},{"id":21463,"selected":false},{"id":21598,"selected":false},{"id":19823,"selected":false},{"id":19380,"selected":false,"dps":"941.61"},{"id":21692,"selected":false},{"id":16960,"selected":false,"dps":"930.66"}],"legs":[{"id":20671,"selected":false},{"id":15052,"selected":false,"dps":"921.73"},{"id":12963,"selected":false,"dps":"919.97"},{"id":19855,"selected":false},{"id":14638,"selected":false,"dps":"921.04"},{"id":14554,"selected":false,"dps":"949.37"},{"id":145541,"selected":false,"dps":"929.50"},{"id":21332,"selected":false},{"id":20627,"selected":false},{"id":15062,"selected":true,"dps":"937.04"},{"id":18380,"selected":false,"dps":"930.49"},{"id":13498,"selected":false,"dps":"924.81"},{"id":23071,"selected":false},{"id":19402,"selected":false,"dps":"937.56"},{"id":23068,"selected":false},{"id":22000,"selected":false},{"id":16867,"selected":false,"dps":"921.82"},{"id":21495,"selected":false},{"id":16732,"selected":false,"dps":"927.62"},{"id":16962,"selected":false,"dps":"917.62"},{"id":16479,"selected":false,"dps":"943.55"},{"id":22873,"selected":false,"dps":"933.16"},{"id":21651,"selected":false},{"id":22672,"selected":false},{"id":22385,"selected":false}],"feet":[{"id":20208,"selected":false},{"id":12555,"selected":false,"dps":"940.52"},{"id":16984,"selected":false,"dps":"930.50"},{"id":19906,"selected":false},{"id":14616,"selected":true,"dps":"937.31"},{"id":21995,"selected":false},{"id":21688,"selected":false},{"id":19381,"selected":false,"dps":"944.02"},{"id":21493,"selected":false},{"id":21706,"selected":false},{"id":16734,"selected":false,"dps":"929.84"},{"id":19387,"selected":false,"dps":"952.26"},{"id":21333,"selected":false},{"id":13210,"selected":false,"dps":"934.80"},{"id":16483,"dps":"946.66"},{"id":23287,"selected":false,"dps":"934.33"},{"id":16862,"selected":false,"dps":"932.46"},{"id":16965,"selected":false,"dps":"931.87"},{"id":13070,"selected":false,"dps":"937.82"},{"id":21490,"selected":false},{"id":12553,"selected":false,"dps":"936.67"},{"id":13967,"selected":false,"dps":"936.42"}],"finger":[{"id":19376,"dps":"910.68"},{"id":17063,"dps":"918.78"},{"id":21182},{"id":19925},{"id":22961},{"id":18522,"dps":"912.37"},{"id":23038},{"id":17713,"dps":"912.67"},{"id":19432,"dps":"924.14"},{"id":19325,"selected":true,"dps":"922.06"},{"id":12548,"selected":true,"dps":"917.04"},{"id":19384,"dps":"922.56"},{"id":21189},{"id":13098,"dps":"918.56"},{"id":19514,"dps":"917.49"},{"id":18821,"dps":"926.89"},{"id":21601},{"id":21477},{"id":21596},{"id":21677},{"id":19898},{"id":22722},{"id":23018},{"id":21393},{"id":21205},{"id":18500,"dps":"914.57"}],"trinket":[{"id":21670},{"id":13965,"selected":true,"dps":"914.68"},{"id":18537,"dps":"901.63"},{"id":19289,"dps":"898.71"},{"id":20130,"dps":"946.80"},{"id":19406,"dps":"920.41"},{"id":21180},{"id":11815,"selected":true,"dps":"915.33"},{"id":22321,"dps":"897.29"},{"id":23570},{"id":22954},{"id":19120,"dps":"904.31"},{"id":13209,"dps":"922.15"},{"id":23041}],"ranged":[{"id":18680,"selected":false,"dps":"931.68"},{"id":21478,"selected":false},{"id":16996,"selected":false,"dps":"928.55"},{"id":19350,"selected":false,"dps":"935.04"},{"id":19993,"selected":false},{"id":21616,"selected":false},{"id":22318,"selected":false,"dps":"932.54"},{"id":20038,"selected":false},{"id":22811,"selected":false},{"id":19562,"selected":false,"dps":"927.96"},{"id":12653,"selected":false,"dps":"933.42"},{"id":18323,"selected":false,"dps":"931.84"},{"id":17069,"selected":true,"dps":"937.22"},{"id":12651,"selected":false,"dps":"930.68"},{"id":19107,"selected":false,"dps":"936.80"},{"id":18738,"selected":false,"dps":"928.37"},{"id":21459,"selected":false},{"id":22347,"selected":false},{"id":13040,"selected":false,"dps":"931.09"},{"id":22812,"selected":false},{"id":20599,"selected":false},{"id":13039,"selected":false,"dps":"933.30"},{"id":17072,"selected":false,"dps":"936.72"},{"id":13248,"selected":false,"dps":"928.88"},{"id":20722,"selected":false},{"id":19368,"selected":false,"dps":"933.97"},{"id":19853,"selected":false},{"id":13139,"selected":false,"dps":"932.91"},{"id":23557,"selected":false},{"id":21800,"selected":false},{"id":22810,"selected":false},{"id":13380,"selected":false,"dps":"928.29"}],"mainhand":[{"id":19852,"selected":false},{"id":12798,"selected":false,"dps":"922.20"},{"id":811,"selected":false,"dps":"878.75"},{"id":21242,"selected":false},{"id":18737,"selected":false,"dps":"879.07"},{"id":19363,"selected":false,"dps":"936.04"},{"id":17016,"selected":false,"dps":"888.53"},{"id":17068,"selected":false,"dps":"918.80"},{"id":19362,"selected":false,"dps":"914.11"},{"id":871,"selected":false,"dps":"880.21"},{"id":19103,"selected":false,"dps":"890.81"},{"id":22816,"selected":false},{"id":13952,"selected":false,"dps":"877.11"},{"id":18827,"selected":false,"dps":"942.30"},{"id":13015,"selected":false,"dps":"879.09"},{"id":21392,"selected":false},{"id":20675,"selected":false},{"id":19921,"selected":false},{"id":19921,"selected":false},{"id":14555,"selected":false,"dps":"872.53"},{"id":19166,"selected":false,"dps":"875.75"},{"id":21244,"selected":false},{"id":13368,"selected":false,"dps":"871.42"},{"id":18805,"selected":false,"dps":"898.67"},{"id":13984,"selected":false,"dps":"864.08"},{"id":21126,"selected":false},{"id":19346,"selected":false,"dps":"901.43"},{"id":20578,"selected":false},{"id":19859,"selected":false},{"id":12590,"selected":false,"dps":"904.44"},{"id":12709,"selected":false,"dps":"861.45"},{"id":19099,"selected":false,"dps":"871.67"},{"id":17071,"selected":false,"dps":"884.93"},{"id":23044,"selected":false},{"id":12783,"selected":false,"dps":"874.90"},{"id":18838,"selected":false,"dps":"923.10"},{"id":22802,"selected":false},{"id":22804,"selected":false},{"id":18816,"selected":false,"dps":"902.10"},{"id":21498,"selected":false},{"id":5267,"selected":false,"dps":"866.95"},{"id":19542,"selected":false,"dps":"869.33"},{"id":21522,"selected":false},{"id":19324,"selected":false,"dps":"885.58"},{"id":22377,"selected":false},{"id":19365,"selected":false,"dps":"931.72"},{"id":18203,"selected":false,"dps":"915.01"},{"id":18844,"selected":false,"dps":"941.37"},{"id":22317,"selected":false},{"id":21673,"selected":false},{"id":19896,"selected":false},{"id":22404,"selected":false,"dps":"879.61"},{"id":21837,"selected":false},{"id":21268,"selected":false},{"id":19170,"selected":false,"dps":"928.03"},{"id":17112,"selected":false,"dps":"958.25"},{"id":11684,"selected":false,"dps":"943.36"},{"id":20580,"selected":false},{"id":18865,"selected":false,"dps":"965.34"},{"id":13006,"selected":false,"dps":"909.44"},{"id":23221,"selected":false},{"id":22384,"selected":false,"dps":"921.78"},{"id":21715,"selected":false},{"id":19908,"selected":false},{"id":19335,"selected":false,"dps":"937.32"},{"id":19104,"selected":false,"dps":"912.95"},{"id":22808,"selected":false},{"id":18376,"selected":false,"dps":"905.07"},{"id":21650,"selected":false},{"id":19168,"selected":false,"dps":"924.10"},{"id":19867,"selected":false},{"id":18832,"selected":false,"dps":"944.96"},{"id":18484,"selected":false,"dps":"907.17"},{"id":19352,"selected":false,"dps":"959.41"},{"id":19110,"selected":false,"dps":"903.02"},{"id":12940,"selected":false,"dps":"916.81"},{"id":17015,"selected":false,"dps":"903.16"},{"id":19968,"selected":false},{"id":23054,"selected":false},{"id":23014,"selected":false},{"id":2244,"selected":false,"dps":"917.39"},{"id":19351,"selected":false,"dps":"945.26"},{"id":15806,"selected":false,"dps":"910.67"},{"id":20577,"selected":false},{"id":18348,"selected":false,"dps":"925.48"},{"id":12584,"selected":false,"dps":"965.16"},{"id":23456,"selected":false,"dps":"962.51"},{"id":21520,"selected":false},{"id":22378,"selected":false},{"id":6622,"selected":false,"dps":"911.97"},{"id":19901,"selected":false},{"id":1728,"selected":false,"dps":"920.84"},{"id":23577,"selected":false},{"id":17705,"selected":false,"dps":"908.69"},{"id":19019,"selected":false,"dps":"988.54"},{"id":19865,"selected":false},{"id":22806,"selected":false},{"id":17075,"selected":true,"dps":"936.82"},{"id":19554,"selected":false,"dps":"908.74"},{"id":14487,"selected":false,"dps":"900.88"}],"offhand":[{"id":19852,"selected":false},{"id":21242,"selected":false},{"id":18737,"selected":false,"dps":"906.64"},{"id":19363,"selected":false,"dps":"939.49"},{"id":17068,"selected":false,"dps":"920.37"},{"id":19362,"selected":false,"dps":"927.43"},{"id":871,"selected":false,"dps":"908.74"},{"id":19103,"selected":false,"dps":"910.49"},{"id":22816,"selected":false},{"id":18827,"selected":false,"dps":"942.09"},{"id":13015,"selected":false,"dps":"904.93"},{"id":21392,"selected":false},{"id":20675,"selected":false},{"id":19921,"selected":false},{"id":19921,"selected":false},{"id":14555,"selected":false,"dps":"908.98"},{"id":19166,"selected":false,"dps":"909.10"},{"id":21244,"selected":false},{"id":13368,"selected":false,"dps":"910.81"},{"id":18805,"selected":false,"dps":"930.10"},{"id":13984,"selected":false,"dps":"902.40"},{"id":21126,"selected":false},{"id":18392,"selected":false,"dps":"930.06"},{"id":19346,"selected":false,"dps":"926.50"},{"id":20578,"selected":false},{"id":19859,"selected":false},{"id":12590,"selected":false,"dps":"929.41"},{"id":19099,"selected":false,"dps":"907.82"},{"id":17071,"selected":false,"dps":"913.39"},{"id":23044,"selected":false},{"id":12783,"selected":false,"dps":"911.66"},{"id":18838,"selected":false,"dps":"941.80"},{"id":22802,"selected":false},{"id":22804,"selected":false},{"id":18816,"selected":false,"dps":"923.09"},{"id":21498,"selected":false},{"id":5267,"selected":false,"dps":"906.06"},{"id":19542,"selected":false,"dps":"906.90"},{"id":21522,"selected":false},{"id":19324,"selected":false,"dps":"913.89"},{"id":22377,"selected":false},{"id":19910,"selected":false},{"id":23242,"selected":false},{"id":18202,"selected":false,"dps":"913.79"},{"id":18848,"selected":false,"dps":"942.35"},{"id":22317,"selected":false},{"id":21837,"selected":false},{"id":21268,"selected":false},{"id":19170,"selected":false,"dps":"942.00"},{"id":18865,"selected":false,"dps":"970.85"},{"id":23221,"selected":false},{"id":21715,"selected":false},{"id":19908,"selected":false},{"id":19104,"selected":true,"dps":"936.99"},{"id":22808,"selected":false},{"id":18376,"selected":false,"dps":"926.87"},{"id":21650,"selected":false},{"id":19168,"selected":false,"dps":"939.64"},{"id":18832,"selected":false,"dps":"962.90"},{"id":18484,"selected":false,"dps":"931.99"},{"id":19352,"selected":false,"dps":"965.92"},{"id":19110,"selected":false,"dps":"925.32"},{"id":12939,"selected":false,"dps":"924.68"},{"id":23054,"selected":false},{"id":23014,"selected":false},{"id":19351,"selected":false,"dps":"967.27"},{"id":15806,"selected":false,"dps":"935.26"},{"id":20577,"selected":false},{"id":12584,"selected":false,"dps":"970.68"},{"id":23456,"selected":false,"dps":"971.84"},{"id":21520,"selected":false},{"id":22378,"selected":false},{"id":19901,"selected":false},{"id":23577,"selected":false},{"id":17705,"selected":false,"dps":"923.60"},{"id":19019,"selected":false,"dps":"979.56"},{"id":19866,"selected":false},{"id":22806,"selected":false},{"id":17075,"selected":false,"dps":"946.53"},{"id":19554,"selected":false,"dps":"933.75"},{"id":14487,"selected":false,"dps":"924.05"}],"twohand":[{"id":12784,"selected":false,"dps":"660.25"},{"id":1263,"selected":false,"dps":"669.75"},{"id":21134,"selected":false},{"id":19354,"selected":false,"dps":"692.90"},{"id":19353,"selected":false,"dps":"716.40"},{"id":11931,"selected":false,"dps":"651.77"},{"id":13983,"selected":false,"dps":"641.58"},{"id":19962,"selected":false},{"id":18831,"selected":false,"dps":"725.12"},{"id":18759,"selected":false,"dps":"650.19"},{"id":21856,"selected":false},{"id":19169,"selected":false,"dps":"676.14"},{"id":22815,"selected":false},{"id":17104,"selected":false,"dps":"704.41"},{"id":13285,"selected":false,"dps":"635.86"},{"id":18538,"selected":false,"dps":"689.18"},{"id":19900,"selected":false},{"id":18420,"selected":false,"dps":"696.89"},{"id":20696,"selected":false},{"id":22348,"selected":false},{"id":19358,"selected":false,"dps":"734.34"},{"id":17073,"selected":false,"dps":"696.18"},{"id":13167,"selected":false,"dps":"679.54"},{"id":12796,"selected":false,"dps":"676.55"},{"id":18868,"selected":false,"dps":"751.77"},{"id":19918,"selected":false},{"id":22798,"selected":false},{"id":12969,"selected":false,"dps":"666.24"},{"id":17182,"selected":false,"dps":"751.18"},{"id":17193,"selected":false,"dps":"696.77"},{"id":19323,"selected":false,"dps":"713.99"},{"id":9449,"selected":false,"dps":"750.02"},{"id":21635,"selected":false},{"id":19167,"selected":false,"dps":"703.48"},{"id":12583,"selected":false,"dps":"664.80"},{"id":19874,"selected":false},{"id":22314,"selected":false,"dps":"651.03"},{"id":18871,"selected":false,"dps":"725.45"},{"id":19106,"selected":false,"dps":"657.96"},{"id":18502,"selected":false,"dps":"643.09"},{"id":17223,"selected":false,"dps":"665.13"},{"id":18725,"selected":false,"dps":"657.86"},{"id":19963,"selected":false},{"id":20660,"selected":false},{"id":23039,"selected":false},{"id":19946,"selected":false},{"id":19364,"selected":false,"dps":"764.81"},{"id":18520,"selected":false,"dps":"694.07"},{"id":12592,"selected":false,"dps":"681.79"},{"id":2801,"selected":false,"dps":"708.54"},{"id":17076,"selected":false,"dps":"763.22"},{"id":22813,"selected":false},{"id":22691,"selected":false},{"id":20669,"selected":false},{"id":647,"selected":false,"dps":"698.51"},{"id":18877,"selected":false,"dps":"751.46"},{"id":21679,"selected":false},{"id":21492,"selected":false},{"id":18822,"selected":false,"dps":"737.44"},{"id":13163,"selected":false,"dps":"681.76"},{"id":13505,"selected":false,"dps":"680.64"},{"id":19334,"selected":false,"dps":"757.47"},{"id":18542,"selected":false,"dps":"715.34"},{"id":13982,"selected":false,"dps":"676.71"},{"id":19854,"selected":false}],"custom":[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6},{"id":7},{"id":8},{"id":9},{"id":10},{"id":11},{"id":12},{"id":13},{"id":14},{"id":15},{"id":16},{"id":17},{"id":18},{"id":19}]}',
   enchant: '{"head":[{"id":18329,"dps":"936.65"},{"id":11647,"dps":"935.61"},{"id":11645,"selected":true,"dps":"937.23"}],"shoulder":[{"id":29483},{"id":24422}],"back":[{"id":25084},{"id":13882,"selected":true,"dps":"937.30"}],"chest":[{"id":20025,"dps":"938.86"},{"id":13941,"selected":true,"dps":"936.98"}],"wrist":[{"id":13939,"selected":false,"dps":"935.57"},{"id":20010,"selected":true,"dps":"937.10"}],"hands":[{"id":25080},{"id":20012,"dps":"936.77"},{"id":20013,"selected":true,"dps":"937.30"},{"id":13948,"selected":false,"dps":"938.51"}],"legs":[{"id":18329,"selected":false,"dps":"936.70"},{"id":11647,"dps":"935.51"},{"id":11645,"selected":true,"dps":"937.28"}],"feet":[{"id":20023,"dps":"941.47"},{"id":13890,"selected":true,"dps":"936.97"}],"mainhand":[{"id":23800,"selected":false,"dps":"919.78"},{"id":23799,"selected":false,"dps":"923.30"},{"id":20034,"selected":true,"dps":"937.24"},{"id":13898,"selected":false,"dps":"917.82"},{"id":20032,"selected":false,"dps":"915.65"},{"id":20031,"selected":false,"dps":"914.76"},{"id":18262,"selected":true,"dps":"937.44"},{"id":12404,"selected":false,"dps":"922.01"},{"id":23122,"selected":false}],"offhand":[{"id":23800,"selected":false,"dps":"929.21"},{"id":23799,"selected":false,"dps":"932.84"},{"id":20034,"selected":true,"dps":"936.89"},{"id":13898,"selected":false,"dps":"924.44"},{"id":20032,"selected":false,"dps":"924.29"},{"id":20031,"selected":false,"dps":"923.00"},{"id":18262,"selected":true,"dps":"937.06"},{"id":12404,"selected":false,"dps":"919.30"},{"id":23122,"selected":false}],"twohand":[{"id":27837,"selected":false,"dps":"702.34"},{"id":23799,"selected":false,"dps":"700.92"},{"id":20034,"selected":false,"dps":"714.20"},{"id":13898,"selected":false,"dps":"700.16"},{"id":20032,"selected":false,"dps":"698.81"},{"id":18262,"selected":false,"dps":"714.18"},{"id":12404,"selected":false,"dps":"704.61"},{"id":23122,"selected":false},{"id":20030,"selected":false,"dps":"698.50"}]}',
};