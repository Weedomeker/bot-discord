module.exports = (client, message) => {
const txt = message.content;
const find = txt.search('kiwi');
console.log (txt);

if(find === 'kiwi') {
  message.reply('🥝');
};


  
 
};

