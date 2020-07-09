module.exports = (client, messageReaction, user) => {
  
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
        message.channel.send(`${member}: attaque en cours... ${nEmo}`).then(async msg => {
          await msg.react("✅");
          const msgId1 = (message.channel.lastMessageID); 
          await console.log (`MessageChannel ID: ${msgId1}`);
          exports.msgId1 = msgId1;
          });
          
        client.channels.cache.get('727596239465611296').send(`${member.displayName}: attaque en cours... ${nEmo}`);
        break;
      case "HardSAUVE":
          message.channel.send(`${member}: attaque en cours... ${hEmo}`).then(async msg => {
            await msg.react("✅");
            const msgId2 = (message.channel.lastMessageID); 
            await console.log (`MessageChannel ID: ${msgId2}`);
            exports.msgId2 = msgId2;
            });
          client.channels.cache.get('727596239465611296').send(`${member}: attaque en cours... ${hEmo}`);
        break;
      case "hardEXPLOVIT":
          message.channel.send(`${member}: attaque en cours... ${aEmo}`).then(async msg => {
            await msg.react("✅");
            const msgId3 = (message.channel.lastMessageID); 
            await console.log (`MessageChannel ID: ${msgId3}`);
            exports.msgId3 = msgId3;
            });
          client.channels.cache.get('727596239465611296').send(`${member}: attaque en cours... ${aEmo}`);
        break;
      case "Hell":
          message.channel.send(`${member}: attaque en cours... ${hEmo}`).then(async msg => {
            await msg.react("✅");
            const msgId4 = (message.channel.lastMessageID); 
            await console.log (`MessageChannel ID: ${msgId4}`);
            exports.msgId4 = msgId4;
            });
          client.channels.cache.get('727596239465611296').send(`${member}: attaque en cours... ${hllEmo}`);
        break;
        
    };
    
  };
 
};

