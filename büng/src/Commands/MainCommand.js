const { Command } = require("commander");
const { version } = require("../../package.json");
const { makeComponent, makeStory } = require("../Utils/CompntMgmt");
const program = new Command();

function mainCommand(argv) {
  program
    .name("büng")
    .description("Büng, the component maker.")
    .version(version);

  program
    .command("make-component <name> <category>")
    .description("Make a new component with story.")
    .action((name, category) => {
      makeComponent(name, category);
    });

  program
    .command("make-story <name> <category>")
    .description("Make a new story.")
    .action((name, category) => {
      makeStory(name, category);
    });

  program.parse(argv);
}

module.exports = { mainCommand };
