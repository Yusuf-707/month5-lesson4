import React from 'react';
import PartnerCard from '../ui/PartnerCard';
import partner1 from '../img/partner1.png'
import partner2 from '../img/partner2.png'
import partner3 from '../img/partner3.png'
import partner4 from '../img/partner4.png'
const Partners = () => {
    return (
        <div className='container partners-cont'>
            <div className='partners'>
                <PartnerCard img={partner1} />
                <PartnerCard img={partner2} />
                <PartnerCard img={partner3} />
                <PartnerCard img={partner4} />
            </div>
        </div>
    );
}

export default Partners;
