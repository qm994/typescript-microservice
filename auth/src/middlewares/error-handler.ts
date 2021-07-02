import express, { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map((error) => {
      return { message: err.message, field: error.param };
    });
    return res.status(400).send({
      errors: formattedErrors,
    });
  }

  if (err instanceof DatabaseConnectionError) {
    console.log("Error is Database Connection Error");
    return res.status(500).send({
      errors: [{ message: err.reason }],
    });
  }
  res.status(400).send({
    errors: [{ message: "Unidentified Error Found!" }],
  });
};
