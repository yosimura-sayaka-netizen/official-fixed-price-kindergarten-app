const months = [
  { key: "apr", label: "4月" },
  { key: "may", label: "5月" },
  { key: "jun", label: "6月" },
  { key: "jul", label: "7月" },
  { key: "aug", label: "8月" },
  { key: "sep", label: "9月" },
  { key: "oct", label: "10月" },
  { key: "nov", label: "11月" },
  { key: "dec", label: "12月" },
  { key: "jan", label: "1月" },
  { key: "feb", label: "2月" },
  { key: "mar", label: "3月" },
];

const yen = new Intl.NumberFormat("ja-JP");
const baseUnitTables = {
  "20/100地域": [
    {
      "age4": {
        "base": 135800,
        "shogu": 1330,
        "c": 2
      },
      "age3": {
        "base": 145780,
        "shogu": 1430,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 103020,
        "shogu": 1000,
        "c": 2
      },
      "age3": {
        "base": 113000,
        "shogu": 1100,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 83340,
        "shogu": 810,
        "c": 2
      },
      "age3": {
        "base": 93320,
        "shogu": 910,
        "c": 2
      }
    },
    {
      "age4": {
        "base": 70230,
        "shogu": 680,
        "c": 2
      },
      "age3": {
        "base": 80210,
        "shogu": 780,
        "c": 2
      }
    },
    {
      "age4": {
        "base": 77930,
        "shogu": 750,
        "c": 1.6
      },
      "age3": {
        "base": 87910,
        "shogu": 850,
        "c": 1.6
      }
    },
    {
      "age4": {
        "base": 68890,
        "shogu": 660,
        "c": 2
      },
      "age3": {
        "base": 78870,
        "shogu": 760,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 61750,
        "shogu": 590,
        "c": 2
      },
      "age3": {
        "base": 71730,
        "shogu": 690,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 59980,
        "shogu": 570,
        "c": 2
      },
      "age3": {
        "base": 69960,
        "shogu": 670,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 58650,
        "shogu": 560,
        "c": 2
      },
      "age3": {
        "base": 68630,
        "shogu": 660,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 57430,
        "shogu": 550,
        "c": 2
      },
      "age3": {
        "base": 67410,
        "shogu": 650,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 50900,
        "shogu": 480,
        "c": 2
      },
      "age3": {
        "base": 60880,
        "shogu": 580,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 46510,
        "shogu": 440,
        "c": 2
      },
      "age3": {
        "base": 56490,
        "shogu": 540,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 43380,
        "shogu": 410,
        "c": 2
      },
      "age3": {
        "base": 53360,
        "shogu": 510,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 41060,
        "shogu": 390,
        "c": 2
      },
      "age3": {
        "base": 51040,
        "shogu": 480,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 39220,
        "shogu": 370,
        "c": 2
      },
      "age3": {
        "base": 49200,
        "shogu": 470,
        "c": 2
      }
    },
    {
      "age4": {
        "base": 37780,
        "shogu": 350,
        "c": 2
      },
      "age3": {
        "base": 47760,
        "shogu": 450,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 35600,
        "shogu": 330,
        "c": 2
      },
      "age3": {
        "base": 45580,
        "shogu": 430,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 34020,
        "shogu": 310,
        "c": 2
      },
      "age3": {
        "base": 44000,
        "shogu": 410,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 32850,
        "shogu": 300,
        "c": 2
      },
      "age3": {
        "base": 42830,
        "shogu": 400,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 31940,
        "shogu": 290,
        "c": 2
      },
      "age3": {
        "base": 41920,
        "shogu": 390,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 31220,
        "shogu": 290,
        "c": 1.9
      },
      "age3": {
        "base": 41200,
        "shogu": 390,
        "c": 2
      }
    },
    {
      "age4": {
        "base": 28810,
        "shogu": 260,
        "c": 2
      },
      "age3": {
        "base": 38790,
        "shogu": 360,
        "c": 2.1
      }
    }
  ],
  "16/100地域": [
    {
      "age4": {
        "base": 131770,
        "shogu": 1290,
        "c": 2.1
      },
      "age3": {
        "base": 141440,
        "shogu": 1390,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 99990,
        "shogu": 970,
        "c": 2.1
      },
      "age3": {
        "base": 109660,
        "shogu": 1070,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 80920,
        "shogu": 780,
        "c": 2.1
      },
      "age3": {
        "base": 90590,
        "shogu": 880,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 68210,
        "shogu": 660,
        "c": 2.1
      },
      "age3": {
        "base": 77880,
        "shogu": 750,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 75680,
        "shogu": 730,
        "c": 1.6
      },
      "age3": {
        "base": 85350,
        "shogu": 830,
        "c": 1.7
      }
    },
    {
      "age4": {
        "base": 66910,
        "shogu": 640,
        "c": 2.1
      },
      "age3": {
        "base": 76580,
        "shogu": 740,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 60000,
        "shogu": 570,
        "c": 2.1
      },
      "age3": {
        "base": 69670,
        "shogu": 670,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 58280,
        "shogu": 560,
        "c": 2.1
      },
      "age3": {
        "base": 67950,
        "shogu": 650,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 56990,
        "shogu": 540,
        "c": 2.1
      },
      "age3": {
        "base": 66660,
        "shogu": 640,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 55810,
        "shogu": 530,
        "c": 2.1
      },
      "age3": {
        "base": 65480,
        "shogu": 630,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 49480,
        "shogu": 470,
        "c": 2.1
      },
      "age3": {
        "base": 59150,
        "shogu": 570,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 45230,
        "shogu": 430,
        "c": 2
      },
      "age3": {
        "base": 54900,
        "shogu": 520,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 42190,
        "shogu": 400,
        "c": 2
      },
      "age3": {
        "base": 51860,
        "shogu": 490,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 39940,
        "shogu": 370,
        "c": 2.1
      },
      "age3": {
        "base": 49610,
        "shogu": 470,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 38160,
        "shogu": 360,
        "c": 2
      },
      "age3": {
        "base": 47830,
        "shogu": 450,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 36760,
        "shogu": 340,
        "c": 2.1
      },
      "age3": {
        "base": 46430,
        "shogu": 440,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 34650,
        "shogu": 320,
        "c": 2
      },
      "age3": {
        "base": 44320,
        "shogu": 420,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 33120,
        "shogu": 310,
        "c": 2
      },
      "age3": {
        "base": 42790,
        "shogu": 400,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 31990,
        "shogu": 290,
        "c": 2.1
      },
      "age3": {
        "base": 41660,
        "shogu": 390,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 31110,
        "shogu": 290,
        "c": 2
      },
      "age3": {
        "base": 40780,
        "shogu": 380,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 30400,
        "shogu": 280,
        "c": 2
      },
      "age3": {
        "base": 40070,
        "shogu": 380,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 28070,
        "shogu": 260,
        "c": 2
      },
      "age3": {
        "base": 37740,
        "shogu": 350,
        "c": 2.1
      }
    }
  ],
  "15/100地域": [
    {
      "age4": {
        "base": 130760,
        "shogu": 1280,
        "c": 2.1
      },
      "age3": {
        "base": 140360,
        "shogu": 1380,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 99240,
        "shogu": 970,
        "c": 2.1
      },
      "age3": {
        "base": 108840,
        "shogu": 1060,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 80320,
        "shogu": 780,
        "c": 2.1
      },
      "age3": {
        "base": 89920,
        "shogu": 870,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 67710,
        "shogu": 650,
        "c": 2.1
      },
      "age3": {
        "base": 77310,
        "shogu": 750,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 75110,
        "shogu": 730,
        "c": 1.6
      },
      "age3": {
        "base": 84710,
        "shogu": 820,
        "c": 1.7
      }
    },
    {
      "age4": {
        "base": 66420,
        "shogu": 640,
        "c": 2.1
      },
      "age3": {
        "base": 76020,
        "shogu": 730,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 59560,
        "shogu": 570,
        "c": 2.1
      },
      "age3": {
        "base": 69160,
        "shogu": 670,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 57860,
        "shogu": 550,
        "c": 2.1
      },
      "age3": {
        "base": 67460,
        "shogu": 650,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 56570,
        "shogu": 540,
        "c": 2.1
      },
      "age3": {
        "base": 66170,
        "shogu": 640,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 55410,
        "shogu": 530,
        "c": 2.1
      },
      "age3": {
        "base": 65010,
        "shogu": 620,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 49130,
        "shogu": 470,
        "c": 2.1
      },
      "age3": {
        "base": 58730,
        "shogu": 560,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 44910,
        "shogu": 420,
        "c": 2.1
      },
      "age3": {
        "base": 54510,
        "shogu": 520,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 41890,
        "shogu": 390,
        "c": 2.1
      },
      "age3": {
        "base": 51490,
        "shogu": 490,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 39660,
        "shogu": 370,
        "c": 2.1
      },
      "age3": {
        "base": 49260,
        "shogu": 470,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 37900,
        "shogu": 350,
        "c": 2.1
      },
      "age3": {
        "base": 47500,
        "shogu": 450,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 36510,
        "shogu": 340,
        "c": 2.1
      },
      "age3": {
        "base": 46110,
        "shogu": 440,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 34410,
        "shogu": 320,
        "c": 2
      },
      "age3": {
        "base": 44010,
        "shogu": 410,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 32890,
        "shogu": 300,
        "c": 2.1
      },
      "age3": {
        "base": 42490,
        "shogu": 400,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 31770,
        "shogu": 290,
        "c": 2.1
      },
      "age3": {
        "base": 41370,
        "shogu": 390,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 30900,
        "shogu": 280,
        "c": 2.1
      },
      "age3": {
        "base": 40500,
        "shogu": 380,
        "c": 2.1
      }
    },
    {
      "age4": {
        "base": 30200,
        "shogu": 280,
        "c": 2
      },
      "age3": {
        "base": 39800,
        "shogu": 370,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 27890,
        "shogu": 250,
        "c": 2
      },
      "age3": {
        "base": 37490,
        "shogu": 350,
        "c": 2.1
      }
    }
  ],
  "12/100地域": [
    {
      "age4": {
        "base": 127740,
        "shogu": 1250,
        "c": 2.2
      },
      "age3": {
        "base": 137110,
        "shogu": 1350,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 96970,
        "shogu": 940,
        "c": 2.2
      },
      "age3": {
        "base": 106340,
        "shogu": 1040,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 78500,
        "shogu": 760,
        "c": 2.1
      },
      "age3": {
        "base": 87870,
        "shogu": 850,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 66190,
        "shogu": 640,
        "c": 2.1
      },
      "age3": {
        "base": 75560,
        "shogu": 730,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 73420,
        "shogu": 710,
        "c": 1.6
      },
      "age3": {
        "base": 82790,
        "shogu": 800,
        "c": 1.7
      }
    },
    {
      "age4": {
        "base": 64940,
        "shogu": 620,
        "c": 2.2
      },
      "age3": {
        "base": 74310,
        "shogu": 720,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 58240,
        "shogu": 560,
        "c": 2.1
      },
      "age3": {
        "base": 67610,
        "shogu": 650,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 56580,
        "shogu": 540,
        "c": 2.1
      },
      "age3": {
        "base": 65950,
        "shogu": 630,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 55330,
        "shogu": 530,
        "c": 2.1
      },
      "age3": {
        "base": 64700,
        "shogu": 620,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 54190,
        "shogu": 520,
        "c": 2.1
      },
      "age3": {
        "base": 63560,
        "shogu": 610,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 48060,
        "shogu": 460,
        "c": 2.1
      },
      "age3": {
        "base": 57430,
        "shogu": 550,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 43940,
        "shogu": 410,
        "c": 2.1
      },
      "age3": {
        "base": 53310,
        "shogu": 510,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 41000,
        "shogu": 380,
        "c": 2.1
      },
      "age3": {
        "base": 50370,
        "shogu": 480,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 38820,
        "shogu": 360,
        "c": 2.1
      },
      "age3": {
        "base": 48190,
        "shogu": 460,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 37100,
        "shogu": 350,
        "c": 2.1
      },
      "age3": {
        "base": 46470,
        "shogu": 440,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 35740,
        "shogu": 330,
        "c": 2.1
      },
      "age3": {
        "base": 45110,
        "shogu": 430,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 33700,
        "shogu": 310,
        "c": 2.1
      },
      "age3": {
        "base": 43070,
        "shogu": 410,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 32220,
        "shogu": 300,
        "c": 2.1
      },
      "age3": {
        "base": 41590,
        "shogu": 390,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 31120,
        "shogu": 290,
        "c": 2.1
      },
      "age3": {
        "base": 40490,
        "shogu": 380,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 30270,
        "shogu": 280,
        "c": 2.1
      },
      "age3": {
        "base": 39640,
        "shogu": 370,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 29590,
        "shogu": 270,
        "c": 2.1
      },
      "age3": {
        "base": 38960,
        "shogu": 360,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 27330,
        "shogu": 250,
        "c": 2
      },
      "age3": {
        "base": 36700,
        "shogu": 340,
        "c": 2.2
      }
    }
  ],
  "10/100地域": [
    {
      "age4": {
        "base": 125720,
        "shogu": 1230,
        "c": 2.2
      },
      "age3": {
        "base": 134930,
        "shogu": 1320,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 95450,
        "shogu": 930,
        "c": 2.2
      },
      "age3": {
        "base": 104660,
        "shogu": 1020,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 77290,
        "shogu": 750,
        "c": 2.2
      },
      "age3": {
        "base": 86500,
        "shogu": 840,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 65190,
        "shogu": 630,
        "c": 2.2
      },
      "age3": {
        "base": 74400,
        "shogu": 720,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 72290,
        "shogu": 700,
        "c": 1.7
      },
      "age3": {
        "base": 81500,
        "shogu": 790,
        "c": 1.8
      }
    },
    {
      "age4": {
        "base": 63950,
        "shogu": 610,
        "c": 2.2
      },
      "age3": {
        "base": 73160,
        "shogu": 710,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 57360,
        "shogu": 550,
        "c": 2.2
      },
      "age3": {
        "base": 66570,
        "shogu": 640,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 55730,
        "shogu": 530,
        "c": 2.2
      },
      "age3": {
        "base": 64940,
        "shogu": 620,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 54500,
        "shogu": 520,
        "c": 2.2
      },
      "age3": {
        "base": 63710,
        "shogu": 610,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 53380,
        "shogu": 510,
        "c": 2.2
      },
      "age3": {
        "base": 62590,
        "shogu": 600,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 47350,
        "shogu": 450,
        "c": 2.2
      },
      "age3": {
        "base": 56560,
        "shogu": 540,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 43300,
        "shogu": 410,
        "c": 2.1
      },
      "age3": {
        "base": 52510,
        "shogu": 500,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 40400,
        "shogu": 380,
        "c": 2.1
      },
      "age3": {
        "base": 49610,
        "shogu": 470,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 38260,
        "shogu": 360,
        "c": 2.1
      },
      "age3": {
        "base": 47470,
        "shogu": 450,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 36570,
        "shogu": 340,
        "c": 2.1
      },
      "age3": {
        "base": 45780,
        "shogu": 430,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 35240,
        "shogu": 330,
        "c": 2.1
      },
      "age3": {
        "base": 44450,
        "shogu": 420,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 33220,
        "shogu": 310,
        "c": 2.1
      },
      "age3": {
        "base": 42430,
        "shogu": 400,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 31760,
        "shogu": 290,
        "c": 2.1
      },
      "age3": {
        "base": 40970,
        "shogu": 380,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 30690,
        "shogu": 280,
        "c": 2.1
      },
      "age3": {
        "base": 39900,
        "shogu": 370,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 29850,
        "shogu": 270,
        "c": 2.1
      },
      "age3": {
        "base": 39060,
        "shogu": 370,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 29180,
        "shogu": 270,
        "c": 2.1
      },
      "age3": {
        "base": 38390,
        "shogu": 360,
        "c": 2.2
      }
    },
    {
      "age4": {
        "base": 26960,
        "shogu": 240,
        "c": 2.1
      },
      "age3": {
        "base": 36170,
        "shogu": 340,
        "c": 2.2
      }
    }
  ],
  "6/100地域": [
    {
      "age4": {
        "base": 121690,
        "shogu": 1190,
        "c": 2.3
      },
      "age3": {
        "base": 130600,
        "shogu": 1280,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 92430,
        "shogu": 900,
        "c": 2.3
      },
      "age3": {
        "base": 101340,
        "shogu": 990,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 74870,
        "shogu": 720,
        "c": 2.3
      },
      "age3": {
        "base": 83780,
        "shogu": 810,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 63170,
        "shogu": 610,
        "c": 2.2
      },
      "age3": {
        "base": 72080,
        "shogu": 700,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 70040,
        "shogu": 670,
        "c": 1.7
      },
      "age3": {
        "base": 78950,
        "shogu": 760,
        "c": 1.8
      }
    },
    {
      "age4": {
        "base": 61980,
        "shogu": 590,
        "c": 2.3
      },
      "age3": {
        "base": 70890,
        "shogu": 680,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 55610,
        "shogu": 530,
        "c": 2.2
      },
      "age3": {
        "base": 64520,
        "shogu": 620,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 54030,
        "shogu": 510,
        "c": 2.3
      },
      "age3": {
        "base": 62940,
        "shogu": 600,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 52840,
        "shogu": 500,
        "c": 2.3
      },
      "age3": {
        "base": 61750,
        "shogu": 590,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 51750,
        "shogu": 490,
        "c": 2.3
      },
      "age3": {
        "base": 60660,
        "shogu": 580,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 45930,
        "shogu": 430,
        "c": 2.3
      },
      "age3": {
        "base": 54840,
        "shogu": 520,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 42010,
        "shogu": 390,
        "c": 2.3
      },
      "age3": {
        "base": 50920,
        "shogu": 480,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 39210,
        "shogu": 370,
        "c": 2.2
      },
      "age3": {
        "base": 48120,
        "shogu": 460,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 37140,
        "shogu": 350,
        "c": 2.2
      },
      "age3": {
        "base": 46050,
        "shogu": 440,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 35500,
        "shogu": 330,
        "c": 2.2
      },
      "age3": {
        "base": 44410,
        "shogu": 420,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 34220,
        "shogu": 320,
        "c": 2.2
      },
      "age3": {
        "base": 43130,
        "shogu": 410,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 32270,
        "shogu": 300,
        "c": 2.2
      },
      "age3": {
        "base": 41180,
        "shogu": 390,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 30860,
        "shogu": 280,
        "c": 2.2
      },
      "age3": {
        "base": 39770,
        "shogu": 370,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 29820,
        "shogu": 270,
        "c": 2.2
      },
      "age3": {
        "base": 38730,
        "shogu": 360,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 29010,
        "shogu": 260,
        "c": 2.2
      },
      "age3": {
        "base": 37920,
        "shogu": 350,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 28360,
        "shogu": 260,
        "c": 2.2
      },
      "age3": {
        "base": 37270,
        "shogu": 350,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 26220,
        "shogu": 240,
        "c": 2.1
      },
      "age3": {
        "base": 35130,
        "shogu": 330,
        "c": 2.3
      }
    }
  ],
  "3/100地域": [
    {
      "age4": {
        "base": 118670,
        "shogu": 1160,
        "c": 2.3
      },
      "age3": {
        "base": 127340,
        "shogu": 1250,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 90160,
        "shogu": 880,
        "c": 2.3
      },
      "age3": {
        "base": 98830,
        "shogu": 960,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 73060,
        "shogu": 710,
        "c": 2.3
      },
      "age3": {
        "base": 81730,
        "shogu": 790,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 61660,
        "shogu": 590,
        "c": 2.3
      },
      "age3": {
        "base": 70330,
        "shogu": 680,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 68350,
        "shogu": 660,
        "c": 1.8
      },
      "age3": {
        "base": 77020,
        "shogu": 740,
        "c": 1.9
      }
    },
    {
      "age4": {
        "base": 60500,
        "shogu": 580,
        "c": 2.3
      },
      "age3": {
        "base": 69170,
        "shogu": 670,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 54300,
        "shogu": 520,
        "c": 2.3
      },
      "age3": {
        "base": 62970,
        "shogu": 600,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 52760,
        "shogu": 500,
        "c": 2.3
      },
      "age3": {
        "base": 61430,
        "shogu": 590,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 51590,
        "shogu": 490,
        "c": 2.3
      },
      "age3": {
        "base": 60260,
        "shogu": 580,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 50540,
        "shogu": 480,
        "c": 2.3
      },
      "age3": {
        "base": 59210,
        "shogu": 570,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 44860,
        "shogu": 420,
        "c": 2.3
      },
      "age3": {
        "base": 53530,
        "shogu": 510,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 41050,
        "shogu": 390,
        "c": 2.3
      },
      "age3": {
        "base": 49720,
        "shogu": 470,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 38320,
        "shogu": 360,
        "c": 2.3
      },
      "age3": {
        "base": 46990,
        "shogu": 440,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 36300,
        "shogu": 340,
        "c": 2.3
      },
      "age3": {
        "base": 44970,
        "shogu": 420,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 34710,
        "shogu": 320,
        "c": 2.3
      },
      "age3": {
        "base": 43380,
        "shogu": 410,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 33450,
        "shogu": 310,
        "c": 2.3
      },
      "age3": {
        "base": 42120,
        "shogu": 400,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 31560,
        "shogu": 290,
        "c": 2.3
      },
      "age3": {
        "base": 40230,
        "shogu": 380,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 30180,
        "shogu": 280,
        "c": 2.2
      },
      "age3": {
        "base": 38850,
        "shogu": 360,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 29170,
        "shogu": 270,
        "c": 2.2
      },
      "age3": {
        "base": 37840,
        "shogu": 350,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 28380,
        "shogu": 260,
        "c": 2.2
      },
      "age3": {
        "base": 37050,
        "shogu": 350,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 27750,
        "shogu": 250,
        "c": 2.3
      },
      "age3": {
        "base": 36420,
        "shogu": 340,
        "c": 2.3
      }
    },
    {
      "age4": {
        "base": 25660,
        "shogu": 230,
        "c": 2.2
      },
      "age3": {
        "base": 34330,
        "shogu": 320,
        "c": 2.3
      }
    }
  ],
  "その他地域": [
    {
      "age4": {
        "base": 115640,
        "shogu": 1130,
        "c": 2.4
      },
      "age3": {
        "base": 124080,
        "shogu": 1220,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 87890,
        "shogu": 850,
        "c": 2.4
      },
      "age3": {
        "base": 96330,
        "shogu": 940,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 71240,
        "shogu": 690,
        "c": 2.4
      },
      "age3": {
        "base": 79680,
        "shogu": 770,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 60150,
        "shogu": 580,
        "c": 2.3
      },
      "age3": {
        "base": 68590,
        "shogu": 660,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 66660,
        "shogu": 640,
        "c": 1.8
      },
      "age3": {
        "base": 75100,
        "shogu": 730,
        "c": 1.9
      }
    },
    {
      "age4": {
        "base": 59020,
        "shogu": 560,
        "c": 2.4
      },
      "age3": {
        "base": 67460,
        "shogu": 650,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 52980,
        "shogu": 500,
        "c": 2.4
      },
      "age3": {
        "base": 61420,
        "shogu": 590,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 51480,
        "shogu": 490,
        "c": 2.4
      },
      "age3": {
        "base": 59920,
        "shogu": 570,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 50350,
        "shogu": 480,
        "c": 2.4
      },
      "age3": {
        "base": 58790,
        "shogu": 560,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 49320,
        "shogu": 470,
        "c": 2.4
      },
      "age3": {
        "base": 57760,
        "shogu": 550,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 43800,
        "shogu": 410,
        "c": 2.4
      },
      "age3": {
        "base": 52240,
        "shogu": 500,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 40080,
        "shogu": 380,
        "c": 2.3
      },
      "age3": {
        "base": 48520,
        "shogu": 460,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 37430,
        "shogu": 350,
        "c": 2.3
      },
      "age3": {
        "base": 45870,
        "shogu": 430,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 35460,
        "shogu": 330,
        "c": 2.3
      },
      "age3": {
        "base": 43900,
        "shogu": 410,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 33910,
        "shogu": 310,
        "c": 2.4
      },
      "age3": {
        "base": 42350,
        "shogu": 400,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 32690,
        "shogu": 300,
        "c": 2.3
      },
      "age3": {
        "base": 41130,
        "shogu": 390,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 30840,
        "shogu": 280,
        "c": 2.3
      },
      "age3": {
        "base": 39280,
        "shogu": 370,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 29510,
        "shogu": 270,
        "c": 2.3
      },
      "age3": {
        "base": 37950,
        "shogu": 350,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 28520,
        "shogu": 260,
        "c": 2.3
      },
      "age3": {
        "base": 36960,
        "shogu": 340,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 27750,
        "shogu": 250,
        "c": 2.3
      },
      "age3": {
        "base": 36190,
        "shogu": 340,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 27140,
        "shogu": 250,
        "c": 2.3
      },
      "age3": {
        "base": 35580,
        "shogu": 330,
        "c": 2.4
      }
    },
    {
      "age4": {
        "base": 25100,
        "shogu": 230,
        "c": 2.2
      },
      "age3": {
        "base": 33540,
        "shogu": 310,
        "c": 2.4
      }
    }
  ]
};
const regionLabels = Object.keys(baseUnitTables);
const additionUnitKeys = window.ADDITION_UNIT_KEYS || [];
const additionUnitTables = window.ADDITION_UNIT_TABLES || {};
const capacityOverRateTables = window.CAPACITY_OVER_RATE_TABLES || {};
const regionData = window.REGION_DATA || {};
const savedRecordsStorageKey = "official-fixed-price-kindergarten:saved-records:v1";
let saveStatusTimer = null;

