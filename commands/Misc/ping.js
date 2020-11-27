const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message) => {
  const msg = await message.channel.send("Ping...");
  msg.edit(
    `Bot ping: \`${msg.createdTimestamp - message.createdTimestamp}ms\`
Api ping: \`${Math.round(client.ws.ping)} ms\``
  );
};

module.exports.help = MESSAGES.COMMANDS.MISC.PING;
