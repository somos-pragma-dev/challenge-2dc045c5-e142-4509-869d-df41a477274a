import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
  public static handle(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
  }
}