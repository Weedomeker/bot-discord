const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#cbffff")
    // .setDescription()
    .addField(`**${args.join(" ")}**`,
      `\n\n
    Oui - 👍    Non - 👎    Balek - 👀
      `)
    .setTimestamp()
    .setFooter("Réagissez au réactions ci dessous.");

  const sondage = await message.channel.send(embed);
  await sondage.react("👍");
  await sondage.react("👎");
  await sondage.react("👀");
};

module.exports.help = MESSAGES.COMMANDS.MISC.SONDAGE;
