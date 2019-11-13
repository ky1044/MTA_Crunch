const express = require('express');
const app = express();

app.listen(1904,()=> console.log("listening at 1904"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));



app.post('/commuterequest',(request,response)=>{
    console.log(request.body);


    var spawn = require("child_process").spawn; 

    var process = spawn('python',["./main.py", 
                            request.body.TrainLine,
                            request.body.StartStation, 
                            request.body.EndStation,
                            request.body.ArrivalTime,
                            ] ); 

    response.json({
        status:"success, more to come!"
    });



});

