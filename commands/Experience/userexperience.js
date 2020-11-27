const { MESSAGES } = require("../../util/constants");
module.exports.run = (client, message, args, settings, dbUser) => {
 message.reply(`Exp: ${dbUser.experience}`);
};

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.USEREXPERIENCE;
