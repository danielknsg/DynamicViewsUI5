const express = require('express');

const app = express();

require('./routes/srepMockRoutes')(app);
require('./routes/srepRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);