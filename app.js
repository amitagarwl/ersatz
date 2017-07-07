console.log("Starting Program!");
var express = require('express');
var fs = require('fs');
var app=express();
var config = require('./app/config/config.js');
var morgan = require('morgan');
morgan('tiny');

var server = app.listen(9006, listening);
app.use(morgan('combined'))

function listening(){

  console.log(" listening on port 9006 . . . ");
  console.log(config);
}


app.use('/ersatz/admin/healthcheck', require('express-healthcheck')({
    healthy: function () {
        return { status: 'ok' };
    }
}));

app.post(config.post.endpoint, postCallback);
app.get(config.get.endpoint,getCallback);
app.put(config.put.endpoint,putCallback);

function postCallback(req, res){
    var headerValue=req.header(config.post.headerKey);
    if(config.post.headerRequired && headerValue!=config.post.headerValue){
        res.status(401).json({"Action" : "Not Authorized"});
    }else{
        var response = fs.readFileSync(config.post.response);
        res.status(200).json(JSON.parse(response));
    }
}

function getCallback(req, res){
    var headerValue=req.header(config.get.headerKey);
    if(config.get.headerRequired && headerValue!=config.get.headerValue){
            res.status(401).json({"Action" : "Not Authorized"});
        }else{
            var response = fs.readFileSync(config.get.response);
            res.status(200).json(JSON.parse(response));
        }

}

function putCallback(req, res){
    var headerValue=req.header(config.put.headerKey);
    if(config.put.headerRequired && headerValue!=config.put.headerValue){
               res.status(401).json({"Action" : "Not Authorized"});
            }else{
                if(0 === config.put.response.length){
                    var userId = req.params.userId;
                    res.status(200).json({"Action" : "Updated Details for user - " + userId})
                }
            }
}

