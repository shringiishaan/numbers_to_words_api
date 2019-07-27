import app from "./app";

const HOST = "0.0.0.0"
const PORT = 5000

const server = app.listen(PORT, HOST,  () => {
    console.log(`API Server is running at http://${HOST}:${PORT}`)
})

export default server