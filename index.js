require('./models/db')

const express=require('express')
const path=require('path')
const handlebars=require('handlebars')
const exphbs=require('express-handlebars')
const {allowInsecurePrototypeAccess}=require('@handlebars/allow-prototype-access')
const bodyparser=require('body-parser')
const { extname } = require('path')

const studentController=require('./Controllers/studentControllers')

var app=express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/", (req,res)=>{
    res.send(' <h1>Welcome <h1> <h2>here is the link to the database <a href="/student/list"> Database </a></h2>')
})

app.set('views',path.join(__dirname,'/views/'))

app.engine('hbs',
   exphbs({
    handlebars:allowInsecurePrototypeAccess(handlebars),
    extname:'hbs',
    defaultLayout:'MainLayout',
    layoutsDir:__dirname + '/views/hbs',
})
)

app.listen(3000,()=>{
   console.log('server started at the port 3000')

})

app.use('/student',studentController)