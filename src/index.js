const express =require('express')
require('./db/mongoose')
const multer=require('multer')
const User=require('./models/user')
const Task=require('./models/tasks')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/tasks')


const app =express()
const port =process.env.PORT




app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port,()=>{
    console.log('Server is up on PORT : '+port)
})