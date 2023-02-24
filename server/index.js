const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3001;

app.use(cors({
    origin: '*'
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

const meetRoutes = require('./routes/meetRouter') // Require employee routes
app.use('/api/v1/meets', meetRoutes) // using as middleware
const projectRoutes = require('./routes/projectRouter') // Require employee routes
app.use('/api/v1/projects', projectRoutes) // using as middleware
const placeRouter = require('./routes/placeRouter') // Require employee routes
app.use('/api/v1/places', placeRouter) // using as middleware
const employeeRoutes = require('./routes/userRouter') // Require employee routes
app.use('/api/v1/users', employeeRoutes) // using as middleware
const mainRouter = require('./routes/mainRouter') // Require employee routes
app.use('/api/v1/main', mainRouter) // using as middleware

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});