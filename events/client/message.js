const { Collection } = require('discord.js');
const { PREFIX } = require('../../config');
const cron = require ('node-cron');

module.exports = (client, message) => {

  if(!message.content.startsWith(PREFIX) || message.author.bot) return;
  const args = message.content.slice(PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  //console.log(`Args: ${args}`);

  if(command.help.args && !args.length) {
    let noArgsReply = `Argument requis pour cette commande, ${message.author} !`;
    if(command.help.usage) noArgsReply += `\nUsage de la commande: \`${PREFIX}${command.help.name} ${command.help.usage}\``
    return message.channel.send(noArgsReply);
  }
  command.run(client, message, args, cron);
  //console.log(command);
  message.delete();

}