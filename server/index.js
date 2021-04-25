const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/index')
const FakeDb = require('./fake-db')

const productRouters = require('./routes/products')
const path = require('path')

 mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
      () => {
        if(process.env.NODE_ENV !== 'production'){
          const fakeDb = new FakeDb()
          // fakeDb.initDb()
        //   fakeDb.seeDb()
        }
      }
  )
// await mongoose.connect(config.DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// })

const app = express()

app.use('/api/v1/products',productRouters)

if(process.env.NODE_ENV === 'production'){
  const appPath = path.join(__dirname, '..','dist','reservation-app')
  app.use(express.static(appPath))
  app.get("*", function(req,res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })

}

// app.get('/products',function(req,res){
//     res.json({'sucess':true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
    console.log('I am runnuing')
})
// mongodb+srv://test:<password>@cluster0.7yjsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority