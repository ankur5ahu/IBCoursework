import React from "react";

type ChipProps = {
    icon : string,
    label: string;
}

const Chip : React.FC<ChipProps> = ({icon, label } )=>{
    return (
        <div className="inline-flex bg-white rounded-full p-0.5">
            <img src={icon} alt="icon" />
            <div className="text-neutrals-700 text-xs pl-0.5 pr-1">{label}</div>
        </div>
    )
}

export default Chip;