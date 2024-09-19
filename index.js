const express = require('express')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors({
    
}))


app.post('/register' , (req, res) => {
    const {username , email , password} = req.body;
    if(!username || !email || !password){
        res.send("Requires Credentials")
    }
    res.send('OK pr dl')
})