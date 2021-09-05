const bd = require('../models');
const Event = db.events;

const createEvent = (req, res)=>{
  try{
  const  = await Event
  res.status(200).send();
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

const findAllEvents = (req, res)=>{
  try{
  const  = await Event
  res.status(200).send();
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

const findEventByName = (req, res)=>{
  try{
  const  = await Event
  res.status(200).send();
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

const updateEvent = (req, res)=>{
  try{
  const  = await Event
  res.status(200).send();
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

const deleteEvent = (req, res)=>{
  try{
  const  = await Event
  res.status(200).send();
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

const findAllActiveEvents = (req, res)=>{
  try{
  const  = await Event
  res.status(200).send();
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

const deleteAllEvents = (req, res)=>{
  try{
  const  = await Event
  res.status(200).send();
 }catch(error){
  console.log('could not ');
  res.status(400).send(error);
 }
};

module.exports ={
  createEvent,
  findAllEvents,
  findEvent,
  updateEvent,
  deleteEvent,
  findAllActiveEvents,
  deleteAllEvents
};