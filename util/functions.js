/* eslint-disable object-curly-spacing */
/* eslint-disable quote-props */
const mangoose = require("mongoose");
const { Guild, User, Txt } = require("../models/index");

module.exports = client => {
  // GUILD
  client.createGuild = async guild => {
    const merged = Object.assign({ _id: mangoose.Types.ObjectId() }, guild);
    const createGuild = await new Guild(merged);
    createGuild
      .save()
      .then(g => console.log(`Nouveau serveur -> ${g.guildName}`));
  };

  client.getGuild = async guild => {
    const data = await Guild.findOne({ guildID: guild.id });
    if (data) return data;
    return client.config.DEFAULTSETTINGS;
  };

  client.updateGuild = async (guild, settings) => {
    let data = await client.getGuild(guild);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  // USER
  client.createUser = async user => {
    const merged = Object.assign({ _id: mangoose.Types.ObjectId() }, user);
    const createUser = await new User(merged);
    createUser
      .save()
      .then(u => console.log(`Nouvel utilisateur -> ${u.username}`));
  };

  client.getUser = async user => {
    const data = await User.findOne({ userID: user.id });
    if (data) return data;
  };

  client.getUsers = async guild => {
    const data = await User.find({ guildID: guild.id });
    if (data) return data;
  };

  client.updateUser = async (user, settings) => {
    let data = await client.getUser(user);
    if (typeof data !== "object") data = {};
    for (const key in settings) {
      if (data[key] !== settings[key]) data[key] = settings[key];
    }
    return data.updateOne(settings);
  };

  // EXP
  client.addExp = async (client, member, exp) => {
    const userToUpdate = await client.getUser(member);
    const updatedExp = userToUpdate.experience + exp;
    await client.updateUser(member, { experience: updatedExp });
  };

  client.removeExp = async (client, member, exp) => {
    const userToUpdate = await client.getUser(member);
    const updatedExp = userToUpdate.experience - exp;
    await client.updateUser(member, { experience: updatedExp });
  };
};
