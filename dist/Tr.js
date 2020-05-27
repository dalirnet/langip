/*!
 * 
 *     LangIp  v1.1.5
 *     url     https://github.com/dalirnet/langip#readme
 *     file    /dist/Tr.js
 * 
 */
var isTr=function(T){var R={};function e(r){if(R[r])return R[r].exports;var t=R[r]={i:r,l:!1,exports:{}};return T[r].call(t.exports,t,t.exports,e),t.l=!0,t.exports}return e.m=T,e.c=R,e.d=function(T,R,r){e.o(T,R)||Object.defineProperty(T,R,{enumerable:!0,get:r})},e.r=function(T){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(T,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(T,"__esModule",{value:!0})},e.t=function(T,R){if(1&R&&(T=e(T)),8&R)return T;if(4&R&&"object"==typeof T&&T&&T.__esModule)return T;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:T}),2&R&&"string"!=typeof T)for(var t in T)e.d(r,t,function(R){return T[R]}.bind(null,t));return r},e.n=function(T){var R=T&&T.__esModule?function(){return T.default}:function(){return T};return e.d(R,"a",R),R},e.o=function(T,R){return Object.prototype.hasOwnProperty.call(T,R)},e.p="",e(e.s=11)}({0:function(T,R){T.exports={multipliers:[16777216,65536,256,1],ipTolong(T){var R=0;return T.split(".").forEach((T,e)=>{R+=T*this.multipliers[e]}),Number(R)},longToip(T){return this.multipliers.map(R=>Math.floor(T%(256*R)/R)).join(".")},find(T,R){var e=this.ipTolong(T);return new Promise(T=>{e&&T(R.some(T=>{var[R,r]=T;return e>=R&&e<r})),T(!1)})}}},11:function(T,R,e){var r=e(0),t=e(12);T.exports=T=>r.find(T,t)},12:function(T){T.exports=JSON.parse('[[34625536,34625791,"TR"],[34703360,34704383,"TR"],[34849024,34849279,"TR"],[34899456,34899967,"TR"],[34991616,34992127,"TR"],[34994176,34995199,"TR"],[37226240,37226495,"TR"],[37239808,37240831,"TR"],[37263360,37264383,"TR"],[37338112,37339135,"TR"],[37365760,37366783,"TR"],[37391360,37392383,"TR"],[37450752,37451007,"TR"],[37451520,37451775,"TR"],[83979008,83979263,"TR"],[84037632,84039679,"TR"],[84577280,84577535,"TR"],[84639744,84672511,"TR"],[85395456,85395711,"TR"],[85424128,85426175,"TR"],[85458944,85721087,"TR"],[86790144,86794239,"TR"],[86806528,86810623,"TR"],[86890240,86890495,"TR"],[86900736,87031807,"TR"],[92627968,92628991,"TR"],[94369792,94371839,"TR"],[95420416,95551487,"TR"],[95692800,95694847,"TR"],[95709184,95710207,"TR"],[95727616,95728639,"TR"],[95729664,95730687,"TR"],[95752192,95753215,"TR"],[95783936,95784959,"TR"],[95802368,95803391,"TR"],[95833088,95834111,"TR"],[95865856,95866879,"TR"],[95876096,95877119,"TR"],[95901696,95902719,"TR"],[95907840,95908863,"TR"],[96216064,96216319,"TR"],[96249856,96250367,"TR"],[98746368,98762751,"TR"],[98893824,98959359,"TR"],[100331520,100335615,"TR"],[100402176,100403199,"TR"],[100425728,100426751,"TR"],[100453376,100454399,"TR"],[100502528,100503551,"TR"],[100509696,100511743,"TR"],[100523008,100524031,"TR"],[100529920,100531199,"TR"],[100648192,100648447,"TR"],[135356928,135357439,"TR"],[136828416,136828671,"TR"],[289654272,289654783,"TR"],[289796096,289798143,"TR"],[290007040,290009087,"TR"],[290185216,290187263,"TR"],[290191360,290193407,"TR"],[386818048,386826239,"TR"],[389570816,389571071,"TR"],[390977536,390978559,"TR"],[399598592,399599615,"TR"],[399900672,399908863,"TR"],[400400384,400410111,"TR"],[400794368,400794623,"TR"],[400797952,400798207,"TR"],[411369472,411435007,"TR"],[520290304,520292351,"TR"],[520496384,520496639,"TR"],[520507392,520511487,"TR"],[520560640,520562687,"TR"],[521024512,521024767,"TR"],[521030400,521030655,"TR"],[521775104,521777151,"TR"],[522771456,522772479,"TR"],[522773504,522774527,"TR"],[523026432,523030527,"TR"],[529268736,529530879,"TR"],[529596416,529661951,"TR"],[530251776,530317311,"TR"],[531185664,531193855,"TR"],[531628032,531660799,"TR"],[531726336,531759103,"TR"],[532283392,532291583,"TR"],[532729856,532731903,"TR"],[533200896,533233663,"TR"],[533594112,533659647,"TR"],[533680128,533682175,"TR"],[533859584,533860095,"TR"],[533864448,533889023,"TR"],[533895168,533897215,"TR"],[534708224,534740991,"TR"],[576962560,576963071,"TR"],[577209856,577210367,"TR"],[577228800,577229311,"TR"],[577239040,577239295,"TR"],[621398016,621400063,"TR"],[621961216,621962239,"TR"],[623691776,623692799,"TR"],[624562176,624563199,"TR"],[624563456,624564223,"TR"],[625487872,625491967,"TR"],[625674240,625676287,"TR"],[625803264,625811455,"TR"],[628787200,628789247,"TR"],[628809728,628813823,"TR"],[628817920,628834303,"TR"],[628842496,628844543,"TR"],[629293056,629309439,"TR"],[629405696,629407743,"TR"],[629985280,629987327,"TR"],[630509568,630511615,"TR"],[630736896,630737663,"TR"],[630737920,630738175,"TR"],[630849536,630980607,"TR"],[631043584,631043839,"TR"],[634007552,634009599,"TR"],[634191872,634193919,"TR"],[635259904,635260927,"TR"],[635856896,635858943,"TR"],[636176384,636178431,"TR"],[636882944,636884991,"TR"],[636901376,636902399,"TR"],[636921856,636922111,"TR"],[636968960,636974079,"TR"],[636974848,636975103,"TR"],[736214784,736215039,"TR"],[755505152,755505407,"TR"],[755644416,755645439,"TR"],[755648512,755650559,"TR"],[755667968,755668991,"TR"],[755694592,755695615,"TR"],[755705856,755706879,"TR"],[755720192,755721215,"TR"],[755746816,755747839,"TR"],[755766272,755767295,"TR"],[755774464,755775487,"TR"],[755782656,755783679,"TR"],[755900416,755901439,"TR"],[759404544,759405567,"TR"],[759425024,759426047,"TR"],[760261632,760262655,"TR"],[760308736,760309759,"TR"],[760318976,760319999,"TR"],[760372224,760373247,"TR"],[760384512,760385535,"TR"],[760422400,760423423,"TR"],[760483840,760484863,"TR"],[760527872,760528895,"TR"],[760624128,760625151,"TR"],[760641024,760641535,"TR"],[760750080,760751103,"TR"],[760819712,760820735,"TR"],[760867840,760868863,"TR"],[760910848,760911871,"TR"],[760976384,760977407,"TR"],[761003008,761004031,"TR"],[761031168,761031423,"TR"],[761132032,761133055,"TR"],[761136128,761137151,"TR"],[761155584,761156607,"TR"],[761172992,761174015,"TR"],[761197568,761198591,"TR"],[761212928,761213951,"TR"],[763065344,763066367,"TR"],[763459584,763460607,"TR"],[763497472,763498495,"TR"],[763534336,763535359,"TR"],[763559936,763560959,"TR"],[763588608,763589631,"TR"],[763596800,763597823,"TR"],[763610112,763611135,"TR"],[763700224,763701247,"TR"],[763702272,763703295,"TR"],[763805696,763806719,"TR"],[763810816,763811839,"TR"],[763874304,763875327,"TR"],[763888640,763889663,"TR"],[763914240,763915263,"TR"],[763926528,763927551,"TR"],[763941888,763942911,"TR"],[764024832,764025855,"TR"],[764050432,764051455,"TR"],[764051712,764052223,"TR"],[764135424,764137471,"TR"],[764140544,764141567,"TR"],[764253184,764254207,"TR"],[764272640,764273663,"TR"],[764348416,764349439,"TR"],[764371200,764371455,"TR"],[764394496,764395519,"TR"],[764439552,764440575,"TR"],[764482560,764483583,"TR"],[764484608,764485631,"TR"],[764517376,764518399,"TR"],[764612608,764613631,"TR"],[764619776,764620799,"TR"],[764873728,764874751,"TR"],[764887040,764888063,"TR"],[764934144,764935167,"TR"],[765065216,765066239,"TR"],[765151232,765152255,"TR"],[765164544,765165567,"TR"],[765201408,765202431,"TR"],[765205504,765206527,"TR"],[765216768,765217791,"TR"],[765332480,765333503,"TR"],[765364224,765365247,"TR"],[765402112,765403135,"TR"],[771817472,771948543,"TR"],[772898816,772900863,"TR"],[773062656,773066751,"TR"],[773099520,773102591,"TR"],[773102848,773103615,"TR"],[773646336,773648383,"TR"],[773763072,773765119,"TR"],[773803008,773804031,"TR"],[773812224,773814271,"TR"],[773820416,773822463,"TR"],[773996544,773996799,"TR"],[774003200,774003711,"TR"],[774280192,774280447,"TR"],[774280704,774281215,"TR"],[774733824,774750207,"TR"],[778463744,778463999,"TR"],[778567680,778633215,"TR"],[778698752,778764287,"TR"],[781557760,781558783,"TR"],[781844480,781975551,"TR"],[783695872,783697919,"TR"],[784596992,784728063,"TR"],[786235392,786300927,"TR"],[787087360,787095551,"TR"],[787154944,787156991,"TR"],[787849216,787851263,"TR"],[788291584,788294655,"TR"],[788294912,788295679,"TR"],[788410368,788412415,"TR"],[962260992,962265087,"TR"],[962494464,962498559,"TR"],[1042087936,1042120703,"TR"],[1047281664,1047289855,"TR"],[1048914944,1048915967,"TR"],[1052123136,1052124159,"TR"],[1056227328,1056243711,"TR"],[1056440320,1056473087,"TR"],[1088955648,1088956415,"TR"],[1118962944,1118963199,"TR"],[1224187904,1224188927,"TR"],[1296611328,1296613375,"TR"],[1296685056,1296687103,"TR"],[1296769024,1296771071,"TR"],[1296816128,1296818175,"TR"],[1297039360,1297055743,"TR"],[1297318912,1297319167,"TR"],[1297319424,1297319935,"TR"],[1297336320,1297337343,"TR"],[1297874944,1297883135,"TR"],[1297899520,1297915903,"TR"],[1299185408,1299185663,"TR"],[1306492928,1306497023,"TR"],[1306497536,1306501119,"TR"],[1307938816,1307942911,"TR"],[1308063744,1308064767,"TR"],[1311301632,1311303679,"TR"],[1315921920,1315926015,"TR"],[1317470208,1317485567,"TR"],[1317485824,1317502975,"TR"],[1317982208,1317983231,"TR"],[1319108608,1321205759,"TR"],[1331855360,1331857407,"TR"],[1331933184,1331935231,"TR"],[1333493760,1333526527,"TR"],[1334784768,1334785023,"TR"],[1336584192,1336586239,"TR"],[1336610816,1336612863,"TR"],[1336803328,1336804351,"TR"],[1348325376,1348329471,"TR"],[1357333504,1357333759,"TR"],[1358635008,1358639103,"TR"],[1358819328,1358823423,"TR"],[1359364096,1359380479,"TR"],[1359478784,1359511551,"TR"],[1360371712,1360375807,"TR"],[1360420864,1360424959,"TR"],[1360987136,1360987391,"TR"],[1372848128,1373110271,"TR"],[1385291776,1385299967,"TR"],[1385578496,1385586687,"TR"],[1385660416,1385668607,"TR"],[1390280704,1390346239,"TR"],[1396834304,1396899839,"TR"],[1401458688,1401459711,"TR"],[1402393600,1402394623,"TR"],[1403778048,1403779071,"TR"],[1410416640,1410424831,"TR"],[1412169728,1412202495,"TR"],[1412628480,1412644863,"TR"],[1412825088,1412826111,"TR"],[1412828160,1412828927,"TR"],[1425821696,1425822719,"TR"],[1425824768,1425825791,"TR"],[1426624512,1426625535,"TR"],[1426626560,1426629631,"TR"],[1427963904,1427980287,"TR"],[1428126976,1428127231,"TR"],[1432346624,1432347903,"TR"],[1432348160,1432351999,"TR"],[1432352768,1432353279,"TR"],[1432353792,1432354047,"TR"],[1432354816,1433403391,"TR"],[1433411072,1433411327,"TR"],[1433608192,1433608447,"TR"],[1433791488,1433792511,"TR"],[1433870336,1433872383,"TR"],[1433878528,1433880575,"TR"],[1436090624,1436094975,"TR"],[1436095232,1436105471,"TR"],[1436105728,1436107007,"TR"],[1436107520,1436107775,"TR"],[1436115968,1436116991,"TR"],[1436123136,1436155903,"TR"],[1436442624,1436444671,"TR"],[1436499968,1436504063,"TR"],[1439711232,1439712255,"TR"],[1439745024,1439746047,"TR"],[1439802368,1439803391,"TR"],[1441485824,1441486847,"TR"],[1449659904,1449660159,"TR"],[1449818624,1449818879,"TR"],[1449951232,1449983999,"TR"],[1475927296,1475927551,"TR"],[1475927808,1475928063,"TR"],[1476067328,1476075519,"TR"],[1489861632,1489861887,"TR"],[1490203648,1490203903,"TR"],[1490429952,1490430975,"TR"],[1490714624,1490715647,"TR"],[1491075072,1493172223,"TR"],[1494417408,1494425599,"TR"],[1495479296,1495479551,"TR"],[1495997440,1495998463,"TR"],[1496006656,1496007679,"TR"],[1496010240,1496010495,"TR"],[1496145408,1496145663,"TR"],[1500119040,1500127231,"TR"],[1500241920,1500243967,"TR"],[1502722048,1502724095,"TR"],[1506334720,1506335743,"TR"],[1506741248,1506742271,"TR"],[1509720064,1509736447,"TR"],[1520304128,1520435199,"TR"],[1532821504,1532887039,"TR"],[1533452288,1533454335,"TR"],[1533923328,1533924607,"TR"],[1536069120,1536069375,"TR"],[1536553472,1536553727,"TR"],[1536643072,1536645119,"TR"],[1536645632,1536646655,"TR"],[1539096576,1539097599,"TR"],[1539099648,1539100671,"TR"],[1539102720,1539103743,"TR"],[1539284992,1539289087,"TR"],[1539453952,1539454975,"TR"],[1539541504,1539542015,"TR"],[1539647488,1539648511,"TR"],[1539715328,1539715583,"TR"],[1539718400,1539718655,"TR"],[1539734528,1539734783,"TR"],[1539787008,1539787263,"TR"],[1539796736,1539796991,"TR"],[1539817216,1539817471,"TR"],[1540172032,1540172287,"TR"],[1540373760,1540374015,"TR"],[1540376064,1540376319,"TR"],[1540409088,1540409343,"TR"],[1540652544,1540652799,"TR"],[1540665856,1540666111,"TR"],[1540686080,1540686335,"TR"],[1540748544,1540748799,"TR"],[1540750592,1540751103,"TR"],[1540905728,1540905983,"TR"],[1540907520,1540907775,"TR"],[1540912896,1540913151,"TR"],[1540920320,1540920575,"TR"],[1540925952,1540926207,"TR"],[1540933888,1540934143,"TR"],[1540939520,1540939775,"TR"],[1540985600,1540985855,"TR"],[1540997376,1540997631,"TR"],[1541008896,1541009151,"TR"],[1541157376,1541157631,"TR"],[1541161216,1541161471,"TR"],[1541191168,1541191423,"TR"],[1541206528,1541206783,"TR"],[1541341184,1541341439,"TR"],[1541343232,1541343487,"TR"],[1541381376,1541381631,"TR"],[1541450240,1541450495,"TR"],[1541594368,1541594623,"TR"],[1541604352,1541605119,"TR"],[1541712128,1541712383,"TR"],[1541734144,1541734399,"TR"],[1541743104,1541743615,"TR"],[1541745664,1541746175,"TR"],[1541774080,1541774335,"TR"],[1541781504,1541781759,"TR"],[1541818624,1541818879,"TR"],[1541820672,1541820927,"TR"],[1541821696,1541821951,"TR"],[1541838080,1541838335,"TR"],[1541975552,1541975807,"TR"],[1542017024,1542017279,"TR"],[1542144000,1542144255,"TR"],[1542154240,1542154751,"TR"],[1542313984,1542314495,"TR"],[1542441984,1542442239,"TR"],[1542451712,1542451967,"TR"],[1542461952,1542462207,"TR"],[1542464768,1542465023,"TR"],[1542482944,1542483199,"TR"],[1542533120,1542534143,"TR"],[1542747136,1542747391,"TR"],[1542767616,1542768639,"TR"],[1542775296,1542775807,"TR"],[1542780416,1542780671,"TR"],[1546030592,1546030847,"TR"],[1546040320,1546040831,"TR"],[1546264576,1546266623,"TR"],[1546387456,1546518527,"TR"],[1547501568,1547505663,"TR"],[1547632640,1547636735,"TR"],[1548180992,1548181503,"TR"],[1551316992,1551317247,"TR"],[1551322112,1551323135,"TR"],[1559837696,1559838719,"TR"],[1566117888,1566121983,"TR"],[1566130176,1566134271,"TR"],[1566171136,1566175231,"TR"],[1566261248,1566265343,"TR"],[1566382080,1566384127,"TR"],[1566452224,1566452479,"TR"],[1566490624,1566492671,"TR"],[1566504960,1566507007,"TR"],[1566552064,1566554111,"TR"],[1567702016,1567703039,"TR"],[1567711232,1567711487,"TR"],[1567785472,1567785727,"TR"],[1567820288,1567820543,"TR"],[1567837184,1567838207,"TR"],[1570439168,1570471935,"TR"],[1570618368,1570619391,"TR"],[1571906560,1571907583,"TR"],[1572111360,1572112383,"TR"],[1572225024,1572241407,"TR"],[1572376576,1572380671,"TR"],[1572499456,1572503551,"TR"],[1572504576,1572504831,"TR"],[1572552704,1572554751,"TR"],[1572587520,1572589567,"TR"],[1572734976,1572737023,"TR"],[1572763648,1572765695,"TR"],[1572788224,1572790271,"TR"],[1580072960,1580075007,"TR"],[1580081152,1580083199,"TR"],[1580597248,1580728319,"TR"],[1581875200,1581891583,"TR"],[1582186496,1582202879,"TR"],[1583697920,1583702015,"TR"],[1583742976,1583747071,"TR"],[1583759360,1583763455,"TR"],[1583766016,1583766527,"TR"],[1583816704,1583820799,"TR"],[1584922624,1585184767,"TR"],[1586151424,1586159615,"TR"],[1590108160,1590110207,"TR"],[1590151168,1590153215,"TR"],[1592246272,1592246527,"TR"],[1592459264,1592524799,"TR"],[1593835520,1594884095,"TR"],[1598128128,1598160895,"TR"],[1598455808,1598488575,"TR"],[1600458240,1600458751,"TR"],[1602238464,1602240511,"TR"],[1602398208,1602400255,"TR"],[1603174400,1603178495,"TR"],[1605173248,1605181439,"TR"],[1605214208,1605222399,"TR"],[1605230592,1605238783,"TR"],[1605861376,1605894143,"TR"],[1607878656,1607878911,"TR"],[1607879168,1607879423,"TR"],[1607884800,1607885823,"TR"],[1736609792,1736610815,"TR"],[1749172224,1749180415,"TR"],[1750515200,1750515711,"TR"],[1750532096,1750533119,"TR"],[1753524224,1753524479,"TR"],[1760420864,1760421119,"TR"],[1805016576,1805017087,"TR"],[1805034752,1805035007,"TR"],[1833433088,1833434111,"TR"],[1834931200,1834932223,"TR"],[1843707904,1843724287,"TR"],[1843976192,1843978239,"TR"],[1844180992,1844183039,"TR"],[1844195328,1844196351,"TR"],[2153425152,2153425407,"TR"],[2153428736,2153428991,"TR"],[2155849728,2155851775,"TR"],[2173992960,2174025727,"TR"],[2249443328,2249445375,"TR"],[2296700416,2296700671,"TR"],[2333869056,2333870079,"TR"],[2333872128,2333873151,"TR"],[2333876224,2333877247,"TR"],[2333880320,2333881343,"TR"],[2333894656,2333895679,"TR"],[2333922304,2333923327,"TR"],[2333929472,2333930495,"TR"],[2343763968,2343829503,"TR"],[2372022272,2372023295,"TR"],[2372038656,2372040703,"TR"],[2372055040,2372056063,"TR"],[2372062208,2372063231,"TR"],[2378432512,2378498047,"TR"],[2423914496,2423980031,"TR"],[2433636864,2433637119,"TR"],[2499805184,2499870719,"TR"],[2500733952,2500734207,"TR"],[2508980224,2509045759,"TR"],[2523652096,2523652863,"TR"],[2542206976,2542272511,"TR"],[2549743616,2549809151,"TR"],[2555978752,2555979775,"TR"],[2615083008,2615148543,"TR"],[2645000192,2645000447,"TR"],[2653859840,2653860863,"TR"],[2653862912,2653863935,"TR"],[2668904448,2668912639,"TR"],[2668916736,2668918783,"TR"],[2674146304,2674147327,"TR"],[2677145600,2677178367,"TR"],[2684166144,2684170239,"TR"],[2684178432,2684180479,"TR"],[2685692928,2685693951,"TR"],[2689269760,2689335295,"TR"],[2689802752,2689803263,"TR"],[2689839104,2689839615,"TR"],[2701721600,2701787135,"TR"],[2827681792,2827747327,"TR"],[2867683072,2867683327,"TR"],[2870360064,2870361087,"TR"],[2870392832,2870393855,"TR"],[2870402048,2870403071,"TR"],[2890232832,2890233855,"TR"],[2891854080,2891854335,"TR"],[2954756096,2954821631,"TR"],[2954952704,2955018239,"TR"],[2955411456,2955673599,"TR"],[2956242944,2956243967,"TR"],[2956263424,2956296191,"TR"],[2956303360,2956304383,"TR"],[2956328960,2956460031,"TR"],[2958557184,2958819327,"TR"],[2959222784,2959223807,"TR"],[2959729664,2959730687,"TR"],[2960482304,2960484351,"TR"],[2961040384,2961041407,"TR"],[2966945792,2967273471,"TR"],[2967666688,2967699455,"TR"],[2967994368,2968584191,"TR"],[2987573248,2987577343,"TR"],[2987712512,2987714559,"TR"],[2987789312,2987789567,"TR"],[2991576832,2991577087,"TR"],[2995007488,2995009535,"TR"],[2996635648,2996637695,"TR"],[2997525504,2997526527,"TR"],[2997532160,2997533183,"TR"],[2997559296,2997560831,"TR"],[2997563392,2997564415,"TR"],[2997564928,2997565439,"TR"],[2997566464,2997567487,"TR"],[2997577472,2997577727,"TR"],[2997577984,2997578239,"TR"],[2997581312,2997581823,"TR"],[3000147968,3000156159,"TR"],[3000180736,3000188927,"TR"],[3000626176,3000627199,"TR"],[3001614336,3001679871,"TR"],[3001888768,3001889791,"TR"],[3002073088,3002597375,"TR"],[3002750976,3002753023,"TR"],[3002804224,3002806271,"TR"],[3103862784,3103863039,"TR"],[3103884288,3103884543,"TR"],[3103890944,3103891199,"TR"],[3103961088,3103961343,"TR"],[3103995904,3103996927,"TR"],[3104064512,3104065535,"TR"],[3104100352,3104101375,"TR"],[3104104448,3104104703,"TR"],[3104104960,3104105471,"TR"],[3104157696,3104158719,"TR"],[3104243712,3104244735,"TR"],[3104288768,3104289791,"TR"],[3104312320,3104313343,"TR"],[3104317440,3104318463,"TR"],[3104342016,3104343039,"TR"],[3104384000,3104384767,"TR"],[3104414720,3104415743,"TR"],[3104431104,3104432127,"TR"],[3104508928,3104509951,"TR"],[3104560128,3104561151,"TR"],[3104569344,3104570367,"TR"],[3104599040,3104600063,"TR"],[3104651264,3104652287,"TR"],[3104707584,3104708607,"TR"],[3104718848,3104719871,"TR"],[3104746496,3104747519,"TR"],[3104778240,3104779263,"TR"],[3104818176,3104819199,"TR"],[3104893952,3104894975,"TR"],[3104927744,3104928767,"TR"],[3104933888,3104934911,"TR"],[3105050624,3105051647,"TR"],[3105053696,3105054719,"TR"],[3105069056,3105070079,"TR"],[3105162240,3105163263,"TR"],[3105213440,3105214463,"TR"],[3105252352,3105253375,"TR"],[3105267712,3105268735,"TR"],[3105273856,3105274879,"TR"],[3105290240,3105291263,"TR"],[3105310720,3105311743,"TR"],[3105338624,3105338879,"TR"],[3105339136,3105339391,"TR"],[3105389568,3105390591,"TR"],[3105448960,3105449983,"TR"],[3105506304,3105507327,"TR"],[3105525760,3105526783,"TR"],[3105619968,3105620991,"TR"],[3105635328,3105636351,"TR"],[3105653760,3105654783,"TR"],[3105660928,3105661951,"TR"],[3105716224,3105717247,"TR"],[3105734656,3105735679,"TR"],[3105885184,3105886207,"TR"],[3105963008,3105964031,"TR"],[3105980416,3105981439,"TR"],[3106007040,3106008063,"TR"],[3106045952,3106046975,"TR"],[3106083840,3106084863,"TR"],[3106236160,3106236415,"TR"],[3106424832,3106425855,"TR"],[3106427904,3106428927,"TR"],[3106581504,3106582527,"TR"],[3106661376,3106662399,"TR"],[3106717696,3106718719,"TR"],[3106809856,3106810879,"TR"],[3106812928,3106813951,"TR"],[3106936832,3106937855,"TR"],[3106976768,3106977791,"TR"],[3106984960,3106985983,"TR"],[3107007488,3107008511,"TR"],[3107028992,3107030015,"TR"],[3107079168,3107080191,"TR"],[3107136512,3107137535,"TR"],[3107155968,3107156991,"TR"],[3107251200,3107252223,"TR"],[3107273728,3107274751,"TR"],[3107346432,3107347455,"TR"],[3107515392,3107516159,"TR"],[3107536896,3107537919,"TR"],[3107582976,3107583999,"TR"],[3107648512,3107649535,"TR"],[3107658752,3107659775,"TR"],[3107662848,3107663871,"TR"],[3107670016,3107671039,"TR"],[3107774464,3107775487,"TR"],[3107793920,3107794943,"TR"],[3107944448,3107945471,"TR"],[3107999744,3108000767,"TR"],[3108062208,3108063231,"TR"],[3108097024,3108098047,"TR"],[3108142080,3108143103,"TR"],[3108184064,3108185087,"TR"],[3108206592,3108208639,"TR"],[3108228096,3108229119,"TR"],[3108297728,3108298751,"TR"],[3108393984,3108395007,"TR"],[3108397056,3108398079,"TR"],[3108408320,3108409343,"TR"],[3108467712,3108468735,"TR"],[3108601856,3108602879,"TR"],[3108620288,3108621311,"TR"],[3108639744,3108639999,"TR"],[3108804608,3108805631,"TR"],[3108806400,3108806655,"TR"],[3108815872,3108817919,"TR"],[3108831232,3108832255,"TR"],[3108853760,3108854783,"TR"],[3108918272,3108919295,"TR"],[3108965376,3108966399,"TR"],[3109032960,3109033983,"TR"],[3109046272,3109047295,"TR"],[3109062656,3109063679,"TR"],[3109101568,3109102591,"TR"],[3109132288,3109133311,"TR"],[3109153792,3109154815,"TR"],[3109215232,3109216255,"TR"],[3109223424,3109224447,"TR"],[3109261312,3109262335,"TR"],[3109286912,3109287935,"TR"],[3109336064,3109337087,"TR"],[3109373952,3109374975,"TR"],[3109382144,3109383167,"TR"],[3109403648,3109404671,"TR"],[3109407744,3109408767,"TR"],[3109415936,3109416959,"TR"],[3109422080,3109423103,"TR"],[3109424128,3109425151,"TR"],[3109441536,3109442559,"TR"],[3109459968,3109460991,"TR"],[3109463040,3109464063,"TR"],[3109483520,3109484543,"TR"],[3109492736,3109493759,"TR"],[3109517312,3109518335,"TR"],[3109530624,3109531647,"TR"],[3109551104,3109552127,"TR"],[3109553152,3109554175,"TR"],[3109585920,3109586943,"TR"],[3109596160,3109597183,"TR"],[3109681152,3109681407,"TR"],[3109684224,3109685247,"TR"],[3109704192,3109704703,"TR"],[3109744640,3109745663,"TR"],[3109814272,3109815295,"TR"],[3109817344,3109818367,"TR"],[3109868544,3109869567,"TR"],[3109893120,3109894143,"TR"],[3109897216,3109898239,"TR"],[3109943296,3109944319,"TR"],[3110010880,3110011903,"TR"],[3110032384,3110033407,"TR"],[3110052864,3110054911,"TR"],[3110105088,3110106111,"TR"],[3110111744,3110112255,"TR"],[3110119424,3110120447,"TR"],[3110125568,3110126591,"TR"],[3110144000,3110145023,"TR"],[3110222848,3110223871,"TR"],[3110262784,3110263807,"TR"],[3110272000,3110273023,"TR"],[3110278144,3110279167,"TR"],[3110323200,3110324223,"TR"],[3110378496,3110379007,"TR"],[3110379264,3110379519,"TR"],[3110478848,3110479871,"TR"],[3110585344,3110586367,"TR"],[3110605824,3110606847,"TR"],[3110736896,3110737919,"TR"],[3110785024,3110786047,"TR"],[3110831104,3110832127,"TR"],[3110894592,3110894847,"TR"],[3110935552,3110936575,"TR"],[3111055360,3111056383,"TR"],[3111065600,3111066623,"TR"],[3111118848,3111119615,"TR"],[3111121920,3111122943,"TR"],[3111143936,3111144191,"TR"],[3111192576,3111193599,"TR"],[3111195648,3111196671,"TR"],[3111246848,3111247871,"TR"],[3111261184,3111262207,"TR"],[3111305216,3111306239,"TR"],[3111311360,3111313407,"TR"],[3111331840,3111332863,"TR"],[3111374848,3111375871,"TR"],[3111383552,3111384063,"TR"],[3111416832,3111417087,"TR"],[3111426048,3111427071,"TR"],[3111452672,3111453695,"TR"],[3111478016,3111478271,"TR"],[3111483392,3111484415,"TR"],[3111554048,3111555071,"TR"],[3111563264,3111564287,"TR"],[3111567360,3111568383,"TR"],[3111604224,3111605247,"TR"],[3111650560,3111651071,"TR"],[3111746560,3111747583,"TR"],[3111783424,3111784447,"TR"],[3111790336,3111790591,"TR"],[3111831552,3111832575,"TR"],[3111845888,3111846911,"TR"],[3111859712,3111859967,"TR"],[3111871488,3111873535,"TR"],[3111932928,3111933951,"TR"],[3111985152,3111986175,"TR"],[3112087552,3112088575,"TR"],[3112097792,3112098815,"TR"],[3112202240,3112203263,"TR"],[3112243712,3112244223,"TR"],[3112318976,3112319999,"TR"],[3112382464,3112383487,"TR"],[3112423424,3112424447,"TR"],[3112466432,3112468479,"TR"],[3112613888,3112614911,"TR"],[3112642560,3112644607,"TR"],[3112659968,3112660991,"TR"],[3112688640,3112689663,"TR"],[3112712192,3112713215,"TR"],[3112719360,3112720383,"TR"],[3112750080,3112751103,"TR"],[3112785920,3112786943,"TR"],[3112809472,3112809727,"TR"],[3112817664,3112818687,"TR"],[3112850432,3112851455,"TR"],[3112944640,3112945663,"TR"],[3112991744,3112992767,"TR"],[3113033728,3113034751,"TR"],[3113053184,3113054207,"TR"],[3113080832,3113081855,"TR"],[3113175808,3113176063,"TR"],[3113225216,3113226239,"TR"],[3113241600,3113242623,"TR"],[3113285632,3113286655,"TR"],[3113375744,3113376767,"TR"],[3113395200,3113396223,"TR"],[3113492480,3113493503,"TR"],[3113505792,3113506815,"TR"],[3113545728,3113546751,"TR"],[3113575424,3113576447,"TR"],[3113613568,3113613823,"TR"],[3113615360,3113616383,"TR"],[3113648128,3113649151,"TR"],[3113667584,3113668607,"TR"],[3113751552,3113752575,"TR"],[3113768960,3113769983,"TR"],[3113778176,3113779199,"TR"],[3113783296,3113784319,"TR"],[3113868288,3113869311,"TR"],[3113870336,3113871359,"TR"],[3113875456,3113876479,"TR"],[3113910272,3113911295,"TR"],[3113980928,3113981951,"TR"],[3114009600,3114010623,"TR"],[3114015744,3114016767,"TR"],[3114084352,3114085375,"TR"],[3114126336,3114127359,"TR"],[3114179584,3114180607,"TR"],[3114223616,3114224639,"TR"],[3114234880,3114235903,"TR"],[3114277888,3114278911,"TR"],[3114299904,3114300159,"TR"],[3114320896,3114321919,"TR"],[3114363904,3114364415,"TR"],[3114377728,3114378239,"TR"],[3114420224,3114420735,"TR"],[3114438656,3114439679,"TR"],[3114475520,3114476543,"TR"],[3114500096,3114500351,"TR"],[3114500608,3114501119,"TR"],[3114504192,3114504703,"TR"],[3114561536,3114562047,"TR"],[3114603520,3114604543,"TR"],[3114609664,3114610175,"TR"],[3114669056,3114670079,"TR"],[3114744832,3114745855,"TR"],[3114803200,3114803455,"TR"],[3114833920,3114834943,"TR"],[3114873856,3114874879,"TR"],[3114876928,3114877951,"TR"],[3114893312,3114894335,"TR"],[3114906624,3114907647,"TR"],[3114966016,3114967039,"TR"],[3114970112,3114971135,"TR"],[3114991872,3114992383,"TR"],[3114997760,3114998783,"TR"],[3115014144,3115016191,"TR"],[3115094528,3115094783,"TR"],[3115170816,3115171839,"TR"],[3115193856,3115194111,"TR"],[3115195392,3115196415,"TR"],[3115205632,3115206655,"TR"],[3115426816,3115427839,"TR"],[3115511808,3115512831,"TR"],[3115522048,3115523071,"TR"],[3115588608,3115589631,"TR"],[3115679744,3115681791,"TR"],[3115700224,3115701247,"TR"],[3115760640,3115761663,"TR"],[3115772928,3115773951,"TR"],[3115820032,3115822079,"TR"],[3115849728,3115850751,"TR"],[3115896832,3115897855,"TR"],[3115924480,3115925503,"TR"],[3115937792,3115938815,"TR"],[3115968512,3115969535,"TR"],[3116002304,3116002815,"TR"],[3116044288,3116045311,"TR"],[3116066816,3116067839,"TR"],[3116087296,3116088319,"TR"],[3116114944,3116115967,"TR"],[3116127232,3116128255,"TR"],[3116138496,3116139519,"TR"],[3116142592,3116143615,"TR"],[3116184576,3116185599,"TR"],[3116204032,3116205055,"TR"],[3116434432,3116435455,"TR"],[3116475392,3116476415,"TR"],[3116542976,3116543999,"TR"],[3116576768,3116577791,"TR"],[3116583936,3116584959,"TR"],[3116622848,3116623871,"TR"],[3116628992,3116630015,"TR"],[3116727296,3116728319,"TR"],[3116745728,3116746751,"TR"],[3116774400,3116775423,"TR"],[3116779520,3116780543,"TR"],[3116792832,3116793855,"TR"],[3116811264,3116812287,"TR"],[3116849152,3116850175,"TR"],[3116897280,3116898303,"TR"],[3116899328,3116900351,"TR"],[3116901376,3116902399,"TR"],[3116991488,3116992511,"TR"],[3117011968,3117012991,"TR"],[3117014016,3117015039,"TR"],[3117084672,3117085695,"TR"],[3117097216,3117097983,"TR"],[3117131776,3117132799,"TR"],[3117172736,3117173759,"TR"],[3117212672,3117214719,"TR"],[3117223936,3117224959,"TR"],[3117243392,3117244415,"TR"],[3117360128,3117361151,"TR"],[3117365248,3117366271,"TR"],[3117396736,3117396991,"TR"],[3117442048,3117443071,"TR"],[3117444096,3117445119,"TR"],[3117571072,3117572095,"TR"],[3117612032,3117613055,"TR"],[3117787136,3117788159,"TR"],[3117857792,3117858815,"TR"],[3117886464,3117887487,"TR"],[3117969408,3117970431,"TR"],[3118127104,3118128127,"TR"],[3118134272,3118135295,"TR"],[3118171136,3118172159,"TR"],[3118182400,3118183423,"TR"],[3118217728,3118218239,"TR"],[3118241792,3118242815,"TR"],[3118465024,3118466047,"TR"],[3118539776,3118540799,"TR"],[3118572544,3118573567,"TR"],[3118619648,3118619903,"TR"],[3118620160,3118620415,"TR"],[3118637056,3118638079,"TR"],[3118646272,3118647295,"TR"],[3118696960,3118697215,"TR"],[3118707712,3118708735,"TR"],[3118795776,3118796799,"TR"],[3118951424,3118952447,"TR"],[3118981120,3118982143,"TR"],[3119087616,3119087871,"TR"],[3119110912,3119111167,"TR"],[3119117312,3119118335,"TR"],[3119197184,3119198207,"TR"],[3119334400,3119335423,"TR"],[3119337472,3119338495,"TR"],[3119365120,3119366143,"TR"],[3119375360,3119376383,"TR"],[3119389696,3119390719,"TR"],[3119392768,3119393791,"TR"],[3119597568,3119598591,"TR"],[3119604736,3119605759,"TR"],[3119613952,3119614975,"TR"],[3119685632,3119686655,"TR"],[3119756288,3119757055,"TR"],[3119805440,3119806463,"TR"],[3119813376,3119813631,"TR"],[3120007168,3120008191,"TR"],[3120040960,3120041983,"TR"],[3120052224,3120053247,"TR"],[3120061440,3120062463,"TR"],[3120065536,3120066559,"TR"],[3120125952,3120126975,"TR"],[3120154624,3120155647,"TR"],[3120218112,3120219135,"TR"],[3120222208,3120223231,"TR"],[3120230400,3120231423,"TR"],[3120242688,3120243711,"TR"],[3120244736,3120245759,"TR"],[3120250880,3120251903,"TR"],[3120293888,3120294143,"TR"],[3120310272,3120311295,"TR"],[3120328704,3120329727,"TR"],[3120396288,3120396799,"TR"],[3120438272,3120439295,"TR"],[3120444416,3120445439,"TR"],[3120454656,3120455679,"TR"],[3120491520,3120492543,"TR"],[3120520192,3120521215,"TR"],[3120536064,3120536319,"TR"],[3120540672,3120541695,"TR"],[3154313216,3154378751,"TR"],[3156606976,3156672511,"TR"],[3156803584,3156869119,"TR"],[3157786624,3158048767,"TR"],[3161915392,3161931775,"TR"],[3161943040,3161944063,"TR"],[3161988096,3161988351,"TR"],[3161988608,3161988863,"TR"],[3161990144,3161992191,"TR"],[3162243072,3162251263,"TR"],[3162349568,3162353663,"TR"],[3162800128,3162832895,"TR"],[3164893184,3164894463,"TR"],[3164894720,3164895231,"TR"],[3164895488,3164895999,"TR"],[3164896256,3164897279,"TR"],[3166595072,3166596095,"TR"],[3166599168,3166600191,"TR"],[3167798272,3167798783,"TR"],[3168084480,3168084735,"TR"],[3225847040,3225847551,"TR"],[3229701888,3229702143,"TR"],[3231716608,3231716863,"TR"],[3232114688,3232115711,"TR"],[3239117824,3239118847,"TR"],[3239549952,3239550207,"TR"],[3239672832,3239673343,"TR"],[3239895296,3239895551,"TR"],[3240064000,3240065023,"TR"],[3240113408,3240113663,"TR"],[3240113920,3240114175,"TR"],[3240114432,3240114687,"TR"],[3240172800,3240173055,"TR"],[3240207360,3240207871,"TR"],[3240217600,3240218111,"TR"],[3240264704,3240265215,"TR"],[3240283392,3240283647,"TR"],[3240335360,3240336383,"TR"],[3240347648,3240348671,"TR"],[3240361984,3240362239,"TR"],[3240371968,3240372223,"TR"],[3240377344,3240378367,"TR"],[3240409088,3240409343,"TR"],[3240462080,3240462335,"TR"],[3240466944,3240467199,"TR"],[3240578560,3240578815,"TR"],[3240593664,3240594175,"TR"],[3240613120,3240613375,"TR"],[3240690176,3240690687,"TR"],[3240747264,3240747519,"TR"],[3240769536,3240770559,"TR"],[3240780800,3240781823,"TR"],[3240810496,3240810751,"TR"],[3241097216,3241098239,"TR"],[3241498368,3241498623,"TR"],[3241501184,3241501439,"TR"],[3241502464,3241502719,"TR"],[3241538816,3241539071,"TR"],[3241864192,3241864447,"TR"],[3244821760,3244822015,"TR"],[3244846336,3244846591,"TR"],[3244850176,3244850431,"TR"],[3244853760,3244854015,"TR"],[3244869888,3244870143,"TR"],[3244937984,3244938239,"TR"],[3244943872,3244944127,"TR"],[3244945408,3244945663,"TR"],[3244946176,3244946431,"TR"],[3245135104,3245135359,"TR"],[3245180416,3245180927,"TR"],[3245255168,3245255679,"TR"],[3245264896,3245266943,"TR"],[3245295872,3245296127,"TR"],[3245296640,3245297663,"TR"],[3247076352,3247076607,"TR"],[3247177728,3247243263,"TR"],[3247432192,3247432447,"TR"],[3247712256,3247713279,"TR"],[3248524288,3248526335,"TR"],[3248543232,3248543743,"TR"],[3248544768,3248545791,"TR"],[3248751616,3248752639,"TR"],[3248752896,3248753151,"TR"],[3249051648,3249052671,"TR"],[3249063936,3249064959,"TR"],[3249091072,3249091327,"TR"],[3249139200,3249139711,"TR"],[3249142272,3249142783,"TR"],[3250245632,3250245887,"TR"],[3250291712,3250292735,"TR"],[3250293760,3250294783,"TR"],[3250327552,3250328575,"TR"],[3250425344,3250425599,"TR"],[3250610176,3250618367,"TR"],[3251153408,3251153663,"TR"],[3251155968,3251156223,"TR"],[3251158016,3251158271,"TR"],[3251245568,3251245823,"TR"],[3251271680,3251271935,"TR"],[3252299776,3252300031,"TR"],[3252300544,3252300799,"TR"],[3252316416,3252316671,"TR"],[3252318464,3252318719,"TR"],[3252320512,3252320767,"TR"],[3252636672,3252636927,"TR"],[3252643840,3252644863,"TR"],[3253606656,3253606911,"TR"],[3253977088,3253985279,"TR"],[3254707200,3254707711,"TR"],[3254713344,3254713855,"TR"],[3254714368,3254779903,"TR"],[3254813184,3254813439,"TR"],[3254816256,3254816511,"TR"],[3254829312,3254829567,"TR"],[3254831616,3254831871,"TR"],[3254832896,3254833151,"TR"],[3254836480,3254836735,"TR"],[3254836992,3254837247,"TR"],[3254892544,3254892799,"TR"],[3254894592,3254894847,"TR"],[3254901248,3254901503,"TR"],[3254907904,3254908159,"TR"],[3255166976,3255167487,"TR"],[3255168000,3255168511,"TR"],[3255418624,3255418879,"TR"],[3255788544,3255789567,"TR"],[3256395776,3256396287,"TR"],[3256400896,3256401151,"TR"],[3256410112,3256410623,"TR"],[3256488960,3256489471,"TR"],[3256511488,3256511999,"TR"],[3256513024,3256513535,"TR"],[3256521984,3256522239,"TR"],[3256549376,3256614911,"TR"],[3256654848,3256655871,"TR"],[3256697600,3256697855,"TR"],[3256698368,3256698623,"TR"],[3256700928,3256701183,"TR"],[3256733696,3256735743,"TR"],[3256826624,3256826879,"TR"],[3256827904,3256828159,"TR"],[3256831744,3256831999,"TR"],[3256833792,3256834047,"TR"],[3256856576,3256857599,"TR"],[3256898560,3256899071,"TR"],[3257160704,3257161727,"TR"],[3257180160,3257180415,"TR"],[3257228288,3257229311,"TR"],[3257282560,3257284607,"TR"],[3257497600,3257498623,"TR"],[3258023424,3258023679,"TR"],[3258078208,3258078463,"TR"],[3258102528,3258102783,"TR"],[3258293248,3258294271,"TR"],[3258327040,3258335231,"TR"],[3258730752,3258731007,"TR"],[3258807296,3258808319,"TR"],[3258813440,3258813695,"TR"],[3258813952,3258814207,"TR"],[3258834944,3258835967,"TR"],[3258856448,3258857471,"TR"],[3261272064,3261273087,"TR"],[3261596672,3261597439,"TR"],[3261797888,3261798143,"TR"],[3261850880,3261851135,"TR"],[3261989120,3261989375,"TR"],[3261990656,3261990911,"TR"],[3261993728,3261993983,"TR"],[3262023168,3262023679,"TR"],[3262024192,3262024703,"TR"],[3262027264,3262027519,"TR"],[3262031872,3262032895,"TR"],[3262043392,3262043647,"TR"],[3262201088,3262201343,"TR"],[3262203392,3262203647,"TR"],[3262209024,3262209279,"TR"],[3262214656,3262214911,"TR"],[3262235136,3262235647,"TR"],[3262239232,3262239743,"TR"],[3262440448,3262440959,"TR"],[3262442496,3262443007,"TR"],[3263031296,3263032319,"TR"],[3263096320,3263096575,"TR"],[3264013056,3264013311,"TR"],[3264317440,3264318463,"TR"],[3264354816,3264355071,"TR"],[3264357376,3264357631,"TR"],[3264360192,3264360447,"TR"],[3264360960,3264361215,"TR"],[3264388096,3264389119,"TR"],[3265045760,3265046015,"TR"],[3265063936,3265064959,"TR"],[3265886208,3265887231,"TR"],[3267044608,3267045119,"TR"],[3270647808,3270648063,"TR"],[3270982400,3270982655,"TR"],[3272109312,3272109567,"TR"],[3272948224,3272948735,"TR"],[3273768960,3273785343,"TR"],[3274170368,3274170879,"TR"],[3274371072,3274372095,"TR"],[3274604544,3274612735,"TR"],[3274823680,3274825727,"TR"],[3274828800,3274829823,"TR"],[3275629312,3275629567,"TR"],[3276879360,3276879871,"TR"],[3277179136,3277179391,"TR"],[3277180160,3277180415,"TR"],[3277180672,3277180927,"TR"],[3277181952,3277182207,"TR"],[3277182976,3277183231,"TR"],[3277189632,3277189887,"TR"],[3277192960,3277193215,"TR"],[3277258752,3277324287,"TR"],[3277330432,3277330943,"TR"],[3277338624,3277339135,"TR"],[3277821184,3277821439,"TR"],[3277824000,3277824255,"TR"],[3277828864,3277829119,"TR"],[3278929920,3278938111,"TR"],[3279953920,3279955967,"TR"],[3280592384,3280592895,"TR"],[3280782336,3280783359,"TR"],[3280863232,3280889855,"TR"],[3280890112,3280903167,"TR"],[3280904192,3280917503,"TR"],[3280918528,3280928767,"TR"],[3280953344,3280953855,"TR"],[3281343744,3281343999,"TR"],[3281351680,3281351935,"TR"],[3281731584,3281780735,"TR"],[3282960384,3283055615,"TR"],[3283055872,3283091455,"TR"],[3283209728,3283210239,"TR"],[3283215872,3283216383,"TR"],[3283249152,3283249663,"TR"],[3283491072,3283491327,"TR"],[3283495424,3283495679,"TR"],[3284014080,3284014335,"TR"],[3284104704,3284105215,"TR"],[3284721152,3284721407,"TR"],[3285117952,3285118207,"TR"],[3285614592,3285630975,"TR"],[3285745664,3285746687,"TR"],[3285772288,3285772543,"TR"],[3286418432,3286418687,"TR"],[3286424832,3286425087,"TR"],[3286934784,3286935039,"TR"],[3287556096,3287564287,"TR"],[3287671552,3287671807,"TR"],[3428606208,3428606463,"TR"],[3487922688,3487922943,"TR"],[3498019328,3498019583,"TR"],[3519945472,3519945727,"TR"],[3556950016,3556958207,"TR"],[3557588992,3557597183,"TR"],[3557752832,3557761023,"TR"],[3558686720,3558703103,"TR"],[3558801408,3558809599,"TR"],[3560054784,3560062975,"TR"],[3560505344,3560513535,"TR"],[3560570880,3560579071,"TR"],[3560706560,3560706815,"TR"],[3561013248,3561021439,"TR"],[3561062400,3561070591,"TR"],[3561234432,3561242623,"TR"],[3561325824,3561326079,"TR"],[3563192320,3563200511,"TR"],[3563241472,3563257855,"TR"],[3563413504,3563421695,"TR"],[3563480832,3563481087,"TR"],[3563534336,3563535359,"TR"],[3563782144,3563783167,"TR"],[3563880448,3563888639,"TR"],[3563937792,3563945983,"TR"],[3563970560,3563978751,"TR"],[3564306432,3564314623,"TR"],[3564961792,3564969983,"TR"],[3565117440,3565125631,"TR"],[3565518848,3565551615,"TR"],[3565747456,3565747711,"TR"],[3566370816,3566387199,"TR"],[3566862336,3566895103,"TR"],[3566993408,3567058943,"TR"],[3567586304,3567586815,"TR"],[3568173056,3568304127,"TR"],[3573284864,3573415935,"TR"],[3574464512,3574530047,"TR"],[3576365056,3576430591,"TR"],[3578396672,3578462207,"TR"],[3581952000,3581960191,"TR"],[3582706688,3582707199,"TR"],[3582713856,3582714879,"TR"],[3582885888,3582891519,"TR"],[3582892544,3582894079,"TR"],[3582976000,3582984191,"TR"],[3583008768,3583016959,"TR"],[3583262720,3583270911,"TR"],[3583606784,3583639551,"TR"],[3583729664,3583737855,"TR"],[3583967232,3583969279,"TR"],[3583974400,3583975423,"TR"],[3584131072,3584139263,"TR"],[3585769472,3585777663,"TR"],[3586277376,3586293759,"TR"],[3587375104,3587383295,"TR"],[3588387840,3588388863,"TR"],[3588751360,3588767743,"TR"],[3589177344,3589186559,"TR"],[3589186816,3589193727,"TR"],[3589472256,3589488639,"TR"],[3589832704,3589849087,"TR"],[3590225920,3590234111,"TR"],[3641210880,3641211903,"TR"],[3641250816,3641251839,"TR"],[3641806848,3641810687,"TR"],[3641888768,3641889791,"TR"],[3642407936,3642408959,"TR"],[3642744832,3642753023,"TR"],[3644903424,3644907519,"TR"],[3644960768,3644964863,"TR"],[3645165568,3645169663,"TR"],[3645511680,3645513727,"TR"],[3645792256,3645796351,"TR"],[3648307200,3648311295,"TR"],[3649241088,3649306623,"TR"],[3650225664,3650226175,"TR"],[3651780608,3651784703,"TR"],[3652067328,3652071423,"TR"],[3653484544,3653488639,"TR"]]')}});