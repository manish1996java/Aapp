const http = require('http');
const app = require('./backend/app');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = process.env.PORT || 7700;
app.set('port',port);

const server = http.createServer(app)
server.on('error',(error)=>{
    if(error.syscall !== "listen"){
        throw error;
    }
    switch(error.code){
        case "EACCESS":
            console.log("Permission denied");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.log("Address already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
})
server.on('listening',()=>{
    console.log("listening")
})
server.listen(port);