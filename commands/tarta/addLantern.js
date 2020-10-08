const { MESSAGES } = require("../../util/constants");
module.exports.run = (client, message, args) => {

  const user = message.guild.member(message.mentions.users.first());
  client.addLantern(client, user);
  message.channel.send(`1 lanterne de plus pour ${user}.`);

};

module.exports.help = MESSAGES.COMMANDS.TARTA.ADDLANTERN;
