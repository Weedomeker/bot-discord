module.exports = (client, messageReaction, user) => {
  console.log("000000");
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '727579420042461235');
  console.log("first");
  if (member.user.bot) return;
  console.log("Avant if");
  if (["Normal", "HardSAUVE", "hardEXPLOVIT", "Hell"].includes(emoji) && message.channel.id === channel.id) {
    console.log("dans if");
    switch (emoji) {
      case "Normal":
        message.channel.send('Reaction event');
        break;
        case "HardSAUVE":
        message.channel.send('Reaction event');
        break;
        case "hardEXPLOVIT":
        message.channel.send('Reaction event');
        break;
        case "Hell":
        message.channel.send('Reaction event');
        break;

    };
  };
};

module.exports.help = {
  name: 'msgReact',
  description: 'React Tarta',
  args: false,
  usage: ''
};