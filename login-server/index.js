const express = require('express')

const app = express()

const loginRouter = require('./routes/login')

app.use('/user',loginRouter)


app.listen(3000,()=>{
    console.log('项目已经启动了')
})