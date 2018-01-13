const Player_Services = require('../../Services/Player_Services.js').Player_Services;
const Player_DB = require('../../Services/Player_DB.js').Player_DB;

var prefix = '!';

exports.run = function(bot, message, params) {
  const playerDB = new Player_DB();
  const playerService = new Player_Services(message, params, playerDB);

  if (params[0] == 'add') {
    playerService.playerCreate();

  } else if (params[0] == 'remove') {
    playerService.playerDelete();

  } else if (params[0] == 'update') {
    playerService.playerUpdate();

  } else if (params[0] == 'get') {
    playerService.playerGet();

  } else {
    message.channel.send(`${prefix}player ${params[0]} is Invalid. You can use one of theses Options <add, remove, update, get>`)
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'player',
  description: 'Example',
  usage: 'Example'
};
