var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var log = require('./lib/logger')('pingRoute');

function pingRoute() {
    var ping = new express.Router();
    ping.use(cors());
    ping.use(bodyParser());


    // GET REST endpoint - query params may or may not be populated
    ping.get('/', function(req, res) {
        log.info('In ping route GET / req.query=%s', req.query);
        var world = req.query && req.query.hello ? req.query.hello : 'World';

        // see http://expressjs.com/4x/api.html#res.json
        res.json({
            msg: 'Hello ' + world,
            count: req.query.count
        });
    });

    return ping;
}

module.exports = pingRoute;