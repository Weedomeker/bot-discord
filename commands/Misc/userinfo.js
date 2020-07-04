module.exports.run = (client, message, args) => {
  const user_mention = message.mentions.users.first();
  message.channel.send(`Tag de ${user_mention.tag}.`)
};

module.exports.help = {
  name: 'userinfo',
  description: 'Info de l\'utilisateur.',
  args: true,
  usage: '<@userinfo>'
};