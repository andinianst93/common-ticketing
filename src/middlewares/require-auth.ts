import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../errors/forbidden-error";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new ForbiddenError();
  }

  next();
};
