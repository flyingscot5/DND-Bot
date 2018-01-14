const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./GameDataBase.db');

class Player_DB {

  create(UserID, UserName) {
    return new Promise((res, ret) => db.run(`INSERT INTO Players VALUES (${UserID}, "${UserName}", 0, ${null}, ${null}, ${null}, ${null}, 0, 0, 0, 0, 0, 0, 0)`, function(err) {
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

  getStats(UserID) {
    return new Promise((res, ret) => db.get(`SELECT
      sum (p.StrBonus + c.classStrBonus + r.raceStrBonus) as StrTotal,
      sum (p.DexBonus + c.classDexBonus + r.raceDexBonus) as DexTotal,
      sum (p.ConBonus + c.classConBonus + r.raceConBonus) as ConTotal,
      sum (p.IntBonus + c.classIntBonus + r.raceIntBonus) as IntTotal,
      sum (p.WisBonus + c.classWisBonus + r.raceWisBonus) as WisTotal,
      sum (p.ChaBonus + c.classChaBonus + r.raceChaBonus) as ChaTotal,
      *
      FROM Players p
        inner join Classes c on c.ID = p.ClassID
        inner join Races r on r.ID = p.RaceID
      where p.ID="${UserID}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };

  getInventory(UserID) {
    return new Promise((res, ret) => db.all(`SELECT count(ItemID) as Quantity,
      i.*, it.*
      FROM Players p
      inner join Inventorys i on i.FK_InvID = p.InvID
      inner join Items it on it.ID = i.ItemID
      where p.ID="${UserID}"
      group by it.ID`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };

}

exports.Player_DB = Player_DB;
