import { BaseError } from "./BaseError";

export class BadReqauestError extends BaseError {
    constructor(
        message: string = "Requisição inválida"
    ){
        super(400, message)
    }
}