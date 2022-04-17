import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2 className='text-center text-primary'>This is ServiceDetail !</h2>
            <h3 className='text-center text-primary'>ServiceId: {serviceId}</h3>
            <Link to='/checkout' >
                <Button className='text-center text-primary text-white d-block mx-auto'>Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;