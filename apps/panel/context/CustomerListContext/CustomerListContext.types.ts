type Gender = 'Male' | 'Female' | 'Other';

export interface CustomerListPayload {
  name: string;
  description?: string;
  customers: CustomerPayload[];
  segments: SegmentPayload[];
}

interface CustomerPayload {
  firstName: string;
  lastName: string;
  email: string;
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

interface SegmentPayload {
  name: string;
  description?: string;
  criteria: string;
}

export interface CustomerListContextType {
  error?: string;
  success?: string;
  loading?: any;
  createCustomerList: (text: object) => void;
}
