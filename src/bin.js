#!/usr/bin/env node

const fs = require('fs')
const js2amb = require('./index')
const mime = require('mime-types')
const argv = require('yargs')
  .usage('$0 file [-o output]')
  .argv

// Register new MIME type for .ambient files
mime.extensions['text/ambients'] = ['ambient']
mime.types.ambient = 'text/ambients'

const filename = argv._[0]
let results

switch (mime.lookup(filename)) {
  case 'application/javascript':
    var js = fs.readFileSync(filename).toString().trim()
    results = js2amb(js)
    break
  default:
    throw new Error('File type not recognized')
}

process.stdout.write(results, null, 2)
