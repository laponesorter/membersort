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
    img: "https://images.genius.com/2992ef7d5cc29030240cb5b240bc3239.500x494x1.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["20"]
    }
  },
  {
    name: "Running",
    img: "https://images.genius.com/2992ef7d5cc29030240cb5b240bc3239.500x494x1.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "La Pa Pa Pam",
    img: "https://images.genius.com/2992ef7d5cc29030240cb5b240bc3239.500x494x1.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "TSUKAME ～It's Coming～ (JO1 ver.)",
    img: "https://images.genius.com/2992ef7d5cc29030240cb5b240bc3239.500x494x1.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "GrandMaster (JO1 ver.)",
    img: "https://images.genius.com/2992ef7d5cc29030240cb5b240bc3239.500x494x1.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "YOUNG (JO1 ver.)",
    img: "https://images.genius.com/2992ef7d5cc29030240cb5b240bc3239.500x494x1.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "OH-EH-OH",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Stargazer_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["20"]
    }
  },
  {
    name: "So What",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Stargazer_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Voice (君の声)",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Stargazer_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "My Friends",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Stargazer_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "GO",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Stargazer_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "KungChiKiTa (JO1 ver.)",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Stargazer_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Shine A Light",
    img: "https://i.scdn.co/image/ab67616d0000b2734ebf1e3edcdebee19cc2074a",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["20"]
    }
  },
  {
    name: "Starlight",
    img: "https://i.scdn.co/image/ab67616d0000b2734ebf1e3edcdebee19cc2074a",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Safety Zone",
    img: "https://i.scdn.co/image/ab67616d0000b2734ebf1e3edcdebee19cc2074a",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "YANCHA BOY YANCHA GIRL (JO1 ver.)",
    img: "https://i.scdn.co/image/ab67616d0000b2734ebf1e3edcdebee19cc2074a",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Happy Merry Christmas (JO1 ver.)",
    img: "https://i.scdn.co/image/ab67616d0000b2734ebf1e3edcdebee19cc2074a",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "MONSTAR",
    img: "https://i.scdn.co/image/ab67616d0000b2734ebf1e3edcdebee19cc2074a",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Be With You",
    img: "https://i.scdn.co/image/ab67616d0000b2734ebf1e3edcdebee19cc2074a",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["20"]
    }
  },
  {
    name: "Voice (君の声) - From THE FIRST TAKE",
    img: "https://i.scdn.co/image/ab67616d0000b27366c13b5fad8fdfe6d1bd6f49",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }
  },
  {
    name: "無限大 - From THE FIRST TAKE",
    img: "https://i.scdn.co/image/ab67616d0000b27366c13b5fad8fdfe6d1bd6f49",
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
    img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Challenger_Normal_Edition_cover.png",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]
    }
  },
  {
    name: "君のまま (Kimi no Mama)",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Challenger_Normal_Edition_cover.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Design",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Challenger_Normal_Edition_cover.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Speed of Light",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Challenger_Normal_Edition_cover.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    } 
  },
  {
    name: "Get Inside Me",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Challenger_Normal_Edition_cover.png",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    } 
  },
  {
    name: "Dreaming Night",
    img: "https://i.scdn.co/image/ab67616d0000b273bd4740fc498285add50ab9e3",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }
  },
  {
    name: "Freedom",
    img: "https://i.scdn.co/image/ab67616d0000b27328cc293f885d6fa8d03e1ac2",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }
  },
  {
    name: "REAL",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Stranger_Normal_Edition_cover.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]
    }
  },
  {
    name: "STAY",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Stranger_Normal_Edition_cover.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }    
  },
  {
    name: "ICARUS",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Stranger_Normal_Edition_cover.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }    
  },
  {
    name: "Blooming Again",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Stranger_Normal_Edition_cover.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }    
  },
  {
    name: "GrandMaster(Band Ver.)",
    img: "https://i.scdn.co/image/ab67616d0000b273f012c15361eede9dea9184f5",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }    
  },
  {
    name: "OH-EH-OH(Band Ver.)",
    img: "https://i.scdn.co/image/ab67616d00001e02c674510e174c5bf1ccc8bfba",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }    
  },
  {
    name: "Run&Go",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8b02b75e660b84c173cc7a1147763105.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }    
  },
  {
    name: "Prologue",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/8f92cde00ea24a27c2586a25597a7a7c.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }    
  },
  {
    name: "Bokura no Kisetsu",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]
    }    
  },
  {
    name: "OASIS",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "We Alright",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Infinite City",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Never Ending Story",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/bca1c4162d442d516f6257e554e6f06b.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Dreamer",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/9928032bca589c951f680024f6538629.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
  },
  {
    name: "Toberu Kara",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/a3089a5fb12cec4840319195c98697bf.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
  },
  {
    name: "Move the Soul",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/582dfcc22fe15cc8b422fa9c99ab17fb.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
    },
  {
    name: "YOLO-konde",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
    },
  {
    name: "Rocketeer",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["23"]
    }
    },
{
    name: "Make It Count",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
  {
    name: "Brand New Day",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "dxt" ],
      type: ["digi"],
      year: ["25"] 
    }
    },
  {
    name: "adsfdsf",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "dxt" ],
      type: ["digi"],
      year: ["25"]
    }
    },
  {
    name: "CLICK",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "mei" ],
      type: ["aside"],
      year: ["23"]
    }
    },
  {
    name: "Cookie Party",
    img: "https://s3-aop.plusmember.jp/prod/public/produce101/contents/discography/0ffe901d2f05ffae2c26e9fc78565fa1.jpeg",
    opts: {
      group: [ "mei" ],
      type: ["bside"],
      year: ["23"]
    }
    },
  {
    name: "THE FLASH GIRL",
    img: "https://s3-aop.plusmember.jp/prod/public/issue/contents/discography/726c37b603e22f88fb9fa3e83fd8da9d.jpeg",
    opts: {
      group: [ "iss" ],
      type: ["aside"],
      year: ["24"]
    }
    },
  {
    name: "Breaking Thru the Line",
    img: "https://s3-aop.plusmember.jp/prod/public/issue/contents/discography/726c37b603e22f88fb9fa3e83fd8da9d.jpeg",
    opts: {
      group: [ "iss" ],
      type: ["bside"],
      year: ["24"]
    }
    },
  {
    name: "MUSE",
    img: "https://s3-aop.plusmember.jp/prod/public/issue/contents/discography/726c37b603e22f88fb9fa3e83fd8da9d.jpeg",
    opts: {
      group: [ "mei" ],
      type: ["aside"],
      year: ["25"]
    }
    },
];
