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
  },
  {
    name: "Honey bee",
    subtitle: "A fuzzy golden bee with dark stripes, tiny antennae, and translucent wings.",
    colors: [
      { name: "Wing mist", hex: "#cde3e8", clueInk: "#33484d" },
      { name: "Honey gold", hex: "#f0bc52", clueInk: "#594116" },
      { name: "Espresso stripe", hex: "#483632", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0003003000",
      "0000330000",
      "0110220110",
      "1112332111",
      "0112222110",
      "0033333300",
      "0022222200",
      "0033333300",
      "0002222000",
      "0000330000"
    )
  },
  {
    name: "Avocado half",
    subtitle: "Fresh green avocado flesh cradles a round brown pit inside a dark peel.",
    colors: [
      { name: "Peel green", hex: "#4d734e", clueInk: "#fffaf8" },
      { name: "Avocado lime", hex: "#b5cf76", clueInk: "#3f4f22" },
      { name: "Cream flesh", hex: "#e9ebc0", clueInk: "#4c4e2e" },
      { name: "Seed brown", hex: "#8a563d", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000110000",
      "0001221000",
      "0012332100",
      "0012332100",
      "0123443210",
      "0124444210",
      "0124444210",
      "0123443210",
      "0012222100",
      "0001111000"
    )
  },
  {
    name: "Little penguin",
    subtitle: "A chubby penguin wears a cozy berry scarf and stands on bright orange feet.",
    colors: [
      { name: "Slate feather", hex: "#485668", clueInk: "#fffaf8" },
      { name: "Snow belly", hex: "#f4efe4", clueInk: "#4a4740" },
      { name: "Scarf berry", hex: "#d46368", clueInk: "#fffaf8" },
      { name: "Beak amber", hex: "#eb9f48", clueInk: "#573814" }
    ],
    solution: picture(
      "0001111000",
      "0011111100",
      "0012112100",
      "0011441100",
      "0033333300",
      "0112222113",
      "1122222213",
      "1122222210",
      "0112222110",
      "0044004400"
    )
  },
  {
    name: "Golden croissant",
    subtitle: "A flaky crescent croissant rests above a quiet sage ceramic plate.",
    colors: [
      { name: "Crust amber", hex: "#d98d48", clueInk: "#fffaf8" },
      { name: "Butter gold", hex: "#f0bd65", clueInk: "#594116" },
      { name: "Toasted crease", hex: "#9c5933", clueInk: "#fffaf8" },
      { name: "Plate sage", hex: "#9ab5a6", clueInk: "#2b4236" }
    ],
    solution: picture(
      "0001111000",
      "0012222100",
      "0123223210",
      "1232222321",
      "1223223221",
      "1322222231",
      "1210000121",
      "0100000010",
      "0444444440",
      "0044444400"
    )
  },
  {
    name: "Cozy lantern",
    subtitle: "A warm brass lantern shelters a flickering candle flame behind tinted glass.",
    colors: [
      { name: "Antique brass", hex: "#7d6248", clueInk: "#fffaf8" },
      { name: "Candle glow", hex: "#f6d46b", clueInk: "#594614" },
      { name: "Flame orange", hex: "#e68649", clueInk: "#fffaf8" },
      { name: "Glass tint", hex: "#cfe3df", clueInk: "#334a46" }
    ],
    solution: picture(
      "0000110000",
      "0001111000",
      "0011111100",
      "0014224100",
      "0012332100",
      "0012222100",
      "0014224100",
      "0011111100",
      "0001111000",
      "0011111100"
    )
  },
  {
    name: "Origami boat",
    subtitle: "A folded paper boat drifts across gentle teal ripples.",
    colors: [
      { name: "Paper cream", hex: "#f4ecdc", clueInk: "#544c3d" },
      { name: "Fold shadow", hex: "#cfc5b4", clueInk: "#474137" },
      { name: "River teal", hex: "#659ea8", clueInk: "#fffaf8" },
      { name: "Foam mist", hex: "#b8d8dc", clueInk: "#2c4b4f" }
    ],
    solution: picture(
      "0000110000",
      "0001121000",
      "0011121100",
      "0111121110",
      "1122222211",
      "0111111110",
      "0022222200",
      "3343333433",
      "3333443333",
      "4333333334"
    )
  },
  {
    name: "Strawberry tart",
    subtitle: "A ripe red strawberry crowns whipped vanilla cream and a crisp golden crust.",
    colors: [
      { name: "Berry red", hex: "#db5864", clueInk: "#fffaf8" },
      { name: "Leaf green", hex: "#64945e", clueInk: "#fffaf8" },
      { name: "Whipped cream", hex: "#f7efe0", clueInk: "#594e3c" },
      { name: "Pastry gold", hex: "#d99d55", clueInk: "#593e18" }
    ],
    solution: picture(
      "0000220000",
      "0002222000",
      "0001111000",
      "0011111100",
      "0011111100",
      "0333333330",
      "3333333333",
      "4444444444",
      "0444444440",
      "0044444400"
    )
  },
  {
    name: "Sakura branch",
    subtitle: "Delicate pink cherry blossoms bloom along a dark branch as petals drift down.",
    hard: true,
    colors: [
      { name: "Bark brown", hex: "#6b4c45", clueInk: "#fffaf8" },
      { name: "Blossom pink", hex: "#f2b3c2", clueInk: "#633642" },
      { name: "Petal blush", hex: "#fbe0e6", clueInk: "#69434c" },
      { name: "Stamen gold", hex: "#e8b354", clueInk: "#594116" }
    ],
    solution: picture(
      "000002300000",
      "000024200230",
      "000002002420",
      "002301000200",
      "024211101100",
      "111110111000",
      "001100010230",
      "000110002420",
      "023011000200",
      "242001100000",
      "020000100000",
      "000300000230"
    )
  },
  {
    name: "Whale fountain",
    subtitle: "A gentle blue whale spouts a sparkling mist above rolling ocean waves.",
    colors: [
      { name: "Whale slate", hex: "#58829e", clueInk: "#fffaf8" },
      { name: "Belly mist", hex: "#d5e4eb", clueInk: "#2f4757" },
      { name: "Spout aqua", hex: "#92cad1", clueInk: "#23494e" },
      { name: "Deep wave", hex: "#3f6885", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000300030000",
      "000030300000",
      "000003000000",
      "000111110000",
      "001111111001",
      "011211111011",
      "011111111110",
      "012222221100",
      "002222220000",
      "443444434444",
      "444433444434",
      "444444444444"
    )
  },
  {
    name: "Retro camera",
    subtitle: "A vintage tan-and-silver camera with a glass lens glint and coral shutter button.",
    colors: [
      { name: "Silver body", hex: "#d8dadb", clueInk: "#3f4245" },
      { name: "Leather tan", hex: "#8a624b", clueInk: "#fffaf8" },
      { name: "Lens dark", hex: "#3b424c", clueInk: "#fffaf8" },
      { name: "Glass glint", hex: "#8ec2cf", clueInk: "#22434c" },
      { name: "Shutter coral", hex: "#d96d66", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "005500000000",
      "011111111110",
      "011441111330",
      "111111111111",
      "222233332222",
      "222344333222",
      "222343333222",
      "222333333222",
      "222233332222",
      "222222222222",
      "111111111111",
      "011111111110"
    )
  },
  {
    name: "Witch hat",
    subtitle: "A pointed plum hat with a berry band, golden buckle, and two twinkling stars.",
    hard: true,
    colors: [
      { name: "Plum felt", hex: "#6a5178", clueInk: "#fffaf8" },
      { name: "Ribbon berry", hex: "#b85c74", clueInk: "#fffaf8" },
      { name: "Buckle gold", hex: "#efc05c", clueInk: "#594216" },
      { name: "Star cream", hex: "#f7e8bc", clueInk: "#594b2b" }
    ],
    solution: picture(
      "040000011000",
      "000000111100",
      "000001111000",
      "000011111004",
      "000011111100",
      "000111111100",
      "000111111110",
      "002223332220",
      "002223132220",
      "011113331111",
      "111111111111",
      "011111111110"
    )
  },
  {
    name: "Vinyl player",
    subtitle: "A walnut turntable spins a dark vinyl record beneath a silver tonearm.",
    hard: true,
    colors: [
      { name: "Walnut wood", hex: "#8c5c43", clueInk: "#fffaf8" },
      { name: "Vinyl charcoal", hex: "#3b3c42", clueInk: "#fffaf8" },
      { name: "Label coral", hex: "#df7368", clueInk: "#fffaf8" },
      { name: "Tonearm silver", hex: "#cfd5d6", clueInk: "#3c4245" },
      { name: "Brass knob", hex: "#e6b655", clueInk: "#594116" }
    ],
    solution: picture(
      "011111111110",
      "112222221141",
      "122222222141",
      "122233222141",
      "122334322441",
      "122333324411",
      "122233224111",
      "122222222111",
      "112222221151",
      "111111111151",
      "011111111110",
      "001100001100"
    )
  },
  {
    name: "Acorn & oak leaf",
    subtitle: "A plump autumn acorn rests beside a golden oak leaf.",
    colors: [
      { name: "Cap brown", hex: "#7a523c", clueInk: "#fffaf8" },
      { name: "Nut tan", hex: "#d99f62", clueInk: "#573a1c" },
      { name: "Oak gold", hex: "#e3b254", clueInk: "#594116" },
      { name: "Stem dark", hex: "#4d372e", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000440000",
      "0001111000",
      "0011111100",
      "0011111100",
      "0002222000",
      "0002222300",
      "0002223330",
      "0000233333",
      "0000033330",
      "0000433000"
    )
  },
  {
    name: "Ice cream cone",
    subtitle: "Two scoops of strawberry and vanilla ice cream crowned with a bright cherry.",
    colors: [
      { name: "Cherry red", hex: "#d95b66", clueInk: "#fffaf8" },
      { name: "Strawberry pink", hex: "#f29fb0", clueInk: "#61333e" },
      { name: "Vanilla cream", hex: "#f6ebd4", clueInk: "#594d38" },
      { name: "Waffle tan", hex: "#d89a56", clueInk: "#573917" }
    ],
    solution: picture(
      "0000110000",
      "0002222000",
      "0022222200",
      "0033333300",
      "0333333330",
      "0044444400",
      "0044444400",
      "0004444000",
      "0004444000",
      "0000440000"
    )
  },
  {
    name: "Little ladybug",
    subtitle: "A spotted red ladybug crawls across a fresh green garden leaf.",
    colors: [
      { name: "Ladybug red", hex: "#dc5a58", clueInk: "#fffaf8" },
      { name: "Ink black", hex: "#3b373d", clueInk: "#fffaf8" },
      { name: "Leaf green", hex: "#6fa166", clueInk: "#fffaf8" },
      { name: "Leaf vein", hex: "#4e7a49", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0002002000",
      "0000220000",
      "0002222000",
      "0011221100",
      "0121221210",
      "0111221110",
      "0121221210",
      "0011221100",
      "0333443330",
      "3334334333"
    )
  },
  {
    name: "Bonsai tree",
    subtitle: "A sculpted miniature bonsai grows in a shallow teal ceramic pot.",
    colors: [
      { name: "Foliage sage", hex: "#5f8f69", clueInk: "#fffaf8" },
      { name: "Moss light", hex: "#8ab882", clueInk: "#2b4527" },
      { name: "Trunk brown", hex: "#785242", clueInk: "#fffaf8" },
      { name: "Ceramic teal", hex: "#5a8c99", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0002222000",
      "0011111100",
      "0221111000",
      "1111330220",
      "0003311111",
      "0000330000",
      "0003330000",
      "0444444440",
      "0044444400",
      "0040000400"
    )
  },
  {
    name: "Rubber ducky",
    subtitle: "A cheerful yellow bath duck floats on calm blue water.",
    colors: [
      { name: "Ducky gold", hex: "#f2c654", clueInk: "#594314" },
      { name: "Beak orange", hex: "#e67e45", clueInk: "#fffaf8" },
      { name: "Eye dark", hex: "#3a3840", clueInk: "#fffaf8" },
      { name: "Bath blue", hex: "#75adc2", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000011100",
      "0000113110",
      "0000111222",
      "0000011220",
      "0100111100",
      "0111111110",
      "0111111110",
      "0011111100",
      "4444444444",
      "4444444444"
    )
  },
  {
    name: "Ramen bowl",
    subtitle: "Wooden chopsticks lift golden noodles above a steaming coral ramen bowl.",
    colors: [
      { name: "Chopstick wood", hex: "#8c5e42", clueInk: "#fffaf8" },
      { name: "Noodle gold", hex: "#f0c465", clueInk: "#594316" },
      { name: "Egg white", hex: "#f7f1e3", clueInk: "#544d3e" },
      { name: "Scallion green", hex: "#66965d", clueInk: "#fffaf8" },
      { name: "Bowl coral", hex: "#cf685e", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000111111",
      "0011111111",
      "0000110000",
      "0002222000",
      "0222334420",
      "5555555555",
      "5555555555",
      "0555555550",
      "0055555500",
      "0005555000"
    )
  },
  {
    name: "Cozy cabin",
    subtitle: "Warm golden light glows from the windows of a little wooden cottage.",
    colors: [
      { name: "Roof pine", hex: "#4f7864", clueInk: "#fffaf8" },
      { name: "Log cedar", hex: "#b5744c", clueInk: "#fffaf8" },
      { name: "Window warm", hex: "#f5cb67", clueInk: "#594415" },
      { name: "Smoke mist", hex: "#b9c9cf", clueInk: "#36464d" }
    ],
    solution: picture(
      "0000000400",
      "0000004000",
      "0000112000",
      "0001111200",
      "0011111100",
      "0111111110",
      "0022222200",
      "0023223200",
      "0022223200",
      "0022223200"
    )
  },
  {
    name: "Hedgehog & apple",
    subtitle: "A prickly little hedgehog carries a crisp red apple on its back.",
    colors: [
      { name: "Spines brown", hex: "#6e5043", clueInk: "#fffaf8" },
      { name: "Face cream", hex: "#ebd5b3", clueInk: "#544531" },
      { name: "Apple red", hex: "#d95b5b", clueInk: "#fffaf8" },
      { name: "Leaf green", hex: "#6a995e", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000004000",
      "0000044000",
      "0000333000",
      "0000333000",
      "0011111100",
      "0111111110",
      "1111112210",
      "1111122122",
      "0111122220",
      "0022002200"
    )
  },
  {
    name: "Hourglass",
    subtitle: "Golden grains of sand trickle through a classic wooden hourglass.",
    colors: [
      { name: "Frame walnut", hex: "#7d5642", clueInk: "#fffaf8" },
      { name: "Glass sky", hex: "#cbe0e6", clueInk: "#33484f" },
      { name: "Sand gold", hex: "#ecc05e", clueInk: "#594216" }
    ],
    solution: picture(
      "0111111110",
      "0022222200",
      "0023333200",
      "0002332000",
      "0000330000",
      "0000330000",
      "0002332000",
      "0023333200",
      "0033333300",
      "0111111110"
    )
  },
  {
    name: "Matcha ceremony",
    subtitle: "A bamboo whisk froths vibrant green matcha inside a dark clay bowl.",
    colors: [
      { name: "Bamboo whisk", hex: "#d8b36c", clueInk: "#54411b" },
      { name: "Matcha green", hex: "#78a856", clueInk: "#fffaf8" },
      { name: "Foam jade", hex: "#b4d68b", clueInk: "#334a1c" },
      { name: "Chawan clay", hex: "#574a49", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000001100",
      "0000001100",
      "0000011110",
      "0000011110",
      "0333222230",
      "4444444444",
      "4444444444",
      "0444444440",
      "0044444400",
      "0004444000"
    )
  },
  {
    name: "Friendly ghost",
    subtitle: "A rosy-cheeked little ghost floats beside a tiny autumn pumpkin.",
    colors: [
      { name: "Ghost sheet", hex: "#f3efe6", clueInk: "#4a4740" },
      { name: "Eye charcoal", hex: "#3c3a42", clueInk: "#fffaf8" },
      { name: "Cheek blush", hex: "#f0a1b0", clueInk: "#61343e" },
      { name: "Mini pumpkin", hex: "#e38246", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000111000",
      "0001111100",
      "0011212110",
      "0013111310",
      "0111111111",
      "0111111111",
      "0011111100",
      "0011111440",
      "0010114444",
      "0000104444"
    )
  },
  {
    name: "Antique key",
    subtitle: "An ornate brass key tied with a small plum velvet ribbon.",
    colors: [
      { name: "Brass gold", hex: "#e6b653", clueInk: "#594116" },
      { name: "Bronze shade", hex: "#b3823b", clueInk: "#fffaf8" },
      { name: "Velvet plum", hex: "#6e506b", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0001111000",
      "0311221100",
      "3312002100",
      "0311221100",
      "0001111000",
      "0000120000",
      "0000121100",
      "0000120000",
      "0000121110",
      "0000110000"
    )
  },
  {
    name: "Pink flamingo",
    subtitle: "A graceful pink flamingo balances on one leg in a calm lagoon.",
    hard: true,
    colors: [
      { name: "Flamingo pink", hex: "#ea8598", clueInk: "#5c2c37" },
      { name: "Wing coral", hex: "#d66579", clueInk: "#fffaf8" },
      { name: "Beak dark", hex: "#3d3a42", clueInk: "#fffaf8" },
      { name: "Lagoon aqua", hex: "#6da8b3", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000111000",
      "000001111300",
      "000001100330",
      "000001100000",
      "001111110000",
      "011222211000",
      "112222211000",
      "011111110000",
      "000010000000",
      "000011100000",
      "000010000000",
      "444444444444"
    )
  },
  {
    name: "Potted monstera",
    subtitle: "Split green monstera leaves fan out from a classic terracotta pot.",
    colors: [
      { name: "Monstera deep", hex: "#4b7d5b", clueInk: "#fffaf8" },
      { name: "Leaf emerald", hex: "#6ea374", clueInk: "#fffaf8" },
      { name: "Terracotta pot", hex: "#c97355", clueInk: "#fffaf8" },
      { name: "Rim clay", hex: "#a8583e", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "001100002200",
      "010110022020",
      "011110022220",
      "001101102200",
      "000010110000",
      "000011110000",
      "000001100000",
      "003333333300",
      "004444444400",
      "000333333000",
      "000333333000",
      "000333333000"
    )
  },
  {
    name: "Snow globe",
    subtitle: "Flakes swirl around a tiny red cottage and pine tree inside a glass dome.",
    hard: true,
    colors: [
      { name: "Glass sky", hex: "#7aa4bd", clueInk: "#fffaf8" },
      { name: "Snow white", hex: "#f5f2ea", clueInk: "#4a4842" },
      { name: "Cabin red", hex: "#cc6862", clueInk: "#fffaf8" },
      { name: "Pine green", hex: "#568265", clueInk: "#fffaf8" },
      { name: "Base walnut", hex: "#7d5440", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000011110000",
      "001121111100",
      "011111121110",
      "012113311110",
      "111133331411",
      "111133334441",
      "122222222221",
      "022222222220",
      "002222222200",
      "005555555500",
      "055555555550",
      "055555555550"
    )
  },
  {
    name: "Teddy bear",
    subtitle: "A plush brown teddy bear wears a neat berry ribbon bow.",
    colors: [
      { name: "Plush brown", hex: "#9e6b4b", clueInk: "#fffaf8" },
      { name: "Muzzle cream", hex: "#ebd5b7", clueInk: "#544431" },
      { name: "Eye dark", hex: "#3b3536", clueInk: "#fffaf8" },
      { name: "Bow berry", hex: "#d45d6a", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "001100001100",
      "012111111210",
      "001111111100",
      "001312213100",
      "001123321100",
      "000122221000",
      "000044440000",
      "011112211110",
      "011122221110",
      "001122221100",
      "001110011100",
      "002220022200"
    )
  },
  {
    name: "Bottle message",
    subtitle: "A corked sea-glass bottle carries a wax-sealed scroll across the ocean.",
    hard: true,
    colors: [
      { name: "Sea glass", hex: "#8ec4be", clueInk: "#264a46" },
      { name: "Cork tan", hex: "#b57e50", clueInk: "#fffaf8" },
      { name: "Parchment", hex: "#f4e5c3", clueInk: "#594b34" },
      { name: "Wax seal", hex: "#cf6363", clueInk: "#fffaf8" },
      { name: "Ocean blue", hex: "#4f7f9c", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000002200000",
      "000001100000",
      "000011110000",
      "000111111000",
      "000133331000",
      "000134431000",
      "000133331000",
      "000111111000",
      "000011110000",
      "551555555155",
      "555515515555",
      "555555555555"
    )
  },
  {
    name: "Campfire night",
    subtitle: "Bright golden flames crackle over crossed logs as tiny sparks drift upward.",
    colors: [
      { name: "Ember coral", hex: "#df6b56", clueInk: "#fffaf8" },
      { name: "Flame gold", hex: "#f2bf58", clueInk: "#594116" },
      { name: "Spark cream", hex: "#faecc5", clueInk: "#594e32" },
      { name: "Log brown", hex: "#6e4b3b", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000300003000",
      "000001000000",
      "000011100300",
      "000112110000",
      "001122211000",
      "001223221000",
      "001233321000",
      "000122210000",
      "044444444440",
      "004440044400",
      "044400004440",
      "440000000044"
    )
  },
  {
    name: "Pearl seashell",
    subtitle: "An open scalloped seashell reveals a luminous pearl on warm beach sand.",
    hard: true,
    colors: [
      { name: "Shell lilac", hex: "#d69eb5", clueInk: "#573342" },
      { name: "Shell cream", hex: "#f5e7d0", clueInk: "#574b37" },
      { name: "Pearl white", hex: "#fcfaf5", clueInk: "#4a4842" },
      { name: "Beach sand", hex: "#e3bc78", clueInk: "#574420" }
    ],
    solution: picture(
      "000111111000",
      "001212212100",
      "012122221210",
      "011222222110",
      "001123321100",
      "000133331000",
      "001123321100",
      "011222222110",
      "012122221210",
      "001111111100",
      "044444444440",
      "444444444444"
    )
  },
  {
    name: "Salmon sushi",
    subtitle: "Two pieces of salmon nigiri rest on a dark slate tray beside a dollop of wasabi.",
    hard: true,
    colors: [
      { name: "Salmon coral", hex: "#ea7d63", clueInk: "#fffaf8" },
      { name: "Salmon stripe", hex: "#f7b89c", clueInk: "#613827" },
      { name: "Sushi rice", hex: "#f5f0e6", clueInk: "#4c4840" },
      { name: "Nori dark", hex: "#394740", clueInk: "#fffaf8" },
      { name: "Wasabi green", hex: "#8bb863", clueInk: "#2f4719" }
    ],
    solution: picture(
      "000121121000",
      "001121121100",
      "003344333300",
      "000344333000",
      "000000000550",
      "000000005555",
      "001211210000",
      "011211211000",
      "033344333000",
      "003344330000",
      "444444444444",
      "044444444440"
    )
  },
    {
    name: "Cute frog",
    subtitle: "A cheerful green frog with rosy cheeks sits ready to hop.",
    colors: [
      { name: "Frog green", hex: "#6ca663", clueInk: "#fffaf8" },
      { name: "Belly lime", hex: "#b8db8c", clueInk: "#2d471d" },
      { name: "Eye cream", hex: "#f5f0e1", clueInk: "#4a463c" },
      { name: "Pupil dark", hex: "#38363d", clueInk: "#fffaf8" },
      { name: "Cheek blush", hex: "#ed9aa8", clueInk: "#5e2f38" }
    ],
    solution: picture(
      "0011001100",
      "0134113410",
      "0111111110",
      "1151111511",
      "1114444111",
      "0112222110",
      "1122222211",
      "1022222201",
      "0112222110",
      "1110000111"
    )
  },
  {
    name: "Pineapple",
    subtitle: "A sweet golden pineapple topped with a spiky crown of green leaves.",
    colors: [
      { name: "Crown green", hex: "#568c58", clueInk: "#fffaf8" },
      { name: "Leaf sage", hex: "#7eb36b", clueInk: "#244225" },
      { name: "Golden rind", hex: "#efb94d", clueInk: "#594116" },
      { name: "Sweet amber", hex: "#d68b3e", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000110000",
      "0020110200",
      "0022112200",
      "0002112000",
      "0003443000",
      "0034334300",
      "0043443400",
      "0034334300",
      "0043443400",
      "0003443000"
    )
  },
  {
    name: "Cherries",
    subtitle: "A pair of glossy red cherries hangs from joined stems and a fresh green leaf.",
    colors: [
      { name: "Stem green", hex: "#5a8a52", clueInk: "#fffaf8" },
      { name: "Leaf mint", hex: "#7db068", clueInk: "#244020" },
      { name: "Cherry ruby", hex: "#d44c5a", clueInk: "#fffaf8" },
      { name: "Berry shine", hex: "#f5b5be", clueInk: "#632a32" }
    ],
    solution: picture(
      "0000011220",
      "0000101222",
      "0001001020",
      "0001000100",
      "0010000100",
      "0333003330",
      "3433333433",
      "3333333333",
      "3333333333",
      "0333003330"
    )
  },
  {
    name: "Love letter",
    subtitle: "A cream envelope sealed with a ruby wax heart and tucked beside a sprig of lavender.",
    colors: [
      { name: "Paper cream", hex: "#f5ebd8", clueInk: "#544a39" },
      { name: "Fold shadow", hex: "#d6c7b0", clueInk: "#473f32" },
      { name: "Wax ruby", hex: "#d65865", clueInk: "#fffaf8" },
      { name: "Lavender", hex: "#9d84b8", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000000040",
      "0000000444",
      "0000004440",
      "1111111141",
      "1211111121",
      "1123333211",
      "1113333111",
      "1123333211",
      "1211111121",
      "1111111111"
    )
  },
  {
    name: "Hatching chick",
    subtitle: "A fluffy yellow chick peeks out from a cracked cream eggshell.",
    colors: [
      { name: "Fluffy yellow", hex: "#f4cb58", clueInk: "#594414" },
      { name: "Beak coral", hex: "#e37e49", clueInk: "#fffaf8" },
      { name: "Eye ink", hex: "#3b3840", clueInk: "#fffaf8" },
      { name: "Shell cream", hex: "#f5efe2", clueInk: "#4d483e" }
    ],
    solution: picture(
      "0000110000",
      "0001111000",
      "0011111100",
      "0013113100",
      "0011221100",
      "0411111140",
      "0441441440",
      "0444444440",
      "0044444400",
      "0004444000"
    )
  },
  {
    name: "Lemonade pitcher",
    subtitle: "A glass pitcher filled with sunny lemonade, ice cubes, and a fresh mint sprig.",
    colors: [
      { name: "Glass aqua", hex: "#bfe0e3", clueInk: "#2f4b4d" },
      { name: "Lemon gold", hex: "#f4ce58", clueInk: "#594514" },
      { name: "Ice white", hex: "#f7f6f0", clueInk: "#4a4943" },
      { name: "Mint leaf", hex: "#659960", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000044000",
      "0011114000",
      "0111111000",
      "0133111110",
      "0122221010",
      "0123321010",
      "0122221110",
      "0122221000",
      "0122221000",
      "0011110000"
    )
  },
  {
    name: "Pocket compass",
    subtitle: "An antique brass compass points due north with a red-and-slate needle.",
    colors: [
      { name: "Brass gold", hex: "#dba84c", clueInk: "#573e13" },
      { name: "Dial cream", hex: "#f5edd8", clueInk: "#524938" },
      { name: "North red", hex: "#d65b5b", clueInk: "#fffaf8" },
      { name: "South slate", hex: "#4c5c6e", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000110000",
      "0001221000",
      "0012222100",
      "0122332210",
      "0122332210",
      "0122442210",
      "0122442210",
      "0012222100",
      "0001221000",
      "0000110000"
    )
  },
  {
    name: "Blueberry pancakes",
    subtitle: "A warm stack of pancakes drizzled with maple syrup and topped with butter and berries.",
    colors: [
      { name: "Pancake tan", hex: "#d9954e", clueInk: "#fffaf8" },
      { name: "Syrup amber", hex: "#9e542c", clueInk: "#fffaf8" },
      { name: "Butter gold", hex: "#f5d264", clueInk: "#594714" },
      { name: "Berry indigo", hex: "#4d628a", clueInk: "#fffaf8" },
      { name: "Plate cream", hex: "#ebe5d8", clueInk: "#4d483e" }
    ],
    solution: picture(
      "0000440000",
      "0003333000",
      "0011221100",
      "0112222110",
      "0121111210",
      "0111111110",
      "0112111110",
      "0111111110",
      "5555555555",
      "0555555550"
    )
  },
  {
    name: "Paper glider",
    subtitle: "A folded paper airplane soars smoothly between two soft clouds.",
    colors: [
      { name: "Paper white", hex: "#f5f1e6", clueInk: "#4a473e" },
      { name: "Crease gray", hex: "#c9c4b8", clueInk: "#42403a" },
      { name: "Cloud mist", hex: "#dbe9ed", clueInk: "#35494f" },
      { name: "Sky blue", hex: "#79adc4", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0330000011",
      "3333000111",
      "0000011121",
      "0001111221",
      "0111112210",
      "0001222100",
      "0001211000",
      "0001000330",
      "4000003333",
      "4400000000"
    )
  },
  {
    name: "Sleepy koala",
    subtitle: "A fluffy gray koala hugs a leafy eucalyptus branch.",
    colors: [
      { name: "Koala gray", hex: "#8b9299", clueInk: "#fffaf8" },
      { name: "Ear fluff", hex: "#d8dcde", clueInk: "#42464a" },
      { name: "Nose dark", hex: "#3d3b42", clueInk: "#fffaf8" },
      { name: "Eucalyptus", hex: "#6c9c78", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0110000110",
      "1221111221",
      "1221111221",
      "0111331110",
      "0011331100",
      "0011111140",
      "0111111444",
      "0111114440",
      "0011114000",
      "0011004000"
    )
  },
  {
    name: "Cheese & grapes",
    subtitle: "A wedge of golden Swiss cheese sits beside a cluster of sweet purple grapes.",
    colors: [
      { name: "Swiss gold", hex: "#f2c557", clueInk: "#594314" },
      { name: "Cheese hole", hex: "#d4953b", clueInk: "#fffaf8" },
      { name: "Grape plum", hex: "#7d5a87", clueInk: "#fffaf8" },
      { name: "Vine green", hex: "#65945c", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000004400",
      "0000044000",
      "0001133300",
      "0011233330",
      "0111133300",
      "1121113300",
      "1111211000",
      "1111111000",
      "1211121000",
      "1111111000"
    )
  },
  {
    name: "Sea turtle",
    subtitle: "A patterned green sea turtle glides through calm ocean waters.",
    colors: [
      { name: "Shell forest", hex: "#4f805d", clueInk: "#fffaf8" },
      { name: "Shell lime", hex: "#8ab878", clueInk: "#27421d" },
      { name: "Flipper sage", hex: "#6fa173", clueInk: "#fffaf8" },
      { name: "Ocean blue", hex: "#669eb0", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "0000330000",
      "0003333000",
      "0301221030",
      "3312112133",
      "3311221133",
      "0012112100",
      "0011221100",
      "0331111330",
      "0300330030",
      "4444444444"
    )
  },
  {
    name: "Potion bottle",
    subtitle: "A corked glass flask swirls with shimmering lilac elixir and a golden star.",
    hard: true,
    colors: [
      { name: "Glass aqua", hex: "#b5dce0", clueInk: "#2a4a4d" },
      { name: "Cork wood", hex: "#b37b4d", clueInk: "#fffaf8" },
      { name: "Elixir lilac", hex: "#9b72b0", clueInk: "#fffaf8" },
      { name: "Shimmer pink", hex: "#e8a7c8", clueInk: "#5c2e46" },
      { name: "Star gold", hex: "#f2c557", clueInk: "#594314" }
    ],
    solution: picture(
      "000002200000",
      "000002200000",
      "000011110000",
      "000001100000",
      "000111111000",
      "001133331100",
      "011343333110",
      "013443533310",
      "013335553310",
      "013333533310",
      "001333333100",
      "000111111000"
    )
  },
  {
    name: "Red panda",
    subtitle: "A rust-red panda with cream face markings and a striped tail sits on bamboo.",
    hard: true,
    colors: [
      { name: "Rust fur", hex: "#c96342", clueInk: "#fffaf8" },
      { name: "Cream patch", hex: "#f5e6cc", clueInk: "#544631" },
      { name: "Dark paw", hex: "#3d3334", clueInk: "#fffaf8" },
      { name: "Bamboo green", hex: "#6a995e", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "002100001200",
      "001111111100",
      "012111111210",
      "013122221310",
      "001223322100",
      "000112211000",
      "001111111100",
      "011311113110",
      "011311113112",
      "001111111121",
      "003300003312",
      "444444444444"
    )
  },
  {
    name: "Country windmill",
    subtitle: "Four wooden sails cross over a warm brick windmill in a green meadow.",
    hard: true,
    colors: [
      { name: "Sail cream", hex: "#f2e5ce", clueInk: "#544937" },
      { name: "Sail wood", hex: "#8c5e42", clueInk: "#fffaf8" },
      { name: "Brick coral", hex: "#c46b5a", clueInk: "#fffaf8" },
      { name: "Meadow green", hex: "#67965c", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "010000000010",
      "011000000110",
      "001203302100",
      "000223322000",
      "000022220000",
      "000223322000",
      "001233332100",
      "011033330110",
      "010332233010",
      "000332233000",
      "003333333300",
      "444444444444"
    )
  },
  {
    name: "Acoustic guitar",
    subtitle: "A warm honey-and-cedar acoustic guitar with ivory binding.",
    colors: [
      { name: "Honey wood", hex: "#dfa055", clueInk: "#593d18" },
      { name: "Cedar body", hex: "#b8713d", clueInk: "#fffaf8" },
      { name: "Sound hole", hex: "#42322d", clueInk: "#fffaf8" },
      { name: "Neck walnut", hex: "#734c3b", clueInk: "#fffaf8" },
      { name: "Ivory trim", hex: "#f5ebd8", clueInk: "#544937" }
    ],
    solution: picture(
      "000004400000",
      "000054450000",
      "000004400000",
      "000004400000",
      "000114411000",
      "001153351100",
      "000153351000",
      "001115511100",
      "011222222110",
      "012225522210",
      "011222222110",
      "001111111100"
    )
  },
  {
    name: "Amethyst crystal",
    subtitle: "Faceted violet quartz spires rise from a dark slate stone base.",
    hard: true,
    colors: [
      { name: "Amethyst", hex: "#8b63a6", clueInk: "#fffaf8" },
      { name: "Lilac facet", hex: "#c4a6d9", clueInk: "#443252" },
      { name: "Crystal shine", hex: "#efe3f7", clueInk: "#4e3d59" },
      { name: "Slate stone", hex: "#575b66", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000003100000",
      "000032110000",
      "000022110000",
      "003122110310",
      "032122113210",
      "022122112210",
      "022122112210",
      "022122112210",
      "004444444400",
      "044444444440",
      "444444444444",
      "044444444440"
    )
  },
  {
    name: "Peacock feather",
    subtitle: "An iridescent sapphire-and-gold eye shimmers inside emerald feather plumes.",
    hard: true,
    colors: [
      { name: "Fringe emerald", hex: "#58946e", clueInk: "#fffaf8" },
      { name: "Teal halo", hex: "#62a8ab", clueInk: "#fffaf8" },
      { name: "Gold ring", hex: "#edc058", clueInk: "#594216" },
      { name: "Sapphire eye", hex: "#3d598a", clueInk: "#fffaf8" },
      { name: "Quill stem", hex: "#d9c89e", clueInk: "#4f4631" }
    ],
    solution: picture(
      "000011110000",
      "001122221100",
      "011223322110",
      "012234432210",
      "112344443211",
      "112344443211",
      "012234432210",
      "011223322110",
      "001125521100",
      "000115511000",
      "000005500000",
      "000005500000"
    )
  },
  {
    name: "Friendly bronto",
    subtitle: "A gentle long-necked dinosaur strolls past a leafy prehistoric fern.",
    colors: [
      { name: "Dino sage", hex: "#71a375", clueInk: "#fffaf8" },
      { name: "Spot mint", hex: "#a8d19b", clueInk: "#2b4723" },
      { name: "Eye ink", hex: "#3b3a42", clueInk: "#fffaf8" },
      { name: "Fern green", hex: "#4f7d55", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000001110",
      "000000011311",
      "000000011110",
      "000000011000",
      "000000011000",
      "001111111000",
      "011211211000",
      "111111111000",
      "101111110000",
      "001100110040",
      "001100110444",
      "444444444444"
    )
  },
  {
    name: "Pastel ferris wheel",
    subtitle: "Colorful passenger cabins turn smoothly around a tall carnival wheel.",
    hard: true,
    colors: [
      { name: "Wheel cream", hex: "#f2e5ce", clueInk: "#544937" },
      { name: "Cabin coral", hex: "#e0756e", clueInk: "#fffaf8" },
      { name: "Cabin sky", hex: "#6ea6bd", clueInk: "#fffaf8" },
      { name: "Cabin gold", hex: "#f0c059", clueInk: "#594216" },
      { name: "Stand slate", hex: "#576475", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000002200000",
      "000112211000",
      "033101101440",
      "033011110440",
      "011115511110",
      "010015510010",
      "044011110330",
      "044105501330",
      "000152251000",
      "000552255000",
      "005500005500",
      "555555555555"
    )
  }
];
