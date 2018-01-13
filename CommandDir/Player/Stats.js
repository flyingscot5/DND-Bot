const Discord = require('discord.js');
const Player_Services = require('../../Services/Player_Services.js').Player_Services;
const Player_DB = require('../../Services/Player_DB.js').Player_DB;

exports.run = function(bot, message, params) {
  const playerDB = new Player_DB();
  const playerService = new Player_Services(message, params, playerDB);

  var PromiseResult = playerService.playerGetStats();

  PromiseResult.then(function(result) {
    var Embed = new Discord.RichEmbed()
      .setAuthor('Your Stats: ')
      .setColor('#ffffff')
      .addField(`Strength Total: ${result.StrTotal}`,`(PlayerStr: ${result.StrBonus} + RaceStr: ${result.raceStrBonus} + ClassStr: ${result.classStrBonus})`)
      .addField(`Dexerity Total: ${result.DexTotal}`,`(PlayerDex: ${result.DexBonus} + RaceDex: ${result.raceDexBonus} + ClassDex: ${result.classDexBonus})`)
      .addField(`ConTotal: ${result.ConTotal}`,`(PlayerCon: ${result.ConBonus} + RaceCon: ${result.raceConBonus} + ClassCon: ${result.classConBonus})`)
      .addField(`IntTotal: ${result.IntTotal}`,`(PlayerInt: ${result.IntBonus} + RaceInt: ${result.raceIntBonus} + ClassInt: ${result.classIntBonus})`)
      .addField(`WisTotal: ${result.WisTotal}`,`(PlayerWis: ${result.WisBonus} + RaceWis: ${result.raceWisBonus} + ClassWis: ${result.classWisBonus})`)
      .addField(`ChaTotal: ${result.ChaTotal}`,`(PlayerCha: ${result.ChaBonus} + RaceCha: ${result.raceChaBonus} + ClassCha: ${result.classChaBonus})`)
    message.channel.send(Embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['perks'],
  permLevel: 5
};

exports.help = {
  name: 'stats',
  description: 'Example',
  usage: 'Example'
};
