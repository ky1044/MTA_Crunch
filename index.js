const express = require('express');
const app = express();

app.listen(1904,()=> console.log("listening at 1904"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));


// we will eventually want to use this format for listening to requests, but for now will use the below functions 
// app.get('/api',(request,response)=>{

//     database.find({},(err,data)=>{
//         response.json(data)
//     });
// })

//http://localhost:1904/commute?StartStation=Astor%20Pl&EndStation=91st%20St&ArrivalTime=0900
//is a valid example
app.get('/commute', callName); 

function callName(req, res) { 
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
    // so, first name = Mike and last name = Will 
    var process = spawn('python',["./main.py", 
                            req.query.StartStation, 
                            req.query.EndStation,
                            req.query.ArrivalTime,
                            ] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 
}