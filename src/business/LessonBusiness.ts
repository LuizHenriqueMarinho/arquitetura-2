import { LessonDatabase } from "../database/LessonDatabase"
import { BadReqauestError } from "../errors/BadRequestError"
import { Lesson } from "../models/Lesson"
import { LessonDB } from "../types"

export class LessonBusiness {
    public getLessons = async (q: string | undefined) => {
        const lessonDatabase = new LessonDatabase()
        const lessonsDB = await lessonDatabase.findLessons(q)

        const lessons: Lesson[] = lessonsDB.map((LessonDB) => new Lesson(
            LessonDB.id,
            LessonDB.amount,
            LessonDB.level,
            LessonDB.course_id
        ))

        return lessons
    }

    public createlesson = async (input: any) => {
        const { id, amount, level, course_id} = input

        if (typeof id !== "string") {
            throw new BadReqauestError("'id' deve ser string")
        }

        if (typeof amount !== "number") {
            throw new BadReqauestError("'quantidade' deve ser número")
        }


        const lessonDatabase = new LessonDatabase()
        const lessonDBExists = await lessonDatabase.findLessonById(id)

        if (lessonDBExists) {
            throw new BadReqauestError("'id' já existe")
        }

        const newLesson = new Lesson(
            id,
            amount,
            level,
            course_id
        ) 

        const newLessonDB: LessonDB = {
            id: newLesson.getId(),
            amount: newLesson.getAmount(),
            level: newLesson.getLevel(),
            course_id: newLesson.getCourseId()
        }

        await lessonDatabase.insertLesson(newLessonDB)

        const output = {
            message: "Cadastro realizado com sucesso",
            lesson: newLesson
        }

        return output
    }
}