dataSetVersion = "songs"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    checked: false,
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
    img: "https://i.scdn.co/image/ab67616d00001e023cdd7d475c0ac6f47338b873",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }    
  },
  {
    name: "Prologue",
    img: "https://i.scdn.co/image/ab67616d0000b2730db7d785db96816d530de5a1",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["21"]
    }    
  },
  {
    name: "Bokura no Kisetsu",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Wandering_Normal_Edition_cover.jpeg/220px-Wandering_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["aside"],
      year: ["21"]
    }    
  },
  {
    name: "OASIS",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Wandering_Normal_Edition_cover.jpeg/220px-Wandering_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "We Alright",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Wandering_Normal_Edition_cover.jpeg/220px-Wandering_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Infinite City",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Wandering_Normal_Edition_cover.jpeg/220px-Wandering_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Never Ending Story",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Wandering_Normal_Edition_cover.jpeg/220px-Wandering_Normal_Edition_cover.jpeg",
    opts: {
      group: [ "jo1" ],
      type: ["bside"],
      year: ["21"]
    }
  },
  {
    name: "Dreamer",
    img: "https://static.wikia.nocookie.net/lapone/images/7/76/Dreamer.jpg/revision/latest/thumbnail/width/360/height/360?cb=20231231223157",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
  },
  {
    name: "Toberu Kara",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGjG62_eKcsdTERqMu-2Ott1oTFSRLFDTKg&s",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
  },
  {
    name: "Move the Soul",
    img: "https://i.scdn.co/image/ab67616d0000b27379612a3f548ea7cb418bb2c7",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
    },
  {
    name: "YOLO-konde",
    img: "https://static.wikia.nocookie.net/lapone/images/a/a8/YOLO-konde.jpg",
    opts: {
      group: [ "jo1" ],
      type: ["digi"],
      year: ["22"]
    }
    },
  {
    name: "Rocketeer",
    img: "https://static.wikia.nocookie.net/ini/images/e/e7/A_Regular_Edition.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["21"]
    }
    },
{
    name: "Brighter",
    img: "https://static.wikia.nocookie.net/ini/images/6/6f/A_Limited_Edition_B.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["21"]
    }
    },
{
    name: "Cardio",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "KILLING PART",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "RUNWAY (INI ver.)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "ONE (INI ver.)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["21"]
    }
    },
{
    name: "Brighter (Acoustic Ver.)  ",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["21"]
    }
    },
{
    name: "How are you",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["21"]
    }
    },
{
    name: "CALL 119",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "We Are",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "BOMBARDA",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "DILEMMA",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "AMAZE ME",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Polaroid",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Yummy!!",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["22"]
    }
    },
{
    name: "Password",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "STRIDE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Shooting Star",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "Mirror",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "HERO",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["22"]
    }
    },
{
    name: "SPECTRA",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["22"]
    }
    },
{
    name: "Dramatic",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "BAD BOYZ",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Do What You Like",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Runaway",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },

{
    name: "Let Me Fly〜その未来へ〜(INI Ver.)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["22"]
    }
    },
{
    name: "New Day",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
  {
    name: "FANFARE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["23"]
    }
    },
{
    name: "Let's Escape",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "INItialize",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "DROP",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "My Story",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "Moment",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "Busterz",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["23"]
    }
    },
{
    name: "HANA_花",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["23"]
    }
    },
{
    name: "TAG",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "10 THINGS",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "YOU IN",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["23"]
    }
    },
{
    name: "LEGIT",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "MORE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "T-Shirt",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Dirty Shoes Swag",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "TELEVISION",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Ferris Wheel",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Whatever Happens",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "LOUD",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "Walkie Talkie",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "3D",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "I'm a Dreamer",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "FIRST",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "Break of Dawn",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["24"]
    }
    },
{
    name: "WMDA (Where My Drums At)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["24"]
    }
    },
{
    name: "ONE NIGHT",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "HI-DE-HO",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },
{
    name: "Drip Drop",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["24"]
    }
    },  
{
    name: "Make It Count",
    img: "https://i.scdn.co/image/ab67616d00001e02c7e32b8d8f888ce9d03105b4",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "BREATH (TAKUMI, MASAYA, TAKERU, YUDAI, KYOSUKE)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "Howlin' (RIHITO, FENGFAN, HIROMU, SHOGO, HIROTO, JIN)",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
{
    name: "PARTY GOES ON",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["digi"],
      year: ["25"]
    }
    },
  {
    name: "DOMINANCE",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["aside"],
      year: ["25"]
    }
    },
 {
    name: "Potion",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["25"]
    }
    },
{
    name: "Bullseye",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "Non-Stop",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "What A Night",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "Pineapple Juice",
    img: "https://static.wikia.nocookie.net/ini/images/b/b0/A_Limited_Edition_A.png",
    opts: {
      group: [ "ini" ],
      type: ["bside"],
      year: ["25"]
    }
    },
  {
    name: "Brand New Day",
    img: "https://m.media-amazon.com/images/I/51ZA5zz3abL._UXNaN_FMjpg_QL85_.jpg",
    opts: {
      group: [ "dxt" ],
      type: ["aside"],
      year: ["23"] 
    }
    },

  {
    name: "Come Over",
    img: "https://m.media-amazon.com/images/I/51ZA5zz3abL._UXNaN_FMjpg_QL85_.jpg",
    opts: {
      group: [ "dxt" ],
      type: ["aside"],
      year: ["23"]
    }
    },
  {
    name: "CLICK",
    img: "https://static.wikia.nocookie.net/me-i/images/a/a7/MIRAI_RE.jpg",
    opts: {
      group: [ "mei" ],
      type: ["aside"],
      year: ["24"]
    }
    },
  {
    name: "Cookie Party",
    img: "https://images.genius.com/df323ddcd3f59db65352e89a72b31c59.760x760x1.jpg",
    opts: {
      group: [ "mei" ],
      type: ["bside"],
      year: ["24"]
    }
    },
  {
    name: "THE FLASH GIRL",
    img: "https://i.scdn.co/image/ab67616d0000b273d2f5bbe822d53210c3c0877d",
    opts: {
      group: [ "iss" ],
      type: ["aside"],
      year: ["24"]
    }
    },
  {
    name: "Breaking Thru the Line",
    img: "https://i.scdn.co/image/ab67616d0000b273d2f5bbe822d53210c3c0877d",
    opts: {
      group: [ "iss" ],
      type: ["bside"],
      year: ["24"]
    }
    },
  {
    name: "MUSE",
    img: "https://i.scdn.co/image/ab67616d0000b273d2f5bbe822d53210c3c0877d",
    opts: {
      group: [ "mei" ],
      type: ["aside"],
      year: ["25"]
    }
    },
];
