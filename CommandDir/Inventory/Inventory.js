const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('DnD-Bot.db');

exports.run = function(bot, message, params) {

  db.get(`SELECT * FROM Accounts WHERE UserID=${message.author.id}`, function (err, row) {
    console.log(row);
  })

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['inv', 'backpack'],
  permLevel: 5
};

exports.help = {
  name: 'inventory',
  description: 'Baisc inventory',
  usage: 'Example'
};
