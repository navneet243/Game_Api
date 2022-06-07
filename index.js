const express =require('express')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const routes = require('./Router/routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}));

// Routes
app.use(routes)

const PORT = process.env.PORT;
const dbURI = process.env.MONGODB_URL;

// Database Connection
mongoose.connect(dbURI ,{
    useNewUrlParser: true ,useUnifiedTopology: true},
    (err) => {
        if(err) throw err;
        console.log("db connected");
    }
);

app.listen(PORT,()=>{
    console.log("server running at",PORT);
})