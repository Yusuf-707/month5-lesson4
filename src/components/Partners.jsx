import React from 'react';
import PartnerCard from '../ui/PartnerCard';
import partner1 from '../img/partner1.png'
const Partners = () => {
    return (
        <div>
            <div className='Partners'>
                <PartnerCard img={<partner1 />} />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
            </div>
        </div>
    );
}

export default Partners;
