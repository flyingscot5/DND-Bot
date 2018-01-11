exports.run = function(bot, message, params) {
  var TimeStamp = (new Date().toISOString().replace(/.+T/, '[').replace(/\..+/, ']'));
  let command;
  if (bot.commands.has(params[0])) {
    command = params[0];
  } else if (bot.aliases.has(params[0])) {
    command = bot.aliases.get(params[0]);
  }
  if (!command) {
    return message.channel.send(`I cannot find the command: ${params[0]}`);
  } else {
    console.log(`${TimeStamp} Reloading: ${command}`)
    message.channel.send(`Reloading: **${command}**`)
      .then(m => {
        bot.reload(command)
          .then(() => {
            m.edit(`Successfully reloaded: **${command}**`).then(() => {
              console.log(`${TimeStamp} Successfully reloaded: ${command}`)
            })
          })
          .catch(e => {
            m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``).then(() => {
              console.log(`${TimeStamp} Command Reload Failed: ${command}`)
            })
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'reload',
  displayname: 'Reload',
  description: 'Reloads the command file, if it\'s been updated or modified.',
  usage: 'reload <commandname>'
};
