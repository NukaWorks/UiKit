const fs = require('fs')
const chalk = require('chalk')
const {
  getBungFile,
  getTemplateDir
} = require('./Config')
const { stringUpperFirst } = require('@zerodep/string')
const bungDirs = new Map()
const path = require('path')

function makeComponent (name, category) {
  checkProject(name, category).then(files => {
    files.forEach(file => {
      patchAndCopy(file, name, category, searchCategoryDir(category))
    })
  }).catch(err => {
    console.error(err)
  })
}

function makeStory (name, category) {
  checkProject(name, category).then(files => {
    files.forEach(file => {
      patchAndCopy(file, name, category, searchCategoryDir(category), /.*(.stories.*)$/) // Only copy stories files
    })
  }).catch(err => {
    console.error(err)
  })
}

async function checkProject (name, category) {
  const srcCategory = searchCategoryDir(category)

  return new Promise((resolve, reject) => {
    if (srcCategory) {
      if (srcCategory.length > 1) {
        reject(new Error(chalk.red(`${chalk.bold('[config]')} Category ${chalk.bold(category)} has more than one directory`)))
      } else {
        console.log(chalk.green(`${chalk.bold('[config]')} Found ${chalk.bold(category)} for ${chalk.bold(bungDirs.get(category))}`))

        name = stringUpperFirst(name)
        category = stringUpperFirst(category)

        return Array.from(srcCategory).forEach(projectFiles => {
          if (!fs.existsSync(projectFiles)) fs.mkdirSync(projectFiles) // Create category folder

          const templateFiles = Array.from(fs.readdirSync(getTemplateDir))
          if (templateFiles.length <= 0) reject(new Error(chalk.red(`${chalk.bold('[bung]')} ${chalk.bold(name)} No template file available.`)))
          resolve(templateFiles)
        })
      }
    } else {
      reject(new Error(chalk.red(`${chalk.bold('[config]')} Category ${chalk.bold(category)} not found`)
      ))
    }
  })
}

function patchAndCopy (file, name, category, projectFiles, regex) {
  name = stringUpperFirst(name) // Capitalize name
  const patch = regexFile(path.join(getTemplateDir, file), name, category) // Patch the file

  if (!regex || file.match(regex)) {
    file = file.replace(/test/ig, stringUpperFirst(name)) // Rename file
    if (fs.existsSync(path.join(projectFiles[0], file))) throw new Error(chalk.red(`${chalk.bold('[project]')} ${chalk.bold(name)} already exists on ${chalk.bold(category)}`))
    console.log(chalk.cyan(`${chalk.bold('[project]')} Making a new element on ${chalk.bold(category)}... (${chalk.bold(file)})`))

    fs.writeFileSync(path.join(projectFiles[0], file), Buffer.from(patch, 'utf8')) // Copy story files
  }
}

function searchCategoryDir (category) {
  Object.entries(getBungFile.dirs).forEach(dir => {
    if (!bungDirs.has(category)) bungDirs.set(dir[0], dir[1])
  })

  if (bungDirs.has(category)) {
    return bungDirs.get(category)
  } else {
    return false
  }
}

function regexFile (file, name, category) {
  let dataFile
  try {
    dataFile = fs.readFileSync(file, 'utf8')
  } catch (err) {
    console.error(err)
  }

  let patchedFile = dataFile
  patchedFile = patchedFile.replaceAll(/test/ig, name)
  patchedFile = patchedFile.replaceAll(/CATEGORY/ig, category)

  return patchedFile
}

module.exports = {
  makeComponent,
  makeStory
}
