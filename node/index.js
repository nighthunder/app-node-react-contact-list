const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mysql = require('mysql')
require('dotenv').config()
const bodyParser = require('body-parser')     

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const port = process.env.PORT;

app.listen(port, () =>{
   console.log(`Barkbark Rest API listening on port ${port}`);
})

app.get("/", async (req, res) => {
    res.json({status: "Minhau! Ready to slay"})
})

app.get("/contacts/", async (req, res) => {
    const query = "Select * from contact_list";
    pool.query(query, [req.params.name], (error, results) =>{
        if (!results[0]){
            res.json({status: "Not found!"});
            //res.end("oi");
        }else{
            res.json(results)
            //res.end("no");
        }

        if (error) {console.log('Connection error: ', error)}
    })
})

app.get("/contacts/:id", async (req, res) => {
    const query = "Select * from contact_list";
    pool.query(query, [req.params.id], (error, results) =>{
        if (!results[0]){
            res.json({status: "Not found!"});
            //res.end("oi");
        }else{
            res.json(results)
            //res.end("no");
        }

        if (error) {console.log('Connection error: ', error)}
    })
})

app.post("/contacts/add/", async (req, res) => {
    const user_name = String(req.body.name);
    const user_email = String(req.body.email);  
    const user_phone = String(req.body.phone);
    //console.log("BODIEESSS", req.body);
    const query = "Insert into contact_list (id, `name`, email, phone) VALUES(DEFAULT,?,?,?)";
    pool.query(query, [user_name, user_email, user_phone], (error, results) =>{
        if (error) {
            console.log('Connection error: ', error)}
        else{
            if (!results){
                res.json({status: "Not found!"});
                //res.end("oi");
            }else{
                res.json({status: "Contato inserido"})
                //res.end("no");
            }    
        }
    })
})

app.post("/contacts/delete/:id", async (req, res) => {
    const query = "Delete from contact_list where id = ?";
    pool.query(query, [req.params.id], (error, results) =>{
        if (error) {
            console.log('Connection error: ', error)}
        else{
            if (!results){
                res.json({status: "Not found!"});
                //res.end("oi");
            }else{
                res.json({status: "Contato deletado com sucesso."})
                //res.end("no");
            }    
        }
    })
})

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})

