import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-10 hover:bg-purple-600 p-1 rounded'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;