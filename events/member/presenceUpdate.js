module.exports = async (client, message) => {
  
const dbUser = await client.getUser(message.member);

 if(!dbUser) await client.createUser({
    guildID: message.member.guild.id,
    guildName: message.member.guild.name,
    userID: message.member.id,
    username: message.member.user.tag,
    lanternes: 5
  });

};


