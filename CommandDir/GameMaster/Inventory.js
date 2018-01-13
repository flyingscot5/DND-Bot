const Inventory_Services = require('../../Services/Inventory_Services.js').Inventory_Services;
const Inventory_DB = require('../../Services/Inventory_DB.js').Inventory_DB;

var prefix = '!';

exports.run = function(bot, message, params) {
  const inventoryDB = new Inventory_DB();
  const inventoryService = new Inventory_Services(message, params, inventoryDB);

  if (params[0] == 'add') {
    inventoryService.inventoryCreate();

  } else if (params[0] == 'remove') {
    inventoryService.inventoryDelete();

  } else if (params[0] == 'update') {
    inventoryService.inventoryUpdate();

  } else if (params[0] == 'get') {
    inventoryService.inventoryGet();

  } else {
    message.channel.send(`${prefix}inventory ${params[0]} is Invalid. You can use one of theses Options <add, remove, update, get>`)
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'inventory',
  description: 'Example',
  usage: 'Example'
};
