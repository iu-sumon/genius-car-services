import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
             fetch(url)
            .then(res => res.json())
            .then(data => setService(data));


    }, [serviceId])
    return (
        <div>
            <h2 className='text-center text-primary'>This is ServiceDetail !</h2>
            <h3 className='text-center text-primary'>:{service.name}</h3>
            <Link to='/checkout' >
                <Button className='text-center text-primary text-white d-block mx-auto'>Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;