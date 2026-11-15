const picture = (...rows) => rows.map(row => Array.from(row, Number));

window.levels = [
  {
    name: "A little love",
    subtitle: "Outline the symmetric red heart and catch the two-pixel shine on its top-left lobe.",
    colors: [
      { name: "Cocoa outline", hex: "#4a3338", clueInk: "#fffaf8" },
      { name: "Ruby red", hex: "#de5260", clueInk: "#fffaf8" },
      { name: "Soft shine", hex: "#f7d4dc", clueInk: "#71414c" }
    ],
    solution: picture(
      "01100110",
      "13322221",
      "12222221",
      "12222221",
      "01222210",
      "00122100",
      "00011000",
      "00011000"
    )
  },
  {
    name: "Cute kitty",
    subtitle: "Trace the pointed ears, pink inner ears and nose, and clear bright eyes.",
    colors: [
      { name: "Charcoal", hex: "#43393e", clueInk: "#fffaf8" },
      { name: "Ginger", hex: "#e79b60", clueInk: "#54321c" },
      { name: "Blush pink", hex: "#f0a3b3", clueInk: "#663641" }
    ],
    solution: picture(
      "0100000010",
      "1210000121",
      "1331001331",
      "1221111221",
      "1222222221",
      "1212222121",
      "1122222211",
      "1222332221",
      "1221221221",
      "0111111110"
    )
  },
  {
    name: "Watermelon slice",
    subtitle: "Reveal the crisp green rind, thin white layer, juicy red flesh, and three black seeds.",
    colors: [
      { name: "Watermelon red", hex: "#df5863", clueInk: "#fffaf8" },
      { name: "Rind cream", hex: "#e8ebd8", clueInk: "#434c3a" },
      { name: "Rind green", hex: "#548c54", clueInk: "#fffaf8" },
      { name: "Seed black", hex: "#383436", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000011000",
      "0000111100",
      "0001111110",
      "0011114110",
      "0111411110",
      "0111111410",
      "1111111111",
      "1111111111",
      "2222222222",
      "3333333333"
    )
  },
  {
    name: "Steaming mug",
    subtitle: "Warm terracotta mug with a right handle and two wavy steam curls rising above.",
    colors: [
      { name: "Terracotta", hex: "#c8795b", clueInk: "#fffaf8" },
      { name: "Espresso", hex: "#4d3630", clueInk: "#fffaf8" },
      { name: "Warm steam", hex: "#a9bcc7", clueInk: "#34444d" }
    ],
    solution: picture(
      "3000300000",
      "0300030000",
      "3000300000",
      "0300030000",
      "0011111000",
      "0122221110",
      "0111111011",
      "0111111011",
      "0111111110",
      "0011111000"
    )
  },
  {
    name: "Sunny sunflower",
    subtitle: "Bright golden petals surround a warm brown center and a little green stem.",
    colors: [
      { name: "Sunshine gold", hex: "#efb94d", clueInk: "#62491d" },
      { name: "Honey brown", hex: "#8b5a3c", clueInk: "#fffaf8" },
      { name: "Leaf green", hex: "#658b5a", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0001111000",
      "0011111100",
      "0111221110",
      "1112222111",
      "1122222211",
      "1122222211",
      "1112222111",
      "0111221110",
      "0011331100",
      "0000330000"
    )
  },
  {
    name: "Little fish",
    subtitle: "A colorful fish with a striped body and a bright eye swims through the water.",
    colors: [
      { name: "Coral", hex: "#ed987c", clueInk: "#633b31" },
      { name: "Lagoon blue", hex: "#6ca9b5", clueInk: "#183f48" },
      { name: "Cream stripe", hex: "#f3d9ac", clueInk: "#594832" },
      { name: "Deep ink", hex: "#34404d", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000011000",
      "0000111100",
      "0001111110",
      "1101111111",
      "1111223411",
      "1111222111",
      "1101111111",
      "0001111110",
      "0000111100",
      "0000011000"
    )
  },
  {
    name: "Red toadstool",
    subtitle: "A little forest mushroom with cream spots and a sturdy stem.",
    colors: [
      { name: "Poppy red", hex: "#d86e68", clueInk: "#fffaf8" },
      { name: "Cream spots", hex: "#f3e7d2", clueInk: "#514333" },
      { name: "Oat stem", hex: "#dfc49a", clueInk: "#514333" }
    ],
    solution: picture(
      "0001111000",
      "0011111100",
      "0112112110",
      "1121111211",
      "1111111111",
      "0112112110",
      "0001111000",
      "0003333000",
      "0003333000",
      "0003333000"
    )
  },
  {
    name: "Wise little owl",
    subtitle: "A chestnut owl with bright amber eyes and tiny feet.",
    colors: [
      { name: "Chestnut", hex: "#795044", clueInk: "#fffaf8" },
      { name: "Feather cream", hex: "#e9d8b8", clueInk: "#514333" },
      { name: "Amber", hex: "#d99a45", clueInk: "#4e3515" },
      { name: "Pupil dark", hex: "#34323a", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0110000110",
      "1111111111",
      "1122112211",
      "1123413211",
      "1111111111",
      "0111221110",
      "0011221100",
      "0011221100",
      "0111111110",
      "0033003300"
    )
  },
  {
    name: "Hot air balloon",
    subtitle: "A striped balloon floats high above its little basket.",
    colors: [
      { name: "Berry", hex: "#cf7182", clueInk: "#fffaf8" },
      { name: "Apricot", hex: "#efbd70", clueInk: "#5c421d" },
      { name: "Basket brown", hex: "#87614c", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0001111000",
      "0011221100",
      "0111222110",
      "1111222211",
      "1111222211",
      "0111222110",
      "0011221100",
      "0000110000",
      "0003330000",
      "0003330000"
    )
  },
  {
    name: "Tiny tulip",
    subtitle: "A spring tulip opens above two green leaves and a slender stem.",
    colors: [
      { name: "Tulip coral", hex: "#e78383", clueInk: "#5a3435" },
      { name: "Leaf green", hex: "#6c9b69", clueInk: "#fffaf8" },
      { name: "Stem green", hex: "#4f7f58", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0001100000",
      "0011110000",
      "0111111000",
      "0111111000",
      "0011110000",
      "0003300000",
      "0003330000",
      "0012331000",
      "0113331100",
      "0003330000"
    )
  },
  {
    name: "Moonlit window",
    subtitle: "A glowing moon, two stars, and a quiet blue window wait after sunset.",
    hard: true,
    colors: [
      { name: "Midnight blue", hex: "#3e506f", clueInk: "#fffaf8" },
      { name: "Moon gold", hex: "#f3c968", clueInk: "#5b4617" },
      { name: "Star cream", hex: "#f8e8b5", clueInk: "#5b4e2c" },
      { name: "Window glow", hex: "#9cc8c2", clueInk: "#254845" }
    ],
    solution: picture(
      "0000030000",
      "0010001000",
      "0000110000",
      "0011221000",
      "0112221100",
      "0122222100",
      "0112221100",
      "0011111000",
      "0011441000",
      "0011441000"
    )
  },
  {
    name: "Cozy teapot",
    subtitle: "A round berry teapot with a golden lid, handle, and a little steam curl.",
    colors: [
      { name: "Berry glaze", hex: "#b96778", clueInk: "#fffaf8" },
      { name: "Cream ceramic", hex: "#f2dfc3", clueInk: "#5d4b3b" },
      { name: "Golden lid", hex: "#e3ad55", clueInk: "#5e4217" },
      { name: "Steam gray", hex: "#a7bcc1", clueInk: "#34464b" }
    ],
    solution: picture(
      "0000400000",
      "0003330000",
      "0013331000",
      "0011111100",
      "0111221111",
      "0111221111",
      "0111111011",
      "0011110011",
      "0011110000",
      "0001100000"
    )
  },
  {
    name: "Garden snail",
    subtitle: "A patient little snail carries a striped shell through a patch of leaves.",
    hard: true,
    colors: [
      { name: "Moss green", hex: "#71966b", clueInk: "#fffaf8" },
      { name: "Shell peach", hex: "#e29a78", clueInk: "#633d30" },
      { name: "Shell spiral", hex: "#9c5d54", clueInk: "#fffaf8" },
      { name: "Garden cream", hex: "#e7d5a3", clueInk: "#51452a" }
    ],
    solution: picture(
      "000000000000",
      "000011110000",
      "000122211000",
      "001122221100",
      "011122222110",
      "011122321110",
      "011122233110",
      "001111111100",
      "000111111100",
      "000011141110",
      "000001100110",
      "000001100000"
    )
  },
  {
    name: "Sleepy fox",
    subtitle: "A curled-up russet fox tucks its tail around a warm cream muzzle.",
    colors: [
      { name: "Russet fur", hex: "#c86f52", clueInk: "#fffaf8" },
      { name: "Night brown", hex: "#543d3b", clueInk: "#fffaf8" },
      { name: "Cream muzzle", hex: "#f0d7ae", clueInk: "#594832" },
      { name: "Leaf shadow", hex: "#73856a", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000000000",
      "000011000000",
      "000111100000",
      "001111110000",
      "011122111100",
      "011123211110",
      "011133222110",
      "001111122110",
      "000111111100",
      "000011111110",
      "000001144100",
      "000000110000"
    )
  },
  {
    name: "Rainy umbrella",
    subtitle: "A bright umbrella catches the rain while three tiny drops fall below it.",
    hard: true,
    colors: [
      { name: "Umbrella coral", hex: "#df7772", clueInk: "#fffaf8" },
      { name: "Umbrella gold", hex: "#efbd5f", clueInk: "#5d461d" },
      { name: "Rain blue", hex: "#6da6b6", clueInk: "#fffaf8" },
      { name: "Handle brown", hex: "#765447", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000000000",
      "000011000000",
      "000111100000",
      "001122110000",
      "011122221100",
      "111122222111",
      "111122222111",
      "000031000000",
      "000034000000",
      "001003001000",
      "001003001000",
      "000000000000"
    )
  },
  {
    name: "Book nook",
    subtitle: "A stack of colorful books hides a tiny plant and a soft reading lamp.",
    colors: [
      { name: "Plum book", hex: "#86658f", clueInk: "#fffaf8" },
      { name: "Mustard book", hex: "#d5a64f", clueInk: "#554017" },
      { name: "Teal book", hex: "#5c9c9b", clueInk: "#fffaf8" },
      { name: "Plant green", hex: "#70935d", clueInk: "#fffaf8" },
      { name: "Lamp cream", hex: "#f1d692", clueInk: "#5d4a1d" }
    ],
    solution: picture(
      "000005000000",
      "000000440000",
      "000004400000",
      "000044400000",
      "001111111100",
      "022222222220",
      "033333333330",
      "001111111100",
      "022222222220",
      "033333333330",
      "000111111110",
      "000000000000"
    )
  },
  {
    name: "Lighthouse bay",
    subtitle: "A striped lighthouse shines over a little boat and rolling evening waves.",
    hard: true,
    colors: [
      { name: "Sea blue", hex: "#5b91a1", clueInk: "#fffaf8" },
      { name: "Lighthouse cream", hex: "#f0d8a6", clueInk: "#5b4824" },
      { name: "Beacon gold", hex: "#efb95b", clueInk: "#5b4217" },
      { name: "Roof red", hex: "#c96862", clueInk: "#fffaf8" },
      { name: "Night ink", hex: "#3f5069", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000300000",
      "000003330000",
      "000033333050",
      "000011110000",
      "000022220000",
      "000011110000",
      "000022220000",
      "000011110000",
      "001111111100",
      "011111111110",
      "111144441111",
      "111111111111"
    )
  }
];
