const { MessageEmbed, MessageAttachment } = require("discord.js");
const keskidiImg = new MessageAttachment("./assets/img/keskidi.png");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  message.channel.send(keskidiImg);
};

module.exports.help = MESSAGES.COMMANDS.MISC.KESKIDI;
