// make AppError based on the built in inherited  Error class
class AppError extends Error {
  constructor(message, statusCode) {
    // super class only accepts message as a parameter.
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
