
import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const secret = process.env.JWT_SECRET;
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Extracted token:', token);
    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        throw new UnauthorizedException('Invalid token');
      }
      req['user'] = decoded;
      next();
    });
  }
}