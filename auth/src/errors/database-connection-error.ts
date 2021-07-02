export class DatabaseConnectionError extends Error {
  reason = "Error connecting to Database!";
  constructor() {
    super();
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
