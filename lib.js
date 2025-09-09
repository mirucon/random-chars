export const generateChar = (num, kind) => {
  const hiragana =
    'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろわ'
  const katakana =
    'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロワ'

  let character
  if (kind === 'hiragana' || kind === 'h') {
    character = hiragana
  } else if (kind === 'katakana' || kind === 'k') {
    character = katakana
  } else {
    character = hiragana + katakana
  }

  let chars = ''
  for (let i = 0; i < num; i++) {
    const rand = Math.floor(Math.random() * character.length)
    chars += character[rand]
  }
  return chars
}
