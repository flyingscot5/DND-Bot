const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Class_DB {

  create(className, classDesc) {
    db.run(`INSERT INTO Classes VALUES (${null}, "${className}", "${classDesc}")`, function(err) {
      if (err)
        console.log(err)
    });

  };

  delete(classLocation, classIdentifier) {
    db.run(`DELETE FROM Classes WHERE ${classLocation}="${classIdentifier}"`, function(err) {
      if (err)
        console.log(err)
    });

  };

  update(classLocation, classIdentifier, selectedColumn, newContent) {
    db.each(`UPDATE Classes SET ${selectedColumn}="${newContent}" WHERE ${classLocation}="${classIdentifier}"`, function(err) {
      if (err)
        console.log(err)
    });

  };

  get(classLocation, classIdentifier) {
    db.get(`SELECT * FROM Classes WHERE ${classLocation}="${classIdentifier}"`, function(err, row) {
      if (err)
        console.log(err)
    });

  };

}

exports.Class_DB = Class_DB;
