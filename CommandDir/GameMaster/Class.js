const Class_Services = require('../../Services/Class_Services.js').Class_Services;
const Class_DB = require('../../Services/Class_DB.js').Class_DB;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

var prefix = '!';

exports.run = function(bot, message, params) {
  const classDB = new Class_DB();
  const classService = new Class_Services(message, params, classDB);

  if (params[0] == 'add') {
    classService.classCreate();

  } else if (params[0] == 'remove') {
    classService.classDelete();

  } else if (params[0] == 'update') {
    classService.classUpdate();

  } else if (params[0] == 'get') {
    classService.classGet();

  } else {
    message.channel.send(`${prefix}class ${params[0]} is Invalid. You can use one of theses Options <add, remove, update, get>`)
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'class',
  description: 'Example',
  usage: 'Example'
};
