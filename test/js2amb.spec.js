const assert = require('assert')

const js2amb = require('../src')
const fs = require('fs')
const FIXTURES_PATH = 'test/fixtures/js/'
const normalizeAmbientsCode = code => code.replace(/\r?\n\s*|\r\s*/g, '').replace(/\s+/g, ' ')

describe('JS Compiler', function () {
  it('compiles to ambient syntax', () => {
    const fixtures = fs.readdirSync(FIXTURES_PATH)
    const fixturePairs = fixtures
        .filter(item => item.endsWith('.ambient'))
        .map((filename, index) => {
          return {
            ambient: filename,
            js: fixtures[index * 2 + 1]
          }
        })

    fixturePairs.forEach((filePair) => {
      console.log(`Compiling: ${FIXTURES_PATH + filePair.js}`)
      const javascript = fs.readFileSync(FIXTURES_PATH + filePair.js).toString().trim()
      const expectedAmbient = normalizeAmbientsCode(fs.readFileSync(FIXTURES_PATH + filePair.ambient).toString())
      assert.strictEqual(
          js2amb(javascript),
          expectedAmbient,
          `Compiling ${filePair.js} didn't result in ${filePair.ambient}`
      )

    })
  })
})
