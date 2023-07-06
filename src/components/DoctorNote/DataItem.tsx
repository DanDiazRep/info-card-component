import React from 'react';

interface DataItemProps {
    title: string;
    value: string;
    className?: string;
}

const DataItem = (props: DataItemProps) => {
    return (
        <div className={`mb-4 ${props.className || ""}`}>
            <p className="text-xs font-light text-gray-400 uppercase tracking-tight pb-0.5">{props.title}</p>
            <p className='font-base text text-base tracking-wide'>{props.value}</p>
        </div>
    );
};

export default DataItem;