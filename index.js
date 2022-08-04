const express = require('express')
const app = express()
const server = require('http').createServer(app)
const host = '0.0.0.0';
const port = process.env.PORT || 3000
const io = require('socket.io')(server)

// app.get('/', (req, res) => {
//     res.status(200).send('Working')
// })

const path = require('path')
app.use(express.static(path.join(__dirname + '/public')))

io.on('connection', socket => {
    // console.log('Some client connected')
  
    socket.on('chat', message => {
      console.log('From client: ', message)
      io.emit('chat', message)
    })
})

server.listen(port,host, () => {
    console.log(`Server running on port: ${port}`)
})