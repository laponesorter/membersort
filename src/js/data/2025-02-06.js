dataSetVersion = "2025-02-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "series",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
      { name: "JO1", key: "jo1" },
      { name: "INI", key: "ini" },
      { name: "DXTEEN", key: "dxt" },
      { name: "ME:I", key: "mei" },
      { name: "IS:SUE", key: "iss" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Yonashiro Sho",
    img: "c5DqpgX.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Kawashiri Ren",
    img: "c5DqpgX.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Shiroiwa Ruki",
    img: "c5DqpgX.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Kono Junki",
    img: "c5DqpgX.png",
    opts: {
      series: [ "jo1" ],
      nameless: true
    },
  },
  {
    name: "Sato Keigo",
    img: "c5DqpgX.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Kawanishi Takumi",
    img: "ptGp0x4.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Kimata Syoya",
    img: "vBKdDm4.png",
    opts: {
      series: [ "jo1" ],
      nameless: true
    }
  },
  {
    name: "Ohira Shosei",
    img: "A7ZnuHo.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Kinjo Sukai",
    img: "sgZPf11.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Tsurubo Shion",
    img: "8UX7hKE.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Mamehara Issei",
    img: "OhaDcnc.png",
    opts: {
      series: [ "jo1" ]
    }
  },
  {
    name: "Kimura Masaya",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/c6d18a76254c89f544bced726dd77515.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Nishi Hiroto",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/b59c09d421b42546385836d02c6ffd24.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Xu Fengfan",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/45cc1faca94779c112dfb748962bd139.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Tajima Shogo",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/13833398c54199d338809145f21396c2.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Takatsuka Hiromu",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/a0e77b514b9de2685367e81ed52be471.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Goto Takeru",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/216666836184402658eed6b535c9662f.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Ozaki Takumi",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/f3bc93bdf64d3bcafc2e78109519914c.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Fujimaki Kyosuke",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/eb34b0a1d8c7812a628788d02958bf3c.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Sano Yudai",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/4374498e955ca9617193df10a5d3cc73.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Ikezaki Rihito",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/dc80520180bacd9841cfc156fdf6e2cc.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Matsuda Jin",
    img: "https://ini-official.com//static/produce101s2/contents/upimg/5e0194eb9218f33600101e8deaf84186.jpeg",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Taniguchi Taichi",
    img: "https://dxteen.com/static/dxteen/contents/upimg/lu/taichi_O1rbaQnf.jpg",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Fukuda Ayuta",
    img: "https://dxteen.com/static/dxteen/contents/upimg/lu/ayuta_Jt38jSqu.jpg",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Terao Koshin",
    img: "https://dxteen.com/static/dxteen/contents/upimg/lu/koshin_Fr5qkzy4.jpg",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Okubo Nalu",
    img: "https://dxteen.com/static/dxteen/contents/upimg/lu/nalu_Nhw1su56.jpg",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Hiramoto Ken",
    img: "https://dxteen.com/static/dxteen/contents/upimg/lu/ken_oEa92hw1.jpg",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Tanaka Shotaro",
    img: "https://dxteen.com/static/dxteen/contents/upimg/lu/shotaro_W91jg5al.jpg",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Momona",
    img: "ceo4DhK.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Ran",
    img: "2YDuTk3.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Cocoro",
    img: "3zo4VKV.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Miu",
    img: "8TLXMST.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Shizuku",
    img: "IImsp7K.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Ayane",
    img: "MZXJQq5.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Keiko",
    img: "aX4WIH8.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Kokona",
    img: "nPBvatH.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Rinon",
    img: "3pDRgvR.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Suzu",
    img: "bV0DaN7.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Tsuzumi",
    img: "J11NjNj.png",
    opts: {
      series: ["mei"]
    }
  },
  {
    name: "Nano",
    img: "https://is-sue.jp/static/issue/assets/artist_photo/2nd_M4xERmLq/nano.jpg",
    opts: {
      series: ["iss"]
    }
  },
  {
    name: "Rino",
    img: "https://is-sue.jp/static/issue/assets/artist_photo/2nd_M4xERmLq/rino.jpg",
    opts: {
      series: ["iss"]
    }
  },
  {
    name: "Yuuki",
    img: "https://is-sue.jp/static/issue/assets/artist_photo/2nd_M4xERmLq/yuuki.jpg",
    opts: {
      series: ["iss"]
    }
  },
  {
    name: "Rin",
    img: "https://is-sue.jp/static/issue/assets/artist_photo/2nd_M4xERmLq/rin.jpg",
    opts: {
      series: ["iss"],
    }
  }
];
