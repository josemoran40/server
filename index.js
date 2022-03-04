const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => res.send('<h1>Software Avanzado - Tarea Práctica 5 - 201807455 - Jose Moran</h1>'))

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT)
})