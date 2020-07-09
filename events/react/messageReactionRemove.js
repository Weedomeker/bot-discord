const msgId = require ('./messageReactionAdd.js');
module.exports = (client, messageReaction, user) => {
  console.log (`Dans le remove: ${msgId.msgId1}`);
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '727579420042461235');
  const nEmo = message.guild.emojis.cache.get('728731272888975430');
  const hEmo = message.guild.emojis.cache.get('728729060087300157');
  const aEmo = message.guild.emojis.cache.get('728729060435296296');
  const hllEmo = message.guild.emojis.cache.get('728729060628496494');
  
  if (member.user.bot) return;
  
  if (["Normal", "HardSAUVE", "hardEXPLOVIT", "Hell"].includes(emoji) && message.channel.id === channel.id) {
    
    switch (emoji) {
      case "Normal":
        message.channel.send(`${member}: attaque annulée !`);
        console.log (`Dans le remove: ${msgId.msgId1}`);     
        client.channels.cache.get('727596239465611296').send(`${member.displayName}: attaque annulée !`);
        break;
      case "HardSAUVE":
          message.channel.send(`${member}: attaque annulée !`);
          client.channels.cache.get('727596239465611296').send(`${member.displayName}: attaque annulée !`);
        break;
      case "hardEXPLOVIT":
          message.channel.send(`${member}: attaque annulée !`);
          client.channels.cache.get('727596239465611296').send(`${member.displayName}: attaque annulée !`);
        break;
      case "Hell":
          message.channel.send(`${member}: attaque annulée !`);
          client.channels.cache.get('727596239465611296').send(`${member.displayName}: attaque annulée !`);
        break;

    };
  };

  
};
