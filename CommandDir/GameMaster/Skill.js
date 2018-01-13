const Skill_Services = require('../../Services/Skill_Services.js').Skill_Services;
const Skill_DB = require('../../Services/Skill_DB.js').Skill_DB;

var prefix = '!';

exports.run = function(bot, message, params) {
  const skillDB = new Skill_DB();
  const skillService = new Skill_Services(message, params, skillDB);

  if (params[0] == 'add') {
    skillService.skillCreate();

  } else if (params[0] == 'remove') {
    skillService.skillDelete();

  } else if (params[0] == 'update') {
    skillService.skillUpdate();

  } else if (params[0] == 'get') {
    skillService.skillGet();

  } else {
    message.channel.send(`${prefix}skill ${params[0]} is Invalid. You can use one of theses Options <add, remove, update, get>`)
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'skill',
  description: 'Example',
  usage: 'Example'
};
