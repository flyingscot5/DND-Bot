const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('GameDataBase.db');

exports.run = function(bot, message, params) {

  var Create = db.prepare("INSERT INTO Accounts VALUES (?)");
  Create.run(0),
    function(err, row) {
      if (err)
        console.log(err)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'exmaple',
  description: 'Example',
  usage: 'Example'
};
