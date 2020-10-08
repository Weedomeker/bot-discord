const { MESSAGES } = require("../../util/constants");
const ping = require("node-http-ping");
/*const days = new array ("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
const date = new Date();
const jour = days[date.getDay()] + " ";*/

module.exports.run = (client, message) => {
  ping("nas.weedomeker.fr", 5001)
    .then(time => message.channel.send(`Ping bot: \`${time} ms\``))
    .catch(() => message.channel.send("Impossible de joindre le bot..."));
};

module.exports.help = MESSAGES.COMMANDS.MISC.PING;
