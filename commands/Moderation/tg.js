const { MessageEmbed } = require("discord.js");
const { MESSAGES, CHANNELS } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());

  if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100))
    return message.reply(`${message.author} uniquement un nombre entre 1 et 100 !`);

  const messages = (await message.channel.messages.fetch({
    limit: 100,
    before: message.id
  })).filter(a => a.author.id === user.id).array();

  messages.length = Math.min(args[1], messages.length);

  if (messages.length === 0 || !user) return message.reply("Aucun messages à supprimer, ou ce membre n'existe pas.");

  if (message.length === 1) await messages[0].delete();
  else await message.channel.bulkDelete(messages);

  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#0C82FF")
    .setDescription(`**Action:** Suppression messages membre.\n${args[1]} messages supprimés.\n**Channel:**${message.channel}`)
    .setTimestamp();

  client.channels.cache.get(CHANNELS.LOG.id).send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.TG;