const capacityBrackets = [
  { label: "15人まで", min: 1, max: 15 },
  { label: "16人から20人まで", min: 16, max: 20 },
  { label: "21人から25人まで", min: 21, max: 25 },
  { label: "26人から30人まで", min: 26, max: 30 },
  { label: "31人から35人まで", min: 31, max: 35 },
  { label: "36人から40人まで", min: 36, max: 40 },
  { label: "41人から45人まで", min: 41, max: 45 },
  { label: "46人から50人まで", min: 46, max: 50 },
  { label: "51人から55人まで", min: 51, max: 55 },
  { label: "56人から60人まで", min: 56, max: 60 },
  { label: "61人から75人まで", min: 61, max: 75 },
  { label: "76人から90人まで", min: 76, max: 90 },
  { label: "91人から105人まで", min: 91, max: 105 },
  { label: "106人から120人まで", min: 106, max: 120 },
  { label: "121人から135人まで", min: 121, max: 135 },
  { label: "136人から150人まで", min: 136, max: 150 },
  { label: "151人から180人まで", min: 151, max: 180 },
  { label: "181人から210人まで", min: 181, max: 210 },
  { label: "211人から240人まで", min: 211, max: 240 },
  { label: "241人から270人まで", min: 241, max: 270 },
  { label: "271人から300人まで", min: 271, max: 300 },
  { label: "301人以上", min: 301, max: Infinity },
];

