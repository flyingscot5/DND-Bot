const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Item_DB {

  create(itemName, itemDesc) {
    return new Promise((res, ret) => db.run(`INSERT INTO Items VALUES (${null}, "${itemName}", "${itemDesc}")`, function(err) {
      if (err)
        ret(err)
    }));

  };

  delete(itemLocation, itemIdentifier) {
    return new Promise((res, ret) => db.run(`DELETE FROM Items WHERE ${itemLocation}="${itemIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  update(itemLocation, itemIdentifier, selectedColumn, newContent) {
    return new Promise((res, ret) => db.each(`UPDATE Items SET ${selectedColumn}="${newContent}" WHERE ${itemLocation}="${itemIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  get(itemLocation, itemIdentifier) {
    return new Promise((res, ret) => db.get(`SELECT * FROM Items WHERE ${itemLocation}="${itemIdentifier}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };
}

exports.Item_DB = Item_DB;
