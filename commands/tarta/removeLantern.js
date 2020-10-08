const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message) => {

 
  const user = message.guild.member(message.mentions.users.first());
  client.removeLantern(client, user);
  message.channel.send(`1 lanterne de moins pour ${user}.`);

};

module.exports.help = MESSAGES.COMMANDS.TARTA.REMOVELANTERN;
