const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Class_DB {

  create() {

  };

  delete() {

  };

  update(classLocation, classIdentifier, selectedColumn, newContent) {
    db.each(`UPDATE Classes SET ${selectedColumn}="${newContent}" WHERE ${classLocation}=${classIdentifier}`, function(err) {
      if (err)
        console.log(err)
    })
  };

  get() {

  };

}

exports.Class_DB = Class_DB;
