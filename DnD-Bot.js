const Discord = require('discord.js');
const bot = new Discord.Client();

const config = require("./Config.json");
const token = require("./Tokens.json");

var SetDate = (new Date().toISOString().replace(/\T.+/, ''));
var SetTime = (new Date().toISOString().replace(/.+T/, '').replace(/\..+/, ''));
var TimeStamp = (new Date().toISOString().replace(/.+T/, '[').replace(/\..+/, ']'));

require('./Util/EventLoader')(bot);


bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir('./CommandDir/', (err, folders) => {
  if (err) throw err;
  for (const folder of folders) {
    fs.readdir(`./CommandDir/${folder}/`, (err, files) => {
      if (err) console.error(err);
      files.forEach(f => {
        let props = require(`./CommandDir/${folder}/${f}`);
        console.log(`${TimeStamp} Loading Command: ${props.help.name}`);
        bot.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          bot.aliases.set(alias, props.help.name);
        });
      });
      console.log(`${TimeStamp} Loaded a total of ${files.length} commands From ${folder}.`);
    });
  }
});


bot.reload = (command) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readdir('./CommandDir/', (err, folders) => {
        if (err) throw err;
        for (const folder of folders) {
          fs.open(`./CommandDir/${folder}/${command}.js`, 'r', (err, fd) => {
            if (err) {
                return;
              throw err;
            }
            let cmd = require(`./CommandDir/${folder}/${command}`);
            delete require.cache[require.resolve(`./CommandDir/${folder}/${command}`)];

            bot.commands.delete(command);
            bot.aliases.forEach((cmd, alias) => {
              if (cmd === command) bot.aliases.delete(alias);
            });
            bot.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
              bot.aliases.set(alias, cmd.help.name);
            });
            resolve();
          });
        }
      });

    } catch (e) {
      reject(e);
    }

  });
};


bot.elevation = (message) => {
  //db.get(`SELECT AdminPerm FROM Servers WHERE ServerID=${message.guild.id}`, function(err, row) {
  let permlvl = 5;
  //if (message.author.id === ) permlvl = -1;
  //if (message.author.id === ) permlvl = 2;
  //if (message.author.id === row.AdminPerm) permlvl = 3;
  // if((message.guild) && (message.guild.member(message.author).hasPermission('ADMINISTRATOR'))) permlvl = 4;
  //if (message.author.id === guild.ownerID) permlvl = 4;
  //if (message.author.id === config.Dev) permlvl = 5;
  return permlvl;
  //})
};


process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});

bot.login(token.bot);
