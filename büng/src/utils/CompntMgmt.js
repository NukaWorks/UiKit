const fs = require('fs')
const YAML = require('yaml')
const chalk = require('chalk')
const { getBungFile, getTemplDir } = require('./Config')

function addComponent (name, category) {
  Object.entries(getBungFile.dirs).forEach(dir => {
    if (dir[0].includes(category)) console.log(dir[1])
  })

  console.log(chalk.cyan(`Creating ${chalk.bold(name)} on ${chalk.bold(category)}...`))
}

function deleteComponent (name, category) {
  console.log(chalk.red(`Deleting ${chalk.bold(name)} on ${chalk.bold(category)}...`))
}

module.exports = { addComponent, deleteComponent }
