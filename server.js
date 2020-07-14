const database = require('./src/config/batabase');
const CONFIG = require('./src/config/config');
const app = require('./src/app');

database.connect();


app.listen(CONFIG.PORT,function(error){
    if(error) return console.log(error);
    console.log(`El servidor se inicio en el puerto: ${CONFIG.PORT}`)
})