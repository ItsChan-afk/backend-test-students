const express = require('express')
const cors = require('cors')


const app = express()
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true
}));

app.post('/register' , (req, res) => {
    const {username , email , password} = req.body;
    if(!username || !email || !password){
        res.send("Requires Credentials")
    }
    res.send('OK pr dl')
})

app.get('/test' , (req , res) => {
    res.json({message : "Welcome"})
})

app.listen(4000)    