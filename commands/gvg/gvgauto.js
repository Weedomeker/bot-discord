
//const cron = require("node-cron");
const { MESSAGES, CHANNELS } = require("../../util/constants");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const trollImg = new MessageAttachment("./assets/img/troll.png");
const defImg = new MessageAttachment("./assets/img/def.png");
const gvgImg = new MessageAttachment("./assets/img/gvg.png");

module.exports.run = (client, message, args) => {

  setInterval(function()
  {
    let d = new Date();
    let weekDay = d.getDay();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let secs = d.getSeconds();
    
    
  //RAPPEL GVG ALLDAYS
    if (
      weekDay >= 1 && weekDay < 6 && hours === 09 && minutes === 00 && secs === 00 ||
      weekDay >= 1 && weekDay < 6 && hours === 21 && minutes === 00 && secs === 00 ||
      weekDay === 6 && hours === 09 && minutes === 00 && secs === 00 ||
      weekDay === 6 && hours === 17 && minutes === 00 && secs === 00
      ) {

      const embed = new MessageEmbed()
      
      .setColor("#FF0000")
      .attachFiles(gvgImg)
      .setThumbnail("attachment://gvg.png")
      .addField(
        "@here",
        `Si quelqu'un peut relancer la gvg c'est cool, merci beaucoup !`
      )
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());

     client.channels.cache.get(CHANNELS.DESK.id).send(embed);
    };


  // DEF JEUDI
  if (weekDay === 4 && hours === 21 && minutes === 00 && secs === 00) {
    
    const embed = new MessageEmbed()
    .setTitle("Grosses def GvG!")
    .setColor("#FF0000")
    .attachFiles(defImg)
    .setThumbnail("attachment://def.png")
    .addField(
      "@everyone",
      "Merci de mettre vos grosses def avant demain matin 9h! Ceux qui ne l'ont pas fait ne seront pas inscrits!"
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    client.channels.cache.get(CHANNELS.ANNC.id).send(embed);
  };
    
  // DEF DIMANCHE
    if (weekDay === 0 && hours === 15 && minutes === 00 && secs === 00) {

      const embed = new MessageEmbed()
      .setTitle("Inscriptions GvG à 21h00!")
      .setColor("#FF0000")
      .attachFiles(trollImg)
      .setThumbnail("attachment://troll.png")
      .addField(
        "@everyone:",
        `Cliquez sur l'emote si vous êtes sûrs & certains d'être assez disponible pour participer convenablement aux GvG de cette semaine.
    Et de mettre vos trolls def! Je n'inscris pas les gens qui ne les ont pas mises!`
      )
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());

     client.channels.cache.get(CHANNELS.ANNC.id).send(embed).then( msg => {
      msg.react("☝️");
      });
    };
    
  }, 1000);
 
  client.channels.cache.get(CHANNELS.LOG.id).send(`Annonces GVG lancées.\n\`Jeudi: 21h\nDimanche: 15h\``);
};


module.exports.help = MESSAGES.COMMANDS.GVG.GVGAUTO;