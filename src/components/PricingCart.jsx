import React from 'react';

const PricingCart = ({pricing}) => {
    console.log(pricing)
    return (
        <div className='border-2 border-gray-300 rounded-lg p-4 m-4'>
            <img src={pricing.image} alt={pricing.name} />
            <h2 className='text-3xl'>{pricing.name}</h2>
            <p>{pricing.description}</p>
            <p className='text-2xl'>{pricing.price}</p>
        </div>
    );
};

export default PricingCart;