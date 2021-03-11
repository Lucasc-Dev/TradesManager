import { Request, Response } from "express";

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { username, email, password, credits } = request.body;



        return response.json();
    }
}