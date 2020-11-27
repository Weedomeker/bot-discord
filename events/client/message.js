
const { Collection } = require("discord.js");


module.exports = async (client, message) => {
  const startTime = new Date().getTime();
  let elapsedTime = 0;
  const settings = await client.getGuild(message.guild);

  if (message.channel.type === "dm") return client.emit("directMessage", message);
  if (message.author.bot) return;

  const dbUser = await client.getUser(message.member);
  if (!dbUser) await client.createUser({
    guildID: message.member.guild.id,
    guildName: message.member.guild.name,
    userID: message.member.id,
    username: message.member.user.username,
    lanternes: 5
  });

  const expCd = Math.floor(Math.random() * 19) + 1;
  const expToAdd = Math.floor(Math.random() * 25) + 10;

  if (expCd >= 8 && expCd <= 11) {
    // console.log(`Exp gagné: ${expToAdd}`);
    await client.addExp(client, message.member, expToAdd);
  }
  if (!message.content.startsWith(settings.prefix)) return;
  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  const user = message.mentions.users.first();

  if (!command) return;

  if (command.help.permissions && !message.member.hasPermission("BAN_MEMBERS")) return message.reply("Tu n'as pas la permission pour cette commande !");

  if (command.help.args && !args.length) {
    let noArgsReply = `Argument requis pour cette commande, ${message.author} !`;
    if (command.help.usage) noArgsReply += `\nUsage de la commande: \`${settings.prefix}${command.help.name} ${command.help.usage}\``;
    return message.channel.send(noArgsReply);
  }

  if (command.help.isAdmin && !user) return message.reply("Il faut mentionner un membre.");

  if (command.help.isAdmin && message.guild.member(message.mentions.users.first()).hasPermission("ADMINISTRATOR")) return message.reply("Tu ne peux pas utiliser cette commande sur cet utilisateur !");


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


  command.run(client, message, args, settings, dbUser);
  message.delete();
  elapsedTime = new Date().getTime() - startTime;

  console.log(`► Cmd: ${commandName} User: ${message.member.displayName} Exécuté en: ${elapsedTime} ms.`);
};
