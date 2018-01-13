const Item_Services = require('../../Services/Item_Services.js').Item_Services;
const Item_DB = require('../../Services/Item_DB.js').Item_DB;

var prefix = '!';

exports.run = function(bot, message, params) {
  const itemDB = new Item_DB();
  const itemService = new Item_Services(message, params, itemDB);

  if (params[0] == 'add') {
    itemService.itemCreate();

  } else if (params[0] == 'remove') {
    itemService.itemDelete();

  } else if (params[0] == 'update') {
    itemService.itemUpdate();

  } else if (params[0] == 'get') {
    itemService.itemGet();

  } else {
    message.channel.send(`${prefix}item ${params[0]} is Invalid. You can use one of theses Options <add, remove, update, get>`)
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'item',
  description: 'Example',
  usage: 'Example'
};
