const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')

const productRouters = require('./routes/products')

 mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
      () => {
          const fakeDb = new FakeDb()
          fakeDb.initDb()
        //   fakeDb.seeDb()
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

// app.get('/products',function(req,res){
//     res.json({'sucess':true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT,function(){
    console.log('I am runnuing')
})
// mongodb+srv://test:<password>@cluster0.7yjsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority