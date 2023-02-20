import { Request, Response } from "express"
import { LessonBusiness } from "../business/LessonBusiness"
import { BaseError } from "../errors/BaseError"

export class LessonController {
    public getLessons = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined

            const lessonBusiness = new LessonBusiness()
            const output = await lessonBusiness.getLessons(q)
    
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
    
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message) 
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public createLesson = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.body.id,
                amount: req.body.amount,
                level: req.body.level,
                course_id: req.body.course_id
            }

            const lessonBusiness = new LessonBusiness()
            const output = await lessonBusiness.createlesson(input)
    
            res.status(201).send(output)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}