/* eslint-disable quote-props */
/* eslint-disable object-curly-spacing */
const { MESSAGES } = require("../../util/constants");
const { User } = require("../../models/index");

module.exports.run = async () => {
  // $lte = less $qte = greater
  await User.updateMany(
    {"lanternes": {"$lte": 6}}, {"$set": {"lanternes": 5}}, { "multi": true }
  );
};

module.exports.help = MESSAGES.COMMANDS.TARTA.ADDLANTERN;
