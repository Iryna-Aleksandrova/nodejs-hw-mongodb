import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError) {
    const { status = 500, message = 'Something went wrong' } = error;
    res.status(status).json({
      message,
    });
  }
};
