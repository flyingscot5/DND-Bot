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

  getStats(playerLocation, playerIdentifier) {
    return new Promise((res, ret) => db.get(`SELECT
      sum (p.StrBonus + c.classStrBonus + r.raceStrBonus) as StrTotal,
      sum (p.DexBonus + c.classDexBonus + r.raceDexBonus) as DexTotal,
      sum (p.ConBonus + c.classConBonus + r.raceConBonus) as ConTotal,
      sum (p.IntBonus + c.classIntBonus + r.raceIntBonus) as IntTotal,
      sum (p.WisBonus + c.classWisBonus + r.raceWisBonus) as WisTotal,
      sum (p.ChaBonus + c.classChaBonus + r.raceChaBonus) as ChaTotal,
      *
      FROM Players p
        inner join Inventorys i on i.ID = p.InvID
        inner join Classes c on c.ID = p.ClassID
        inner join Races r on r.ID = p.RaceID
        inner join Skills s on s.ID = p.SkillsID
      where p.${playerLocation}="${playerIdentifier}"`, function(err, row) {
      if (err)
        ret(err)
      else
        res(row)
    }));

  };
}

exports.Player_DB = Player_DB;
