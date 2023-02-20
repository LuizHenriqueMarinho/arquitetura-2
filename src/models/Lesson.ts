export class Lesson {

    constructor(
        private id: string,
        private amount: number,
        private level: string,
        private courseId: string
    ){}
    
    public getCourseId(): string {
        return this.courseId;
    }
    public setCourseId(value: string) {
        this.courseId = value;
    }
    public getLevel(): string {
        return this.level;
    }
    public setLevel(value: string) {
        this.level = value;
    }
    public getAmount(): number {
        return this.amount;
    }
    public setAmount(value: number) {
        this.amount = value;
    }
    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }


}
