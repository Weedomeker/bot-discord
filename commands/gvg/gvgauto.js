const cron = require ('node-cron');
const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {

  let startStop = (args[0]);
  const dimanche = ('1 * 15 * * 0');
  const jeudi = ('1 * 21 * * 4');
  const test = ('5 * * * * 3');
  //secs mins hrs dMonth month dWeek
  //0=Dimanche

  message.channel.send(`Annonces GvG de la semaine activé. ${message.author}`);

  // DEF DIMANCHE 
  const taskDim = cron.schedule(test, () => {
    if (startStop == 'start') {
    const embed = new MessageEmbed()
    .setTitle("Inscriptions GvG à 21h00!")
    .setColor("#FF0000")
    .addField(
      "Pour info:",
      `Cliquez sur l'emote si vous êtes sûrs & certains d'être assez disponible pour participer convenablement aux GvG de cette semaine.
      Et de mettre vos trolls def! Je n'inscris pas les gens qui ne les ont pas mises!`
      )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('713768108799557752').send(embed).then(async msg => {
      await msg.react("☝️");});
      taskDim.stop();
      console.log('Annonce envoyé, next Dimanche prochain...');
      taskDim.start();
      //console.log('Task reboot');
  } else if (startStop = 'stop') {
    taskDim.destroy();
    console.log('Annonce détruite ! Next reboot.');
  };

    });
  


// DEF JEUDI
const taskJeud = cron.schedule(test, () => {
  if (startStop == 'start') {
    const embed = new MessageEmbed()
      .setTitle("Grosses def GvG!")
      .setColor("#FF0000")
      .addField(
        "Pour info:",
        `Merci de mettre vos grosses def avant demain matin 9h! Ceux qui ne l'ont pas fait ne seront pas inscris!`
      )
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());
      client.channels.cache.get('713768108799557752').send(embed);
      taskJeud.stop();
      console.log('Annonce envoyé, next Jeudi prochain...');
      taskJeud.start();
      //console.log('Reboot annonce...');
  } else if (startStop = 'stop') {
    taskJeud.destroy();
    console.log('Annonce détruite ! Next reboot.');
  };
  
    });
  


};


module.exports.help = {
  name: 'gvgauto',
  aliases: 'gvg',
  description: 'Annonce automatique des défenses gvg (grosses defs / trolls defs)',
  args: true,
  usage: 'Exemple: @gvg start | @gvg stop'
};
