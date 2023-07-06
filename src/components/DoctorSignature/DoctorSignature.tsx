import React from "react";
import Image from "next/image";
import { type Doctor } from "~/types/types";

interface DoctorSignatureProps {
    doctor: Doctor;
}

const DoctorSignature = (props: DoctorSignatureProps) => {

    const doctorsName = `Dr. ${props.doctor.firstName} ${props.doctor.lastName}`;


    return (
        <div className="flex flex-row">
            <div className="rounded-full overflow-hidden mr-4 w-20 h-20">
                <Image
                    src={props.doctor.profilePicture}
                    alt="signature"
                    width={80}
                    height={80}
                    className="object-cover height-full"
                />
            </div>
            <div className="flex flex-col">
                <div className="w-20 h-10 mb-1">
                    <Image src={props.doctor.signature} alt="signature" width={80} height={80} />
                </div>
                <p className="text-sm font-base mb-0.5 leading-none">{doctorsName}</p>
                <p className="text-xs font-light">{props.doctor.speciality}</p>
            </div>
        </div>
    );
}

export default DoctorSignature;