import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least {#limit}',
    'string.max': 'Name should be at most {#limit}',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'email should be a string',
    'string.email': 'must be a valid email',
    'any.required': 'email is required',
  }),
  password: Joi.string().min(3).max(20).required().messages({
    'string.base': 'password should be a string',
    'string.min': 'password should be at least {#limit}',
    'string.max': 'password should be at most {#limit}',
    'any.required': 'password is required',
  }),
});

export const authUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'email should be a string',
    'string.email': 'must be a valid email',
    'any.required': 'email is required',
  }),
  password: Joi.string().min(3).max(20).required().messages({
    'string.base': 'password should be a string',
    'string.min': 'password should be at least {#limit}',
    'string.max': 'password should be at most {#limit}',
    'any.required': 'password is required',
  }),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'email should be a string',
    'string.email': 'must be a valid email',
    'any.required': 'email is required',
  }),
});
