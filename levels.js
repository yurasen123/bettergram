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
  },
  {
    name: "Autumn maple",
    subtitle: "Golden and russet leaves gather around the sturdy trunk of a little maple tree.",
    colors: [
      { name: "Maple gold", hex: "#e8ad55", clueInk: "#5d421c" },
      { name: "Leaf amber", hex: "#d77b4d", clueInk: "#fffaf8" },
      { name: "Russet red", hex: "#b9574e", clueInk: "#fffaf8" },
      { name: "Bark brown", hex: "#765044", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000110000",
      "000001221000",
      "000012221100",
      "000122221210",
      "001222222210",
      "012222222210",
      "001222222100",
      "000122221000",
      "000011110000",
      "000033300000",
      "000033300000",
      "000033300000"
    )
  },
  {
    name: "Hot cocoa",
    subtitle: "A warm mug of cocoa is topped with cream and a tiny marshmallow star.",
    colors: [
      { name: "Cocoa", hex: "#8b5a49", clueInk: "#fffaf8" },
      { name: "Mug cream", hex: "#ecd9bd", clueInk: "#514333" },
      { name: "Marshmallow", hex: "#fff4df", clueInk: "#594b39" },
      { name: "Steam blue", hex: "#9bbdc3", clueInk: "#31474b" }
    ],
    solution: picture(
      "000000040000",
      "000004040000",
      "000000400000",
      "000222220000",
      "001111111100",
      "011111111110",
      "011111111111",
      "011111111111",
      "011111111110",
      "001111111100",
      "000011110000",
      "000000000000"
    )
  },
  {
    name: "Dragonfly pond",
    subtitle: "A bright dragonfly hovers over reeds, with four translucent wings and a long tail.",
    hard: true,
    colors: [
      { name: "Dragonfly teal", hex: "#448e8b", clueInk: "#fffaf8" },
      { name: "Wing aqua", hex: "#a6d9d0", clueInk: "#294b47" },
      { name: "Wing lilac", hex: "#c5b0d8", clueInk: "#493957" },
      { name: "Pond green", hex: "#71966b", clueInk: "#fffaf8" },
      { name: "Water blue", hex: "#6a9eb0", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000000000",
      "001100001100",
      "011210012110",
      "001110011100",
      "000011110000",
      "000012100000",
      "000001100000",
      "000001100000",
      "000001200000",
      "440004400044",
      "444444444444",
      "555555555555"
    )
  },
  {
    name: "Pine in the snow",
    subtitle: "A small evergreen stands beneath a snowy cap with a bright star at its tip.",
    colors: [
      { name: "Pine green", hex: "#4f8065", clueInk: "#fffaf8" },
      { name: "Snow white", hex: "#f2f0e8", clueInk: "#4c4b45" },
      { name: "Tree trunk", hex: "#8b634b", clueInk: "#fffaf8" },
      { name: "Star gold", hex: "#efc35e", clueInk: "#5b4518" }
    ],
    solution: picture(
      "000004000000",
      "000033300000",
      "000012100000",
      "000112110000",
      "001111121000",
      "011121111100",
      "000111110000",
      "001111111000",
      "011111111100",
      "000022220000",
      "000022220000",
      "222222222222"
    )
  },
  {
    name: "Carousel horse",
    subtitle: "A painted carousel horse prances beneath a striped canopy and golden finial.",
    hard: true,
    colors: [
      { name: "Canopy red", hex: "#cc6f70", clueInk: "#fffaf8" },
      { name: "Canopy gold", hex: "#edbd62", clueInk: "#594116" },
      { name: "Horse ivory", hex: "#f0dfc3", clueInk: "#514333" },
      { name: "Saddle blue", hex: "#648fa4", clueInk: "#fffaf8" },
      { name: "Pole brass", hex: "#b88b48", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000005000000",
      "000011100000",
      "001122110000",
      "011221221100",
      "111211211110",
      "001111111000",
      "000123310000",
      "000222211000",
      "000222221100",
      "000202020000",
      "000202020000",
      "000000000000"
    )
  },
  {
    name: "Desert cactus",
    subtitle: "A flowering cactus grows beside a little stone under the hot desert sun.",
    colors: [
      { name: "Cactus green", hex: "#5d9471", clueInk: "#fffaf8" },
      { name: "Flower pink", hex: "#df8291", clueInk: "#57313a" },
      { name: "Desert sand", hex: "#e6bd78", clueInk: "#59451f" },
      { name: "Stone gray", hex: "#8d9691", clueInk: "#333b37" }
    ],
    solution: picture(
      "000000000000",
      "000000220000",
      "000000200000",
      "000020200000",
      "000021200000",
      "000011100000",
      "000011100000",
      "000111110000",
      "000111110000",
      "000111110000",
      "002223300000",
      "222222222222"
    )
  },
  {
    name: "Moon rabbit",
    subtitle: "A curious rabbit sits on a crescent moon among two tiny stars.",
    hard: true,
    colors: [
      { name: "Moon silver", hex: "#d8d8ca", clueInk: "#4c4c45" },
      { name: "Rabbit cream", hex: "#f2e5cc", clueInk: "#594b39" },
      { name: "Ear pink", hex: "#d98e9a", clueInk: "#553039" },
      { name: "Night navy", hex: "#495979", clueInk: "#fffaf8" },
      { name: "Star gold", hex: "#efc35e", clueInk: "#5b4518" }
    ],
    solution: picture(
      "000050000500",
      "000000000000",
      "000001001000",
      "000011101100",
      "000012101100",
      "000011111000",
      "000001111100",
      "000011111000",
      "000111110000",
      "001110000000",
      "000000000000",
      "000000000000"
    )
  },
  {
    name: "Sailboat sunset",
    subtitle: "A little sailboat glides across calm water as the sun sinks toward the horizon.",
    colors: [
      { name: "Sail cream", hex: "#f3e5c7", clueInk: "#594b39" },
      { name: "Hull coral", hex: "#d97867", clueInk: "#fffaf8" },
      { name: "Sea teal", hex: "#568f9a", clueInk: "#fffaf8" },
      { name: "Sun gold", hex: "#edbd62", clueInk: "#594116" }
    ],
    solution: picture(
      "000000000000",
      "000000044000",
      "000000444000",
      "000000444000",
      "000000040000",
      "000011040000",
      "000111040000",
      "000111140000",
      "000022220000",
      "000333333000",
      "033333333330",
      "333333333333"
    )
  },
  {
    name: "Coral reef",
    subtitle: "A striped tropical fish explores branching coral and swaying sea plants.",
    hard: true,
    colors: [
      { name: "Reef coral", hex: "#df796e", clueInk: "#fffaf8" },
      { name: "Sea grass", hex: "#619477", clueInk: "#fffaf8" },
      { name: "Fish gold", hex: "#e8b653", clueInk: "#594116" },
      { name: "Fish stripe", hex: "#f4e5c4", clueInk: "#594b39" },
      { name: "Deep water", hex: "#557b9a", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000000000",
      "000020000000",
      "000222000000",
      "022223200000",
      "222332220000",
      "022223200000",
      "000020000000",
      "100010001000",
      "110011011100",
      "111011011110",
      "555555555555",
      "555555555555"
    )
  },
  {
    name: "Birthday cake",
    subtitle: "A frosted layer cake glows with three candles and colorful little sprinkles.",
    colors: [
      { name: "Cake pink", hex: "#dc8c91", clueInk: "#54353a" },
      { name: "Vanilla icing", hex: "#f4e5c8", clueInk: "#594b39" },
      { name: "Berry sprinkle", hex: "#a65b78", clueInk: "#fffaf8" },
      { name: "Candle blue", hex: "#6d9fb2", clueInk: "#fffaf8" },
      { name: "Flame gold", hex: "#efb953", clueInk: "#594116" }
    ],
    solution: picture(
      "000050500500",
      "000040400400",
      "000000000000",
      "001111111100",
      "012121212210",
      "011111111110",
      "022222222220",
      "012121212210",
      "011111111110",
      "001111111100",
      "000011110000",
      "000000000000"
    )
  },
  {
    name: "Rocket to the stars",
    subtitle: "A bright little rocket leaves a trail of flame on its way to a distant star.",
    hard: true,
    colors: [
      { name: "Rocket silver", hex: "#d9dfdf", clueInk: "#424949" },
      { name: "Rocket red", hex: "#d86d67", clueInk: "#fffaf8" },
      { name: "Window blue", hex: "#72a9bc", clueInk: "#244752" },
      { name: "Flame gold", hex: "#efbd5d", clueInk: "#594116" },
      { name: "Flame coral", hex: "#e78367", clueInk: "#58362d" },
      { name: "Star cream", hex: "#f4e7bf", clueInk: "#594b2b" }
    ],
    solution: picture(
      "000000000000",
      "000000000600",
      "000000060000",
      "000000200000",
      "000001100000",
      "000011110000",
      "000112211000",
      "000011110000",
      "000011110000",
      "000042400000",
      "000044400000",
      "000005500000"
    )
  }
];
