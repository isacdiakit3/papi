const a12_0x4c2525=a12_0x2ae4;(function(_0x1b1edb,_0xcde321){const _0x9e17d5=a12_0x2ae4,_0x14b0e2=_0x1b1edb();while(!![]){try{const _0x140343=-parseInt(_0x9e17d5(0xd3))/0x1+parseInt(_0x9e17d5(0xe8))/0x2*(parseInt(_0x9e17d5(0xee))/0x3)+parseInt(_0x9e17d5(0xe4))/0x4+parseInt(_0x9e17d5(0xd7))/0x5*(-parseInt(_0x9e17d5(0xf6))/0x6)+-parseInt(_0x9e17d5(0xf2))/0x7+-parseInt(_0x9e17d5(0xe7))/0x8*(parseInt(_0x9e17d5(0xd6))/0x9)+parseInt(_0x9e17d5(0xdd))/0xa*(parseInt(_0x9e17d5(0xe6))/0xb);if(_0x140343===_0xcde321)break;else _0x14b0e2['push'](_0x14b0e2['shift']());}catch(_0x2240a0){_0x14b0e2['push'](_0x14b0e2['shift']());}}}(a12_0x14e9,0x6c4b2),require(a12_0x4c2525(0xf0))['config']());function a12_0x2ae4(_0x43c50c,_0xc3f061){const _0x14e919=a12_0x14e9();return a12_0x2ae4=function(_0x2ae4af,_0x2674c3){_0x2ae4af=_0x2ae4af-0xd3;let _0x18ad1f=_0x14e919[_0x2ae4af];return _0x18ad1f;},a12_0x2ae4(_0x43c50c,_0xc3f061);}const {Pool}=require('pg'),s=require(a12_0x4c2525(0xe9));var dbUrl=s[a12_0x4c2525(0xdc)]?s[a12_0x4c2525(0xdc)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createSudoTable(){const _0x2f30da=a12_0x4c2525,_0x5849f3=await pool[_0x2f30da(0xec)]();try{await _0x5849f3[_0x2f30da(0xf4)](_0x2f30da(0xd9)),console['log'](_0x2f30da(0xea));}catch(_0x1951ea){console[_0x2f30da(0xf3)](_0x2f30da(0xd4),_0x1951ea);}finally{_0x5849f3['release']();}}createSudoTable();async function issudo(_0x2872c5){const _0x3926af=a12_0x4c2525,_0x27411f=await pool[_0x3926af(0xec)]();try{const _0x54c5bd='SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1)',_0x36161a=[_0x2872c5],_0xcd01d=await _0x27411f[_0x3926af(0xf4)](_0x54c5bd,_0x36161a);return _0xcd01d[_0x3926af(0xe5)][0x0][_0x3926af(0xed)];}catch(_0x172d39){return console[_0x3926af(0xf3)](_0x3926af(0xe3),_0x172d39),![];}finally{_0x27411f['release']();}}async function removeSudoNumber(_0x5dde2a){const _0x46761f=a12_0x4c2525,_0x151b02=await pool[_0x46761f(0xec)]();try{const _0x50ace2=_0x46761f(0xd8),_0x5eb23d=[_0x5dde2a];await _0x151b02['query'](_0x50ace2,_0x5eb23d),console[_0x46761f(0xd5)](_0x46761f(0xe0)+_0x5dde2a+_0x46761f(0xef));}catch(_0x390951){console['error']('Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:',_0x390951);}finally{_0x151b02[_0x46761f(0xda)]();}}async function addSudoNumber(_0xd664d1){const _0xac2026=a12_0x4c2525,_0x2702d3=await pool[_0xac2026(0xec)]();try{const _0x2f3a28='INSERT\x20INTO\x20sudo\x20(jid)\x20VALUES\x20($1)',_0x2a143c=[_0xd664d1];await _0x2702d3[_0xac2026(0xf4)](_0x2f3a28,_0x2a143c),console['log'](_0xac2026(0xe0)+_0xd664d1+_0xac2026(0xf5));}catch(_0x2a06e7){console[_0xac2026(0xf3)](_0xac2026(0xdb),_0x2a06e7);}finally{_0x2702d3[_0xac2026(0xda)]();}}async function getAllSudoNumbers(){const _0x48a093=a12_0x4c2525,_0x37819a=await pool['connect']();try{const _0x26e9b5=_0x48a093(0xdf),_0x2751a5=await _0x37819a[_0x48a093(0xf4)](_0x26e9b5),_0x4a81ac=_0x2751a5['rows'][_0x48a093(0xe1)](_0x67b34=>_0x67b34[_0x48a093(0xe2)]);return _0x4a81ac;}catch(_0x2c88fd){return console[_0x48a093(0xf3)]('Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20numéros\x20de\x20téléphone\x20autorisés\x20:',_0x2c88fd),[];}finally{_0x37819a[_0x48a093(0xda)]();}}async function isSudoTableNotEmpty(){const _0x3fe847=a12_0x4c2525,_0x5d8511=await pool['connect']();try{const _0x58454d=await _0x5d8511['query'](_0x3fe847(0xde)),_0x69d95c=parseInt(_0x58454d[_0x3fe847(0xe5)][0x0][_0x3fe847(0xeb)]);return _0x69d95c>0x0;}catch(_0x3ce12c){return console[_0x3fe847(0xf3)]('Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20la\x20table\x20\x22sudo\x22\x20:',_0x3ce12c),![];}finally{_0x5d8511[_0x3fe847(0xda)]();}};module[a12_0x4c2525(0xf1)]={'issudo':issudo,'addSudoNumber':addSudoNumber,'removeSudoNumber':removeSudoNumber,'getAllSudoNumbers':getAllSudoNumbers,'isSudoTableNotEmpty':isSudoTableNotEmpty};function a12_0x14e9(){const _0x21a451=['525534cGGiwW','../set','La\x20table\x20\x27sudo\x27\x20a\x20été\x20créée\x20avec\x20succès.','count','connect','exists','3FQGblP','\x20supprimé\x20de\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.','dotenv','exports','2088107BWSNkL','error','query','\x20ajouté\x20à\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.','548682PMmdyP','26243qRletf','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27sudo\x27:','log','240579hPKGXv','5gGbdZj','DELETE\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20sudo\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','release','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:','DATABASE_URL','430RwtNtn','SELECT\x20COUNT(*)\x20FROM\x20sudo','SELECT\x20jid\x20FROM\x20sudo','Numéro\x20de\x20téléphone\x20','map','jid','Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20banni\x20:','184284jOsKYh','rows','366542BdxNQA','264uMddxs'];a12_0x14e9=function(){return _0x21a451;};return a12_0x14e9();}