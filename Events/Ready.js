module.exports = bot => {
var TimeStamp = (new Date().toISOString().replace(/.+T/, '[').replace(/\..+/, ']'));
  console.log(`${TimeStamp} Bot has Connected On ` + bot.guilds.size + " Servers!");
  bot.user.setPresence({ game: { name: "StarWars - DnD", type: 'online' } });
};
