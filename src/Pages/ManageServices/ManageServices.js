import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const deleteService = id => {

        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://quiet-cove-29243.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const remaining = services.filter(service => service._id !== id)

                    setServices(remaining)
                });
        }
    }
    return (
        <div className='bg-success py-5'>
            <div className='text-center '>
                <h2 className='mb-5 text-white'>Manage Services </h2>
                {
                    services.map(service => <div
                        key={service._id}
                    >
                        <div className=' border border-2 border-info w-25 mx-auto mb-3 rounded-3 d-flex justify-content-between  py-3 px-3 text-white'>
                            <img className='w-25' src={service.img} alt="" />
                            <h5>{service.name}</h5>

                            <Link to={`/update-service/${service._id}`} className='btn btn-danger me-3'>Update</Link>

                            <button onClick={() => deleteService(service._id)} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;