import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import converter from 'convert-rupees-into-words'
import jwt from 'jsonwebtoken'
import key from './key'

const app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use((req, res, next) => {
     if(req.path==='/get_api_key') {
          next()
     }
     else {
          jwt.verify(req.body.token, key.tokenKey, (err, payload) => {
               if(payload && payload===key.tokenKey) {
                    next()
               }
               else {
                    res.status(400).send("Access Denied")
               }
          })
     }
})


app.get("/get_api_key", (req, res) => {
     var token = jwt.sign(key.tokenKey, key.tokenKey)
     res.json({
          token
     })
})

app.post("/to_words", (req, res) => {
     try {
          let number: number = req.body.number
          if (Number.isInteger(number)) {
               res.json({
                    success: true,
                    words: converter(number)
               })
          }
          else 
          res.json({
               success: false,
               error: 'Invalid number in body'
          })
     }
     catch(err) {
          res.json({
               success: false,
               error: err
          })
     }
})

export default app