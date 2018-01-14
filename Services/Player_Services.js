class Player_Services {
  constructor(message, params, Player_DB) {
    this._message = message;
    this._params = params;
    this._PlayerDB = Player_DB;
  };

  async playerCreate() {
    let UserID = this._message.mentions.users.first().id;
    let UserName = this._message.mentions.users.first().username;

    var PromiseResult = this._PlayerDB.create(UserID, UserName);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async playerDelete() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let playerLocation = this._params[1];
    let playerIdentifier = this._params[2];

    var PromiseResult = this._PlayerDB.delete(playerLocation, playerIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async playerUpdate() {
    if (this._params.length <= 4) {
      return this._message.channel.send('Error');
    }

    let playerLocation = this._params[1];
    let playerIdentifier = this._params[2];
    let selectedColumn = this._params[3];
    let newContent = this._params.slice(4,this._params.length).join(' ');

    var PromiseResult = this._PlayerDB.update(playerLocation, playerIdentifier, selectedColumn, newContent);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };


  async playerGet() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let playerLocation = this._params[1];
    let playerIdentifier = this._params[2];

    var PromiseResult = this._PlayerDB.get(playerLocation, playerIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async playerGetStats() {

    let UserID = this._message.author.id;

    return await this._PlayerDB.getStats(UserID);

  };

  async playerGetInventory() {

    let UserID = this._message.author.id;

    return await this._PlayerDB.getInventory(UserID);

  };

  async playerGetAll() {

    let UserID = this._message.author.id;

    return await this._PlayerDB.getAll(UserID);

  };

};

exports.Player_Services = Player_Services;
