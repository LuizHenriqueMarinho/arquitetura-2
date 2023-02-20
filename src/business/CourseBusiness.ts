import { CourseDatabase } from "../database/CourseDatabase"
import { BadReqauestError } from "../errors/BadRequestError"
import { Course } from "../models/Course"
import { CourseDB } from "../types"

export class CourseBusiness {
    public getCourses = async (q: string | undefined) => {
        const courseDatabase = new CourseDatabase()
        const coursesDB = await courseDatabase.findCourses(q)

        const courses: Course[] = coursesDB.map((courseDB) => new Course(
            courseDB.id,
            courseDB.name
        ))

        return courses
    }

    public createCourse = async (input: any) => {
        const { id, name, lesson_id } = input

        if (typeof id !== "string") {
            throw new BadReqauestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadReqauestError("'name' deve ser string")
        }


        const courseDatabase = new CourseDatabase()
        const courseDBExists = await courseDatabase.findCourseById(id)

        if (courseDBExists) {
            throw new BadReqauestError("'id' já existe")
        }

        const newCourse = new Course(
            id,
            name
        ) 

        const newCourseDB: CourseDB = {
            id: newCourse.getId(),
            name: newCourse.getName()
        }

        await courseDatabase.insertCourse(newCourseDB)

        const output = {
            message: "Cadastro realizado com sucesso",
            course: newCourse
        }

        return output
    }
}