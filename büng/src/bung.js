const { mainCommand } = require("./Commands/MainCommand");

function init() {
  mainCommand(process.argv);
}

init();
