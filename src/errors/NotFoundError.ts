import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
    constructor(
        message: string = "recurso não encontrado"
    ){
        super(404, message) //referencia ao que tem no extends BaseError
    }
}