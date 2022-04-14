import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h2 className='text-center text-primary'>This is ServiceDetail !</h2>
            <h3 className='text-center text-primary'>ServiceId: {serviceId}</h3>
        </div>
    );
};

export default ServiceDetail;