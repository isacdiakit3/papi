const a10_0x251676=a10_0x2ff0;(function(_0x5719ad,_0x45a610){const _0x4e0369=a10_0x2ff0,_0x2e3c9c=_0x5719ad();while(!![]){try{const _0x1eacd8=parseInt(_0x4e0369(0x1d1))/0x1+parseInt(_0x4e0369(0x1db))/0x2+parseInt(_0x4e0369(0x1e2))/0x3+parseInt(_0x4e0369(0x1ec))/0x4+parseInt(_0x4e0369(0x1d2))/0x5+parseInt(_0x4e0369(0x1e1))/0x6*(parseInt(_0x4e0369(0x1ea))/0x7)+-parseInt(_0x4e0369(0x1dc))/0x8;if(_0x1eacd8===_0x45a610)break;else _0x2e3c9c['push'](_0x2e3c9c['shift']());}catch(_0x49c4b5){_0x2e3c9c['push'](_0x2e3c9c['shift']());}}}(a10_0x3eae,0xaac19),require('dotenv')[a10_0x251676(0x1d4)]());const {Pool}=require('pg'),s=require(a10_0x251676(0x1de));var dbUrl=s[a10_0x251676(0x1d5)]?s['DATABASE_URL']:a10_0x251676(0x1df);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableOnlyAdmin=async()=>{const _0x7f6d1d=a10_0x251676;try{await pool[_0x7f6d1d(0x1dd)](_0x7f6d1d(0x1d3)),console['log']('La\x20table\x20\x27onlyAdmin\x27\x20a\x20été\x20créée\x20avec\x20succès.');}catch(_0x469aca){console[_0x7f6d1d(0x1d7)]('Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27onlyAdmin\x27:',_0x469aca);}};creerTableOnlyAdmin();function a10_0x2ff0(_0x5a2011,_0x233be1){const _0x3eae20=a10_0x3eae();return a10_0x2ff0=function(_0x2ff049,_0xe4f45){_0x2ff049=_0x2ff049-0x1d0;let _0x1d5de5=_0x3eae20[_0x2ff049];return _0x1d5de5;},a10_0x2ff0(_0x5a2011,_0x233be1);}async function addGroupToOnlyAdminList(_0x23f0cb){const _0x41a924=a10_0x251676,_0x8f24=await pool['connect']();try{const _0x2133c4=_0x41a924(0x1d0),_0x45248e=[_0x23f0cb];await _0x8f24[_0x41a924(0x1dd)](_0x2133c4,_0x45248e),console[_0x41a924(0x1e5)](_0x41a924(0x1e3)+_0x23f0cb+'\x20ajouté\x20à\x20la\x20liste\x20des\x20groupes\x20onlyAdmin.');}catch(_0x53d9d1){console[_0x41a924(0x1d7)](_0x41a924(0x1e9),_0x53d9d1);}finally{_0x8f24['release']();}}async function isGroupOnlyAdmin(_0x432e3a){const _0x164bbe=a10_0x251676,_0x259075=await pool[_0x164bbe(0x1e0)]();try{const _0x5748cf=_0x164bbe(0x1eb),_0x3f525f=[_0x432e3a],_0x172e71=await _0x259075[_0x164bbe(0x1dd)](_0x5748cf,_0x3f525f);return _0x172e71[_0x164bbe(0x1e6)][0x0][_0x164bbe(0x1e8)];}catch(_0x528646){return console['error'](_0x164bbe(0x1da),_0x528646),![];}finally{_0x259075[_0x164bbe(0x1e7)]();}}async function removeGroupFromOnlyAdminList(_0x2a9b6d){const _0x375ea2=a10_0x251676,_0x59091f=await pool[_0x375ea2(0x1e0)]();try{const _0x1de120=_0x375ea2(0x1d8),_0x41ae8a=[_0x2a9b6d];await _0x59091f[_0x375ea2(0x1dd)](_0x1de120,_0x41ae8a),console['log'](_0x375ea2(0x1e3)+_0x2a9b6d+_0x375ea2(0x1d9));}catch(_0xf32b6d){console[_0x375ea2(0x1d7)](_0x375ea2(0x1d6),_0xf32b6d);}finally{_0x59091f[_0x375ea2(0x1e7)]();}}function a10_0x3eae(){const _0x35102b=['210791xZwFbn','SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20onlyAdmin\x20WHERE\x20groupeJid\x20=\x20$1)','3440204ylwfWF','INSERT\x20INTO\x20onlyAdmin\x20(groupeJid)\x20VALUES\x20($1)','590336dQUXgr','2724860pFjnDw','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20onlyAdmin\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20groupeJid\x20text\x20PRIMARY\x20KEY\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','config','DATABASE_URL','Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20groupe\x20onlyAdmin\x20:','error','DELETE\x20FROM\x20onlyAdmin\x20WHERE\x20groupeJid\x20=\x20$1','\x20supprimé\x20de\x20la\x20liste\x20des\x20groupes\x20onlyAdmin.','Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20onlyAdmin\x20:','10806uQTsHV','12011400yLEZuL','query','../set','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','connect','6HMtuWi','509901AROpPC','Groupe\x20JID\x20','exports','log','rows','release','exists','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20groupe\x20onlyAdmin\x20:'];a10_0x3eae=function(){return _0x35102b;};return a10_0x3eae();}module[a10_0x251676(0x1e4)]={'addGroupToOnlyAdminList':addGroupToOnlyAdminList,'isGroupOnlyAdmin':isGroupOnlyAdmin,'removeGroupFromOnlyAdminList':removeGroupFromOnlyAdminList};