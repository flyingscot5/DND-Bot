const config = require("../../Config.json");
exports.run = (bot, message, params) => {
  var TimeStamp = (new Date().toISOString().replace(/.+T/, '[').replace(/\..+/, ']'));
    if (!params[0]) {
      const commandNames = Array.from(bot.commands.keys());
      const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
      message.channel.send(`= Command List =\n\n[Use ${config.prefix}help <commandname> for details]\n\n${bot.commands.map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
    } else {
      let command = params[0];
      if (bot.commands.has(command)) {
        command = bot.commands.get(command);
        message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`, {code:'asciidoc'});
      }
    }
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'light', '?'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands for your permission level.',
  usage: '/help [command]'
};
