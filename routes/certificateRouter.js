const express = require('express');
const bodyParser = require('body-parser');

const certificateRouter = express.Router();

certificateRouter.use(bodyParser.json());

certificateRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the certificates to you!');
})
.post((req, res, next) => {
    res.end('Will add the certificate: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /certificates');
})
.delete((req, res, next) => {
    res.end('Deleting all certificates');
});

certificateRouter.route('/:certificateId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the certificate: ' + req.params.certificateId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /certificates/'+ req.params.certificateId);
})
.put((req, res, next) => {
  res.write('Updating the certificate: ' + req.params.certificateId + '\n');
  res.end('Will update the certificate: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting certificate: ' + req.params.certificateId);
});

module.exports = certificateRouter;