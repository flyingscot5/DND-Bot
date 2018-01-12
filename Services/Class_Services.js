class Class_Services {
  constructor(message, params, Class_DB) {
    this._message = message;
    this._params = params;
    this._ClassDB = Class_DB;
  };

  classCreate() {
    this._ClassDB.create();
  };

  classDelete() {
    this._ClassDB.delete();
  };

  classUpdate() {
    if (this._params.length <= 4) {
      return this._message.channel.send('Error');
    }

    var classLocation = this._params[1];
    var classIdentifier = this._params[2];
    var selectedColumn =this._params[3];
    var newContent = this._params[4];

    this._ClassDB.update(classLocation, classIdentifier, selectedColumn, newContent);

    this._message.channel.send(`Attempting to update`)

  };

  classGet() {
    this._ClassDB.get();
  };

};

exports.Class_Services = Class_Services;
