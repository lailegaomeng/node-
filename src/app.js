import express from 'express'
import config from './config'
import nunjucks from 'nunjucks'
import indexRouter from './routes/index'
import advertRouter from './routes/advert'
import queryString from 'querystring'
import bodyParser from './middlewares/body-parser'
import errLog from './middlewares/error-log'

const app =express()
app.use('/node_modules',express.static(config.node_modules_path))
app.use('/public',express.static(config.public_path))

nunjucks.configure(config.viewPath, {
    autoescape: true,
    express: app,
    noCahce:true
});

//解析处理表单post 请求体中间件
app.use(indexRouter)
app.use(advertRouter)

app.use(bodyParser)

// app.set('views', config.viewPath)
// app.set('view engine','ejs')


 app.listen(3000,()=>{
     console.log('server is running')
 })