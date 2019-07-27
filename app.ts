import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import converter from 'convert-rupees-into-words'

const API_KEY = ""

const app = express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
     res.json({
          key: API_KEY
     })
})

app.get("/get_api_key", (req, res) => {
     res.json({
          data: API_KEY
     })
})

app.post("/to_words", (req, res) => {
     let number: number = parseInt(req.body.number)
     if(typeof number === "number") {
          res.json({
               success: true,
               words: converter(number)
          })
     }
     else {
          res.json({
               success: false,
               error: ""
          })
     }
})

export default app