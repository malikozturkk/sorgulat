import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import customerService from '../services/customers.service';

const createCustomerList = catchAsync(async (req, res) => {
  const customerList = await customerService.createCustomerList(req.body, req.user!);
  res.status(httpStatus.CREATED).send(customerList);
});

const getCustomerList = catchAsync(async (req, res) => {
    res.status(httpStatus.REQUEST_TIMEOUT).send([]);
});

export default {
  createCustomerList,
  getCustomerList
};
