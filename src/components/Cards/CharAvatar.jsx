import React from 'react'

const CharAvatar = ({ name, width, height, style }) => {
    const getInitials = (name) => {
        if (!name) return '';
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
        return initials.substring(0, 2);
    };

    return (
        <div className={`${width || 'w-12'} ${height || 'h-12'} ${style || " "} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100 `}>
            {getInitials(name)}
        </div>
    )
}

export default CharAvatar