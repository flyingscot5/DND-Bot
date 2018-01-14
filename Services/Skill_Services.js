class Skill_Services {
  constructor(message, params, Skill_DB) {
    this._message = message;
    this._params = params;
    this._SkillDB = Skill_DB;
  };

  async skillCreate() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let skillName = this._params[1];
    let skillDesc = this._params[2];

    var PromiseResult = this._SkillDB.create(skillName, skillDesc);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async skillDelete() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let skillLocation = this._params[1];
    let skillIdentifier = this._params[2];

    var PromiseResult = this._SkillDB.delete(skillLocation, skillIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

  async skillUpdate() {
    if (this._params.length <= 4) {
      return this._message.channel.send('Error');
    }

    let skillLocation = this._params[1];
    let skillIdentifier = this._params[2];
    let selectedColumn = this._params[3];
    let newContent = this._params.slice(4,this._params.length).join(' ');

    var PromiseResult = this._SkillDB.update(skillLocation, skillIdentifier, selectedColumn, newContent);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };


  async skillGet() {
    if (this._params.length <= 2) {
      return this._message.channel.send('Error');
    }

    let skillLocation = this._params[1];
    let skillIdentifier = this._params[2];

    var PromiseResult = this._SkillDB.get(skillLocation, skillIdentifier);

    PromiseResult.then(function(result) {
      console.log(result);
    });
  };

};

exports.Skill_Services = Skill_Services;
