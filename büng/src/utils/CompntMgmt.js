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

function searchCategory (category) {
  Object.entries(getBungFile.dirs).forEach(dir => {
    if (!bungDirs.has(category)) bungDirs.set(dir[0], dir[1])
  })

  if (bungDirs.has(category)) {
    console.log(chalk.green(`Found ${chalk.bold(category)} on ${chalk.bold(bungDirs.get(category))}`))
    return bungDirs.get(category)
  } else {
    console.error(chalk.red(`Category ${chalk.bold(category)} not found`))
  }
}

module.exports = { addComponent, deleteComponent }
