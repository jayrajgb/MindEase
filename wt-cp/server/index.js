const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '3036',
    database: 'wtcp'
})

app.post('/login', (req, res) =>{
    const name = req.body.name;
    const password = req.body.password;

    db.query('SELECT*FROM credentials WHERE name=? AND password=?', [name, password], (err, result)=>{
        if(err){
            res.send({userfound: false});
        }
        else{
            if(result.length > 0){
                res.send({userfound: true});
            }
            else{
                res.send({userfound: false});
            }
        }
    })
})

app.post('/register', (req, res)=>{
    const name = req.body.name;
    const password = req.body.password;

    db.query('INSERT INTO credentials (name, password) VALUES (?,?)', [name,password], (err, result)=>{
        if(err){
            res.send({registration: false})
        }
        else{
            res.send({registration: true})
        }
    })
})

app.listen(3001, ()=>{
    console.log("Listening at port 3001...")
})
