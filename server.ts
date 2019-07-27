import app from "./app"
import https from 'https'
import fs from 'fs'

const HOST = "0.0.0.0"
const httpPORT = 5000
const httpsPORT = 5001

let credentials = {
     key: fs.readFileSync('./key.pem'),
     cert: fs.readFileSync('./cert.pem'),
     passphrase: 'numberstowords'
}

// const httpsServer = https.createServer(credentials, app).listen(httpPORT, HOST,  () => {
//      console.log(`API Server is running at https://${HOST}:${httpPORT}`)
// })

const server = app.listen(httpPORT, HOST,  () => {
     console.log(`API Server is running at http://${HOST}:${httpPORT}`)
})