import React from "react";
import DoctorSignature from "~/components/DoctorSignature";
import { type Report } from "~/types/types";

interface DoctorCommentsProps {
    userFirstName: string;
    report: Report;
}

const DoctorComments = (props: DoctorCommentsProps) => {

    return (
        <div className="flex flex-col items-left">
            <div className="pb-8 lg:pr-16">
                <p className="pb-8 font-medium">Hello {props.userFirstName},</p>
                <p className="font-light">{props.report.notes}</p>
            </div>
            <DoctorSignature doctor={props.report.doctor} />
        </div>
    );
}

export default DoctorComments;