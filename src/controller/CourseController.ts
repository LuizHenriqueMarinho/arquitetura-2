import { Request, Response } from "express"
import { BaseError } from '../errors/BaseError';
import { CourseBusiness } from './../business/CourseBusiness';

export class CourseController {
    public getCourses = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string | undefined

            const courseBusiness = new CourseBusiness()
            const output = await courseBusiness.getCourses(q)
    
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

    public createCourse = async (req: Request, res: Response) => {
        try {
            const input = {
                id: req.body.id,
                name: req.body.name
            }

            const courseBusiness = new CourseBusiness()
            const output = await courseBusiness.createCourse(input)
    
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