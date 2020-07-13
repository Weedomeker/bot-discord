const { MessageEmbed, MessageAttachment } = require("discord.js");
const randomDice = () => Math.floor(Math.random() * 6) + 1;
const diceImg = new MessageAttachment("./assets/img/dice.png");

const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("#d54e12")
    .setTitle("Lancé de dés !")
    .attachFiles(diceImg)
    .setThumbnail("attachment://dice.png")
    .addFields(
      { name: "Résultat", value: randomDice(), inline: true }
    );
  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.DICE;
