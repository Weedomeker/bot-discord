const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const filter = m => m.content.includes(args[0]);
  const collector = message.channel.createMessageCollector(filter, {
    time: 15000
  });
  message.channel.send(`\`Collecte en cours: ${args[0]}\``);
  collector.on("end", collected => {
    message.channel.send(`${collected.size - 1} récoltés.`);
  });
};

module.exports.help = MESSAGES.COMMANDS.COLLECTORS.MSGCOLLECTOR;
