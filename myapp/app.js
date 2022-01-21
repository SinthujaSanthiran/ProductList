//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb+srv://myapp:12345@cluster0.9n1rd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database mongodb @27017');
});

//on connection
mongoose.connection.on('error',(err)=>{
    if(err){
console.log('error in database connection: '+ err);
        }
   
});
//port no
const port =3000;

//adding middleware - cors
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

// testing
app.get('/',(req,res)=> {
    res.send("hello");
});

app.listen(port,()=> {
    console.log("server started at port:"+ port);
});
