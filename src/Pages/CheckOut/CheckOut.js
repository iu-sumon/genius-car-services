import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)

    const handlePlaceOrder = event => {

        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,

        }
        axios.post('https://quiet-cove-29243.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!');
                    event.target.reset()
                }
            })
    }



    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center text-primary'>Please order :{service.name}</h1>

            <form onSubmit={handlePlaceOrder}>

                <input className='w-100 mb-2' type="text" name='name' value={user?.displayName} placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name='email' value={user?.email} placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='phone' required />
                <br />
                <div className='text-center'>
                    <input className='btn btn-primary' type="submit" value='Place Order' />
                </div>

            </form>
        </div>
    );
};

export default CheckOut;