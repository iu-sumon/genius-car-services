
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    //Axios diye data loaded 
    ;
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://quiet-cove-29243.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url)
                setOrders(data)
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders()
    }, [user])




    return (
        <div>
            <p className='text-center fs-2 text-info'>Your orders:{orders.length}</p>
        </div>
    );
};

export default Orders;