import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least {#limit}',
    'string.max': 'Name should be at most {#limit}',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'phoneNumber should be a string',
    'string.min': 'phoneNumber should be at least {#limit}',
    'string.max': 'phoneNumber should be at most {#limit}',
    'any.required': 'phoneNumber is required',
  }),
  email: Joi.string().email().messages({
    'string.base': 'email should be a string',
    'string.email': 'must be a valid email',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'contactType should be a string',
    'any.only': 'contactType must be one of [work, home, personal]',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name should be at least {#limit}',
    'string.max': 'Name should be at most {#limit}',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'phoneNumber should be a string',
    'string.min': 'phoneNumber should be at least {#limit}',
    'string.max': 'phoneNumber should be at most {#limit}',
  }),
  email: Joi.string().email().messages({
    'string.base': 'email should be a string',
    'string.email': 'must be a valid email',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'contactType should be a string',
    'any.only': 'contactType must be one of [work, home, personal]',
  }),
});
