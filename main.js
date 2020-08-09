let express = require ('express')

let app = new express()

const port = 3000
app.use(express.static('public'))


app.listen(port, ()=>{
    console.log('server running on', port)
})