const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Player_DB {

  create(playerName, playerDesc) {
    return new Promise((res, ret) => db.run(`INSERT INTO Players VALUES (${null}, "${playerName}", "${playerDesc}")`, function(err) {
      if (err)
        ret(err)
    }));

  };

  delete(playerLocation, playerIdentifier) {
    return new Promise((res, ret) => db.run(`DELETE FROM Players WHERE ${playerLocation}="${playerIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  update(playerLocation, playerIdentifier, selectedColumn, newContent) {
    return new Promise((res, ret) => db.each(`UPDATE Players SET ${selectedColumn}="${newContent}" WHERE ${playerLocation}="${playerIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  get(playerLocation, playerIdentifier) {
    return new Promise((res, ret) => db.get(`SELECT * FROM Players WHERE ${playerLocation}="${playerIdentifier}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };
}

exports.Player_DB = Player_DB;
