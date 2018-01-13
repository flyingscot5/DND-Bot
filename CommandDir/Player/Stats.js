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
      .addField(`Strength Total: ${Math.round(result.StrTotal/2)}`,`(PlayerStr: ${result.StrBonus} + RaceStr: ${result.raceStrBonus} + ClassStr: ${result.classStrBonus}) 2`)
      .addField(`Dexerity Total: ${Math.round(result.DexTotal/2)}`,`(PlayerDex: ${result.DexBonus} + RaceDex: ${result.raceDexBonus} + ClassDex: ${result.classDexBonus}) 2`)
      .addField(`Constitution Total: ${Math.round(result.ConTotal/2)}`,`(PlayerCon: ${result.ConBonus} + RaceCon: ${result.raceConBonus} + ClassCon: ${result.classConBonus} ) 2`)
      .addField(`Intelligence Total: ${Math.round(result.IntTotal/2)}`,`(PlayerInt: ${result.IntBonus} + RaceInt: ${result.raceIntBonus} + ClassInt: ${result.classIntBonus}) / 2`)
      .addField(`Wisdom Total: ${Math.round(result.WisTotal/2)}`,`(PlayerWis: ${result.WisBonus} + RaceWis: ${result.raceWisBonus} + ClassWis: ${result.classWisBonus}) / 2`)
      .addField(`Charisma Total: ${Math.round(result.ChaTotal/2)}`,`(PlayerCha: ${result.ChaBonus} + RaceCha: ${result.raceChaBonus} + ClassCha: ${result.classChaBonus}) / 2`)
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
