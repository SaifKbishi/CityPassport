const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
  title: String,
  description: String,
  active: Boolean
});

module.exports = mongoose.model('Event', Event);

// module.exports = mongoose =>{
//   const Event = mongoose.model(
//     'event',
//     mongoose.Schema(
//       {
//         title: String,
//         description: String,
//         active: Boolean
//       },
//       // {timestamps} //tells Mongoose to automatically manage createdAt and updatedAt
//     )
//   );
//   return Event;
// };