dataSetVersion = "songs"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    checked: true,
    sub: [
      { name: "JO1", key: "jo1" },
      { name: "INI", key: "ini" },
      { name: "DXTEEN", key: "dxt" },
      { name: "ME:I", key: "mei" },
      { name: "IS:SUE", key: "iss" }
    ]
  },
  {
    name: "Filter by Song Types",
    key: "type",
    checked: true,
    sub: [ 
      { name: "Title Tracks", key: "aside" }, 
      { name: "Coupling Songs", key: "bside" }, 
      { name: "Digital Songs", key: "digi" }
    ]
  },
  {
    name: "Filter by Release Year",
    key: "year",
    checked: true,
    sub: [ 
      { name: "2020", key: "20" }, 
      { name: "2021", key: "21" },
      { name: "2022", key: "22" },
      { name: "2023", key: "23" },
      { name: "2024", key: "24" },
      { name: "2025", key: "25" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "無限大 (Mugendai)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/28419d1d8dfe5d74a3e8e6fc94e8b100.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["20"]
    }
  },
  {
    name: "Running",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/28419d1d8dfe5d74a3e8e6fc94e8b100.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "La Pa Pa Pam",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/28419d1d8dfe5d74a3e8e6fc94e8b100.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "TSUKAME ～It's Coming～ (JO1 ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/28419d1d8dfe5d74a3e8e6fc94e8b100.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "GrandMaster (JO1 ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/28419d1d8dfe5d74a3e8e6fc94e8b100.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "YOUNG (JO1 ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/28419d1d8dfe5d74a3e8e6fc94e8b100.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "OH-EH-OH",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a02ec31abbb91af6e521566e8b333caf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["20"]
    }
  },
  {
    name: "So What",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a02ec31abbb91af6e521566e8b333caf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Voice (君の声)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a02ec31abbb91af6e521566e8b333caf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "My Friends",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a02ec31abbb91af6e521566e8b333caf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "GO",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a02ec31abbb91af6e521566e8b333caf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "KungChiKiTa (JO1 ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a02ec31abbb91af6e521566e8b333caf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Shine A Light",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8d6135d01d251b2eaf61c05e94f5150d.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["20"]
    }
  },
  {
    name: "Starlight",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8d6135d01d251b2eaf61c05e94f5150d.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Safety Zone",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8d6135d01d251b2eaf61c05e94f5150d.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "YANCHA BOY YANCHA GIRL (JO1 ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8d6135d01d251b2eaf61c05e94f5150d.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Happy Merry Christmas (JO1 ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8d6135d01d251b2eaf61c05e94f5150d.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "MONSTAR",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8d6135d01d251b2eaf61c05e94f5150d.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Be With You",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8d6135d01d251b2eaf61c05e94f5150d.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Voice (君の声) - From THE FIRST TAKE",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/48c85ed1e88b04c85eb87bfb8a1f49e8.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }
  },
  {
    name: "無限大 - From THE FIRST TAKE",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/5fe271d88cdb441569754a6353e94d04.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }
  },
  {
    name: "伝えられるなら (TSUTAERARERUNARA)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/771546329a1ea1649905395217adba3f.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }
  },
  {
    name: "Born To Be Wild",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/65f1af56b7ea9a66749c392acd7eb284.png",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]
    }
  },
  {
    name: "君のまま (Kimi no Mama)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/65f1af56b7ea9a66749c392acd7eb284.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
  },
  {
    name: "Design",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/65f1af56b7ea9a66749c392acd7eb284.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    }
  },
  {
    name: "Speed of Light",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/65f1af56b7ea9a66749c392acd7eb284.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    }
  },
  {
    name: "Get Inside Me",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/65f1af56b7ea9a66749c392acd7eb284.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    }
  },
  {
    name: "Dreaming Night",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/784a6235293ce254d56af4ffe4b7e214.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }
  },
  {
    name: "Freedom",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/e75ae753257eba8c603039f2a8fde837.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }
  },
  {
    name: "REAL",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/ccd7502825e82903ff5e9d526eda7d56.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]    }
    }
  },
  {
    name: "STAY",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/ccd7502825e82903ff5e9d526eda7d56.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    
  }
  },
  {
    name: "ICARUS",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/ccd7502825e82903ff5e9d526eda7d56.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    
    }
  },
  {
    name: "Blooming Again",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/ccd7502825e82903ff5e9d526eda7d56.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    
    }
  },
  {
    name: "GrandMaster(Band Ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/5a8bf9cbc496b120c8e8a266cd121062.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
    }
  },
  {
    name: "OH-EH-OH(Band Ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/d242d872f969e2b75e845d168e9ec989.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
    }
  },
  {
    name: "Run&Go",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8b02b75e660b84c173cc7a1147763105.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
    }
  },
  {
    name: "Prologue",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8f92cde00ea24a27c2586a25597a7a7c.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
    }
  },
  {
    name: "Bokura no Kisetsu",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]    }    
    }
  },
  {
    name: "OASIS",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
    }
  },
  {
    name: "We Alright",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
    }
  },
  {
    name: "Infinite City",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
    }
  },
  {
    name: "Never Ending Story",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
    }
  },
  {
    name: "Dreamer",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/9928032bca589c951f680024f6538629.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
    }
  },
  {
    name: "Toberu Kara",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a3089a5fb12cec4840319195c98697bf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
    }
  },
  {
    name: "Move the Soul",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/582dfcc22fe15cc8b422fa9c99ab17fb.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
    }
  },
  {
    name: "YOLO-konde",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
    }
  },
  {
    name: "Kurodani Yamame",
    img: "sqgJ2St.png",
    opts: {
      group: ["SA", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Mizuhashi Parsee",
    img: "lkoAJod.png",
    opts: {
      group: ["SA", "DS", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Hoshiguma Yuugi",
    img: "tDO653L.png",
    opts: {
      group: ["SA", "DS", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: {
      group: ["SA", "DS", "HM", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Kaenbyou Rin (Orin)",
    img: "uQjbw1W.png",
    opts: {
      group: ["SA", "DS", "HM"],
      stage: ["st4", "st5", "st6"]
    }
  },
  {
    name: "Reiuji Utsuho (Okuu)",
    img: "DfdaXPW.png",
    opts: {
      group: ["SA", "soku", "DS", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: {
      group: ["SA", "DS", "HM", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Nazrin",
    img: "EpHQbiY.png",
    opts: {
      group: ["UFO", "DS", "HM"],
      stage: ["st1", "st5"]
    }
  },
  {
    name: "Tatara Kogasa",
    img: "kJbv4dc.png",
    opts: {
      group: ["UFO", "TD", "DS", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Kumoi Ichirin",
    img: "Fyn5yVx.png",
    opts: {
      group: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"]
    }
  },
  {
    name: "Murasa Minamitsu",
    img: "39KYpvW.png",
    opts: {
      group: ["UFO", "DS", "HM"],
      stage: ["st4"]
    }
  },
  {
    name: "Toramaru Shou",
    img: "5yihisu.png",
    opts: {
      group: ["UFO", "DS", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Hijiri Byakuren",
    img: "2ppPxny.png",
    opts: {
      group: ["UFO", "DS", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Houjuu Nue",
    img: "zL4S8Mj.png",
    opts: {
      group: ["UFO", "DS", "TD", "HM", "VD"],
      stage: ["st4", "st6", "ex"]
    }
  },
  {
    name: "Himekaidou Hatate",
    img: "LgvoTaJ.png",
    opts: {
      group: ["DS", "HM", "ISC"],
      stage: ["ex"]
    }
  },
  {
    name: "Sunny Milk",
    img: "VbqXiB6.png",
    opts: {
      group: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Luna Child",
    img: "OBqgP48.png",
    opts: {
      group: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Star Sapphire",
    img: "sNw61ap.png",
    opts: {
      group: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Kasodani Kyouko",
    img: "sLiqEBA.png",
    opts: {
      group: ["TD", "HM", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: {
      group: ["TD", "HM", "ISC"],
      stage: ["st3", "st4"]
    }
  },
  {
    name: "Kaku Seiga",
    img: "090hLPL.png",
    opts: {
      group: ["TD", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: {
      group: ["TD", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: {
      group: ["TD", "HM", "ISC", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: {
      group: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: {
      group: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: {
      group: ["book", "HM", "ULiL", "AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: {
      group: ["DDC", "ISC"],
      stage: ["st1"]
    }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: {
      group: ["DDC", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Imaizumi Kagerou",
    img: "qwwL0bB.png",
    opts: {
      group: ["DDC", "ISC"],
      stage: ["st3"]
    }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: {
      group: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: {
      group: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: {
      group: ["DDC", "ISC"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: {
      group: ["DDC", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: {
      group: ["DDC", "ISC", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: {
      group: ["ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: {
      group: ["LoLK", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: {
      group: ["LoLK", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: {
      group: ["LoLK", "AoCF", "VD"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: {
      group: ["LoLK", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      group: ["LoLK", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: {
      group: ["LoLK", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: {
      group: ["LoLK", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Eternity Larva",
    img: "ql5KxJH.png",
    opts: {
      group: ["HSiFS", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Sakata Nemuno",
    img: "gYFhJ3Y.png",
    opts: {
      group: ["HSiFS", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Komano Aunn",
    img: "wWUStkF.png",
    opts: {
      group: ["HSiFS", "VD"],
      stage: ["st3"]
    }
  },
  {
    name: "Yatadera Narumi",
    img: "wrPVhAo.png",
    opts: {
      group: ["HSiFS", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Nishida Satono",
    img: "8w9gAy2.png",
    opts: {
      group: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Teireida Mai",
    img: "DesAqAC.png",
    opts: {
      group: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Matara Okina",
    img: "icWvMyo.png",
    opts: {
      group: ["HSiFS", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      group: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Yorigami Joon",
    img: "V9OznT1.png",
    opts: {
      group: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Ebisu Eika",
    img: "Ke3316E.png",
    opts: {
      group: ["WBaWC"],
      stage: ["st1"]
    }
  },
  {
    name: "Ushizaki Urumi",
    img: "ru2vIIW.png",
    opts: {
      group: ["WBaWC"],
      stage: ["st2"]
    }
  },
  {
    name: "Niwatari Kutaka",
    img: "QTQt0ZL.png",
    opts: {
      group: ["WBaWC"],
      stage: ["st3"]
    }
  },
  {
    name: "Kicchou Yachie",
    img: "CzcIMxF.png",
    opts: {
      group: ["WBaWC"],
      stage: ["st4"]
    }
  },
  {
    name: "Joutouguu Mayumi",
    img: "GxeziYO.png",
    opts: {
      group: ["WBaWC"],
      stage: ["st5"]
    }
  },
  {
    name: "Haniyasushin Keiki",
    img: "Z4jclTi.png",
    opts: {
      group: ["WBaWC"],
      stage: ["st6"]
    }
  },
  {
    name: "Kurokoma Saki",
    img: "H2v2GPy.png",
    opts: {
      group: ["WBaWC"],
      stage: ["ex"]
    }
  },
  {
    name: "Goutokuji Mike",
    img: "E6IlBzB.png",
    opts: {
      group: ["UM"],
      stage: ["st1"]
    }
  },
  {
    name: "Yamashiro Takane",
    img: "0gqyjHu.png",
    opts: {
      group: ["UM"],
      stage: ["st2"]
    }
  },
  {
    name: "Komakusa Sannyo",
    img: "krihsYQ.png",
    opts: {
      group: ["UM"],
      stage: ["st3"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      group: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      group: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "JZnExhN.png",
    opts: {
      group: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      group: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      group: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      group: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      group: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      group: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      group: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      group: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      group: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      group: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      group: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      group: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      group: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      group: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      group: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      group: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      group: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      group: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      group: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      group: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      group: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      group: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      group: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      group: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      group: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      group: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      group: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      group: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      group: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      group: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      group: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      group: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      group: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      group: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      group: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      group: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      group: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      group: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      group: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      group: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      group: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
