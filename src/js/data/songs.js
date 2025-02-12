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
      year: ["21"]    }
  },
  {
    name: "Speed of Light",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/65f1af56b7ea9a66749c392acd7eb284.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    } 
  },
  {
    name: "Get Inside Me",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/65f1af56b7ea9a66749c392acd7eb284.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    } 
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
  },
  {
    name: "STAY",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/ccd7502825e82903ff5e9d526eda7d56.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    
  },
  {
    name: "ICARUS",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/ccd7502825e82903ff5e9d526eda7d56.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    
  },
  {
    name: "Blooming Again",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/ccd7502825e82903ff5e9d526eda7d56.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }    
  },
  {
    name: "GrandMaster(Band Ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/5a8bf9cbc496b120c8e8a266cd121062.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
  },
  {
    name: "OH-EH-OH(Band Ver.)",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/d242d872f969e2b75e845d168e9ec989.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
  },
  {
    name: "Run&Go",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8b02b75e660b84c173cc7a1147763105.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
  },
  {
    name: "Prologue",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8f92cde00ea24a27c2586a25597a7a7c.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]    }    
  },
  {
    name: "Bokura no Kisetsu",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]    }    
  },
  {
    name: "OASIS",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
  },
  {
    name: "We Alright",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
  },
  {
    name: "Infinite City",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
  },
  {
    name: "Never Ending Story",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]    }
  },
  {
    name: "Dreamer",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/9928032bca589c951f680024f6538629.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
  },
  {
    name: "Toberu Kara",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a3089a5fb12cec4840319195c98697bf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
  },
  {
    name: "Move the Soul",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/582dfcc22fe15cc8b422fa9c99ab17fb.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
    },
  {
    name: "YOLO-konde",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]    }
    },
  {
    name: "Rocketeer",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["23"]    }
    },
{
    name: "Make It Count",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["25"]    }
    },
  {
    name: "Brand New Day",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "dxt" ],
      type: ["digi"],
      year: ["25"]    }
    },
  {
    name: "adsfdsf",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "dxt" ],
      type: ["digi"],
      year: ["25"]    }
    },
  {
    name: "CLICK",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "mei" ],
      type: ["aside"],
      year: ["23"]    }
    },
  {
    name: "Cookie Party",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "mei" ],
      type: ["bside"],
      year: ["23"]    }
    },
  {
    name: "THE FLASH GIRL",
    img: "https://s3-aop.plusmember.jp/prod/public/issue/contents/discography/726c37b603e22f88fb9fa3e83fd8da9d.jpeg",
    opts: {
      group: [ "iss" ],
      type: ["aside"],
      year: ["24"]    }
    },
  {
    name: "Breaking Thru the Line",
    img: "https://s3-aop.plusmember.jp/prod/public/issue/contents/discography/726c37b603e22f88fb9fa3e83fd8da9d.jpeg",
    opts: {
      group: [ "iss" ],
      type: ["bside"],
      year: ["24"]    }
    },
  {
    name: "MUSE",
    img: "https://s3-aop.plusmember.jp/prod/public/issue/contents/discography/726c37b603e22f88fb9fa3e83fd8da9d.jpeg",
    opts: {
      group: [ "mei" ],
      type: ["aside"],
      year: ["25"]    }
    }
];
