const express = require('express');

const routes = require('./routes');


const { PORT } = require('./config/config');


const app = express();

require('./config/mongoose');
require('./config/express')(app);

app.use(routes);




app.listen(PORT, () => console.log(`Server is running on port ${PORT}....`))