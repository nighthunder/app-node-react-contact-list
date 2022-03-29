const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mysql = require('mysql')
require('dotenv').config()
const bodyParser = require('body-parser')     

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const port = process.env.PORT;

app.listen(port, () =>{
   console.log(`Barkbark Rest API listening on port ${port}`);
})

app.get("/", async (req, res) => {
    res.json({status: "Minhau! Ready to slay"})
})

app.get("/:id", async (req, res) => {
    const query = "Select * from contact_list WHERE id = ?";
    pool.query(query, [req.params.name], (error, results) =>{
        /*if (!results[0]){
            res.json({status: "Not found!"});
        }else{
            res.json(results[0])
        }*/

        if (error)
            console.log('Connection error: ', error);
    })
})

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: `/clousql/${process.env.INSTANCE_CONNECTION_NAME}`
    
})

