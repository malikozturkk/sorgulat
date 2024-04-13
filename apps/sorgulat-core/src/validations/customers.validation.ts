import Joi from 'joi';

const createCustomerList = {
    body: Joi.object().keys({
        csvString: Joi.string().required(),
        listName: Joi.string().required(),
        description: Joi.string().required(),
    }),
};

const getCustomerList = {
    query: Joi.object().keys({
        id: Joi.number().integer(),
        sortBy: Joi.string(),
    })
};

export default {
    createCustomerList,
    getCustomerList
};
