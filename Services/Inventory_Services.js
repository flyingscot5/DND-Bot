class Inventory_Services {
  constructor(message, params, Inventory_DB) {
    this._message = message;
    this._params = params;
    this._InventoryDB = Inventory_DB;
  };

  async inventoryCreate() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let inventoryName = this._params[1];
    let inventoryDesc = this._params[2];

    var PromiseResult = this._InventoryDB.create(inventoryName, inventoryDesc);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async inventoryDelete() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let inventoryLocation = this._params[1];
    let inventoryIdentifier = this._params[2];

    var PromiseResult = this._InventoryDB.delete(inventoryLocation, inventoryIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async inventoryUpdate() {
    if (this._params.length <= 4) {
      return this._message.channel.send('Error');
    }

    let inventoryLocation = this._params[1];
    let inventoryIdentifier = this._params[2];
    let selectedColumn = this._params[3];
    let newContent = this._params.slice(4,this._params.length).join(' ');

    var PromiseResult = this._InventoryDB.update(inventoryLocation, inventoryIdentifier, selectedColumn, newContent);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };


  async inventoryGet() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let inventoryLocation = this._params[1];
    let inventoryIdentifier = this._params[2];

    var PromiseResult = this._InventoryDB.get(inventoryLocation, inventoryIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

};

exports.Inventory_Services = Inventory_Services;
