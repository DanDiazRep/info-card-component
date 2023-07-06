import React from "react";
import DataItem from "./DataItem";
import { type Account, type UserInformation, type Report } from "~/types/types";
import { formatBirthday, formatDate, formatDateWithTime } from "~/utils/dateUtils";

interface PatientInformationProps {
    account: Account;
}

const PatientInformation = (props: PatientInformationProps) => {
    if (props === null) {
        return;
    }
    const account: Account = props.account;
    const user: UserInformation = props.account.userInformation;
    const report: Report = props.account.reports;
    const accountCreationDate = formatDate(account.createdOn);
    const userBirthday = formatBirthday(user.birthday);
    const reportCreationDate = formatDateWithTime(report.createdOn);
    const userHeight = `${user.height.toString()} cm`;
    const userWeight = `${user.weight.toString()} Kg`;


    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <p className="text-blue-800 text-4xl font-medium pb-1">{user.firstName} {user.lastName}</p>
                <p className="text-xs text-gray-400">
                    ERSTELLT AM <span className="text-blue-800">{accountCreationDate}</span>
                </p>
            </div>
            <hr className="border-0 bg-gray-400 h-px my-4" />
            <div className="grid grid-cols-2 p-0">
                <DataItem title="GESCHLECHT" value={user.gender} />
                <DataItem title="GEBURTSDATUM" value={userBirthday} />
                <DataItem title="HÖHE" value={userHeight} />
                <DataItem title="GEWICHT" value={userWeight} />
            </div>
            <DataItem title="GESAMMELT BEI" value={reportCreationDate} />
            <DataItem title="BERICHTSNUMMER" value={report.id} />
        </div>
    );
}

export default PatientInformation;