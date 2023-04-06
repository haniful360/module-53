import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2'>
             <CheckIcon className="h-4 w-4 bg-purple-400 rounded text-white" />
            <span>{feature}</span>
        </div>
    );
};

export default Feature;