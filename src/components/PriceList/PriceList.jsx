import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold p-3 bg-purple-400 text-center mt-12'>Awesome Price List</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6'>
            {
                prices.map(price => <PriceCard
                    key={price.id}
                    price={price}>
                </PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;