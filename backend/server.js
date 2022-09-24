const app = require('./app')
const dotenv = require('dotenv')


dotenv.config({path:'./backend/config/config.env'})


app.listen(3000,()=>{
    console.log(`server is running at ${3000}`)
})