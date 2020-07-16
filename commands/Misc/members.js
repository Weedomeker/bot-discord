// @ts-check
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message) => {
  // const lantOn = message.guild.emojis.cache.get("729052532965376021");
  message.guild.members.fetch().then(fetchAll => {
    // const online = fetchAll.filter(m => m.presence.status === "offline");
    const member = fetchAll.map(member => member).sort((userA, userB) => userA.joinedTimestamp - userB.joinedTimestamp);
    const user = member.map(usr => usr.user.username).join("\n");
    const embed = new MessageEmbed()
      .setColor("#ee5500")
      .addField("Membres de la guilde:", `${user}`, true)
      .setTimestamp()
      .setFooter(`${fetchAll.size} membres sur le serveur.`);
    message.channel.send(embed);
    // console.log(fetchAll);
  });
};

module.exports.help = MESSAGES.COMMANDS.MISC.MEMBERS;
