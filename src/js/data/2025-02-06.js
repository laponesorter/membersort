dataSetVersion = "2025-02-06"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "series",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "JO1", key: "book" },
      { name: "INI", tooltip: "01 - Reiiden", key: "ini" },
      { name: "DXTEEN", tooltip: "02 - Fuumaroku", key: "dxt" },
      { name: "ME:I", tooltip: "03 - Yumejikuu", key: "mei" },
      { name: "IS:SUE", tooltip: "04 - Gensoukyou", key: "iss" },
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Guys",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
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
    img: "MgzqjFK.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Nishi Hiroto",
    img: "ohmetZh.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Xu Fengfan",
    img: "aDIf0pN.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Tajima Shogo",
    img: "2Pr8b2N.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Takatsuka Hiromu",
    img: "htOMdDQ.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Goto Takeru",
    img: "PrRPujP.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Ozaki Takumi",
    img: "ze79bFC.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Fujimaki Kyosuke",
    img: "WMjyRLJ.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Sano Yudai",
    img: "VT9mTGb.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Ikezaki Rihito",
    img: "rshnJPV.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Matsuda Jin",
    img: "qsceD4I.png",
    opts: {
      series: [ "ini" ]
    }
  },
  {
    name: "Taniguchi Taichi",
    img: "pLdMjQ3.png",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Fukuda Ayuta",
    img: "PrYzRcC.png",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Terao Koshin",
    img: "8DLUAPf.png",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Okubo Nalu",
    img: "6KyhLqE.png",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Hiramoto Ken",
    img: "99w0Chm.png",
    opts: {
      series: [ "dxt" ]
    }
  },
  {
    name: "Tanaka Shotaro",
    img: "yqNfNje.png",
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
    img: "4Ufced2.png",
    opts: {
      series: ["iss"]
    }
  },
  {
    name: "Rino",
    img: "qGMjnYk.png",
    opts: {
      series: ["iss"]
    }
  },
  {
    name: "Yuuki",
    img: "ATTRSWU.png",
    opts: {
      series: ["iss"]
    }
  },
  {
    name: "Rin",
    img: "nQ78Lz7.png",
    opts: {
      series: ["iss"],
      notgirl: true,
      nameless: true
    }
  }
];
