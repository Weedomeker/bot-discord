const cron = require ('node-cron');

module.exports = {
  name: 'gvgtroll',
  description: 'GvG troll def dimanche',
  execute(message, args) {
    
    cron.schedule('*/3 * * * * 0', () => {
      //secs mins hrs dMonth month dWeeek
      //0=Dimanche
      message.channel.send('@everyone, Ce soir, troll def en GvG !!! Merci.');
      console.log(`Repeté toutes les x seconds`);

    })
   

  }
}