
const addressRouter = require('./address.route')

function route(app) {
   
    app.use('/address', addressRouter);
    
}
module.exports = route;