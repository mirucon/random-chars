import { randomInt } from 'node:crypto'

export const generateChar = (num, kind) => {
  const hiragana =
    'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろわ'
  const katakana =
    'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロワ'

  let characters
  if (kind === 'hiragana' || kind === 'h') {
    characters = hiragana
  } else if (kind === 'katakana' || kind === 'k') {
    characters = katakana
  } else {
    characters = hiragana + katakana
  }

  return Array.from({ length: num }, () =>
    characters.charAt(randomInt(0, characters.length)),
  ).join('')
}
