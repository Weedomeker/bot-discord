const { CHANNELS } = require("../../util/constants");

module.exports = (client, messageReaction, user) => {
  const { message } = messageReaction;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === CHANNELS.TARTA.id);
  const nEmo = message.guild.emojis.cache.get("728731272888975430");
  const hEmo = message.guild.emojis.cache.get("728729060087300157");
  const aEmo = message.guild.emojis.cache.get("728729060435296296");
  const hllEmo = message.guild.emojis.cache.get("728729060628496494");


  if (member.user.bot) return;

  if (["Normal", "HardSAUVE", "hardEXPLOVIT", "Hell"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
    case "Normal":
      message.channel.send(`${member}: attaque en cours... ${nEmo}`).then(async msg => {
        await msg.react("✅");
      });
      client.channels.cache.get(CHANNELS.LOG.id).send(`${member.displayName}: attaque en cours... ${nEmo}`);
      break;
    case "HardSAUVE":
      message.channel.send(`${member}: attaque en cours... ${hEmo}`).then(async msg => {
        await msg.react("✅");
      });
      client.channels.cache.get(CHANNELS.LOG.id).send(`${member.displayName}: attaque en cours... ${hEmo}`);
      break;
    case "hardEXPLOVIT":
      message.channel.send(`${member}: attaque en cours... ${aEmo}`).then(async msg => {
        await msg.react("✅");
      });
      client.channels.cache.get(CHANNELS.LOG.id).send(`${member.displayName}: attaque en cours... ${aEmo}`);
      break;
    case "Hell":
      message.channel.send(`${member}: attaque en cours... ${hllEmo}`).then(async msg => {
        await msg.react("✅");
      });
      client.channels.cache.get(CHANNELS.LOG.id).send(`${member.displayName}: attaque en cours... ${hllEmo}`);
      break;
    }
  }
  if (emoji === "✅") message.edit(`~~${message.content}~~`);
};
