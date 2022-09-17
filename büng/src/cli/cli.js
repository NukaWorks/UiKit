const { Command } = require('commander')
const { version } = require('../../package.json')
const { addComponent, deleteComponent } = require('../utils/CompntMgmt')
const program = new Command()

function cli () {
  program
    .name('büng')
    .description('Büng, the component maker.')
    .version(version)

  program.command('add <name> <category>').description('Add a component')
    .action((name, category) => {
      addComponent(name, category)
    })
  program.command('delete <name> <category>').description('Delete a component')
    .action((name, category) => {
      deleteComponent(name, category)
    })

  program.parse()
}

module.exports = { cli }
