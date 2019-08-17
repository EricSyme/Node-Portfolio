const express = require('express');
const bodyParser = require('body-parser');

const menuRouter = express.Router();

menuRouter.use(bodyParser.json());

menuRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the menu items to you!');
})
.post((req, res, next) => {
    res.end('Will add the menu item: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /menu');
})
.delete((req, res, next) => {
    res.end('Deleting all menu items');
});

menuRouter.route('/:menuId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the menu item: ' + req.params.menuId +' to you!');
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /menu/'+ req.params.menuId);
})
.put((req, res, next) => {
  res.write('Updating the menu item: ' + req.params.menuId + '\n');
  res.end('Will update the menu item: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting menu item: ' + req.params.menuId);
});

module.exports = menuRouter;