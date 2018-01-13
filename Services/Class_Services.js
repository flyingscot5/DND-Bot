class Class_Services {
  constructor(message, params, Class_DB) {
    this._message = message;
    this._params = params;
    this._ClassDB = Class_DB;
  };

  classCreate() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let className = this._params[1];
    let classDesc = this._params[2];

    this._ClassDB.create(className, classDesc);
  };

  classDelete() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let classLocation = this._params[1];
    let classIdentifier = this._params[2];

    this._ClassDB.delete(classLocation, classIdentifier);

  };

  classUpdate() {
    if (this._params.length <= 4) {
      return this._message.channel.send('Error');
    }

    let classLocation = this._params[1];
    let classIdentifier = this._params[2];
    let selectedColumn = this._params[3];
    let newContent = this._params[4];

    this._ClassDB.update(classLocation, classIdentifier, selectedColumn, newContent);

    this._message.channel.send(`Attempting to update`)

  };


  async classGet() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let classLocation = this._params[1];
    let classIdentifier = this._params[2];

    var row = this._ClassDB.get(classLocation, classIdentifier);

    row.then(function(result) {
      console.log(result);
    })
  };

};

exports.Class_Services = Class_Services;
