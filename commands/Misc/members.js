const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message) => {

  message.guild.members.fetch().then(fetchAll => {
    const member = fetchAll.map(member => member).sort((userA, userB) => userA.joinedTimestamp - userB.joinedTimestamp);
    const user = member.map(usr => usr.user.username).join("\n");
    const embed = new MessageEmbed()
      .setColor("#ee5500")
      .addField("Membres de la guilde:", `${user}`, true)
      .setTimestamp()
      .setFooter(`${fetchAll.size} membres sur le serveur.`);
    message.channel.send(embed);
  });
};

module.exports.help = MESSAGES.COMMANDS.MISC.MEMBERS;
