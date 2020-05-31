const cron = require ('node-cron');

module.exports.run = (client, message, args, cron) => {
   
  const startStop = args[0];
  const day = args[1];
  const secs = args[2];
  
  const job = (`'*/${secs} * * * * ${day}'`);
//secs mins hrs dMonth month dWeeek
//0=Dimanche
  console.log(job);

  const task = cron.schedule(job, () => {
  message.channel.send('@everyone, Ce soir, troll def en GvG !!! Merci.');
  console.log('Start TASK Troll def');
});

 task.start();

};

module.exports.help = {
  name: 'gvgtroll',
  description: 'Start GvG troll def',
  args: true,
  usage: '<Jour (0-6 0=dimanche)> <repeat x heures> \n Exemple: !gvgtrollstart 0 4 \n Envois un msg le dimanche tout les 4h.'
};
