const fs = require('fs')
const YAML = require('yaml')
const chalk = require('chalk')
const { getBungFile, getTemplDir } = require('./Config')
const { stringUpperFirst } = require('@zerodep/string')

const bungDirs = new Map()

function addComponent (name, category) {
  searchCategory(category)
  name = stringUpperFirst(name)
  category = stringUpperFirst(category)

  console.log(chalk.cyan(`Creating ${chalk.bold(name)} on ${chalk.bold(category)}...`))
}

function deleteComponent (name, category) {
  console.log(chalk.red(`Deleting ${chalk.bold(name)} on ${chalk.bold(category)}...`))
}

// TODO: CHANGER STRUCTURE DE DATA, DU GENRE VOIR POUR UNE HASHMAP MAIS EN JS xD

function searchCategory (category) {
  Object.entries(getBungFile.dirs).forEach(dir => {
    if (!bungDirs.has(category)) bungDirs.set(dir[0], dir[1])
  })
  console.log(bungDirs)
}

module.exports = { addComponent, deleteComponent }
