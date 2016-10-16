const express = require('express');
const path = require('path');
const Mustache = require('mustache-express');

const app = express();
const port = process.env.PORT || 3000;
const controllers = require(path.join(__dirname, 'app/controllers'));

/* Set view engine to Mustache and locate views */
app.engine('mustache', Mustache());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '/app/views'));

/* Set static files location */
app.use('/public', express.static(path.join(__dirname, 'app/public')));

/* Set routers from controllers */
app.use(controllers);

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}/`);
})
