const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Inventory_DB {

  create(inventoryName, inventoryDesc) {
    return new Promise((res, ret) => db.run(`INSERT INTO Inventorys VALUES (${null}, "${inventoryName}", "${inventoryDesc}")`, function(err) {
      if (err)
        ret(err)
    }));

  };

  delete(inventoryLocation, inventoryIdentifier) {
    return new Promise((res, ret) => db.run(`DELETE FROM Inventorys WHERE ${inventoryLocation}="${inventoryIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  update(inventoryLocation, inventoryIdentifier, selectedColumn, newContent) {
    return new Promise((res, ret) => db.each(`UPDATE Inventorys SET ${selectedColumn}="${newContent}" WHERE ${inventoryLocation}="${inventoryIdentifier}"`, function(err) {
      if (err)
        ret(err)
    }));

  };

  get(inventoryLocation, inventoryIdentifier) {
    return new Promise((res, ret) => db.get(`SELECT * FROM Inventorys WHERE ${inventoryLocation}="${inventoryIdentifier}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };
}

exports.Inventory_DB = Inventory_DB;
