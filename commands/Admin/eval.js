/* eslint-disable no-eval */
const { MESSAGES, USERID } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string")
      return text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`);
    return text;
  }

  if (message.author.id !== USERID.AUTHOR.id) return;
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.EVAL;
