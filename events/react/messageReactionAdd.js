/* eslint-disable object-curly-spacing */
/* eslint-disable quote-props */
const { CHANNELS } = require("../../util/constants");
const { User } = require("../../models/index");

module.exports = async (client, messageReaction, user) => {
  const { message } = messageReaction;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === CHANNELS.TARTA.id);
  const nEmo = message.guild.emojis.cache.get("728730210547269736");
  const hardEmo = message.guild.emojis.cache.get("728723168545603675");
  const hellEmo = message.guild.emojis.cache.get("728723184278306849");
  const lta = message.guild.emojis.cache.get("777604674685370369");
  const ltb = message.guild.emojis.cache.get("777604674991030282");
  const ltc = message.guild.emojis.cache.get("777604675020521482");
  const ltd = message.guild.emojis.cache.get("777604674986835969");
  const lte = message.guild.emojis.cache.get("777604674823389215");

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
  if (emoji === "✅" && message.channel.id === channel.id) {
    await message.edit(`~~${message.content}~~`);
    /* // recup id user
    const usrFind = await User.findOne({ userID: user.id });
    // stock user lanternes db
    const usrLant = usrFind.lanternes;
    // update db
    await User.updateOne({userID: user.id}, {lanternes: usrLant - 1});
    // bloque à 0 mini.
    if (usrLant <= 0) {
      await User.updateOne({userID: user.id}, {lanternes: 0});
    }
    console.log(`${user.username}: update db ${usrLant - 1} lanternes restantes.`);
    if (usrLant === 5) {
      await message.edit(`~~${message.content}~~`);
      await message.react(lta);
      await message.react(ltb);
      await message.react(ltc);
      await message.react(ltd);
    }
    if (usrLant === 4) {
      await message.edit(`~~${message.content}~~`);
      await message.react(lta);
      await message.react(ltb);
      await message.react(ltc);
    }
    if (usrLant === 3) {
      await message.edit(`~~${message.content}~~`);
      await message.react(lta);
      await message.react(ltb);
    }
    if (usrLant === 2) {
      await message.edit(`~~${message.content}~~`);
      await message.react(lta);
      await message.channel.send(`${member}: ***Dernière lanterne ! À garder pour Tarta !***`);
    }
    if (usrLant <= 1) {
      await message.edit(`~~${message.content}~~`);
      await message.channel.send(`${member}: Tu n'as plus de lanternes dispo...`);
    } */
  }
};
