const { MessageEmbed } = require("discord.js");
const { MESSAGES, CHANNELS } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const nEmo = message.guild.emojis.cache.get("728731272888975430");
  const hEmo = message.guild.emojis.cache.get("728729060087300157");
  const aEmo = message.guild.emojis.cache.get("728729060435296296");
  const hllEmo = message.guild.emojis.cache.get("728729060628496494");
  const txt = args;
  const txtMsg = txt.join(" ");

  const embed = new MessageEmbed()
    .setTitle(`${txtMsg}`)
    .setColor("#0C82FF")
    .addField(
      "Pour info:",
      `
      *${nEmo} = Normal ${hEmo} = Hard
      ${aEmo} = Hard Explosion/VIT limitée ${hllEmo} = Hell\n
      Cliquez sur les réacts en fonction de votre niveau d'attaque. Merci !*
      `
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get(CHANNELS.TARTA.id).send(embed).then(async msg => {
    await msg.react(nEmo);
    await msg.react(hEmo);
    await msg.react(aEmo);
    await msg.react(hllEmo);
  });
};

module.exports.help = MESSAGES.COMMANDS.TARTA.TARTA;
