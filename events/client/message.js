const { Collection } = require("discord.js");

module.exports = async (client, message) => {
  const settings = await client.getGuild(message.guild);
  if (message.channel.type === "dm") return client.emit("directMessage", message);
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  if (command.help.isAdmin && message.guild.member(message.mentions.users.first()).hasPermission("BAN_MEMBERS")) return message.reply("Tu ne peux pas utiliser cette commande sur cette utilisateur !");
  if (command.help.permissions && !message.member.hasPermission("BAN_MEMBERS")) return message.reply("Tu n'as pas la permission pour cette commande !");


  if (command.help.args && !args.length) {
    let noArgsReply = `Argument requis pour cette commande, ${message.author} !`;
    if (command.help.usage) noArgsReply += `\nUsage de la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\``;
    return message.channel.send(noArgsReply);
  }

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name);
  const cdAmount = (command.help.cooldowns || 5) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;
    if (timeNow < cdExpirationTime) {
      const timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`Patientes ${timeLeft.toFixed(0)} secondes avant de ré-utiliser ta commande \`${command.help.name}\`.`);
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);


  command.run(client, message, args, settings);
  console.log(`► Cmd: ${commandName}`);
  console.log(`--Args: ${args}`);
  console.log(`--User: ${message.member.displayName}`);
  message.delete();
};
