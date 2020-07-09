const { MessageEmbed } = require ("discord.js");

module.exports.run = (client, message, args) => {
  const color = (args);
  const title = (args[1]);
  //const txt = (args);
  //const txtMsg = (txt.join(' '));
  
  if (["r", "v", "b", "w"].includes(color)) {
    console.log('dans le if');
 switch (color) {
    case "r":{
     
      let color = '#FF0000';
      console.log (`Recup color: ${color}`);
      break;
    }
    case "v":{
      let color = '#00e51b';
      break;
    }
    case "b":{
        let color = '#00d2ff';
        break;
      }
    case "w":{
          let color = '#FFF';
          break;
        }
 };

  const embed = new MessageEmbed()
  .setColor(`'${color}'`)
  .setTitle("Annonce:")
  //.setURL("https://google.fr")
  .setThumbnail(client.user.displayAvatarURL())
  //.setDescription("Description de l'embed")
  .addField("----------------------------", 'texte')
  //.setImage(client.user.displayAvatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());

  message.channel.send(embed);
  
  
  };
};

module.exports.help = {
  name: 'embed',
  aliases: ['emb', 'em', 'ebd'],
  description: 'Envoie un embed !', 
  permissions: true,
  args: true,
  usage: 'color(r,v,b,w) Titre texte'
};