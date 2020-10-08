const { MessageEmbed, MessageAttachment } = require("discord.js");
const slipImg = new MessageAttachment("./assets/img/slip.jpg");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  message.channel.send(slipImg)
};

module.exports.help = MESSAGES.COMMANDS.MISC.SLIP;
