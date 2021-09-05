module.exports = mongoose =>{
  const Event = mongoose.model(
    'event',
    mongoose.Schema(
      {
        title: String,
        description: String,
        active: Boolean
      },
      // {timestamps} //tells Mongoose to automatically manage createdAt and updatedAt
    )
  );
  return Event;
};