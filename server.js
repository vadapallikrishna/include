#! /usr/bin/env node
const express = require('express');
const hbs = require('hbs');
const getConfig = require('./index').getConfig;

const app = express();

const config = getConfig();

app.set('view engine', 'hbs');
app.set('views', 'pages/')
app.use('/static', express.static('static'));

for(page in config.pages) {
    app.get(config.pages[page].path, function(req,res){
        res.render(config.pages[page].template);  
    });
}

app.listen(process.env.PORT || 3000, () => "server is running")




