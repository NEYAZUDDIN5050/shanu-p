import { validationResult } from 'express-validator';
import { AppError } from '../utils/AppError.js';

export const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((v) => v.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const message = errors
        .array()
        .map((e) => e.msg)
        .join(', ');
      return next(new AppError(message, 400));
    }
    next();
  };
};
