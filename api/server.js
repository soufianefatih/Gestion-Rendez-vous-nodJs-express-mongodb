/* -------------------------------------------------------------------------- */
/*                               index || Server                              */
/* -------------------------------------------------------------------------- */

const app= require('./src/app');
const {PORT} = process.env;
const PORTS = PORT || 5000;

require("dotenv").config();
require('./src/config/database')()



app.listen(PORTS,()=>{
console.log(`Server is running on port ${PORT}`);
});

