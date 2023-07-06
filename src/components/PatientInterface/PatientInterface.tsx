import React from "react";
import DoctorNote from "../DoctorNote";
import useAccount from "~/hooks/useAccount";
import LoadingSpinner from "../LoadingSpinner";

const PatientInterface = () => {

    const data = useAccount();

    if (data?.account === undefined || data?.account === null) {
        return (
            <LoadingSpinner />
        );
    }

    return (
        <div className="flex items-center justify-center">
            <DoctorNote account={data.account} />
        </div>
    );

}

export default PatientInterface;