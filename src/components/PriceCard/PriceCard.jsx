import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 m-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='font-extrabold text-purple-700 text-5xl'>{price.price}</span>
                <span className='text-2xl font-semibold'>/mon</span>

            </h2>

            <h5 className='text-2xl text-center font-bold'>{price.name}</h5>
            <p className='text-xl underline text-white mb-2'>Features:</p>
            {
                price.features.map((feature,index) =><Feature
                key={index}
                feature ={feature}
                ></Feature> )
            }
            <button className='w-full mt-auto bg-green-500 rounded-lg font-semibold py-2'>Buy Now</button>
        </div>
    );
};

export default PriceCard;