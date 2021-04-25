export default class ApiError extends Error {
  statusCode: number;

  constructor(msg: string) {
    super(msg);
    this.statusCode = 500;
  }

  static create(msg: string) {
    return new ApiError(msg);
  }

  status(statusCode: number) {
    this.statusCode = statusCode;
    return this;
  }
}
