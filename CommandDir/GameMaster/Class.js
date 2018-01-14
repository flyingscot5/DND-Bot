const Class_Services = require('../../Services/Class_Services.js').Class_Services;
const Class_DB = require('../../Services/Class_DB.js').Class_DB;

var prefix = '!';

exports.run = function(bot, message, params) {
  const classDB = new Class_DB();
  const classService = new Class_Services(message, params, classDB);

  var PromiseResult = classService.classGet();

  if (params[0] == 'add') {
    classService.classCreate();

  } else if (params[0] == 'remove') {
    classService.classDelete();

  } else if (params[0] == 'update') {
    classService.classUpdate();

  } else if (params[0] == 'get') {
    var PromiseResult = classService.classGet();
    PromiseResult.then(function(result) {
      message.channel.send(`CLASS:\n\nID: ${result.ID} \nName: ${result.Name} \nDesc: ${result.Desc}
        \nStr: ${result.classStrBonus} \nDex: ${result.classDexBonus} \nCon: ${result.classConBonus}
        \nInt: ${result.classIntBonus} \nWis: ${result.classWisBonus} \nCha: ${result.classChaBonus}`)
    });

  } else if (params[0] == 'list') {
    var PromiseResult = classService.classGetAll();

    PromiseResult.then(function(result) {

      let tosend = [];
      result.forEach((result) => { tosend.push(`**${result.ID}** - ${result.Name}`);});
      message.channel.send(`-\n${tosend.slice().join('\n\n')}`);

    });

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
