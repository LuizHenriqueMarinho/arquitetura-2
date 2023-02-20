import express from 'express'
import cors from 'cors'
import { courseRouter } from './router/courseRouter'
import { lessonRouter } from './router/lessonRouter'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.use("/courses", courseRouter) //use do express

app.use("/lessons", lessonRouter) 

