const Discord = require('discord.js');
const Player_Services = require('../../Services/Player_Services.js').Player_Services;
const Player_DB = require('../../Services/Player_DB.js').Player_DB;

exports.run = function(bot, message, params) {
  const playerDB = new Player_DB();
  const playerService = new Player_Services(message, params, playerDB);


  var PromiseResult = playerService.playerGetStats();

  PromiseResult.then(function(result) {

    message.channel.send(`${message.author.username}'s PlayerSheet
      ID: ${result.ID}\nCredits: ${result.Credits}\nDarkSide: ${result.Darkside}\n
      InvID: ${result.InvID}\nClassID: ${result.ClassID}\nRaceID: ${result.RaceID}\nSkillsID: ${result.SkillsID}\n
      StrTotal: ${result.StrTotal}\nDexTotal: ${result.DexTotal}\nConTotal: ${result.ConTotal}\n
      IntTotal: ${result.IntTotal}\nWisTotal: ${result.WisTotal}\nChaTotal: ${result.ChaTotal}\n
    `)

    console.log(result);

  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pt'],
  permLevel: 5
};

exports.help = {
  name: 'playersheet',
  description: 'Example',
  usage: 'Example'
};
