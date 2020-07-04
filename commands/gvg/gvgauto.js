const cron = require ('node-cron');
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, cron) => {

  const startStop = args[0];
  const dimanche = ('* * 15 * * 0');
  const jeudi = ('* * 21 * * 4');
  const test = ('*/5 * * * * 6');
  //secs mins hrs dMonth month dWeek
  //0=Dimanche
  console.log(startStop);


  const taskDim = cron.schedule(dimanche, () => {
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

    client.channels.cache.get('727579420042461235').send(embed).then(async msg => {
      await msg.react("☝️");
    });
  }, {
    schedule: false
});

  const taskJeu = cron.schedule(jeudi, () => {
    const embed = new MessageEmbed()
    .setTitle("Grosses def GvG!")
    .setColor("#FF0000")
    .addField(
      "Pour info:",
      `Merci de mettre vos grosses def avant demain matin 9h! Ceux qui ne l'ont pas fait ne seront pas inscris!`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('727579420042461235').send(embed);
  }, {
    schedule: false
});

  const taskTest = cron.schedule(test, () => {
    message.channel.send ('Start ok');
  }, {
    schedule: true
});  

  switch(startStop) {
    case "start":
      taskTest.start();
      console.log("Launched");
      //taskDim.start();
      //taskJeu.start(); 
      break;
    case "stop":
        taskTest.stop();
        console.log("stopped");
      //taskDim.stop();
      //taskJeu.stop();
    break;

  };
  
};


module.exports.help = {
  name: 'gvgauto',
  aliases: 'gvg',
  description: 'Annonce automatique des défenses gvg (grosses defs / trolls defs)',
  args: true,
  usage: 'Exemple: @gvg start | @gvg stop'
};
