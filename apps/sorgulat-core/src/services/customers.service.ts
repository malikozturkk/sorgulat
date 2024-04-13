import { CustomerList, Prisma } from '@prisma/client';
import prisma from '../client';
import { csvToJson } from '../utils/csvTojson';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';

/**
 * Create a user
 * @param {Object} customerListBody
 * @returns {Promise<CustomerList>}
 */
const createCustomerList = async ({ csvString, listName, description } : { csvString: string; listName: string; description: string }, user: Express.User): Promise<CustomerList> => {
  const customers = csvToJson(csvString) as Prisma.CustomerUncheckedCreateNestedManyWithoutCustomerListInput;
  const currentUser = await prisma.user.findUnique({
    where: {
      id: (user as { id: number }).id
    },
  });

  if (customers) {
    const newCustomerList = await prisma.customerList.create({
      data: {
        name: listName,
        description,
        creationDate: new Date(),
        customers,
        organisationId: currentUser?.organisationId!,
      },
    });
    
    await prisma.customer.createMany({
      //@ts-ignore
      data: customers.map(customer => ({
        ...customer,
        customerListId: newCustomerList.id
      }))
    })

    return newCustomerList
  }

  throw new ApiError(httpStatus.BAD_REQUEST, 'Birşeyler ters gitti.');
};

export default {
    createCustomerList,
};

// (WORK IN PROGRESS)