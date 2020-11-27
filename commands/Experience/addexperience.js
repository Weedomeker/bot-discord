const { MESSAGES } = require("../../util/constants");
module.exports.run = (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const expToAdd = parseInt(args[1]);

  if (isNaN(expToAdd)) return message.reply("Nombre uniquement !");
  client.addExp(client, user, expToAdd);
  message.channel.send(`Ajout de ${expToAdd} xp à ${user}.`);
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.ADDEXPERIENCE;
