const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Class_DB {

  create(className, classDesc) {
    return new Promise((res, ret) => db.run(`INSERT INTO Classes VALUES (${null}, "${className}", "${classDesc}", 0, 0, 0, 0, 0, 0)`, function(err) {
      if (err)
        ret(err)
    }));

  };

  delete(classLocation, classIdentifier) {
    return new Promise((res, ret) => db.run(`DELETE FROM Classes WHERE ${classLocation}="${classIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  update(classLocation, classIdentifier, selectedColumn, newContent) {
    return new Promise((res, ret) => db.each(`UPDATE Classes SET ${selectedColumn}="${newContent}" WHERE ${classLocation}="${classIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  get(classLocation, classIdentifier) {
    return new Promise((res, ret) => db.get(`SELECT * FROM Classes WHERE ${classLocation}="${classIdentifier}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };

  getAll() {
    return new Promise((res, ret) => db.all(`SELECT * FROM Classes`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };

}

exports.Class_DB = Class_DB;
