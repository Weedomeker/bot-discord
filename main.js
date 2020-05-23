const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config.js");
const client = new Client();


client.on("ready", () => {
  console.log("Bot Ready...!");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}gvg`)) msg.channel.send("@everyone, Ce soir GROSSE DEF GvG !!! Merci.");
});

client.login(TOKEN);
