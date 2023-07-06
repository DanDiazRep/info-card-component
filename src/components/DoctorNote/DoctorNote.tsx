import React from "react";
import PatientInformation from "./PatientInformation";
import DoctorComments from "./DoctorComments";
import { type Account } from "~/types/types";

interface DoctorNoteProps {
    account: Account | null;
}

const DoctorNote = (props: DoctorNoteProps) => {
    if (props.account === null) {
        return;
    }

    const account = props.account;
    const report = props.account.reports;

    return (
        <div className="flex flex-col-reverse md:flex-row bg-white w-10/12 rounded-lg overflow-hidden max-w-7xl">
            <div className="flex px-8 lg:px-16 pt-10 bg-indigo-100 lg:min-w-max min-h-full lg:w-1/3 items-center">
                <PatientInformation account={account} />
            </div>
            <div className="flex px-8 py-10 bg-white min-w-96 md:w-2/3">
                <DoctorComments userFirstName={account.userInformation.firstName} report={report} />
            </div>
        </div>
    );
}

export default DoctorNote;
