const Discord = require('discord.js');
const Player_Services = require('../../Services/Player_Services.js').Player_Services;
const Player_DB = require('../../Services/Player_DB.js').Player_DB;

exports.run = function(bot, message, params) {
  const playerDB = new Player_DB();
  const playerService = new Player_Services(message, params, playerDB);

  var PromiseResult = playerService.playerGetInventory();

  PromiseResult.then(function(result) {

    let tosend = [];
    result.forEach((result) => { tosend.push(`**${result.Name}** - ${result.Quantity}`);});
    var Embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}'s - Backpack`)
    .setColor('#ffffff')
    .setDescription(`-\n${tosend.slice().join('\n\n')}`);
    message.channel.send(Embed);

  });

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bp'],
  permLevel: 5
};

exports.help = {
  name: 'backpack',
  description: 'Example',
  usage: 'Example'
};
