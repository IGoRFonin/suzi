import React from 'react';

type MoreIconProps = {
    pathClassName?: string;
};

const MoreIcon = ({ pathClassName = '' }: MoreIconProps) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path
                className={pathClassName}
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                fill="#9A99A3"
            />
        </svg>
    );
};

export default MoreIcon;
