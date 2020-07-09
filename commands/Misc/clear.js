const { MessageEmbed } = require ("discord.js");

module.exports.run = async (client, message, args) => {

  const limit = (args[0]);

  if (isNaN(limit) || (limit < 1 || limit > 100))
    return message.reply (`${message.author} uniquement un nombre entre 1 et 100 !`);
    
    const messages = await message.channel.messages.fetch({
      limit: Math.min(limit, 100),
      before: message.id,
    });
    
    await message.channel.bulkDelete(messages);

    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#0C82FF")
    .setDescription(`**Action:** Suppression msgs.\n${limit} messages supprimés.\n**Channel:**${message.channel}`)
    .setTimestamp()
    
    client.channels.cache.get('727596239465611296').send(embed);
};

module.exports.help = {
  name: 'clear',
  aliases: ['clear', 'cls', 'del'],
  description: 'Suppression des messages',
  permissions: true,
  cooldown: 3,
  args: true,
  usage: '<nbr (1-100)>'
};