  const router = require("express").Router();
  const eventController = require('../controllers/event.controller');

  router
  .get('/allevents/', (req, res)=>{
    console.log('fetching new events from the routes');
    eventController.findAllEvents(req, res)})
  .get('/event/:name', (req,res)=>{eventController.findEventByName(req, res)})
  .get('/activeevents/', (req,res)=>{eventController.findAllActiveEvents(req,res)})
  .post('/newevent/', async (req, res)=>{eventController.createEvent(req, res)})
  .patch('/updateevent/:id', async (req,res)=>{eventController.updateEvent(req, res)})
  .delete('/deleteevent/:id', async (req,res)=>{eventController.deleteEvent(req, res)})
  

module.exports = router;