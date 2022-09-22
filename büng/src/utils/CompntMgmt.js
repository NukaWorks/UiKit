const fs = require('fs')
const chalk = require('chalk')
const { getBungFile, getTemplDir } = require('./Config')
const { stringUpperFirst } = require('@zerodep/string')
const { copySync, removeSync } = require('fs-extra')
const bungDirs = new Map()
const path = require('path')

function addComponent (name, category) {
  const dirs = searchCategory(category)
  if (dirs) {
    name = stringUpperFirst(name)
    category = stringUpperFirst(category)

    Array.from(dirs).forEach(dir => {
      if (!fs.existsSync(dir + `/${name}`)) {
        console.log(chalk.cyan(`${chalk.bold('[project]')} Creating ${chalk.bold(name)} on ${chalk.bold(category)}...`))
        fs.mkdirSync(dir + `/${name}`, { recursive: true })
        copySync(getTemplDir + '/jsx/', dir + `/${name}`)
        copySync(getTemplDir + '/scss/', dir + `/${name}`)

        fs.readdir(dir + `/${name}`, (err, files) => {
          if (err) throw err
          files.forEach(file => {
            file = path.join(dir + `/${name}`, file)
            regexFile(file, name, category)
          })
        })
      } else {
        console.log(chalk.red(`${chalk.bold('[project]')} ${chalk.bold(name)} already exists on ${chalk.bold(category)}`))
      }
    })
  }
}

function deleteComponent (name, category) {
  const dirs = searchCategory(category)
  if (dirs) {
    name = stringUpperFirst(name)
    category = stringUpperFirst(category)

    Array.from(dirs).forEach(dir => {
      if (fs.existsSync(dir + `/${name}`)) {
        console.log(chalk.red(`${chalk.bold('[project]')} Deleting ${chalk.bold(name)} on ${chalk.bold(category)}...`))
        removeSync(dir + `/${name}`)
      } else {
        console.log(chalk.red(`${chalk.bold('[project]')} Component ${chalk.bold(name)} not found on ${chalk.bold(category)}`))
      }
    })
  }
}

function searchCategory (category) {
  Object.entries(getBungFile.dirs).forEach(dir => {
    if (!bungDirs.has(category)) bungDirs.set(dir[0], dir[1])
  })

  if (bungDirs.has(category)) {
    console.log(chalk.green(`${chalk.bold('[config]')} Found ${chalk.bold(category)} for ${chalk.bold(bungDirs.get(category))}`))
    return bungDirs.get(category)
  } else {
    console.error(chalk.red(`${chalk.bold('[config]')} Category ${chalk.bold(category)} not found`))
    return false
  }
}

function regexFile (file, name, category) {
  try {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err
      let patchedFile = data

      patchedFile = patchedFile.replaceAll(/test/ig, name)
      patchedFile = patchedFile.replaceAll(/CATEGORY/g, category)

      fs.writeFile(file, patchedFile, 'utf8', (err) => {
        if (err) throw err
        fs.renameSync(file, file.replace(/test/ig, name))
      })
    })
  } catch (e) {
    console.error(e)
  }
}

module.exports = { addComponent, deleteComponent }
