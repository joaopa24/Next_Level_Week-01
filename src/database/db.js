const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
db.serialize(() => {
  db.run(`
     CREATE TABLE IF NOT EXISTS places (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       image TEXT,
       name TEXT,
       address TEXT,
       address2 TEXT,
       state TEXT,
       city TEXT,
       items TEXT
       );
    `)



  const query = `
    INSERT INTO places (
 image,
 name,
 address,
 address2,
 state,
 city,
 items
    ) VALUES (?,?,?,?,?,?,?);
`
  const values = [
    "https://www.artesanatoereciclagem.com.br/wp-content/uploads/2013/08/Como-fazer-papel-reciclado-caseiro-04.jpg",
    "Papersider",
    "Guilherme Gemballa , Jardim América",
    "N° 260",
    "Santa Catarina",
    "Rio do sul",
    "Resíduos EletrÔnicos, Lâmpadas"
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
  }

  //db.run(query, values, afterInsertData)

  // db.run(`DELETE FROM places WHERE id = ?`, [28], function (err) {
  //if (err) {
  //return console.log(err)
  //}

  //console.log("Registros deletados com sucesso!")
  //})

  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    console.log("Aqui estão seus registros: ")
    console.log(rows)
  })



})


