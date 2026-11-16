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
      "1222332221",
      "1122222211",
      "0122112210",
      "0011111100"
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
      "0000110000",
      "0001111000",
      "0011111100",
      "0114114110",
      "0111111110",
      "1111411111",
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
      "0003003000",
      "0030000300",
      "0003003000",
      "0030003000",
      "0111111000",
      "0122221110",
      "0111111011",
      "0111111011",
      "0111111110",
      "0011110000"
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
      "1101123110",
      "1111123141",
      "1111223111",
      "1111223111",
      "1111123111",
      "1101111110",
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
      "1111221111",
      "0111111110",
      "0003333000",
      "0003333000",
      "0003333000",
      "0033333300"
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
      "1234114321",
      "1122332211",
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
      "0001111000",
      "0003333000",
      "0003333000"
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
      "0010000100",
      "0110110110",
      "0111111110",
      "0111111110",
      "0011111100",
      "0000330000",
      "0020330200",
      "0220330220",
      "0222332220",
      "0000330000"
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
      "0030000030",
      "0000022200",
      "0000222000",
      "0000220000",
      "0000222000",
      "0000022200",
      "0111111110",
      "0144414441",
      "0144414441",
      "0111111110"
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
      "0000404000",
      "0000040000",
      "0000330000",
      "0003333000",
      "0011111100",
      "0111221110",
      "1111221101",
      "0111221101",
      "0011111110",
      "0001111000"
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
      "000000000404",
      "000000000404",
      "000222200044",
      "002233220044",
      "022322322044",
      "023233232440",
      "022322232440",
      "002233322440",
      "000222224444",
      "044444444440",
      "110011100111",
      "111111111111"
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
      "000100000100",
      "001210001210",
      "011111111110",
      "111111111111",
      "112111111211",
      "111133331111",
      "011332233110",
      "001133331100",
      "011111111110",
      "111111113311",
      "011111133310",
      "004444444400"
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
      "000300400030",
      "000000400000",
      "000111111000",
      "001112211100",
      "011221122110",
      "112211112211",
      "111111111111",
      "000004400000",
      "030004400030",
      "000004400000",
      "000044400000",
      "003044000000"
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
      "005500000000",
      "055550004000",
      "005500044400",
      "000500004400",
      "000500044440",
      "005550004400",
      "011111111110",
      "011111111110",
      "022222222220",
      "022222222220",
      "033333333330",
      "033333333330"
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
      "000400333000",
      "004443333300",
      "001221033300",
      "004444000050",
      "002222000550",
      "004444005550",
      "002222000500",
      "004444055555",
      "022222205550",
      "111111111111",
      "011111111110",
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
      "000011110000",
      "001122221100",
      "011223322110",
      "112333333211",
      "122333333221",
      "112333333211",
      "011223322110",
      "001122221100",
      "000044440000",
      "000044440000",
      "000044440000",
      "013344443310"
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
      "000400040000",
      "000040004000",
      "000400040000",
      "002222222200",
      "002113311200",
      "002133331200",
      "002113311211",
      "002222222201",
      "002222222201",
      "002222222211",
      "000222222000",
      "000022220000"
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
      "022200002220",
      "222221122222",
      "022201102220",
      "033301103330",
      "333331133333",
      "033301103330",
      "000001100000",
      "000001100000",
      "000001100000",
      "400401104004",
      "440440044044",
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
      "000004400000",
      "000022220000",
      "000112211000",
      "000222222000",
      "001122221100",
      "002222222200",
      "011122221110",
      "111111111111",
      "000033330000",
      "000033330000",
      "002222222200",
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
      "000005500000",
      "000112211000",
      "011221122110",
      "111111111111",
      "000005500000",
      "003305500000",
      "033335500000",
      "003444433300",
      "003344333330",
      "003005500300",
      "030005500030",
      "000005500000"
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
      "000022200000",
      "000022200000",
      "000011110000",
      "011011110000",
      "011011110110",
      "011111110110",
      "001111111110",
      "000011110000",
      "000011110000",
      "000011110440",
      "033333334440",
      "333333333333"
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
      "050000000050",
      "000002002000",
      "000003003000",
      "000002002000",
      "000022222000",
      "000224222000",
      "000022222200",
      "001112222110",
      "011111221111",
      "111100000111",
      "111000000011",
      "011000000000"
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
      "000000044400",
      "000000444440",
      "000100444440",
      "001110044400",
      "011111000000",
      "111111100000",
      "000100000000",
      "022222222200",
      "002222222000",
      "000333333330",
      "033333333333",
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
      "000300000000",
      "003300343000",
      "033333343330",
      "003300343000",
      "000300000000",
      "020000001000",
      "022001011100",
      "022011001100",
      "222011011110",
      "222111111111",
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
      "000500500500",
      "000400400400",
      "012222222210",
      "112322322311",
      "111111111111",
      "022222222220",
      "111311311311",
      "111111111111",
      "022222222220",
      "001111111100",
      "000111111000",
      "001111111100"
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
      "060002200000",
      "000022220006",
      "000122221000",
      "000113311000",
      "000113311000",
      "000111111000",
      "002111111200",
      "022111111220",
      "222011110222",
      "000044440000",
      "000045540000",
      "000005500000"
    )
  }
];
