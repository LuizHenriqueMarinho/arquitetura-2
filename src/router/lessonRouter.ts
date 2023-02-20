import express from "express"
import { LessonController } from "../controller/LessonController"

export const lessonRouter = express.Router()

const lessonController = new LessonController()

lessonRouter.get("/", lessonController.getLessons)
lessonRouter.post("/", lessonController.createLesson)