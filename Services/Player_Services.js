class Player_Services {
  constructor(message, params, Player_DB) {
    this._message = message;
    this._params = params;
    this._PlayerDB = Player_DB;
  };

  async playerCreate() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let playerName = this._params[1];
    let playerDesc = this._params[2];

    var PromiseResult = this._PlayerDB.create(playerName, playerDesc);

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
    let newContent = this._params[4];

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

};

exports.Player_Services = Player_Services;
