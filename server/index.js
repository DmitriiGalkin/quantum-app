const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;

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


const employeeRoutes = require('./routes/userRouter') // Require employee routes
app.use('/api/v1/employees', employeeRoutes) // using as middleware
const mainRouter = require('./routes/mainRouter') // Require employee routes
app.use('/api/v1/main', mainRouter) // using as middleware

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});