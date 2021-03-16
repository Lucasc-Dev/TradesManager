import { Request, Response } from "express";
import { container } from 'tsyringe';

import AuthenticateUserService from "../services/AuthenticateUserService";

export default class SessionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { username, email, password } = request.body;

        const authenticateUser = container.resolve(AuthenticateUserService);

        const { user, token } = await authenticateUser.execute({ username, email, password });

        return response.json({ user, token });
    }
}