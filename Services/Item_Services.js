class Item_Services {
  constructor(message, params, Item_DB) {
    this._message = message;
    this._params = params;
    this._ItemDB = Item_DB;
  };

  itemCreate() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let itemName = this._params[1];
    let itemDesc = this._params[2];

    var PromiseResult = this._ItemDB.create(itemName, itemDesc);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  itemDelete() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let itemLocation = this._params[1];
    let itemIdentifier = this._params[2];

    var PromiseResult = this._ItemDB.delete(itemLocation, itemIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  itemUpdate() {
    if (this._params.length <= 4) {
      return this._message.channel.send('Error');
    }

    let itemLocation = this._params[1];
    let itemIdentifier = this._params[2];
    let selectedColumn = this._params[3];
    let newContent = this._params[4];

    var PromiseResult = this._ItemDB.update(itemLocation, itemIdentifier, selectedColumn, newContent);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };


  async itemGet() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let itemLocation = this._params[1];
    let itemIdentifier = this._params[2];

    var PromiseResult = this._ItemDB.get(itemLocation, itemIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

};

exports.Item_Services = Item_Services;
