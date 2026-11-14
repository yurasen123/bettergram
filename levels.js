const picture = (...rows) => rows.map(row => Array.from(row, Number));

window.levels = [
  {
    name: "A little love",
    subtitle: "Fill the twin lobes and taper to the point to reveal a heart.",
    colors: [
      { name: "Blush pink", hex: "#efb3bf", clueInk: "#71414c" },
      { name: "Berry red", hex: "#d67583", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "001110011100",
      "011111111110",
      "111111111111",
      "111222222111",
      "112222222211",
      "012222222210",
      "001222222100",
      "000122221000",
      "000012210000",
      "000001100000",
      "000000000000",
      "000000000000"
    )
  },
  {
    name: "Sleepy kitty",
    subtitle: "Find the ginger face, pointed ears, bright eyes, and whiskers.",
    colors: [
      { name: "Ginger", hex: "#dc9869", clueInk: "#583625" },
      { name: "Cream", hex: "#f3d9ac", clueInk: "#594832" },
      { name: "Cocoa", hex: "#67565a", clueInk: "#fffaf8" }
    ],
    solution: [
      [0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0],
      [0, 0, 0, 3, 1, 1, 1, 1, 3, 0, 0, 0],
      [0, 0, 3, 3, 1, 1, 1, 1, 3, 3, 0, 0],
      [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
      [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      [3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3],
      [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3],
      [3, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 3],
      [3, 1, 1, 1, 2, 3, 3, 2, 1, 1, 1, 3],
      [3, 3, 3, 1, 2, 2, 2, 2, 1, 3, 3, 3],
      [0, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 0],
      [0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0]
    ]
  },
  {
    name: "Sunny sunflower",
    subtitle: "Follow the gold petals around the warm brown center.",
    colors: [
      { name: "Sunshine", hex: "#efb94d", clueInk: "#62491d" },
      { name: "Honey brown", hex: "#8b5a3c", clueInk: "#fffaf8" },
      { name: "Leaf green", hex: "#658b5a", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000001100000",
      "000011110000",
      "000111111000",
      "001111111100",
      "011112211110",
      "111122221111",
      "011112211110",
      "001111111100",
      "000011110000",
      "000003300000",
      "000033330000",
      "003330333000"
    )
  },
  {
    name: "Little fish",
    subtitle: "Find the fish swimming through its blue waves.",
    colors: [
      { name: "Coral", hex: "#ed987c", clueInk: "#633b31" },
      { name: "Lagoon", hex: "#6ca9b5", clueInk: "#183f48" },
      { name: "Deep blue", hex: "#344d66", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000000000",
      "000000000000",
      "001100000000",
      "011110000000",
      "001111111100",
      "000112222110",
      "000112222310",
      "000112222110",
      "001111111100",
      "011110000000",
      "001100000000",
      "000000000000"
    )
  },
  {
    name: "Toadstool",
    subtitle: "A spotted red cap is hiding a tiny woodland mushroom.",
    colors: [
      { name: "Poppy", hex: "#d86e68", clueInk: "#fffaf8" },
      { name: "Oat", hex: "#dfc49a", clueInk: "#514333" }
    ],
    solution: picture(
      "000001100000",
      "000011110000",
      "001111111100",
      "011211211110",
      "111111111111",
      "112111112111",
      "111111111111",
      "000111111000",
      "000122221000",
      "000122221000",
      "000122221000",
      "000011110000"
    )
  },
  {
    name: "Wise little owl",
    subtitle: "A few more clues to untangle on this nighttime visitor.",
    hard: true,
    colors: [
      { name: "Chestnut", hex: "#795044", clueInk: "#fffaf8" },
      { name: "Feather cream", hex: "#e9d8b8", clueInk: "#514333" },
      { name: "Amber", hex: "#d99a45", clueInk: "#4e3515" }
    ],
    solution: picture(
      "000110011000",
      "001111111100",
      "011122221110",
      "112233223311",
      "112313132211",
      "112233223311",
      "112222222211",
      "112222322211",
      "011222222110",
      "001122221100",
      "000111111000",
      "000033330000"
    )
  },
  {
    name: "Sail away",
    subtitle: "Piece together a bright sailboat gliding over calm water.",
    colors: [
      { name: "Sea blue", hex: "#71aabd", clueInk: "#173d48" },
      { name: "Sail red", hex: "#d97870", clueInk: "#fffaf8" },
      { name: "Sail cream", hex: "#f0d7a4", clueInk: "#594832" },
      { name: "Wood", hex: "#87614c", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000004000000",
      "000024300000",
      "000224330000",
      "002224333000",
      "022224333300",
      "000004000000",
      "000004000000",
      "000004000000",
      "000004000000",
      "000444444000",
      "111111111111",
      "001010101000"
    )
  },
  {
    name: "Butterfly garden",
    subtitle: "Match the colorful wings around the butterfly's golden body.",
    colors: [
      { name: "Teal", hex: "#63a99b", clueInk: "#173f38" },
      { name: "Peach", hex: "#e6a18a", clueInk: "#573b32" },
      { name: "Marigold", hex: "#e5bd59", clueInk: "#554317" }
    ],
    solution: picture(
      "000003300000",
      "000013310000",
      "000113311000",
      "001223322100",
      "012223322210",
      "122223322221",
      "122223322221",
      "012223322210",
      "001223322100",
      "000223322000",
      "000133310000",
      "000003300000"
    )
  },
  {
    name: "Moonlit castle",
    subtitle: "Hard: watch the little towers, windows, and doorway carefully.",
    hard: true,
    colors: [
      { name: "Stone", hex: "#8791a2", clueInk: "#fffaf8" },
      { name: "Night blue", hex: "#546d91", clueInk: "#fffaf8" },
      { name: "Flag gold", hex: "#e2b95e", clueInk: "#594717" }
    ],
    solution: picture(
      "300000000003",
      "300000000003",
      "111011011011",
      "111011011011",
      "111111111111",
      "111111111111",
      "111111111111",
      "111111111111",
      "112111211211",
      "111111111111",
      "111111211111",
      "111111211111"
    )
  },
  {
    name: "Fox in the leaves",
    subtitle: "Look for a pointy-eared fox with a cream-colored muzzle.",
    colors: [
      { name: "Fox orange", hex: "#d98555", clueInk: "#55351f" },
      { name: "Muzzle cream", hex: "#f0dfc0", clueInk: "#594832" },
      { name: "Deep brown", hex: "#674944", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "100000000001",
      "110000000011",
      "112000000211",
      "111100001111",
      "111111111111",
      "111311113111",
      "111222222111",
      "112222222211",
      "012222222210",
      "001122221100",
      "000123321000",
      "000011110000"
    )
  },
  {
    name: "Penguin parade",
    subtitle: "A little penguin is ready for a chilly stroll.",
    colors: [
      { name: "Ink", hex: "#45505c", clueInk: "#fffaf8" },
      { name: "Snow", hex: "#f0e9da", clueInk: "#514747" },
      { name: "Tangerine", hex: "#e5a14f", clueInk: "#563b1c" }
    ],
    solution: picture(
      "000011110000",
      "000111111000",
      "001122221100",
      "011212212110",
      "011222222110",
      "011223322110",
      "111222222111",
      "111222222111",
      "011222222110",
      "001222221100",
      "000300003000",
      "000330033000"
    )
  },
  {
    name: "Ladybug",
    subtitle: "Spot the little beetle's dark head and dotted red wings.",
    colors: [
      { name: "Midnight", hex: "#41454e", clueInk: "#fffaf8" },
      { name: "Poppy red", hex: "#df6f70", clueInk: "#572b2c" }
    ],
    solution: picture(
      "000100001000",
      "000111111000",
      "001122221100",
      "011222222110",
      "112122221211",
      "112212212211",
      "112122221211",
      "011222222110",
      "001111111100",
      "001010010100",
      "000000000000",
      "000000000000"
    )
  },
  {
    name: "Up, up, and away",
    subtitle: "Follow the striped balloon down to its little basket.",
    colors: [
      { name: "Berry", hex: "#cf7182", clueInk: "#fffaf8" },
      { name: "Apricot", hex: "#efbd70", clueInk: "#5c421d" },
      { name: "Basket", hex: "#87614c", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000001100000",
      "000111111000",
      "001122221100",
      "011122222110",
      "011222222110",
      "011122222110",
      "001122221100",
      "000111111000",
      "000001100000",
      "000001100000",
      "000033330000",
      "000033330000"
    )
  },
  {
    name: "Berry cupcake",
    subtitle: "Find the cherry on top and the soft cake below the frosting.",
    colors: [
      { name: "Strawberry frosting", hex: "#e69aa7", clueInk: "#583b42" },
      { name: "Vanilla cake", hex: "#e6c99b", clueInk: "#55452e" },
      { name: "Cherry", hex: "#b84f5b", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000003300000",
      "000333330000",
      "000111110000",
      "001111111100",
      "011111111110",
      "111111111111",
      "011111111110",
      "001222222100",
      "001222222100",
      "001212212100",
      "000222222000",
      "000000000000"
    )
  },
  {
    name: "Sunset peaks",
    subtitle: "Hard: trace the overlapping mountain ridges beneath the setting sun.",
    hard: true,
    colors: [
      { name: "Indigo peaks", hex: "#69739a", clueInk: "#fffaf8" },
      { name: "Golden sun", hex: "#e7b45b", clueInk: "#574216" },
      { name: "Dusk ridge", hex: "#83917c", clueInk: "#28352a" }
    ],
    solution: picture(
      "000000000000",
      "000002200000",
      "000022220000",
      "000022220000",
      "000000000000",
      "000001000000",
      "000011100000",
      "000111311000",
      "001113331100",
      "011133333110",
      "111133333111",
      "333333333333"
    )
  },
  {
    name: "Garden turtle",
    subtitle: "A gentle turtle peeks out from its patterned green shell.",
    colors: [
      { name: "Moss", hex: "#688264", clueInk: "#fffaf8" },
      { name: "Fern", hex: "#a6b887", clueInk: "#35412b" },
      { name: "Sand", hex: "#d1a96c", clueInk: "#51402a" },
      { name: "Deep green", hex: "#40583f", clueInk: "#fffaf8" }
    ],
    solution: picture(
      "000000000000",
      "000000001100",
      "000000011410",
      "000011111110",
      "000122221110",
      "001212221111",
      "001222221111",
      "000111111111",
      "000300030300",
      "000330033300",
      "000000000000",
      "000000000000"
    )
  }
];
