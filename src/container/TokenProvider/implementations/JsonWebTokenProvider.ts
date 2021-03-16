import { sign } from 'jsonwebtoken';

import IGenerateTokenDTO from '../../../dtos/IGenerateTokenDTO';

import ITokenProvider from "../models/ITokenProvider";

export default class JsonWebToken implements ITokenProvider {
    public async generateToken({ subject, secret, expiresIn }: IGenerateTokenDTO): Promise<string> {
        const token = sign({}, secret, { 
            subject,
            expiresIn,
        });

        return token;
    }
}