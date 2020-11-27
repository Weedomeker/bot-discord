const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message) => {
  const embed = new MessageEmbed()
    .setTitle("Lanternes restantes des membres")
    .setColor("#FF680C")
    .setTimestamp();

  await client.getUsers(message.guild).then(p => {
    p.sort((a, b) => a.lanternes > b.lanternes ? 1 : -1).splice(0, 50)
      .forEach(e => {
        embed.addField(e.username, `${e.lanternes} lanternes dispo.`);
      });
  });


  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.TARTA.LANTERNS;
