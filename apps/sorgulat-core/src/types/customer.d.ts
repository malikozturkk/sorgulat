type TCreateCustomerList = {
    id: number;
    name: string;
    description?: string;
    creationDate: Date;
    updatedAt: Date;
    customers: Customer[];
    segments: Segment[];
    organisationId: number;
};

type Customer = {
  id: number;
  customerListId: number;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  age: number;
  gender: Gender;
  location?: string;
  incomeLevel?: string;
  educationLevel?: string;
  websiteTimeSpent?: number;
  pageViewCount?: number;
  purchaseHistory?: string;
  emailOpeningRate?: number;
  clickRate?: number;
  socialMediaInteraction?: any;
  interests?: string;
  lastActivityDate?: Date;
}

type Segment = {
  id: number;
  customerListId: number;
  name: string;
  description?: string;
  criteria: string;
}