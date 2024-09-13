import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, next: NextFunction) {
        const now = new Date().toISOString();
        console.log(`${now} - ${req.method} ${req.url}`);
        next();
    }
}