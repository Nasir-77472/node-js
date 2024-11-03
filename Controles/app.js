const server = require('http');

const taskRoutes=require('../routes/taskRoutes')

const PORT =900;

const HOSTNAME= 'localhost';

const server = http.createServer((req,rees)=> {

    if (req.url.startsWith('tasks')){
        taskRoutes(req,res)
       // todo; implment


    }else{

        res.writeHead(404,{'content-type':'application/json'});
            
        
        res.End(JSON.stringify({ message: 'Route not found'}));
            
        }

});

server.listen(3000,() => {
    Console.log('Server is running on port 3000');

});





 
 
