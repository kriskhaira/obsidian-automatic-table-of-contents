const path = require('path')

module.exports = async () => {
  return {
    testMatch: [path.join(__dirname, '**/*.test.js')],
    testTimeout: 1000,
  }
}