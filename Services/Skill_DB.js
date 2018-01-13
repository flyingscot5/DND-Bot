const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Skill_DB {

  create(skillName, skillDesc) {
    return new Promise((res, ret) => db.run(`INSERT INTO Skills VALUES (${null}, "${skillName}", "${skillDesc}")`, function(err) {
      if (err)
        ret(err)
    }));

  };

  delete(skillLocation, skillIdentifier) {
    return new Promise((res, ret) => db.run(`DELETE FROM Skills WHERE ${skillLocation}="${skillIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  update(skillLocation, skillIdentifier, selectedColumn, newContent) {
    return new Promise((res, ret) => db.each(`UPDATE Skills SET ${selectedColumn}="${newContent}" WHERE ${skillLocation}="${skillIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  get(skillLocation, skillIdentifier) {
    return new Promise((res, ret) => db.get(`SELECT * FROM Skills WHERE ${skillLocation}="${skillIdentifier}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };
}

exports.Skill_DB = Skill_DB;
