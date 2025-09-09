#!/usr/bin/env node

import { Command } from 'commander'
import clipboardy from 'clipboardy'
import { generateChar } from './lib.js'

const program = new Command()

program
  .version('1.0.0')
  .argument('[num]', 'number of characters', '16')
  .option('-k, --kind <kind>', 'Kind of characters', 'both')
  .action((num, options) => {
    const chars = generateChar(parseInt(num, 10), options.kind)
    console.log(chars)
    try {
      clipboardy.writeSync(chars)
    } catch (error) {
      console.warn(
        'Could not copy to clipboard. Please install xsel or xclip on Linux.',
      )
    }
  })

program.parse(process.argv)
