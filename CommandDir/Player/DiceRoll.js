exports.run = function(bot, message, params) {

  let sides = params[0];

  if (isNaN(sides)) {
    message.channel.send(`You must include a number of sides. Ex. !roll 20`)
  } else {
    message.channel.send(Math.floor(Math.random() * sides))
  };

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['dice','d'],
  permLevel: 1
};

exports.help = {
  name: 'roll',
  description: 'Roll a dice.',
  usage: '!roll # of sides'
};
