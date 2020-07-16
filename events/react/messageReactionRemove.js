const { CHANNELS } = require("../../util/constants");
module.exports = (client, messageReaction, user) => {
  const { message } = messageReaction;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === "727579420042461235");


  if (member.user.bot) return;

  if (["Normal", "HardSAUVE", "hardEXPLOVIT", "Hell"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
    case "Normal":
      message.channel.send(`${member}: attaque annulée !`);
      client.channels.cache.get(CHANNELS.LOG.id).send(`‼️ ${member.displayName}: attaque annulée !`);
      break;
    case "HardSAUVE":
      message.channel.send(`${member}: attaque annulée !`);
      client.channels.cache.get(CHANNELS.LOG.id).send(`‼️ ${member.displayName}: attaque annulée !`);
      break;
    case "hardEXPLOVIT":
      message.channel.send(`${member}: attaque annulée !`);
      client.channels.cache.get(CHANNELS.LOG.id).send(`‼️ ${member.displayName}: attaque annulée !`);
      break;
    case "Hell":
      message.channel.send(`${member}: attaque annulée !`);
      client.channels.cache.get(CHANNELS.LOG.id).send(`‼️ ${member.displayName}: attaque annulée !`);
      break;
    }
  }
  if (emoji === "✅") message.edit(`${message.content}`);
};
