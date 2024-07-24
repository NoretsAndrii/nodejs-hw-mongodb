import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const errorDetails = err.details.map((err) => err.message);
    next(
      createHttpError(400, 'Bad Request', {
        errors: errorDetails.join(', '),
      }),
    );
  }
};
