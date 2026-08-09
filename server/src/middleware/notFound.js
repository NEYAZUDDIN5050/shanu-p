import { AppError } from '../utils/AppError.js';

export const notFound = (req, _res, next) => {
  next(new AppError(`Not found — ${req.originalUrl}`, 404));
};
