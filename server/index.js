const express = require('express');
const path = require('path');
var morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(morgan('dev'));


// Priority serve any static files.

//When the user requests /lsc, serve the static files in the dist folder. No need to write middleware to serve corresponding assets, since they are linked in the html. 
app.use('/lsc', express.static(path.join(__dirname, '../dist')))

//Otherwise, serve static files from the react build. 
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

//Answer API requests.
// app.get('/api', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

//All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});