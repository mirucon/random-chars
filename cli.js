const program = require('commander')

const pbcopy = data => {
  const proc = require('child_process').spawn('pbcopy')
  proc.stdin.write(data)
  proc.stdin.end()
}

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
  const charArr = []

  for (const c of character) {
    charArr.push(c)
  }

  let chars = ''
  ;[...Array(parseInt(num))].map((i, _) => {
    const rand = Math.floor(Math.random() * character.length)
    chars += charArr[rand]
  })

  console.log(chars)
  pbcopy(chars)
}

program
  .version('1.0.0')
  .option('-n, --num <num>', 'Number of characters')
  .option('-k, --kind <kind>', 'Kind of characters')
  .action((dir, cmd) => {
    const num = cmd.num ? cmd.num : 16
    const kind = cmd.kind ? cmd.kind : 'both'
    generateChar(num, kind)
  })

program.parse(process.argv)
