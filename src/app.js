
const  restify = require('restify');
const serve=restify.createServer();
var model = require("./models/noticiasModel");

//seting
serve.use(restify.plugins.acceptParser(serve.acceptable))
serve.use(restify.plugins.queryParser())
serve.use(restify.plugins.bodyParser())

const users ={
    1:{
        name:'alvaro',
        apellido:'morales'
    },
    2:{
        name:'efrain',
        apellido:'morales'
    }
};
//routes
serve.get('/hola',(req, res, next)=>{
    res.setHeader('Content-Type','application/json');
    res.writeHead(200);
    console.log('a etrado');
    res.end(JSON.stringify(users));
})
//start serve
serve.listen(3000,()=>{
    console.log('Escuchando en http://localhost:3000');
});