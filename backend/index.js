const express = require('express')
const connectDB = require('./db/database')
const ProjectModal = require('./modals/ProjectModal')
const app = express()
const cors = require('cors');

app.use(express.json())
connectDB()
app.use(cors({
    origin: '*'
}));


app.get('/', function (req, res) {
    res.send('API is running successfuly')
})

app.get('/projects', async function (req, res) {
    console.log('getting projects');
    try {
        const data = await ProjectModal.find({})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.listen(5000)
