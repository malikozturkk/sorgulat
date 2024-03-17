export type TCreateUser = {
    name: string;
    lastName: string;
    email: string;
    phone: {
        countryCode: string;
        number: number;
    };
    password: string;
    organisation: {
        name: string;
        address: string;
    };
    privacyPolicy: boolean;
    commercialMsg: boolean;
}