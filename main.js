// @ts-check
const { Client, Collection } = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");
const { TOKEN } = require("./config.js");


const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

console.log("══════════════════════════");
loadCommands(client);
console.log("══════════════════════════");
loadEvents(client);
console.log("══════════════════════════");

client.login(TOKEN);