const climateZones = [
  { value: "other", label: "その他", unit: 120 },
  { value: "grade1", label: "1級地", unit: 2020 },
  { value: "grade2", label: "2級地", unit: 1790 },
  { value: "grade3", label: "3級地", unit: 1770 },
  { value: "grade4", label: "4級地", unit: 1400 },
  { value: "relief", label: "激変緩和地域", unit: 1050 },
];

const fixedAdditionUnits = {
  mainTeacher: { base: 124660, shogu: 1240, c: 7.5 },
  parenting: { base: 4050, shogu: 40, c: 0 },
  therapyA: { base: 39530, shogu: 390, c: 9.0 },
  therapyB: { base: 26350, shogu: 260, c: 9.0 },
  adminStaff: { base: 84330, shogu: 840, c: 9.7 },
  guidance: { base: 95200, shogu: 950, c: 7.4 },
  adminLoad: { base: 75080, shogu: 750, c: 9.3 },
  nutritionA: { base: 74800, shogu: 740, c: 7.9 },
  nutritionB: { base: 50000, shogu: 500, c: 0 },
};

const therapyFixedAmounts = { C: 225680, D: 150453 };
const facilityEvalAmounts = { A: 323610, B: 60520 };
const treatment3Units = { A: 51790, B: 6470 };
const schoolConnectAmounts = {
  requirement12: 21820,
  requirement123: 327820,
};

const schoolConnectLabels = {
  requirement12: "要件ⅰ・ⅱを満たす場合",
  requirement123: "要件ⅰ〜ⅲを満たす場合",
};

const countRows = [
  { key: "age4", label: "4歳以上児", ageKey: "age4" },
  { key: "age3", label: "3歳児（満3歳児を含めない）", ageKey: "age3" },
  { key: "ageM3", label: "満3歳児", ageKey: "ageM3" },
];

const assistRows = [
  { key: "exempt", label: "副食費徴収免除数（1号）", min: 0 },
  { key: "mealDays", label: "給食実施日数（日・最大20）", min: 0, max: 20 },
];

const items = [
  { id: "base", number: "⑤", name: "基本分単価", category: "基本", mode: "auto", type: "base", formula: "基本額×月初人数" },
  { id: "treatment12", number: "⑥", name: "処遇改善等加算（区分1・区分2）", category: "加算", mode: "auto", type: "treatment12", formula: "処遇改善単価×（加算率（a）＋加算率（b）＋加算率（c））" },
  { id: "vicePrincipal", number: "⑦", name: "副園長・教頭配置加算", category: "加算", mode: "auto", type: "unit", unitKey: "vicePrincipal", target: "total", formula: "基本額＋処遇改善単価×（加算率（a）＋加算率（b）＋加算率（c））" },
  { id: "age3Improve", number: "⑧", name: "3歳児配置改善加算", category: "加算", mode: "auto", type: "unit", unitKey: "age3Improve", target: "age3", formula: "3歳児数×単価" },
  { id: "age4Improve", number: "⑨", name: "4歳以上児配置改善加算", category: "加算", mode: "auto", type: "unit", unitKey: "age4Improve", target: "age4", formula: "基本額＋処遇改善単価×（加算率（a）＋加算率（b）＋加算率（c））" },
  { id: "ageM3Staff", number: "⑩", name: "満3歳児対応加配加算", category: "加算", mode: "auto", type: "ageM3Staff", target: "ageM3", formula: "満3歳児数×対応単価" },
  { id: "lecturer", number: "⑪", name: "講師配置加算", category: "加算", mode: "auto", type: "unit", unitKey: "lecturer", target: "total", formula: "利用子ども数×単価" },
  { id: "teamCare", number: "⑫", name: "チーム保育加配加算", category: "加算", mode: "auto", type: "teamCare", unitKey: "teamCare", target: "total", formula: "利用子ども数×単価×加配人数" },
  { id: "transport", number: "⑬", name: "通園送迎加算", category: "加算", mode: "auto", type: "unit", unitKey: "transport", target: "total", formula: "利用子ども数×単価" },
  { id: "meal", number: "⑭", name: "給食実施加算", category: "加算", mode: "manual", type: "meal", target: "total", formula: "利用子ども数×給食形態別単価×週当たり実施日数" },
  { id: "externalAudit", number: "⑮", name: "外部監査費加算", category: "加算", mode: "auto", type: "marchUnit", unitKey: "externalAudit", target: "total", formula: "3月初日利用子ども数×単価" },
  { id: "sideMealExempt", number: "⑯", name: "副食費徴収免除加算", category: "加算", mode: "auto", type: "sideMeal", unitKey: "sideMealExempt", formula: "副食費徴収免除数×給食実施日数×単価" },
  { id: "mainTeacher", number: "⑲", name: "主幹教諭等専任加算", category: "加算部分2", mode: "auto", type: "allocatedUnit", fixedUnitKey: "mainTeacher", formula: "（124,660円＋1,240円×（加算率（a）＋加算率（b）＋7.5））÷各月初日の利用子ども数" },
  { id: "parenting", number: "⑳", name: "子育て支援活動費加算", category: "加算部分2", mode: "auto", type: "allocatedUnit", fixedUnitKey: "parenting", formula: "（4,050円＋40円×（加算率（a）＋加算率（b）））÷各月初日の利用子ども数" },
  { id: "therapy", number: "㉑", name: "療育支援加算", category: "加算部分2", mode: "manual", type: "therapy", formula: "区分A・Bは算定式、区分C・Dは固定額÷各月初日の利用子ども数" },
  { id: "adminStaff", number: "㉒", name: "事務職員配置加算", category: "加算部分2", mode: "auto", type: "allocatedUnit", fixedUnitKey: "adminStaff", formula: "（84,330円＋840円×（加算率（a）＋加算率（b）＋9.7））÷各月初日の利用子ども数" },
  { id: "guidance", number: "㉓", name: "指導充実加配加算", category: "加算部分2", mode: "auto", type: "allocatedUnit", fixedUnitKey: "guidance", formula: "（95,200円＋950円×（加算率（a）＋加算率（b）＋7.4））÷各月初日の利用子ども数" },
  { id: "adminLoad", number: "㉔", name: "事務負担対応加配加算", category: "加算部分2", mode: "auto", type: "allocatedUnit", fixedUnitKey: "adminLoad", formula: "（75,080円＋750円×（加算率（a）＋加算率（b）＋9.3））÷各月初日の利用子ども数" },
  { id: "treatment3", number: "㉕", name: "処遇改善等加算（区分3）", category: "加算部分2", mode: "manual", type: "treatment3", formula: "51,790円×人数A＋6,470円×人数B" },
  { id: "aircon", number: "㉖", name: "冷暖房費加算", category: "加算部分2", mode: "manual", type: "aircon", formula: "寒冷地等区分の単価×利用子ども数" },
  { id: "facilityEval", number: "㉗", name: "施設関係者評価加算", category: "加算部分2", mode: "manual", type: "facilityEval", formula: "A又はBの年額÷3月初日人数" },
  { id: "snow", number: "㉘", name: "除雪費加算", category: "加算部分2", mode: "manual", type: "snow", formula: "6,620円×3月初日人数" },
  { id: "ash", number: "㉙", name: "降灰除去費加算", category: "加算部分2", mode: "manual", type: "ash", formula: "171,160円÷3月初日人数" },
  { id: "facilityEnhance", number: "㉚", name: "施設機能強化推進費加算", category: "加算部分2", mode: "manual", type: "marchAllocated", annualAmount: 200000, formula: "200,000円÷3月初日人数" },
  { id: "schoolConnect", number: "㉛", name: "小学校接続加算", category: "加算部分2", mode: "manual", type: "schoolConnect", formula: "選択した要件区分の年額÷3月初日人数" },
  { id: "nutrition", number: "㉜", name: "栄養管理加算", category: "加算部分2", mode: "manual", type: "nutrition", formula: "A・B・Cの選択式単価÷各月初日人数" },
  { id: "thirdParty", number: "㉝", name: "第三者評価受審加算", category: "加算部分2", mode: "manual", type: "marchAllocated", annualAmount: 150000, formula: "150,000円÷3月初日人数" },
  { id: "ict", number: "㉞", name: "保育ICT推進加算", category: "加算部分2", mode: "manual", type: "marchAllocated", annualAmount: 300000, formula: "300,000円÷3月初日人数" },
  { id: "ageStandardDeduct", number: "⑰", name: "年齢別配置基準を下回る場合", category: "減算・調整", mode: "manual", type: "ageStandardDeduct", formula: "不足人数×利用子ども数×調整単価を減算" },
  { id: "safetyDeduct", number: "⑰a", name: "安全計画の策定等をしていない場合", category: "減算・調整", mode: "manual", type: "percentDeduct", percent: 5, formula: "基本分単価等×5%を減算" },
  { id: "reportingDeduct", number: "⑰b", name: "経営情報の報告等を行っていない場合", category: "減算・調整", mode: "manual", type: "percentDeduct", percent: 5, formula: "基本分単価等×5%を減算" },
  { id: "capacityOver", number: "⑱", name: "定員を恒常的に超過する場合", category: "減算・調整", mode: "manual", type: "capacityOver", formula: "対象額×（100%−別に定める調整率）を減算" },
];

