const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

// const https = require('https');
// const fs = require('fs');
// const key = fs.readFileSync('./key.pem');
// const cert = fs.readFileSync('./cert.pem');

const app = express(); // create express app
// const server = https.createServer({key: key, cert: cert }, app);
const port = process.env.PORT || 3001; // Setup server port

app.use(cors({ origin: '*' })); // Разрешаем корс методы


app.use(bodyParser.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json
app.get('/', (req, res) => {
    res.send("Hello World");
}); // define a root route

const taskRouter = require('./routes/taskRouter') // Require employee routes
app.use('/api/v1/tasks', taskRouter) // using as middleware
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

// server.
app.listen(port, () => { console.log(`Server is listening on port ${port}`) }); // listen for requests