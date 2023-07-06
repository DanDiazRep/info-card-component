export interface AccountResponse {
    id: string;
    account?: Account | null;
    error?: string;
}

export interface Account {
    id: string;
    createdOn: string;
    userInformation: UserInformation;
    reports: Report;
}

export interface UserInformation {
    lastName: string;
    firstName: string;
    birthday: string;
    gender: string;
    height: number;
    weight: number;
}

export interface Report {
    id: string;
    createdOn: string;
    doctor: Doctor;
    notes: string;
}

export interface Doctor {
    lastName: string;
    firstName: string;
    signature: string;
    profilePicture: string;
    speciality: string;
}