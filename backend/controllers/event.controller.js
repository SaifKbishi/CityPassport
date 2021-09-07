// const bd = require('../models');
// const Event = db.events;
const Event = require('../models/event.model');


const createEvent = async (req, res)=>{
  console.log('creating new event from the controller');
  if(!req.body.title){
    res.status(400).send({message: 'title cannot be empty'});
    return;
  }
  //check if event already exist

  const newEvent = await Event(req.body);
  try{
    await newEvent.save();
    res.status(200).send(newEvent);
  }catch(error){
    console.log('could not create New Event');
    res.status(400).send(error);
 }
};////createEvent

const findAllEvents = async (req, res)=>{
  try{
    const allEvents = await Event.find({});
    res.status(200).send(allEvents);
  }catch(error){
    console.log('could not fetch all events');
    res.status(400).send(error);
  }
};//findAllEvents

const findEventByName = async (req, res)=>{
  const query = {'title': req.params.name};
  const options = {projection: {'title':1}}
  try{
  const eventName = await Event.findOne(query); 
  res.status(200).send(eventName);
 }catch(error){
  console.log('could not find this event', error);
  res.status(400).send(error);
 }
};

const updateEvent = async (req, res)=>{
  try{
  const event2Update = await Event.findByIdAndUpdate(req.params.id, req.body);
  if(!event2Update){
    return res.status(404).send({ message: "Event was NOT updated." });
  }
  res.status(200).send(event2Update);
 }catch(error){
  console.log(`could not update event with name ${req.params.title}`);
  res.status(400).send(error);
 }
};

const deleteEvent = async (req, res)=>{
  try{
  const event2Delete = await Event.findByIdAndDelete(req.params.id);
  if(event2Delete){console.log('event was deleted')}
  res.status(200).send(event2Delete);
 }catch(error){
  console.log(`could not delete event ${req.params.title}`);
  res.status(400).send(error);
 }
};

const findAllActiveEvents = async (req, res)=>{
  try{
  const allActive = await Event.find({active:true})
  res.status(200).send(allActive);
 }catch(error){
  console.log('could not find all active events');
  res.status(400).send(error);
 }
};

const deleteAllEvents = async (req, res)=>{
  try{
  const deleteAllEvents = await Event.deleteMany({});
  res.status(200).send(deleteAllEvents);
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

module.exports ={
  createEvent,
  findAllEvents,
  findEventByName,
  updateEvent,
  deleteEvent,
  findAllActiveEvents,
  // deleteAllEvents
};