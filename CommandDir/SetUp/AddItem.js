const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('DnD-Bot.db');

exports.run = function(bot, message, params) {


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'additem',
  description: 'Example',
  usage: 'Example'
};
