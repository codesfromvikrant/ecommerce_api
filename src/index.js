const app = require('./app');
const connect = require('./config/database');
require("dotenv").config();



app.listen(process.env.PORT, async () => {
  console.log('Server is running on port 3000');
  connect();
})