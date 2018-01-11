module.exports = bot => {
  var TimeStamp = (new Date().toISOString().replace(/.+T/, '[').replace(/\..+/, ']'));
  console.log(`${TimeStamp} Bot has been disconnected`);
};
