// Defines directories & files
const YAML = require('yaml')
const fs = require('fs')
const bungFile = YAML.parse(fs.readFileSync('./.bung.yml', 'utf-8'))
const templDir = './büng/src/Templates'

module.exports = {
  getTemplateDir: templDir, getBungFile: bungFile
}
