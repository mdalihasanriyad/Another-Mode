import React, { use } from 'react';
import PricingCart from './PricingCart';

const PricingOption = ({ pricingData }) => {

    const pricingMode = use(pricingData);
    console.log(pricingMode);

    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                {
                    pricingMode.gymPackages.map(pricing => (
                        <PricingCart
                            key={pricing.id}
                            pricing={pricing}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default PricingOption;