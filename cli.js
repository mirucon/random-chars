#!/usr/bin/env node

import { parseArgs } from 'node:util'
import clipboardy from 'clipboardy'
import { generateChar } from './lib.js'

const { values, positionals } = parseArgs({
  options: {
    kind: {
      type: 'string',
      short: 'k',
      default: 'both',
    },
    version: {
      type: 'boolean',
      short: 'V',
    },
    help: {
      type: 'boolean',
      short: 'h',
    },
  },
  allowPositionals: true,
})

if (values.help) {
  console.log(`Usage: random-chars [options] [num]

Arguments:
  num                number of characters (default: 16)

Options:
  -V, --version      output the version number
  -k, --kind <kind>  Kind of characters (default: "both")
  -h, --help         display help for command`)
  process.exit(0)
}

if (values.version) {
  console.log('1.0.0')
  process.exit(0)
}

const num = positionals[0] ? parseInt(positionals[0], 10) : 16
const kind = values.kind

const chars = generateChar(num, kind)
console.log(chars)
try {
  clipboardy.writeSync(chars)
} catch (error) {
  console.warn(
    'Could not copy to clipboard. Please install xsel or xclip on Linux.',
  )
}
