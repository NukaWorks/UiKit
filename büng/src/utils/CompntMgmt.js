const fs = require('fs')
const YAML = require('yaml')
const chalk = require('chalk')
const { getBungFile, getTemplDir } = require('./Config')
const { stringUpperFirst } = require('@zerodep/string')
const { copySync, removeSync } = require('fs-extra')
const bungDirs = new Map()

function addComponent (name, category) {
  const dirs = searchCategory(category)
  if (dirs) {
    name = stringUpperFirst(name)
    category = stringUpperFirst(category)

    console.log(chalk.cyan(`Creating ${chalk.bold(name)} on ${chalk.bold(category)}...`))

    Array.from(dirs).forEach(dir => {
      if (!fs.existsSync(dir + `/${name}`)) {
        fs.mkdirSync(dir + `/${name}`, { recursive: true })
        copySync(getTemplDir + '/jsx/', dir + `/${name}`)
        copySync(getTemplDir + '/scss/', dir + `/${name}`)
      }
    })
  }
}

function deleteComponent (name, category) {
  const dirs = searchCategory(category)
  if (dirs) {
    name = stringUpperFirst(name)
    category = stringUpperFirst(category)

    console.log(chalk.red(`Deleting ${chalk.bold(name)} on ${chalk.bold(category)}...`))

    Array.from(dirs).forEach(dir => {
      if (fs.existsSync(dir + `/${name}`)) {
        removeSync(dir + `/${name}`)
      }
    })
  }
}

function searchCategory (category) {
  Object.entries(getBungFile.dirs).forEach(dir => {
    if (!bungDirs.has(category)) bungDirs.set(dir[0], dir[1])
  })

  if (bungDirs.has(category)) {
    console.log(chalk.green(`Found ${chalk.bold(category)} for ${chalk.bold(bungDirs.get(category))}`))
    return bungDirs.get(category)
  } else {
    console.error(chalk.red(`Category ${chalk.bold(category)} not found`))
    return false
  }
}

module.exports = { addComponent, deleteComponent }
