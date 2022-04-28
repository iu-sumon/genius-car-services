 
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    
    return (
        <div>

            <div className='text-center'>
                <h3 className='text-center text-primary'>{service.name}</h3>
                <img className=' text-primary w-25 mx-auto' src={service.img} alt="" />
                <p className='text-center text-primary'>Price:{service.price}</p>
            </div>
            <Link to={`/checkout/${serviceId}`} >

                <Button className='text-center text-primary text-white d-block mx-auto'>Proceed Checkout</Button>

            </Link>
        </div>
    );
};

export default ServiceDetail;