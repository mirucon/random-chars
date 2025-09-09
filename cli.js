#!/usr/bin/env node

import { Command } from 'commander'
import clipboardy from 'clipboardy'

const program = new Command()

const generateChar = (num, kind) => {
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

  console.log(chars)
  try {
    clipboardy.writeSync(chars)
  } catch (error) {
    console.warn(
      'Could not copy to clipboard. Please install xsel or xclip on Linux.',
    )
  }
}

program
  .version('1.0.0')
  .argument('[num]', 'number of characters', '16')
  .option('-k, --kind <kind>', 'Kind of characters', 'both')
  .action((num, options) => {
    generateChar(parseInt(num, 10), options.kind)
  })

program.parse(process.argv)
