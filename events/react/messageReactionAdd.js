const { CHANNELS } = require("../../util/constants");

module.exports = async (client, messageReaction, user) => {
  const { message } = messageReaction;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === CHANNELS.TARTA.id);
  const nEmo = message.guild.emojis.cache.get("728730210547269736");
  const hardEmo = message.guild.emojis.cache.get("728723168545603675");
  const hellEmo = message.guild.emojis.cache.get("728723184278306849");

  if (messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }


  if (member.user.bot) return;

  if (["Normal", "Hard", "Hell"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
    case "Normal":
      message.channel.send(`${member}: attaque en cours... ${nEmo}`).then(async msg => {
        await msg.react("✅");
      });
      break;
    case "Hard":
      message.channel.send(`${member}: attaque en cours... ${hardEmo}`).then(async msg => {
        await msg.react("✅");
      });
      break;
    case "Hell":
      message.channel.send(`${member}: attaque en cours... ${hellEmo}`).then(async msg => {
        await msg.react("✅");
      });
      break;
    }
  }
  if (emoji === "✅") await message.edit(`~~${message.content}~~`);
};
