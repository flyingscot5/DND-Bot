const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Race_DB {

  create(raceName, raceDesc) {
    return new Promise((res, ret) => db.run(`INSERT INTO Races VALUES (${null}, "${raceName}", "${raceDesc}")`, function(err) {
      if (err)
        ret(err)
    }));

  };

  delete(raceLocation, raceIdentifier) {
    return new Promise((res, ret) => db.run(`DELETE FROM Races WHERE ${raceLocation}="${raceIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  update(raceLocation, raceIdentifier, selectedColumn, newContent) {
    return new Promise((res, ret) => db.each(`UPDATE Races SET ${selectedColumn}="${newContent}" WHERE ${raceLocation}="${raceIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  get(raceLocation, raceIdentifier) {
    return new Promise((res, ret) => db.get(`SELECT * FROM Races WHERE ${raceLocation}="${raceIdentifier}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };
}

exports.Race_DB = Race_DB;