const defaultOffItemIds = new Set(["snow", "ash"]);

function isDefaultOffItem(item) {
  return defaultOffItemIds.has(item.id) || item.category === "減算・調整";
}

function createDefaultToggles() {
  return Object.fromEntries(items.map((item) => [item.id, months.map(() => !isDefaultOffItem(item))]));
}

const defaultSettings = {
  therapyType: "A",
  nutritionType: "A",
  facilityEvalType: "A",
  schoolConnectType: "requirement12",
  treatment3A: 0,
  treatment3B: 0,
  teamCareStaff: 1,
  mealType: "inHouse",
  mealWeeklyDays: 0,
  ageStandardShortage: 0,
  capacityOverChildBracket: 0,
  climateZone: "other",
};

const state = {
  counts: {
    age4: months.map(() => 0),
    age3: months.map(() => 0),
    ageM3: months.map(() => 0),
    exempt: months.map(() => 0),
    mealDays: months.map(() => 0),
  },
  toggles: createDefaultToggles(),
  settings: { ...defaultSettings },
  expandedResults: {},
  expandedApply: {},
  filter: "all",
};

const elements = {
  annualTotal: document.querySelector("#annualTotal"),
  monthlyAverage: document.querySelector("#monthlyAverage"),
  regionMetric: document.querySelector("#regionMetric"),
  capacityMetric: document.querySelector("#capacityMetric"),
  childCountTotal: document.querySelector("#childCountTotal"),
  autoCoverage: document.querySelector("#autoCoverage"),
  fiscalYear: document.querySelector("#fiscalYear"),
  prefecture: document.querySelector("#prefecture"),
  municipality: document.querySelector("#municipality"),
  regionSelect: document.querySelector("#regionSelect"),
  facilityName: document.querySelector("#facilityName"),
  capacity: document.querySelector("#capacity"),
  rateA: document.querySelector("#rateA"),
  rateB: document.querySelector("#rateB"),
  rateTotal: document.querySelector("#rateTotal"),
  countTables: document.querySelector("#countTables"),
  applyTable: document.querySelector("#applyTable"),
  resultTable: document.querySelector("#resultTable"),
  resetButton: document.querySelector("#resetButton"),
  exportButton: document.querySelector("#exportButton"),
  saveRecordButton: document.querySelector("#saveRecordButton"),
  savedRecordSelect: document.querySelector("#savedRecordSelect"),
  loadRecordButton: document.querySelector("#loadRecordButton"),
  deleteRecordButton: document.querySelector("#deleteRecordButton"),
  saveStatus: document.querySelector("#saveStatus"),
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function floor10(value) {
  return Math.floor(Number(value || 0) / 10) * 10;
}

function safeNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function htmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function storageApi() {
  try {
    return window.localStorage || null;
  } catch {
    return null;
  }
}

function loadSavedRecordMap() {
  const storage = storageApi();
  if (!storage) return {};
  try {
    const parsed = JSON.parse(storage.getItem(savedRecordsStorageKey) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeSavedRecordMap(records) {
  const storage = storageApi();
  if (!storage) return false;
  try {
    storage.setItem(savedRecordsStorageKey, JSON.stringify(records));
    return true;
  } catch {
    return false;
  }
}

function setSaveStatus(message, type = "", clearAfterMs = 0) {
  if (!elements.saveStatus) return;
  if (saveStatusTimer) {
    globalThis.clearTimeout(saveStatusTimer);
    saveStatusTimer = null;
  }
  elements.saveStatus.textContent = message;
  elements.saveStatus.classList?.remove?.("success", "error");
  if (type) elements.saveStatus.classList?.add?.(type);
  if (message && clearAfterMs > 0) {
    saveStatusTimer = globalThis.setTimeout(() => {
      if (elements.saveStatus?.textContent === message) setSaveStatus("");
    }, clearAfterMs);
  }
}

function selectHasOption(select, value) {
  if (!select?.options) return true;
  if (select.options.length === 0) return true;
  return Array.from(select.options).some((option) => option.value === value);
}

function setSelectValue(select, value) {
  if (!select || value == null) return;
  if (selectHasOption(select, String(value))) select.value = String(value);
}

function fiscalYearLabel(value = currentControlValue("#fiscalYear", elements.fiscalYear?.value || "2026")) {
  const option = Array.from(elements.fiscalYear?.options || []).find((entry) => entry.value === String(value));
  return option?.textContent || `${value}年度`;
}

function currentRecordId(showError = true) {
  const facilityName = String(elements.facilityName?.value || "").trim();
  const fiscalYear = currentControlValue("#fiscalYear", elements.fiscalYear?.value || "2026");
  if (!facilityName) {
    if (showError) setSaveStatus("施設名を入力してください", "error");
    return "";
  }
  return `${fiscalYear}::${facilityName}`;
}

function normalizeCountState(savedCounts = {}) {
  const normalized = {};
  [...countRows, ...assistRows].forEach((row) => {
    normalized[row.key] = months.map((_, index) => safeNumber(savedCounts[row.key]?.[index], 0));
  });
  return normalized;
}

function normalizeToggleState(savedToggles = {}) {
  const defaults = createDefaultToggles();
  items.forEach((item) => {
    if (!Array.isArray(savedToggles[item.id])) return;
    defaults[item.id] = months.map((_, index) => savedToggles[item.id][index] == null
      ? defaults[item.id][index]
      : Boolean(savedToggles[item.id][index]));
  });
  return defaults;
}

function collectRecordSnapshot() {
  const facilityName = String(elements.facilityName?.value || "").trim();
  const fiscalYear = currentControlValue("#fiscalYear", elements.fiscalYear?.value || "2026");
  return {
    version: 1,
    facilityName,
    fiscalYear,
    fiscalYearLabel: fiscalYearLabel(fiscalYear),
    prefecture: elements.prefecture?.value || "",
    municipality: elements.municipality?.value || "",
    region: currentRegion(),
    capacity: currentCapacity(),
    rateA: rateAValue(),
    rateB: rateBValue(),
    counts: clone(state.counts),
    toggles: clone(state.toggles),
    settings: clone(state.settings),
    savedAt: new Date().toISOString(),
  };
}

function recordOptionLabel(record) {
  const name = record.facilityName || "施設名未入力";
  return `${name} / ${record.fiscalYearLabel || fiscalYearLabel(record.fiscalYear || "2026")}`;
}

function renderSavedRecords(selectedId = "") {
  if (!elements.savedRecordSelect) return;
  const records = loadSavedRecordMap();
  const entries = Object.entries(records).sort(([, a], [, b]) => {
    const yearCompare = String(b.fiscalYear || "").localeCompare(String(a.fiscalYear || ""), "ja");
    return yearCompare || String(a.facilityName || "").localeCompare(String(b.facilityName || ""), "ja");
  });
  elements.savedRecordSelect.innerHTML = entries.length
    ? `<option value=""></option>${entries.map(([id, record]) => `<option value="${htmlEscape(id)}">${htmlEscape(recordOptionLabel(record))}</option>`).join("")}`
    : `<option value=""></option>`;
  if (selectedId && records[selectedId]) elements.savedRecordSelect.value = selectedId;
  else elements.savedRecordSelect.value = "";
  const disabled = entries.length === 0;
  if (elements.loadRecordButton) elements.loadRecordButton.disabled = disabled;
  if (elements.deleteRecordButton) elements.deleteRecordButton.disabled = disabled;
}

function applySavedRecord(record) {
  if (!record) return;
  if (elements.facilityName) elements.facilityName.value = record.facilityName || "";
  setSelectValue(elements.fiscalYear, record.fiscalYear || "2026");
  if (record.prefecture && elements.prefecture) {
    setSelectValue(elements.prefecture, record.prefecture);
    renderMunicipalities();
  }
  if (record.municipality) setSelectValue(elements.municipality, record.municipality);
  if (record.region) setSelectValue(elements.regionSelect, record.region);
  if (elements.capacity) elements.capacity.value = String(safeNumber(record.capacity, currentCapacity()));
  setSelectValue(elements.rateA, record.rateA ?? 12);
  setSelectValue(elements.rateB, record.rateB ?? 7);
  state.counts = normalizeCountState(record.counts);
  state.toggles = normalizeToggleState(record.toggles);
  state.settings = { ...defaultSettings, ...(record.settings || {}) };
  state.expandedApply = {};
  state.expandedResults = {};
  rerender();
}

function saveCurrentRecord() {
  const id = currentRecordId(true);
  if (!id) return;
  const records = loadSavedRecordMap();
  records[id] = collectRecordSnapshot();
  if (!writeSavedRecordMap(records)) {
    setSaveStatus("このブラウザでは保存できません", "error");
    return;
  }
  renderSavedRecords(id);
  setSaveStatus("保存しました", "success", 3000);
}

function loadSelectedRecord() {
  const id = elements.savedRecordSelect?.value;
  const records = loadSavedRecordMap();
  if (!id || !records[id]) {
    setSaveStatus("読込データを選択してください", "error");
    return;
  }
  applySavedRecord(records[id]);
  renderSavedRecords(id);
  setSaveStatus("読込しました", "success");
}

function deleteSelectedRecord() {
  const id = elements.savedRecordSelect?.value;
  const records = loadSavedRecordMap();
  if (!id || !records[id]) {
    setSaveStatus("削除データを選択してください", "error");
    return;
  }
  const label = recordOptionLabel(records[id]);
  if (typeof window.confirm === "function" && !window.confirm(`${label} を削除しますか？`)) return;
  delete records[id];
  if (!writeSavedRecordMap(records)) {
    setSaveStatus("削除できませんでした", "error");
    return;
  }
  renderSavedRecords();
  setSaveStatus("削除しました", "success");
}

function currentControlValue(selector, fallback = "") {
  return document.querySelector(selector)?.value ?? fallback;
}

function rateAValue() {
  return safeNumber(currentControlValue("#rateA", elements.rateA?.value || 12), 12);
}

function rateBValue() {
  return safeNumber(currentControlValue("#rateB", elements.rateB?.value || 7), 7);
}

function updateRateTotal() {
  if (elements.rateTotal) elements.rateTotal.value = String(rateAValue() + rateBValue());
}

function currentRegion() {
  const value = currentControlValue("#regionSelect", elements.regionSelect?.value || "その他地域");
  return regionLabels.includes(value) ? value : "その他地域";
}

function currentCapacity() {
  return Math.max(1, safeNumber(currentControlValue("#capacity", elements.capacity?.value || 35), 35));
}

function currentCapacityBracketIndex() {
  const capacity = currentCapacity();
  const index = capacityBrackets.findIndex((bracket) => capacity >= bracket.min && capacity <= bracket.max);
  return index >= 0 ? index : capacityBrackets.length - 1;
}

function currentBaseUnits() {
  return baseUnitTables[currentRegion()][currentCapacityBracketIndex()];
}

function currentAdditionUnits(key) {
  const regionTable = additionUnitTables[currentRegion()] || additionUnitTables["その他地域"];
  const bracket = regionTable?.[currentCapacityBracketIndex()] || [];
  const keyIndex = additionUnitKeys.indexOf(key);
  return keyIndex >= 0 ? bracket[keyIndex] : null;
}

function childCount(ageKey, monthIndex) {
  return safeNumber(state.counts[ageKey]?.[monthIndex], 0);
}

function totalChildren(monthIndex) {
  return childCount("age4", monthIndex) + childCount("age3", monthIndex) + childCount("ageM3", monthIndex);
}

function ageCounts(monthIndex) {
  return {
    age4: childCount("age4", monthIndex),
    age3: childCount("age3", monthIndex),
    ageM3: childCount("ageM3", monthIndex),
  };
}

function selectedClimateZone() {
  return climateZones.find((entry) => entry.value === state.settings.climateZone) || climateZones[0];
}

function unitParts(unit, mode = "full") {
  const base = Array.isArray(unit) ? unit[0] : unit?.base;
  const shogu = Array.isArray(unit) ? unit[1] : unit?.shogu;
  const cRate = Array.isArray(unit) ? unit[2] : unit?.c;
  const basic = safeNumber(base);
  const treatmentUnit = safeNumber(shogu);
  const c = safeNumber(cRate);
  const aAmount = treatmentUnit * rateAValue();
  const bAmount = treatmentUnit * rateBValue();
  const cAmount = treatmentUnit * c;
  const treatment = floor10(aAmount + bAmount + cAmount);
  const rates = {
    a: floor10(aAmount),
    b: floor10(bAmount),
    c: floor10(cAmount),
  };

  if (mode === "baseOnly") {
    return { base: basic, shogu: treatmentUnit, c, rates: { a: 0, b: 0, c: 0 }, total: basic };
  }
  if (mode === "treatmentOnly") {
    return { base: basic, shogu: treatmentUnit, c, rates, total: treatment };
  }
  return { base: basic, shogu: treatmentUnit, c, rates, total: basic + treatment };
}

function emptyBreakdown(formula = "") {
  return {
    total: 0,
    age: { age4: 0, age3: 0, ageM3: 0 },
    rates: { a: 0, b: 0, c: 0 },
    units: [],
    formula,
  };
}

function addAmount(breakdown, amount, ageKey, rates = {}) {
  const rounded = floor10(amount);
  breakdown.total += rounded;
  if (ageKey && breakdown.age[ageKey] != null) {
    breakdown.age[ageKey] += rounded;
  }
  breakdown.rates.a += floor10(rates.a || 0);
  breakdown.rates.b += floor10(rates.b || 0);
  breakdown.rates.c += floor10(rates.c || 0);
}

function addUnitAmount(breakdown, unit, count, ageKey, mode = "full") {
  const parts = unitParts(unit, mode);
  const amount = parts.total * count;
  addAmount(breakdown, amount, ageKey, {
    a: parts.rates.a * count,
    b: parts.rates.b * count,
    c: parts.rates.c * count,
  });
  breakdown.units.push(parts);
}

function addAllocatedUnitAmount(breakdown, unit, monthIndex) {
  if (totalChildren(monthIndex) <= 0) return;
  const parts = unitParts(unit);
  breakdown.rates.a += parts.rates.a;
  breakdown.rates.b += parts.rates.b;
  breakdown.rates.c += parts.rates.c;
  breakdown.units.push(parts);
  allocateByAge(breakdown, parts.total, monthIndex);
}

function allocateByAge(breakdown, amount, monthIndex) {
  const counts = ageCounts(monthIndex);
  const total = totalChildren(monthIndex);
  if (total <= 0) return;
  let assigned = 0;
  ["age4", "age3"].forEach((ageKey) => {
    const value = floor10((amount * counts[ageKey]) / total);
    breakdown.age[ageKey] += value;
    assigned += value;
  });
  breakdown.age.ageM3 += amount - assigned;
  breakdown.total += amount;
}

function isMarch(monthIndex) {
  return months[monthIndex].key === "mar";
}

function isToggleApplicable(item, monthIndex) {
  if (["marchPerChild", "marchUnit", "marchAllocated", "annualMarch", "facilityEval", "schoolConnect", "snow", "ash"].includes(item.type)) {
    return isMarch(monthIndex);
  }
  return true;
}

function isItemEnabled(item, monthIndex) {
  return Boolean(state.toggles[item.id]?.[monthIndex]) && isToggleApplicable(item, monthIndex);
}

function targetAgeKeys(item, monthIndex) {
  if (item.target === "age4") return ["age4"];
  if (item.target === "age3") return ["age3"];
  if (item.target === "age3All") return ["age3", "ageM3"];
  if (item.target === "ageM3") return ["ageM3"];
  return ["age4", "age3", "ageM3"];
}

function itemBreakdown(item, monthIndex) {
  if (!item || !isItemEnabled(item, monthIndex)) return emptyBreakdown(item?.formula || "");
  const breakdown = emptyBreakdown(item.formula);
  const baseUnits = currentBaseUnits();
  const counts = ageCounts(monthIndex);

  if (item.type === "base") {
    addUnitAmount(breakdown, baseUnits.age4, counts.age4, "age4", "baseOnly");
    addUnitAmount(breakdown, baseUnits.age3, counts.age3, "age3", "baseOnly");
    addUnitAmount(breakdown, baseUnits.age3, counts.ageM3, "ageM3", "baseOnly");
    return breakdown;
  }

  if (item.type === "treatment12") {
    addUnitAmount(breakdown, baseUnits.age4, counts.age4, "age4", "treatmentOnly");
    addUnitAmount(breakdown, baseUnits.age3, counts.age3, "age3", "treatmentOnly");
    addUnitAmount(breakdown, baseUnits.age3, counts.ageM3, "ageM3", "treatmentOnly");
    return breakdown;
  }

  if (item.type === "unit") {
    const unit = currentAdditionUnits(item.unitKey);
    targetAgeKeys(item, monthIndex).forEach((ageKey) => addUnitAmount(breakdown, unit, counts[ageKey], ageKey));
    return breakdown;
  }

  if (item.type === "ageM3Staff") {
    const unitKey = state.toggles.age3Improve?.[monthIndex] ? "ageM3WithAge3Improve" : "ageM3WithoutAge3Improve";
    addUnitAmount(breakdown, currentAdditionUnits(unitKey), counts.ageM3, "ageM3");
    return breakdown;
  }

  if (item.type === "teamCare") {
    const staff = Math.max(0, safeNumber(state.settings.teamCareStaff, 0));
    const unit = currentAdditionUnits("teamCare");
    ["age4", "age3", "ageM3"].forEach((ageKey) => addUnitAmount(breakdown, unit, counts[ageKey] * staff, ageKey));
    return breakdown;
  }

  if (item.type === "marchUnit") {
    const unit = currentAdditionUnits(item.unitKey);
    targetAgeKeys(item, monthIndex).forEach((ageKey) => addUnitAmount(breakdown, unit, counts[ageKey], ageKey));
    return breakdown;
  }

  if (item.type === "meal") {
    const inHouse = state.settings.mealType !== "external";
    const unit = inHouse ? { base: 490, shogu: 5, c: 0 } : { base: 360, shogu: 4, c: 0 };
    const weeklyDays = Math.max(0, safeNumber(state.settings.mealWeeklyDays, 0));
    ["age4", "age3", "ageM3"].forEach((ageKey) => addUnitAmount(breakdown, unit, counts[ageKey] * weeklyDays, ageKey));
    return breakdown;
  }

  if (item.type === "sideMeal") {
    const unit = unitParts(currentAdditionUnits(item.unitKey || "sideMealExempt")).total;
    const exempt = safeNumber(state.counts.exempt[monthIndex], 0);
    const days = safeNumber(state.counts.mealDays[monthIndex], 0);
    addAmount(breakdown, exempt * days * unit, "age3");
    return breakdown;
  }

  if (item.type === "perTotalFixed") {
    ["age4", "age3", "ageM3"].forEach((ageKey) => addAmount(breakdown, counts[ageKey] * item.unit, ageKey));
    return breakdown;
  }

  if (item.type === "allocatedUnit") {
    addAllocatedUnitAmount(breakdown, fixedAdditionUnits[item.fixedUnitKey], monthIndex);
    return breakdown;
  }

  if (item.type === "therapy") {
    const type = state.settings.therapyType || "A";
    if (type === "A" || type === "B") {
      addAllocatedUnitAmount(breakdown, fixedAdditionUnits[`therapy${type}`], monthIndex);
    } else {
      allocateByAge(breakdown, floor10(therapyFixedAmounts[type] || 0), monthIndex);
    }
    return breakdown;
  }

  if (item.type === "treatment3") {
    const amount = floor10(
      safeNumber(state.settings.treatment3A, 0) * treatment3Units.A
      + safeNumber(state.settings.treatment3B, 0) * treatment3Units.B
    );
    allocateByAge(breakdown, amount, monthIndex);
    return breakdown;
  }

  if (item.type === "aircon") {
    const unit = selectedClimateZone().unit;
    ["age4", "age3", "ageM3"].forEach((ageKey) => addAmount(breakdown, counts[ageKey] * unit, ageKey));
    return breakdown;
  }

  if (item.type === "facilityEval") {
    const amount = facilityEvalAmounts[state.settings.facilityEvalType] || facilityEvalAmounts.A;
    allocateByAge(breakdown, amount, monthIndex);
    return breakdown;
  }

  if (item.type === "snow") {
    ["age4", "age3", "ageM3"].forEach((ageKey) => addAmount(breakdown, counts[ageKey] * 6620, ageKey));
    return breakdown;
  }

  if (item.type === "ash") {
    allocateByAge(breakdown, 171160, monthIndex);
    return breakdown;
  }

  if (item.type === "annualMarch" || item.type === "marchAllocated") {
    allocateByAge(breakdown, floor10(item.annualAmount || 0), monthIndex);
    return breakdown;
  }

  if (item.type === "schoolConnect") {
    const amount = schoolConnectAmounts[state.settings.schoolConnectType] || schoolConnectAmounts.requirement12;
    allocateByAge(breakdown, amount, monthIndex);
    return breakdown;
  }

  if (item.type === "nutrition") {
    const type = state.settings.nutritionType;
    if (type === "A" || type === "B") {
      addAllocatedUnitAmount(breakdown, fixedAdditionUnits[`nutrition${type}`], monthIndex);
    } else {
      allocateByAge(breakdown, 10000, monthIndex);
    }
    return breakdown;
  }

  if (item.type === "ageStandardDeduct") {
    const amount = -Math.max(0, safeNumber(state.settings.ageStandardShortage, 0)) * totalChildren(monthIndex) * 1000;
    allocateByAge(breakdown, amount, monthIndex);
    return breakdown;
  }

  if (item.type === "capacityOver") {
    const rate = currentCapacityOverRate();
    const base = itemBreakdown(items.find((entry) => entry.id === "base"), monthIndex).total;
    const amount = -floor10(base * Math.max(0, 100 - rate) / 100);
    allocateByAge(breakdown, amount, monthIndex);
    return breakdown;
  }

  if (item.type === "percentDeduct") {
    const base = itemBreakdown(items.find((entry) => entry.id === "base"), monthIndex).total;
    allocateByAge(breakdown, -floor10(base * item.percent / 100), monthIndex);
    return breakdown;
  }

  return breakdown;
}

function itemValues(item) {
  return months.map((_, monthIndex) => itemBreakdown(item, monthIndex).total);
}

function itemTotal(item) {
  return itemValues(item).reduce((sum, value) => sum + value, 0);
}

function applyTypeLabel(item) {
  return item.category === "減算・調整" || itemTotal(item) < 0 ? "減算" : "加算";
}

function resultAgeDetails(item) {
  return [
    { label: "4歳以上児", key: "age4" },
    { label: "3歳児", key: "age3" },
    { label: "満3歳児", key: "ageM3" },
  ].map((row) => {
    const values = months.map((_, monthIndex) => itemBreakdown(item, monthIndex).age[row.key]);
    return { ...row, values, total: values.reduce((sum, value) => sum + value, 0) };
  });
}

function resultRateDetails(item) {
  return [
    { label: "加算率a", key: "a" },
    { label: "加算率b", key: "b" },
    { label: "加算率c", key: "c" },
  ].map((row) => {
    const values = months.map((_, monthIndex) => itemBreakdown(item, monthIndex).rates[row.key]);
    return { ...row, values, total: values.reduce((sum, value) => sum + value, 0) };
  });
}

function totalAgeDetails() {
  return [
    { label: "4歳以上児", key: "age4" },
    { label: "3歳児", key: "age3" },
    { label: "満3歳児", key: "ageM3" },
  ].map((row) => {
    const values = months.map((_, monthIndex) => items.reduce((sum, item) => sum + itemBreakdown(item, monthIndex).age[row.key], 0));
    return { ...row, values, total: values.reduce((sum, value) => sum + value, 0) };
  });
}

function totalRateDetails() {
  return [
    { label: "加算率a", key: "a" },
    { label: "加算率b", key: "b" },
    { label: "加算率c", key: "c" },
  ].map((row) => {
    const values = months.map((_, monthIndex) => items.reduce((sum, item) => sum + itemBreakdown(item, monthIndex).rates[row.key], 0));
    return { ...row, values, total: values.reduce((sum, value) => sum + value, 0) };
  });
}

function currentCapacityOverRate() {
  const table = capacityOverRateTables[currentRegion()] || capacityOverRateTables["その他地域"] || [];
  const capacityIndex = currentCapacityBracketIndex();
  const childIndex = Math.max(0, Math.min(capacityBrackets.length - 1, safeNumber(state.settings.capacityOverChildBracket, 0)));
  if (childIndex <= capacityIndex) return 100;
  const row = table[capacityIndex] || [];
  return safeNumber(row[childIndex - capacityIndex - 1], 100);
}

function renderPrefectures() {
  if (!elements.prefecture) return;
  const prefectures = Object.keys(regionData);
  elements.prefecture.innerHTML = prefectures.map((name) => `<option value="${htmlEscape(name)}">${htmlEscape(name)}</option>`).join("");
  if (prefectures.length) elements.prefecture.value = prefectures[0];
  renderMunicipalities();
  renderRegionOptions();
  renderFiscalYears();
}

function renderFiscalYears() {
  if (!elements.fiscalYear) return;
  elements.fiscalYear.innerHTML = [
    { value: "2026", label: "令和8年度" },
  ].map((entry) => `<option value="${entry.value}">${entry.label}</option>`).join("");
  elements.fiscalYear.value = "2026";
}

function renderRegionOptions() {
  if (!elements.regionSelect) return;
  elements.regionSelect.innerHTML = regionLabels.map((label) => `<option value="${label}">${label}</option>`).join("");
  elements.regionSelect.value = elements.regionSelect.value && regionLabels.includes(elements.regionSelect.value)
    ? elements.regionSelect.value
    : "その他地域";
}

function renderMunicipalities() {
  if (!elements.prefecture || !elements.municipality) return;
  const cities = regionData[elements.prefecture.value] || [];
  elements.municipality.innerHTML = cities.map((entry) => `<option value="${htmlEscape(entry.city)}">${htmlEscape(entry.city)}</option>`).join("");
  if (cities[0]) {
    elements.municipality.value = cities[0].city;
    if (elements.regionSelect) elements.regionSelect.value = cities[0].rate;
  }
}

function renderCountTable() {
  if (!elements.countTables) return;
  const monthHeader = months.map((month) => `<th>${month.label}</th>`).join("");
  const numericInput = ({ key, index, value, min = 0, max = null, label }) => {
    const maxAttr = max == null ? "" : ` max="${max}"`;
    return `<input class="count-input numeric-input" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" min="${min}"${maxAttr} value="${value}" aria-label="${htmlEscape(label)} ${months[index].label}" data-count="${key}" data-month="${index}" />`;
  };
  const countBody = countRows.map((row) => {
    const cells = months.map((_, index) => `
      <td>${numericInput({ key: row.key, index, value: state.counts[row.key][index], label: row.label })}</td>
    `).join("");
    const total = state.counts[row.key].reduce((sum, value) => sum + safeNumber(value), 0);
    return `<tr><td>${row.label}</td>${cells}<td class="amount" data-count-total="${row.key}">${yen.format(total)}</td></tr>`;
  }).join("");
  const totalRow = months.map((_, index) => `<td class="amount" data-month-total="${index}">${yen.format(totalChildren(index))}</td>`).join("");

  const assistBody = assistRows.map((row) => {
    const cells = months.map((_, index) => {
      return `<td>${numericInput({ key: row.key, index, value: state.counts[row.key][index], min: row.min, max: row.max, label: row.label })}</td>`;
    }).join("");
    const total = state.counts[row.key].reduce((sum, value) => sum + safeNumber(value), 0);
    return `<tr><td>${row.label}</td>${cells}<td class="amount" data-count-total="${row.key}">${yen.format(total)}</td></tr>`;
  }).join("");

  elements.countTables.innerHTML = `
    <div class="count-table-block">
      <div class="count-table-head">
        <h3>月初人数（教育標準時間認定（1号））</h3>
        <button class="copy-button" type="button" data-copy-april="main">4月の値を全月にコピー</button>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr><th>区分／月</th>${monthHeader}<th>計</th></tr></thead>
          <tbody>${countBody}<tr class="count-total-row"><td>計</td>${totalRow}<td class="amount" data-count-grand-total>${yen.format(months.reduce((sum, _, index) => sum + totalChildren(index), 0))}</td></tr></tbody>
        </table>
      </div>
    </div>
    <div class="count-table-block">
      <div class="count-table-head">
        <h3>副食費徴収免除数・給食日数（付随入力）</h3>
        <button class="copy-button" type="button" data-copy-april="assist">4月の値を全月にコピー</button>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr><th>区分／月</th>${monthHeader}<th>計</th></tr></thead>
          <tbody>${assistBody}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderCountTables() {
  renderCountTable();
}

function settingControl(item) {
  if (item.id === "therapy") {
    return `<select class="setting-select" data-setting="therapyType">
      ${["A", "B", "C", "D"].map((value) => `<option value="${value}" ${state.settings.therapyType === value ? "selected" : ""}>${value}</option>`).join("")}
    </select>`;
  }
  if (item.id === "nutrition") {
    return `<select class="setting-select" data-setting="nutritionType">
      ${["A", "B", "C"].map((value) => `<option value="${value}" ${state.settings.nutritionType === value ? "selected" : ""}>${value}</option>`).join("")}
    </select>`;
  }
  if (item.id === "facilityEval") {
    return `<select class="setting-select" data-setting="facilityEvalType">
      ${["A", "B"].map((value) => `<option value="${value}" ${state.settings.facilityEvalType === value ? "selected" : ""}>${value}</option>`).join("")}
    </select>`;
  }
  if (item.id === "schoolConnect") {
    return `<select class="setting-select wide" data-setting="schoolConnectType">
      ${Object.entries(schoolConnectLabels).map(([value, label]) => `<option value="${value}" ${state.settings.schoolConnectType === value ? "selected" : ""}>${label}</option>`).join("")}
    </select>`;
  }
  if (item.id === "treatment3") {
    return `<span class="setting-pair">
      <label>A <input class="setting-number" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="${state.settings.treatment3A}" data-setting="treatment3A" /></label>
      <label>B <input class="setting-number" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="${state.settings.treatment3B}" data-setting="treatment3B" /></label>
    </span>`;
  }
  if (item.id === "teamCare") {
    return `<input class="setting-number" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="${state.settings.teamCareStaff}" data-setting="teamCareStaff" />`;
  }
  if (item.id === "meal") {
    return `<span class="setting-pair meal-setting">
      <label>形態 <select class="setting-select wide" data-setting="mealType">
        <option value="inHouse" ${state.settings.mealType === "inHouse" ? "selected" : ""}>施設内調理</option>
        <option value="external" ${state.settings.mealType === "external" ? "selected" : ""}>外部搬入</option>
      </select></label>
      <label>週当たり実施日数 <input class="setting-number" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="${state.settings.mealWeeklyDays}" data-setting="mealWeeklyDays" /></label>
    </span>`;
  }
  if (item.id === "ageStandardDeduct") {
    return `<input class="setting-number" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" value="${state.settings.ageStandardShortage}" data-setting="ageStandardShortage" />`;
  }
  if (item.id === "capacityOver") {
    const selectedIndex = safeNumber(state.settings.capacityOverChildBracket, 0);
    const options = capacityBrackets.map((bracket, index) => {
      const marker = index <= currentCapacityBracketIndex() ? "（定員以下）" : "";
      return `<option value="${index}" ${selectedIndex === index ? "selected" : ""}>${bracket.label}${marker}</option>`;
    }).join("");
    return `<span class="setting-pair capacity-over-setting">
      <label>利用子ども数 <select class="setting-select wide" data-setting="capacityOverChildBracket">${options}</select></label>
      <span class="setting-note">調整率 ${currentCapacityOverRate()}/100</span>
    </span>`;
  }
  if (item.id === "aircon") {
    return `<select class="setting-select wide" data-setting="climateZone">
      ${climateZones.map((zone) => `<option value="${zone.value}" ${state.settings.climateZone === zone.value ? "selected" : ""}>${zone.label}</option>`).join("")}
    </select>`;
  }
  return "";
}

function settingBadge(item, controlHtml = settingControl(item)) {
  const needsSetting = Boolean(String(controlHtml || "").trim());
  return {
    className: needsSetting ? "manual" : "auto",
    label: needsSetting ? "要設定" : "自動",
  };
}

function matchesApplyFilter(item, filter = state.filter) {
  return filter === "all" || settingBadge(item).className === filter;
}

function referenceEntry(item) {
  const baseUnits = currentBaseUnits();
  if (item.type === "base") return [{ label: "4歳以上児", unit: unitParts(baseUnits.age4, "baseOnly") }, { label: "3歳児・満3歳児", unit: unitParts(baseUnits.age3, "baseOnly") }];
  if (item.type === "treatment12") return [{ label: "4歳以上児", unit: unitParts(baseUnits.age4, "treatmentOnly") }, { label: "3歳児・満3歳児", unit: unitParts(baseUnits.age3, "treatmentOnly") }];
  if (item.type === "unit") return [{ label: item.name, unit: unitParts(currentAdditionUnits(item.unitKey)) }];
  if (item.type === "marchUnit") return [{ label: item.name, unit: unitParts(currentAdditionUnits(item.unitKey)) }];
  if (item.type === "sideMeal") return [{ label: item.name, unit: unitParts(currentAdditionUnits(item.unitKey || "sideMealExempt")) }];
  if (item.type === "ageM3Staff") return [{ label: item.name, unit: unitParts(currentAdditionUnits("ageM3WithAge3Improve")) }];
  if (item.type === "teamCare") return [{ label: item.name, unit: unitParts(currentAdditionUnits("teamCare")) }];
  if (item.type === "meal") return [{ label: "施設内調理", unit: unitParts({ base: 490, shogu: 5, c: 0 }) }, { label: "外部搬入", unit: unitParts({ base: 360, shogu: 4, c: 0 }) }];
  if (item.type === "allocatedUnit") return [{ label: item.name, unit: unitParts(fixedAdditionUnits[item.fixedUnitKey]) }];
  if (item.type === "therapy") {
    const type = state.settings.therapyType || "A";
    if (type === "A" || type === "B") return [{ label: `区分${type}`, unit: unitParts(fixedAdditionUnits[`therapy${type}`]) }];
    return [{ label: `区分${type}`, unit: { base: therapyFixedAmounts[type] || 0, shogu: 0, c: 0 } }];
  }
  if (item.type === "aircon") return [{ label: selectedClimateZone().label, unit: { base: selectedClimateZone().unit, shogu: 0, c: 0 } }];
  if (item.type === "snow") return [{ label: "除雪費", unit: { base: 6620, shogu: 0, c: 0 } }];
  if (item.type === "ash") return [{ label: "降灰除去費", unit: { base: 171160, shogu: 0, c: 0 } }];
  if (item.type === "facilityEval") return [{ label: `区分${state.settings.facilityEvalType}`, unit: { base: facilityEvalAmounts[state.settings.facilityEvalType] || facilityEvalAmounts.A, shogu: 0, c: 0 } }];
  if (item.type === "schoolConnect") {
    const type = state.settings.schoolConnectType || "requirement12";
    return [{ label: schoolConnectLabels[type] || schoolConnectLabels.requirement12, unit: { base: schoolConnectAmounts[type] || schoolConnectAmounts.requirement12, shogu: 0, c: 0 } }];
  }
  if (item.type === "nutrition") {
    const type = state.settings.nutritionType || "A";
    if (type === "A" || type === "B") return [{ label: `区分${type}`, unit: unitParts(fixedAdditionUnits[`nutrition${type}`]) }];
    return [{ label: `区分${type}`, unit: { base: 10000, shogu: 0, c: 0 } }];
  }
  if (item.type === "capacityOver") {
    const rate = currentCapacityOverRate();
    return [{ label: "別に定める調整率", unit: { base: rate, baseText: `${rate}/100`, shogu: 0, c: 0 } }];
  }
  if (item.annualAmount) return [{ label: item.name, unit: { base: item.annualAmount, shogu: 0, c: 0 } }];
  if (item.unit) return [{ label: item.name, unit: { base: item.unit, shogu: 0, c: 0 } }];
  return [{ label: item.name, unit: { base: 0, shogu: 0, c: 0 } }];
}

function renderReference(item) {
  const isFixedPart2 = item.category === "加算部分2" && !["aircon"].includes(item.id);
  const context = isFixedPart2
    ? ["加算部分2（地域区分・利用定員に関係なく同一単価）"]
    : [
      `地域区分 ${currentRegion()}`,
      `利用定員 ${currentCapacity()}人`,
      `定員区分 ${capacityBrackets[currentCapacityBracketIndex()].label}`,
    ];
  if (item.id === "aircon") context.push(`寒冷地等区分 ${selectedClimateZone().label}`);
  const entries = referenceEntry(item).map((entry) => {
    const baseDisplay = entry.unit.baseText || yen.format(safeNumber(entry.unit.base));
    return `
      <div class="unit-reference-item">
        <strong>${htmlEscape(entry.label)}</strong>
        <dl>
          <div><dt>基本額</dt><dd>${htmlEscape(baseDisplay)}</dd></div>
          <div><dt>処遇改善単価</dt><dd>${yen.format(safeNumber(entry.unit.shogu))}</dd></div>
          <div><dt>加算率c</dt><dd>${safeNumber(entry.unit.c)}</dd></div>
        </dl>
      </div>
    `;
  }).join("");
  return `<tr class="apply-detail-row"><td colspan="${months.length + 4}">
    <div class="unit-reference">
      <div class="unit-reference-context">${context.map((text) => `<span>${htmlEscape(text)}</span>`).join("")}</div>
      <div class="unit-reference-formula"><strong>計算式</strong><span>${htmlEscape(item.formula || "設定に基づき算定")}</span></div>
      <div class="unit-reference-grid">${entries}</div>
    </div>
  </td></tr>`;
}

function renderApplyTable() {
  if (!elements.applyTable) return;
  const filter = state.filter;
  const visibleItems = items.filter((item) => matchesApplyFilter(item, filter));
  let lastCategory = "";
  const rows = visibleItems.map((item) => {
    const categoryRow = item.category !== lastCategory
      ? `<tr class="category-row"><td colspan="${months.length + 4}">${item.category}</td></tr>`
      : "";
    lastCategory = item.category;
    const expanded = Boolean(state.expandedApply[item.id]);
    const monthCells = months.map((_, index) => {
      if (!isToggleApplicable(item, index)) {
        return `<td><span class="not-applicable">—</span></td>`;
      }
      const enabled = Boolean(state.toggles[item.id][index]);
      return `<td><button class="toggle ${enabled ? "on" : "off"}" type="button" data-toggle="${item.id}" data-month="${index}">${enabled ? "有" : "無"}</button></td>`;
    }).join("");
    const controlHtml = settingControl(item);
    const badge = settingBadge(item, controlHtml);
    const mainRow = `<tr class="apply-main-row ${expanded ? "expanded" : ""}">
      <td><div class="result-heading"><button class="detail-toggle" type="button" data-apply-toggle="${item.id}">${expanded ? "▼" : "▶"}</button><span>${item.number} ${item.name}</span></div></td>
      <td><span class="badge ${badge.className}">${badge.label}</span></td>
      <td>${controlHtml}</td>
      ${monthCells}
      <td>${applyTypeLabel(item)}</td>
    </tr>`;
    return categoryRow + mainRow + (expanded ? renderReference(item) : "");
  }).join("");
  elements.applyTable.innerHTML = `
    <thead><tr><th>項目</th><th>区分</th><th>条件</th>${months.map((month) => `<th>${month.label}</th>`).join("")}<th>種別</th></tr></thead>
    <tbody>${rows}</tbody>
  `;
}

function renderResultMonthCells(item, values) {
  return values.map((value, index) => {
    if (!isToggleApplicable(item, index)) return `<td class="amount muted-amount">—</td>`;
    return `<td class="amount">${yen.format(value)}</td>`;
  }).join("");
}

function renderDetailAmountRow(item, label, values, breakdown, className = "", focusedKey = "all") {
  const monthCells = item
    ? renderResultMonthCells(item, values)
    : values.map((value) => `<td class="amount">${yen.format(value)}</td>`).join("");
  return `<tr class="result-detail-row ${className}">
    <td><span class="detail-label child">${label}</span></td>
    ${monthCells}
    <td class="amount breakdown-amount">${yen.format(breakdown.total)}</td>
  </tr>`;
}

function resultDetailRows(item) {
  if (!state.expandedResults[item.id]) return "";
  const ageRows = resultAgeDetails(item).map((row) => renderDetailAmountRow(item, row.label, row.values, row, "age-detail")).join("");
  const rateRows = resultRateDetails(item).map((row) => renderDetailAmountRow(item, row.label, row.values, row, "rate-detail", row.key)).join("");
  return `
    <tr class="result-detail-section"><td colspan="${months.length + 2}">▶歳児別</td></tr>
    ${ageRows}
    <tr class="result-detail-section"><td colspan="${months.length + 2}">▶処遇改善等加算別</td></tr>
    ${rateRows}
  `;
}

function totalResultDetailRows() {
  if (!state.expandedResults.__total) return "";
  const ageRows = totalAgeDetails().map((row) => renderDetailAmountRow(null, row.label, row.values, row, "age-detail")).join("");
  const rateRows = totalRateDetails().map((row) => renderDetailAmountRow(null, row.label, row.values, row, "rate-detail", row.key)).join("");
  return `
    <tr class="result-detail-section"><td colspan="${months.length + 2}">▶歳児別</td></tr>
    ${ageRows}
    <tr class="result-detail-section"><td colspan="${months.length + 2}">▶処遇改善等加算別</td></tr>
    ${rateRows}
  `;
}

function renderResultTable() {
  if (!elements.resultTable) return;
  const rows = items.map((item) => {
    const values = itemValues(item);
    const total = values.reduce((sum, value) => sum + value, 0);
    const expanded = Boolean(state.expandedResults[item.id]);
    return `<tr class="result-main-row ${expanded ? "expanded" : ""}">
      <td><div class="result-heading"><button class="detail-toggle" type="button" data-result-toggle="${item.id}">${expanded ? "▼" : "▶"}</button><span>${item.number} ${item.name}</span></div></td>
      ${renderResultMonthCells(item, values)}
      <td class="amount">${yen.format(total)}</td>
    </tr>${resultDetailRows(item)}`;
  }).join("");
  const monthlyTotals = months.map((_, monthIndex) => items.reduce((sum, item) => sum + itemBreakdown(item, monthIndex).total, 0));
  const annual = monthlyTotals.reduce((sum, value) => sum + value, 0);
  const totalExpanded = Boolean(state.expandedResults.__total);
  const totalRow = `<tr class="count-total-row result-main-row ${totalExpanded ? "expanded" : ""}">
    <td><div class="result-heading"><button class="detail-toggle" type="button" data-result-toggle="__total">${totalExpanded ? "▼" : "▶"}</button><span>計</span></div></td>
    ${monthlyTotals.map((value) => `<td class="amount">${yen.format(value)}</td>`).join("")}
    <td class="amount">${yen.format(annual)}</td>
  </tr>`;
  elements.resultTable.innerHTML = `
    <thead><tr><th>項目</th>${months.map((month) => `<th>${month.label}</th>`).join("")}<th>年計</th></tr></thead>
    <tbody>${rows}${totalRow}${totalResultDetailRows()}</tbody>
  `;
  if (elements.annualTotal) elements.annualTotal.textContent = yen.format(annual);
  if (elements.monthlyAverage) elements.monthlyAverage.textContent = yen.format(Math.round(annual / 12));
  if (elements.regionMetric) elements.regionMetric.textContent = currentRegion();
  if (elements.capacityMetric) elements.capacityMetric.textContent = capacityBrackets[currentCapacityBracketIndex()].label;
  if (elements.childCountTotal) elements.childCountTotal.textContent = `${yen.format(months.reduce((sum, _, index) => sum + totalChildren(index), 0))}人`;
  if (elements.autoCoverage) elements.autoCoverage.textContent = `自動計算 ${items.filter((item) => settingBadge(item).className === "auto").length}件`;
  updateRateTotal();
}

function rerender() {
  renderCountTable();
  renderApplyTable();
  renderResultTable();
}

function sanitizeCountInput(target) {
  const max = target.max === "" ? Infinity : safeNumber(target.max, Infinity);
  const digits = String(target.value || "").replace(/\D/g, "");
  if (target.value !== digits) target.value = digits;
  const rawValue = digits === "" ? 0 : safeNumber(digits, 0);
  const value = Math.trunc(Math.max(0, Math.min(max, rawValue)));
  if (digits !== "" && String(value) !== digits) target.value = String(value);
  return value;
}

function refreshCountTotals() {
  if (!elements.countTables?.querySelector) return;
  [...countRows, ...assistRows].forEach((row) => {
    const cell = elements.countTables.querySelector(`[data-count-total="${row.key}"]`);
    if (cell) {
      cell.textContent = yen.format(state.counts[row.key].reduce((sum, value) => sum + safeNumber(value), 0));
    }
  });
  months.forEach((_, index) => {
    const cell = elements.countTables.querySelector(`[data-month-total="${index}"]`);
    if (cell) cell.textContent = yen.format(totalChildren(index));
  });
  const grandTotal = elements.countTables.querySelector("[data-count-grand-total]");
  if (grandTotal) {
    grandTotal.textContent = yen.format(months.reduce((sum, _, index) => sum + totalChildren(index), 0));
  }
}

function updateCount(target, commit = false) {
  const key = target.dataset.count;
  const monthIndex = safeNumber(target.dataset.month);
  if (!state.counts[key]) return;
  state.counts[key][monthIndex] = sanitizeCountInput(target);
  if (commit && target.value === "") target.value = String(state.counts[key][monthIndex]);
  if (commit) {
    rerender();
    return;
  }
  refreshCountTotals();
  renderResultTable();
}

function sanitizeSettingNumber(target) {
  const digits = String(target.value || "").replace(/\D/g, "");
  if (target.value !== digits) target.value = digits;
  return digits === "" ? 0 : safeNumber(digits, 0);
}

function updateSetting(target, commit = false) {
  const key = target.dataset.setting;
  if (!key) return;
  const liveNumberKeys = new Set(["treatment3A", "treatment3B", "teamCareStaff", "mealWeeklyDays", "ageStandardShortage"]);
  if (liveNumberKeys.has(key)) {
    state.settings[key] = sanitizeSettingNumber(target);
    if (commit && target.value === "") target.value = String(state.settings[key]);
    renderResultTable();
    return;
  }
  const numberKeys = new Set(["capacityOverChildBracket"]);
  state.settings[key] = numberKeys.has(key) ? safeNumber(target.value) : target.value;
  rerender();
}

function copyApril(kind) {
  const keys = kind === "assist" ? ["exempt", "mealDays"] : ["age4", "age3", "ageM3"];
  keys.forEach((key) => {
    state.counts[key] = months.map(() => state.counts[key][0]);
  });
  rerender();
}

function exportCsv() {
  const header = ["項目", ...months.map((month) => month.label), "年計"];
  const lines = [header.join(",")];
  items.forEach((item) => {
    const values = itemValues(item);
    lines.push([item.name, ...values, values.reduce((sum, value) => sum + value, 0)].join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "official-fixed-price-kindergarten.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function resetState() {
  state.counts = {
    age4: months.map(() => 0),
    age3: months.map(() => 0),
    ageM3: months.map(() => 0),
    exempt: months.map(() => 0),
    mealDays: months.map(() => 0),
  };
  state.toggles = createDefaultToggles();
  state.settings = { ...defaultSettings };
  state.expandedApply = {};
  state.expandedResults = {};
  rerender();
}

function wireEvents() {
  elements.prefecture?.addEventListener("change", () => {
    renderMunicipalities();
    rerender();
  });
  elements.municipality?.addEventListener("change", () => {
    const city = (regionData[elements.prefecture.value] || []).find((entry) => entry.city === elements.municipality.value);
    if (city && elements.regionSelect) elements.regionSelect.value = city.rate;
    rerender();
  });
  [elements.regionSelect, elements.capacity, elements.rateA, elements.rateB].forEach((element) => {
    element?.addEventListener("input", rerender);
    element?.addEventListener("change", rerender);
  });
  elements.resetButton?.addEventListener("click", resetState);
  elements.exportButton?.addEventListener("click", exportCsv);
  elements.saveRecordButton?.addEventListener("click", saveCurrentRecord);
  elements.loadRecordButton?.addEventListener("click", loadSelectedRecord);
  elements.deleteRecordButton?.addEventListener("click", deleteSelectedRecord);
  elements.savedRecordSelect?.addEventListener("change", () => {
    if (elements.savedRecordSelect.value) loadSelectedRecord();
    else setSaveStatus("");
  });
  document.body.addEventListener("input", (event) => {
    if (event.target?.dataset?.count) updateCount(event.target, false);
    if (event.target?.dataset?.setting) updateSetting(event.target, false);
  });
  document.body.addEventListener("change", (event) => {
    if (event.target?.dataset?.count) updateCount(event.target, true);
    if (event.target?.dataset?.setting) updateSetting(event.target, true);
  });
  document.body.addEventListener("focusout", (event) => {
    if (event.target?.dataset?.count) updateCount(event.target, true);
    if (event.target?.classList?.contains("setting-number")) updateSetting(event.target, true);
  });
  document.body.addEventListener("click", (event) => {
    const target = event.target;
    if (target?.dataset?.toggle) {
      const itemId = target.dataset.toggle;
      const monthIndex = safeNumber(target.dataset.month);
      state.toggles[itemId][monthIndex] = !state.toggles[itemId][monthIndex];
      rerender();
    }
    if (target?.dataset?.resultToggle) {
      state.expandedResults[target.dataset.resultToggle] = !state.expandedResults[target.dataset.resultToggle];
      renderResultTable();
    }
    if (target?.dataset?.applyToggle) {
      state.expandedApply[target.dataset.applyToggle] = !state.expandedApply[target.dataset.applyToggle];
      renderApplyTable();
    }
    if (target?.dataset?.copyApril) copyApril(target.dataset.copyApril);
    if (target?.dataset?.filter) {
      state.filter = target.dataset.filter;
      document.querySelectorAll(".segmented button").forEach((button) => button.classList.toggle("active", button.dataset.filter === state.filter));
      renderApplyTable();
    }
  });
}

window.kindergartenApp = {
  state,
  items,
  months,
  itemBreakdown,
  itemTotal,
  resultAgeDetails,
  resultRateDetails,
  renderResultTable,
  renderApplyTable,
  renderCountTable,
  rerender,
  saveCurrentRecord,
  loadSelectedRecord,
  deleteSelectedRecord,
  renderSavedRecords,
};

renderPrefectures();
renderSavedRecords();
wireEvents();
rerender();
