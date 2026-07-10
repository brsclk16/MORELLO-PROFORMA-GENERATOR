/* Morello — Shared Product Catalog & TL Prices
   Used by index.html and pricelist.html — edit prices here (or via app) */
const CATALOG = {
  'Bedroom': { icon:'🛏', series: {
    'ROMA': { badge:'SET', items:[
      {id:'ROMA-BED',name:'Roma Bedstead with Storage 180×200',eur:335,usd:420},
      {id:'ROMA-BED-160',name:'Roma Bedstead with Storage 160×200',eur:335,usd:420},
      {id:'ROMA-NIGHT',name:'Roma Nightstand',eur:70,usd:70},
      {id:'ROMA-DRESS',name:'Roma Dresser with Mirror',eur:205,usd:220},
      {id:'ROMA-POUF',name:'Roma Pouf',eur:50,usd:45},
      {id:'ROMA-WARD',name:'Roma Wardrobe',eur:720,usd:810},
      {id:'ROMA-BED-SET',name:'Roma Bedroom Set (Bedstead+Wardrobe+2 Nightstands+Dresser)',eur:1500,usd:1590,bundled:true},
    ]},
    'ISTANBUL': { badge:'SET', items:[
      {id:'IST-BED',name:'Istanbul Bedstead 180×200',eur:335,usd:420},
      {id:'IST-BED-160',name:'Istanbul Bedstead 160×200',eur:335,usd:420},
      {id:'IST-NIGHT',name:'Istanbul Nightstand',eur:65,usd:70},
      {id:'IST-DRESS',name:'Istanbul Dresser with Mirror',eur:195,usd:210},
      {id:'IST-POUF',name:'Istanbul Pouf',eur:50,usd:40},
      {id:'IST-WARD',name:'Istanbul 5-Door Wardrobe',eur:680,usd:730},
      {id:'IST-BED-SET',name:'Istanbul Bedroom Set (Bedstead+Wardrobe+2 Nightstands+Dresser)',eur:1440,usd:1500,bundled:true},
    ]},
    'ZENA': { badge:'POP', items:[
      {id:'ZENA-BED',name:'Zena Bedstead 180×200',eur:300,usd:420},
      {id:'ZENA-BED-160',name:'Zena Bedstead 160×200',eur:300,usd:420},
      {id:'ZENA-NIGHT',name:'Zena Nightstand',eur:60,usd:60},
      {id:'ZENA-DRESS',name:'Zena Dresser',eur:175,usd:190},
      {id:'ZENA-WARD',name:'Zena Wardrobe',eur:640,usd:700},
      {id:'ZENA-BED-SET',name:'Zena Bedroom Set (Bedstead+Wardrobe+2 Nightstands+Dresser)',eur:1235,usd:1430,bundled:true},
    ]},
    'MIRAY': { badge:'NEW', items:[
      {id:'MIRAY-BED',name:'Miray Bedstead with Storage 180×200',eur:null,usd:420},
      {id:'MIRAY-BED-160',name:'Miray Bedstead with Storage 160×200',eur:null,usd:420},
      {id:'MIRAY-NIGHT',name:'Miray Nightstand',eur:null,usd:60},
      {id:'MIRAY-DRESS',name:'Miray Dresser with Mirror',eur:null,usd:180},
      {id:'MIRAY-POUF',name:'Miray Pouf',eur:null,usd:40},
      {id:'MIRAY-CHEST',name:'Miray Chest of Drawers',eur:null,usd:175},
      {id:'MIRAY-W4',name:'Miray 4-Door Wardrobe',eur:null,usd:550},
      {id:'MIRAY-W5',name:'Miray 5-Door Wardrobe',eur:null,usd:610},
      {id:'MIRAY-W6',name:'Miray 6-Door Wardrobe',eur:null,usd:670},
      {id:'MIRAY-BED-SET',name:'Miray Bedroom Set (6-Door+Bedstead+2 Nightstands+Dresser)',eur:null,usd:1390,bundled:true},
    ]},
    'NAPOLİ': { badge:'YENİ', items:[
      {id:'NAPOLI-BED',name:'Napoli Bedstead 180×200',eur:330,usd:380},
      {id:'NAPOLI-BED-160',name:'Napoli Bedstead 160×200',eur:330,usd:380},
      {id:'NAPOLI-NIGHT',name:'Napoli Nightstand',eur:67,usd:77},
      {id:'NAPOLI-DRESS',name:'Napoli Dresser',eur:198,usd:228},
      {id:'NAPOLI-WARD',name:'Napoli Wardrobe',eur:723,usd:833},
      {id:'NAPOLI-BED-SET',name:'Napoli Bedroom Set (Bedstead+Wardrobe+2 Nightstands+Dresser)',eur:1319,usd:1520,bundled:true},
    ]},
    'BEYZA': { badge:'USD', items:[
      {id:'BEYZA-BED',name:'Beyza Bedstead with Storage 180×200',eur:null,usd:420},
      {id:'BEYZA-BED-160',name:'Beyza Bedstead with Storage 160×200',eur:null,usd:420},
      {id:'BEYZA-NIGHT',name:'Beyza Nightstand',eur:null,usd:60},
      {id:'BEYZA-WARD',name:'Beyza Wardrobe',eur:null,usd:700},
      {id:'BEYZA-DRESS',name:'Beyza Dresser with Mirror',eur:null,usd:190},
      {id:'BEYZA-POUF',name:'Beyza Pouf',eur:null,usd:40},
      {id:'BEYZA-BED-SET',name:'Beyza Bedroom Set (Bedstead+Wardrobe+2 Nightstands+Dresser)',eur:null,usd:1430,bundled:true},
    ]},
  }},
  'Dining Room': { icon:'🍽', series: {
    'ROMA': { badge:'SET', items:[
      {id:'ROMA-CONS',name:'Roma Console with Mirror',eur:350,usd:350},
      {id:'ROMA-TV',name:'Roma TV Unit',eur:290,usd:290},
      {id:'ROMA-TBL',name:'Roma Dining Table (170–205 cm)',eur:345,usd:330},
      {id:'ROMA-CHR',name:'Roma Chair',eur:90,usd:90},
      {id:'ROMA-COF',name:'Roma Coffee Table',eur:105,usd:100},
      {id:'ROMA-DIN-SET',name:'Roma Dining Set (Table+6 Chairs+Console)',eur:1235,usd:1220,bundled:true},
    ]},
    'ISTANBUL': { badge:'SET', items:[
      {id:'IST-CONS',name:'Istanbul Console with Mirror',eur:350,usd:335},
      {id:'IST-TV',name:'Istanbul TV Unit',eur:290,usd:275},
      {id:'IST-TBL',name:'Istanbul Dining Table',eur:345,usd:330},
      {id:'IST-CHR',name:'Istanbul Chair',eur:90,usd:90},
      {id:'IST-COF',name:'Istanbul Coffee Table',eur:105,usd:100},
      {id:'IST-DIN-SET',name:'Istanbul Dining Set (Table+6 Chairs+Console)',eur:1235,usd:1205,bundled:true},
    ]},
    'ZENA': { badge:'POP', items:[
      {id:'ZENA-CONS',name:'Zena Console',eur:305,usd:305},
      {id:'ZENA-TV',name:'Zena TV Unit',eur:295,usd:295},
      {id:'ZENA-TBL',name:'Zena Dining Table',eur:325,usd:325},
      {id:'ZENA-CHR',name:'Zena Chair',eur:70,usd:75},
      {id:'ZENA-DIN-SET',name:'Zena Dining Set (Table+6 Chairs+Console)',eur:1050,usd:1080,bundled:true},
    ]},
    'MIRAY': { badge:'USD', items:[
      {id:'MIRAY-CONS',name:'Miray Console with Mirror',eur:null,usd:305},
      {id:'MIRAY-TV',name:'Miray TV Unit',eur:null,usd:295},
      {id:'MIRAY-TBL',name:'Miray Dining Table (170–205 cm)',eur:null,usd:325},
      {id:'MIRAY-CHR6',name:'Miray Chair',eur:null,usd:75},
      {id:'MIRAY-COF',name:'Miray Coffee Table',eur:null,usd:100},
      {id:'MIRAY-DIN-SET',name:'Miray Dining Set (Table+6 Chairs+Console)',eur:null,usd:1080,bundled:true},
    ]},
    'BEYZA': { badge:'USD', items:[
      {id:'BEYZA-TBL',name:'Beyza Dining Table (170–205 cm)',eur:null,usd:320},
      {id:'BEYZA-CHR',name:'Beyza Chair',eur:null,usd:90},
      {id:'BEYZA-CONS',name:'Beyza Console with Mirror',eur:null,usd:305},
      {id:'BEYZA-TV',name:'Beyza TV Unit',eur:null,usd:250},
      {id:'BEYZA-COF',name:'Beyza Coffee Table',eur:null,usd:100},
      {id:'BEYZA-DIN-SET',name:'Beyza Dining Set (Table+6 Chairs+Console)',eur:null,usd:1165,bundled:true},
    ]},
    'NAPOLİ': { badge:'YENİ', items:[
      {id:'NAPOLI-CONS',name:'Napoli Console with Mirror',eur:334,usd:385},
      {id:'NAPOLI-TV',name:'Napoli TV Unit',eur:309,usd:357},
      {id:'NAPOLI-TBL',name:'Napoli Dining Table (170–205 cm)',eur:374,usd:430},
      {id:'NAPOLI-CHR',name:'Napoli Chair',eur:86,usd:99},
      {id:'NAPOLI-COF',name:'Napoli Coffee Table',eur:117,usd:135},
      {id:'NAPOLI-DIN-SET',name:'Napoli Dining Set (Table+6 Chairs+Console)',eur:1249,usd:1439,bundled:true},
    ]},
  }},
  'Sofa Set': { icon:'🛋', series: {
    'ROMA': { badge:'EUR', items:[
      {id:'ROMA-3S',name:'Roma Three Seater',eur:580,usd:615},
      {id:'ROMA-2S',name:'Roma Two Seater (190 cm)',eur:580,usd:615},
      {id:'ROMA-BRG',name:'Roma Bergere',eur:205,usd:180},
      {id:'ROMA-SF-SET',name:'Roma Sofa Set (2×Three Seater+2×Bergere)',eur:1570,usd:1590,bundled:true},
      {id:'ROMA-SET-331',name:'Roma Sofa Set (2×Three Seater+1×Bergere)',eur:1570,usd:1590,bundled:true},
      {id:'ROMA-SET-221',name:'Roma Sofa Set (2×Two Seater+1×Bergere)',eur:1570,usd:1590,bundled:true},
      {id:'ROMA-SET-321',name:'Roma Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:1570,usd:1590,bundled:true},
    ]},
    'ISTANBUL': { badge:'SET', items:[
      {id:'IST-3S',name:'Istanbul Three Seater',eur:550,usd:575},
      {id:'IST-2S',name:'Istanbul Two Seater (190 cm)',eur:550,usd:575},
      {id:'IST-BRG',name:'Istanbul Bergere',eur:205,usd:175},
      {id:'IST-CRN',name:'Istanbul Corner Sofa',eur:1080,usd:1020},
      {id:'IST-SF-SET',name:'Istanbul Sofa Set (2×Three Seater+2×Bergere)',eur:1510,usd:1500,bundled:true},
      {id:'IST-SET-331',name:'Istanbul Sofa Set (2×Three Seater+1×Bergere)',eur:1510,usd:1500,bundled:true},
      {id:'IST-SET-221',name:'Istanbul Sofa Set (2×Two Seater+1×Bergere)',eur:1510,usd:1500,bundled:true},
      {id:'IST-SET-321',name:'Istanbul Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:1510,usd:1500,bundled:true},
    ]},
    'LION': { badge:'HOT', items:[
      {id:'LION-3S',name:'Lion Three Seater',eur:580,usd:575},
      {id:'LION-2S',name:'Lion Two Seater (190 cm)',eur:580,usd:575},
      {id:'LION-BRG',name:'Lion Bergere',eur:205,usd:175},
      {id:'LION-CRN',name:'Lion Corner Sofa',eur:1080,usd:1020},
      {id:'LION-SF-SET',name:'Lion Sofa Set (2×Three Seater+2×Bergere)',eur:1570,usd:1500,bundled:true},
      {id:'LION-SET-331',name:'Lion Sofa Set (2×Three Seater+1×Bergere)',eur:1570,usd:1500,bundled:true},
      {id:'LION-SET-221',name:'Lion Sofa Set (2×Two Seater+1×Bergere)',eur:1570,usd:1500,bundled:true},
      {id:'LION-SET-321',name:'Lion Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:1570,usd:1500,bundled:true},
    ]},
    'MIRAY': { badge:'SET', items:[
      {id:'MIRAY-3S',name:'Miray Three Seater',eur:505,usd:480},
      {id:'MIRAY-2S',name:'Miray Two Seater (190 cm)',eur:505,usd:480},
      {id:'MIRAY-BRG',name:'Miray Bergere',eur:175,usd:165},
      {id:'MIRAY-CRN',name:'Miray Corner Sofa',eur:null,usd:860},
      {id:'MIRAY-SF-SET',name:'Miray Sofa Set (2×Three Seater+2×Bergere)',eur:1360,usd:1290,bundled:true},
      {id:'MIRAY-SET-331',name:'Miray Sofa Set (2×Three Seater+1×Bergere)',eur:1360,usd:1290,bundled:true},
      {id:'MIRAY-SET-221',name:'Miray Sofa Set (2×Two Seater+1×Bergere)',eur:1360,usd:1290,bundled:true},
      {id:'MIRAY-SET-321',name:'Miray Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:1360,usd:1290,bundled:true},
    ]},
    'VERONA': { badge:'EUR', items:[
      {id:'VER-3S',name:'Verona Three Seater',eur:580,usd:525},
      {id:'VER-2S',name:'Verona Two Seater (190 cm)',eur:580,usd:525},
      {id:'VER-BRG',name:'Verona Bergere',eur:205,usd:175},
      {id:'VER-SF-SET',name:'Verona Sofa Set (2×Three Seater+2×Bergere)',eur:1570,usd:1500,bundled:true},
      {id:'VER-SET-331',name:'Verona Sofa Set (2×Three Seater+1×Bergere)',eur:1570,usd:1500,bundled:true},
      {id:'VER-SET-221',name:'Verona Sofa Set (2×Two Seater+1×Bergere)',eur:1570,usd:1500,bundled:true},
      {id:'VER-SET-321',name:'Verona Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:1570,usd:1500,bundled:true},
      {id:'VER-SEHPA',name:'Verona İlave Kollu Sehpa (isteğe bağlı)',eur:55,usd:60},
    ]},
    'ZENA': { badge:'POP', items:[
      {id:'ZENA-3S',name:'Zena Three Seater',eur:450,usd:480},
      {id:'ZENA-2S',name:'Zena Two Seater (190 cm)',eur:450,usd:480},
      {id:'ZENA-BRG',name:'Zena Bergere',eur:150,usd:165},
      {id:'ZENA-SF-SET',name:'Zena Sofa Set (2×Three Seater+2×Bergere)',eur:1200,usd:1290,bundled:true},
      {id:'ZENA-SET-331',name:'Zena Sofa Set (2×Three Seater+1×Bergere)',eur:1200,usd:1290,bundled:true},
      {id:'ZENA-SET-221',name:'Zena Sofa Set (2×Two Seater+1×Bergere)',eur:1200,usd:1290,bundled:true},
      {id:'ZENA-SET-321',name:'Zena Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:1200,usd:1290,bundled:true},
    ]},
    'DIVA': { badge:'USD', items:[
      {id:'DIVA-3S',name:'Diva Three Seater',eur:null,usd:480},
      {id:'DIVA-2S',name:'Diva Two Seater (190 cm)',eur:null,usd:480},
      {id:'DIVA-BRG',name:'Diva Bergere',eur:null,usd:165},
      {id:'DIVA-SF-SET',name:'Diva Sofa Set (2×Three Seater+2×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'DIVA-SET-331',name:'Diva Sofa Set (2×Three Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'DIVA-SET-221',name:'Diva Sofa Set (2×Two Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'DIVA-SET-321',name:'Diva Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
    ]},
    'LUNA': { badge:'USD', items:[
      {id:'LUNA-3S',name:'Luna Three Seater',eur:null,usd:480},
      {id:'LUNA-2S',name:'Luna Two Seater (190 cm)',eur:null,usd:480},
      {id:'LUNA-BRG',name:'Luna Bergere',eur:null,usd:165},
      {id:'LUNA-SF-SET',name:'Luna Sofa Set (2×Three Seater+2×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'LUNA-SET-331',name:'Luna Sofa Set (2×Three Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'LUNA-SET-221',name:'Luna Sofa Set (2×Two Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'LUNA-SET-321',name:'Luna Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
    ]},
    'BEYZA': { badge:'USD', items:[
      {id:'BEYZA-3S',name:'Beyza Three Seater',eur:null,usd:480},
      {id:'BEYZA-2S',name:'Beyza Two Seater (190 cm)',eur:null,usd:480},
      {id:'BEYZA-SGL',name:'Beyza Single Armchair',eur:null,usd:165},
      {id:'BEYZA-SF-SET',name:'Beyza Sofa Set (2×Three Seater+2×Single)',eur:null,usd:1290,bundled:true},
      {id:'BEYZA-SET-331',name:'Beyza Sofa Set (2×Three Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'BEYZA-SET-221',name:'Beyza Sofa Set (2×Two Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
      {id:'BEYZA-SET-321',name:'Beyza Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:null,usd:1290,bundled:true},
    ]},
    'SIDE': { badge:'USD', items:[
      {id:'SIDE-3S',name:'Side Three Seater',eur:null,usd:525},
      {id:'SIDE-2S',name:'Side Two Seater (190 cm)',eur:null,usd:525},
      {id:'SIDE-BRG',name:'Side Bergere',eur:null,usd:175},
      {id:'SIDE-SF-SET',name:'Side Sofa Set (2×Three Seater+2×Bergere)',eur:null,usd:1400,bundled:true},
      {id:'SIDE-SET-331',name:'Side Sofa Set (2×Three Seater+1×Bergere)',eur:null,usd:1400,bundled:true},
      {id:'SIDE-SET-221',name:'Side Sofa Set (2×Two Seater+1×Bergere)',eur:null,usd:1400,bundled:true},
      {id:'SIDE-SET-321',name:'Side Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:null,usd:1400,bundled:true},
    ]},
    'EFES': { badge:'USD', items:[
      {id:'EFES-3S',name:'Efes Three Seater',eur:null,usd:515},
      {id:'EFES-2S',name:'Efes Two Seater (190 cm)',eur:null,usd:515},
      {id:'EFES-BRG',name:'Efes Bergere',eur:null,usd:165},
      {id:'EFES-SF-SET',name:'Efes Sofa Set (2×Three Seater+2×Bergere)',eur:null,usd:1360,bundled:true},
      {id:'EFES-SET-331',name:'Efes Sofa Set (2×Three Seater+1×Bergere)',eur:null,usd:1360,bundled:true},
      {id:'EFES-SET-221',name:'Efes Sofa Set (2×Two Seater+1×Bergere)',eur:null,usd:1360,bundled:true},
      {id:'EFES-SET-321',name:'Efes Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:null,usd:1360,bundled:true},
    ]},
    'NAPOLİ': { badge:'YENİ', items:[
      {id:'NAPOLI-3S',name:'Napoli Three Seater',eur:532,usd:613},
      {id:'NAPOLI-2S',name:'Napoli Two Seater (190 cm)',eur:532,usd:613},
      {id:'NAPOLI-BRG',name:'Napoli Bergere',eur:187,usd:216},
      {id:'NAPOLI-SF-SET',name:'Napoli Sofa Set (2×Three Seater+2×Bergere)',eur:1439,usd:1658,bundled:true},
      {id:'NAPOLI-SET-331',name:'Napoli Sofa Set (2×Three Seater+1×Bergere)',eur:1439,usd:1658,bundled:true},
      {id:'NAPOLI-SET-221',name:'Napoli Sofa Set (2×Two Seater+1×Bergere)',eur:1439,usd:1658,bundled:true},
      {id:'NAPOLI-SET-321',name:'Napoli Sofa Set (Three Seater+Two Seater+1×Bergere)',eur:1439,usd:1658,bundled:true},
    ]},
  }
}};

const TL_PRICES = {
  // ═══ ROMA YATAK ODASI ═══
  'ROMA-WARD': 39800, 'ROMA-NIGHT': 3800, 'ROMA-DRESS': 11300,
  'ROMA-BED': 17500, 'ROMA-BED-160': 17500, 'ROMA-BED-SET': 72600,
  // ROMA MODÜL DOLAP (kapak çeşitleri)
  'ROMA-DOOR-CAM1': 11575, 'ROMA-DOOR-AHSAP1': 10400, 'ROMA-DOOR-CEK2': 20080,
  'ROMA-DOOR-RAF2': 18200, 'ROMA-DOOR-UC3': 27300, 'ROMA-DOOR-KOSE': 13450,
  // ═══ ROMA YEMEK ODASI ═══
  'ROMA-CONS': 17700, 'ROMA-CONS-AYNA': 4700, 'ROMA-TBL': 21000,
  'ROMA-CHR': 4534, 'ROMA-DIN-SET': 67200, 'ROMA-TV': 16900, 'ROMA-COF': 6200,
  // ═══ ROMA KOLTUK ═══
  'ROMA-3S': 29400, 'ROMA-2S': 29400, 'ROMA-BRG': 10300, 'ROMA-SF-SET': 79400, 'ROMA-SET-331': 69100, 'ROMA-SET-321': 69100, 'ROMA-SET-221': 69100,

  // ═══ İSTANBUL YATAK ODASI ═══
  'IST-WARD': 38300, 'IST-NIGHT': 3550, 'IST-DRESS': 10500,
  'IST-BED': 17500, 'IST-BED-160': 17500, 'IST-BED-SET': 69900,
  // ═══ İSTANBUL YEMEK ODASI ═══
  'IST-CONS': 17700, 'IST-CONS-AYNA': 4700, 'IST-TBL': 19800,
  'IST-CHR': 4534, 'IST-DIN-SET': 66200, 'IST-TV': 16400, 'IST-COF': 6200,
  // ═══ İSTANBUL KOLTUK / KÖŞE ═══
  'IST-3S': 28200, 'IST-2S': 28200, 'IST-BRG': 9925, 'IST-SF-SET': 76250, 'IST-SET-331': 66325, 'IST-SET-321': 66325, 'IST-SET-221': 66325, 'IST-CRN': 54800,

  // ═══ VERONA KOLTUK ═══
  'VER-3S': 29400, 'VER-2S': 29400, 'VER-BRG': 10300, 'VER-SF-SET': 79400, 'VER-SET-331': 69100, 'VER-SET-321': 69100, 'VER-SET-221': 69100, 'VER-SEHPA': 2000,

  // ═══ LION KOLTUK / KÖŞE ═══
  'LION-3S': 28200, 'LION-2S': 28200, 'LION-BRG': 9925, 'LION-SF-SET': 76250, 'LION-SET-331': 66325, 'LION-SET-321': 66325, 'LION-SET-221': 66325, 'LION-CRN': 54800,

  // ═══ DİVA KOLTUK ═══
  'DIVA-3S': 25250, 'DIVA-2S': 25250, 'DIVA-BRG': 8875, 'DIVA-SF-SET': 68250, 'DIVA-SET-331': 59375, 'DIVA-SET-321': 59375, 'DIVA-SET-221': 59375,

  // ═══ MİRAY KOLTUK / KÖŞE ═══
  'MIRAY-3S': 25250, 'MIRAY-2S': 25250, 'MIRAY-BRG': 8875, 'MIRAY-SF-SET': 68250, 'MIRAY-SET-331': 59375, 'MIRAY-SET-321': 59375, 'MIRAY-SET-221': 59375, 'MIRAY-CRN': 45350,

  // ═══ NAPOLİ (YENİ MODEL) — İstanbul ile aynı ═══
  'NAPOLI-WARD': 38300, 'NAPOLI-NIGHT': 3550, 'NAPOLI-DRESS': 10500,
  'NAPOLI-BED': 17500, 'NAPOLI-BED-160': 17500, 'NAPOLI-BED-SET': 69900,
  'NAPOLI-CONS': 17700, 'NAPOLI-CONS-AYNA': 4700, 'NAPOLI-TBL': 19800,
  'NAPOLI-CHR': 4534, 'NAPOLI-DIN-SET': 66200, 'NAPOLI-TV': 16400, 'NAPOLI-COF': 6200,
  'NAPOLI-3S': 28200, 'NAPOLI-2S': 28200, 'NAPOLI-BRG': 9925, 'NAPOLI-SF-SET': 76250, 'NAPOLI-SET-331': 66325, 'NAPOLI-SET-321': 66325, 'NAPOLI-SET-221': 66325,
};

// Baza farkı (iskontosuz, ayrı kalem): 160 karyola +3700 ₺, 180 karyola +5250 ₺
// Feza kumaş farkı: takım başı +1500 ₺. Ahşap ayak 250 ₺, plastik ayak 200 ₺, kare/yuvarlak puf 1500 ₺.
const TL_BAZA_FARKI_160 = 3700;
const TL_BAZA_FARKI_180 = 5250;
