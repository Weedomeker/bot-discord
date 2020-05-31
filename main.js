const cron = require ('node-cron');
const { readdirSync} = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.js');

const client = new Client();
client.commands = new Collection();

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Commande chargée: ${getFileName.help.name}`);
    };
  });
};

loadCommands();

client.on('message', message => {
  if(!message.content.startsWith(PREFIX) || message.author.bot) return;
  const args = message.content.slice(PREFIX.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  
  
  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);
  console.log(`Args: ${args}`);

  if(command.help.args && !args.length) {
    let noArgsReply = `Argument requis pour cette commande, ${message.author} !`;

    if(command.help.usage) noArgsReply += `\nUsage de la commande: \`${PREFIX}${command.help.name} ${command.help.usage}\``

    return message.channel.send(noArgsReply);
  }

  command.run(client, message, args, cron);
  message.delete();

});

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login(TOKEN);



