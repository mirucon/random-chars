import { describe, it, expect } from 'vitest'
import { generateChar } from './lib.js'

const hiragana =
  'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろわ'
const katakana =
  'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロワ'

describe('generateChar', () => {
  it('should generate the specified number of characters', () => {
    expect(generateChar(10, 'both')).toHaveLength(10)
    expect(generateChar(5, 'hiragana')).toHaveLength(5)
    expect(generateChar(1, 'katakana')).toHaveLength(1)
  })

  it('should generate only hiragana characters', () => {
    const chars = generateChar(100, 'hiragana')
    for (const char of chars) {
      expect(hiragana).toContain(char)
    }
  })

  it('should generate only katakana characters', () => {
    const chars = generateChar(100, 'katakana')
    for (const char of chars) {
      expect(katakana).toContain(char)
    }
  })

  it('should generate a mix of hiragana and katakana characters', () => {
    const chars = generateChar(100, 'both')
    let hasHiragana = false
    let hasKatakana = false
    for (const char of chars) {
      if (hiragana.includes(char)) {
        hasHiragana = true
      }
      if (katakana.includes(char)) {
        hasKatakana = true
      }
    }
    expect(hasHiragana).toBe(true)
    expect(hasKatakana).toBe(true)
  })

  it('should handle short aliases for kind', () => {
    const hiraganaChars = generateChar(100, 'h')
    for (const char of hiraganaChars) {
      expect(hiragana).toContain(char)
    }

    const katakanaChars = generateChar(100, 'k')
    for (const char of katakanaChars) {
      expect(katakana).toContain(char)
    }
  })
})
