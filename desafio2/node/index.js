const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    port:"3306",
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql2')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Claudio')`

connection.query(sql);

connection.end()


app.get('/', (req,res) => {
    
    var html = '<h1>Full Cycle</h1>'
    const sql = 'SELECT * FROM nodedb.people;'
    const connection = mysql.createConnection(config)
    connection.query(sql, function (err, result, fields) {
        //console.log(result[0].name)
        for (const item of result) {  
            html = html + '<p>'+item.name+'</p>'
        }
       
        res.send(html)
      });
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})