class Race_Services {
  constructor(message, params, Race_DB) {
    this._message = message;
    this._params = params;
    this._RaceDB = Race_DB;
  };

  async raceCreate() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let raceName = this._params[1];
    let raceDesc = this._params[2];

    var PromiseResult = this._RaceDB.create(raceName, raceDesc);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async raceDelete() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let raceLocation = this._params[1];
    let raceIdentifier = this._params[2];

    var PromiseResult = this._RaceDB.delete(raceLocation, raceIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async raceUpdate() {
    if (this._params.length <= 4) {
      return this._message.channel.send('Error');
    }

    let raceLocation = this._params[1];
    let raceIdentifier = this._params[2];
    let selectedColumn = this._params[3];
    let newContent = this._params.slice(4,this._params.length).join(' ');

    var PromiseResult = this._RaceDB.update(raceLocation, raceIdentifier, selectedColumn, newContent);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };


  async raceGet() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let raceLocation = this._params[1];
    let raceIdentifier = this._params[2];

    return await this._RaceDB.get(raceLocation, raceIdentifier);

  };

  async raceGetAll() {

    return await this._RaceDB.getAll();

  };

};

exports.Race_Services = Race_Services;
