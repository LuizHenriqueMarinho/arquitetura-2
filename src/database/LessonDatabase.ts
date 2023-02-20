import { LessonDB } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class LessonDatabase extends BaseDatabase {
    public static TABLE_LESSONS = "lessons"

    public async findLessons(q: string | undefined) {
        let lessonsDB

        const result: LessonDB[] = await BaseDatabase
            .connection(LessonDatabase.TABLE_LESSONS)

        lessonsDB = result
        return lessonsDB
    }

    public async findLessonById(id: string) {
        const [ lessonDB ]: LessonDB[] | undefined[] = await BaseDatabase
            .connection(LessonDatabase.TABLE_LESSONS)
            .where({ id })

        return lessonDB
    }

    public async insertLesson(newlessonDB: LessonDB) {
        await BaseDatabase
            .connection(LessonDatabase.TABLE_LESSONS)
            .insert(newlessonDB)
    }
}
