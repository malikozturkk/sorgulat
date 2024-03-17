import Joi from 'joi';
import { password } from './custom.validation';

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.object().keys({
      countryCode: Joi.string().required(),
      number: Joi.number().required(),
    }).required(),
    password: Joi.string().required(),
    organisation: Joi.object().keys({
      name: Joi.string().required(),
      address: Joi.string().required(),
    }).required(),
    privacyPolicy: Joi.boolean().required(),
    commercialMsg: Joi.boolean().required(),
  })
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.number().integer()
  })
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.number().integer()
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string()
    })
    .min(1)
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.number().integer()
  })
};

export default {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
