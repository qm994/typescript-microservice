import { CustomError } from "./custom-error";
export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to Database!";
  statusCode = 500;
  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
