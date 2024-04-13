import express from 'express';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import { customerValidation } from '../../validations';
import customerController from '../../controllers/customers.controller';

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(customerValidation.createCustomerList), customerController.createCustomerList)
  .get(auth('getCustomers'), validate(customerValidation.getCustomerList), customerController.getCustomerList);

export default router;

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Müşteri Listesi yönetimi ve erişimi
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a Customer List
 *     description: Oturum açmış olan kullanıcının kurumu için bir müşteri listesi oluşturur. req body içerisine yalnızca ".csv" formatında bir string kabul eder.
 *     tags: [Customers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - listName
 *               - description
 *               - csvString
 *             properties:
 *               listName:
 *                 type: string
 *                 default: Müşteri Listesi 1
 *               description:
 *                 type: string
 *                 default: kurumumuza ait müşteri listemiz
 *               csvString:
 *                 type: string
 *                 default: "firstName,lastName,email,phone,age,gender,location,incomeLevel,educationLevel,websiteTimeSpent,pageViewCount,purchaseHistory,emailOpeningRate,clickRate,interests,lastActivityDate\nJohn,Doe,johndoe@example.com,555-1234,30,male,New York,High,Bachelor's Degree,120,50,1,Yes,0.2,\"Sports, Technology\",2024-04-01T08:00:00Z\nJane,Smith,janesmith@example.com,555-5678,25,female,Los Angeles,Medium,High School,180,70,0.5,No,0.1,\"Fashion, Travel\",2024-04-02T10:30:00Z\nDavid,Johnson,davidjohnson@example.com,555-9012,40,male,Chicago,High,Master's Degree,90,30,1,Yes,0.3,\"Technology, Music\",2024-04-03T13:45:00Z\nEmily,Brown,emilybrown@example.com,555-3456,35,female,Miami,Low,Associate's Degree,150,60,0.8,Yes,0.2,\"Food, Photography\",2024-04-04T16:20:00Z\nMichael,Miller,michaelmiller@example.com,555-7890,28,male,San Francisco,Medium,Bachelor's Degree,200,80,0.9,No,0.15,\"Technology, Business\",2024-04-05T19:10:00Z\""
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/CustomerList'
 *       "400":
 *         $ref: '#/components/responses/WrongFileFormat'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Customer Lists
 *     description: Oturum açmış olan kullanıcının kurumuna bağlı tüm müşteri listelerini getirir. 
 *     tags: [Customers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         id: customerListId
 *         schema:
 *           type: string
 *         description: Customer List Id
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: form of fieldları query'e göre sırala :desc/asc (ex. name:asc)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CustomerList'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
