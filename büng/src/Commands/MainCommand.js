const { Command } = require('commander')
const { version } = require('../../package.json')
const { addComponent } = require('../Utils/CompntMgmt')
const program = new Command()

function mainCommand (argv) {
  program
    .name('büng')
    .description('Büng, the component maker.')
    .version(version)

  program.command('add <name> <category>').description('Add a component')
    .action((name, category) => {
      addComponent(name, category)
    })

  program.parse(argv)
}

module.exports = { mainCommand }
