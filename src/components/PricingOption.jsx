import React, { use } from 'react';

const PricingOption = ({pricingData}) => {

    const pricingAata =use(pricingData)
    console.log(pricingAata)
    return (
        <div>
            this is pricing page
        </div>
    );
};

export default PricingOption;