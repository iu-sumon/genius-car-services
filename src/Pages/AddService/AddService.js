import React from 'react';
import { useForm } from "react-hook-form"
const AddService = (event) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://quiet-cove-29243.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('Added successfully!')
                console.log(result);
            })

    }

    return (
        <div className='text-center mt-20 w-50 mx-auto'>
            <h2>Please Add a Service....;</h2>
            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)} >
                <input className='mb-3 py-2 rounded-3' placeholder='name'  {...register("name")} />
                <textarea className='mb-3 rounded-3' placeholder='Description' {...register("description")} />
                <input className='py-2 rounded-3 mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='py-2 rounded-3 mb-2' placeholder='photo url' type="text" {...register("img")} />
                <input className='py-3 rounded-3' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;