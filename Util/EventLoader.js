const reqEvent = (Event) => require(`../Events/${Event}`)
module.exports = bot => {
  bot.on('ready', () => reqEvent('Ready')(bot));
  bot.on('reconnecting', () => reqEvent('Reconnecting')(bot));
  bot.on('disconnect', () => reqEvent('Disconnect')(bot));
  bot.on('message', reqEvent('Message'));
};
