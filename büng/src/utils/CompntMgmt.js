const fs = require('fs')
const YAML = require('yaml')
const chalk = require('chalk')
const { getBungFile, getTemplDir } = require('./Config')
const { stringUpperFirst } = require('@zerodep/string')

function addComponent (name, category) {
  console.log(searchCategory(category))
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
    if (dir[0].includes(category)) {
      console.log(dir[1])
      return true
    } else {
      console.error(chalk.red(`Category ${category} not found`))
      return false
    }
  })
}

module.exports = { addComponent, deleteComponent }
