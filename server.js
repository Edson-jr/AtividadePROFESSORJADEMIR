const express = require('express')
const app = express()

const routes = require('./router')

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
	return res.send('Hello World!')
})

app.listen(3000)