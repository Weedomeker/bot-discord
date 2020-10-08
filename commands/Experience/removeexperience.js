const { MESSAGES } = require("../../util/constants");
module.exports.run = (client, message, args) => {

  const user = message.guild.member(message.mentions.users.first());
  const expToRemove = parseInt(args[1]);
  
  if (isNaN(expToRemove)) return message.reply("Nombre uniquement !");
  client.removeExp(client, user, expToRemove);
  message.channel.send(`Retire ${expToRemove} xp à ${user}.`);

};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.REMOVEEXPERIENCE;
