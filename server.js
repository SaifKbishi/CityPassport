const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

// connect to database
const db = require('./backend/models/mongoose');
db.mongoose.connect(process.env.REACT_APP_DB_URL,
{
 useNewUrlParser: true,
//  useCreateIndex: true,
 useUnifiedTopology: true,
//  useFindAndModify: false, 
}).then(()=>{
  console.log('Connected to the DB!');
}).catch(error => {
  console.log('Cannot connect to DB!', error);
  process.exit();
});

// exclusing dotenv config from production
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// CORS Middleware
app.use(cors());

// express middleware handling the body parsing 
app.use(express.json());

// express middleware handling the form parsing
app.use(express.urlencoded({extended: false}));

// middleware for handling sample api routes
// app.use('/api/v1', require('./backend/routes/api/crud'));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CityPassport application." });
});
        
// create static assets from react code for production only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

// use port from environment variables for production
const PORT = process.env.PORT || 3014;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})