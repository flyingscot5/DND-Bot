const Race_Services = require('../../Services/Race_Services.js').Race_Services;
const Race_DB = require('../../Services/Race_DB.js').Race_DB;

var prefix = '!';

exports.run = function(bot, message, params) {
  const raceDB = new Race_DB();
  const raceService = new Race_Services(message, params, raceDB);

  if (params[0] == 'add') {
    raceService.raceCreate();

  } else if (params[0] == 'remove') {
    raceService.raceDelete();

  } else if (params[0] == 'update') {
    raceService.raceUpdate();

  } else if (params[0] == 'get') {

    var PromiseResult = raceService.raceGet();
    PromiseResult.then(function(result) {
      message.channel.send(`RACE:\n\nID: ${result.ID} \nName: ${result.Name} \nDesc: ${result.Desc}
        \nStr: ${result.raceStrBonus} \nDex: ${result.raceDexBonus} \nCon: ${result.raceConBonus}
        \nInt: ${result.raceIntBonus} \nWis: ${result.raceWisBonus} \nCha: ${result.raceChaBonus}`)
    });

  } else if (params[0] == 'list') {
    var PromiseResult = raceService.raceGetAll();

    PromiseResult.then(function(result) {

      let tosend = [];
      result.forEach((result) => { tosend.push(`**${result.ID}** - ${result.Name}`);});
      message.channel.send(`-\n${tosend.slice().join('\n\n')}`);

    });

  } else {
    message.channel.send(`${prefix}race ${params[0]} is Invalid. You can use one of theses Options <add, remove, update, get>`)
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'race',
  description: 'Example',
  usage: 'Example'
};
