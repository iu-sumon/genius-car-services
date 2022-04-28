import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const { id } = useParams()

    // const [services, setServices] = useState({});
    // useEffect(() => {
    //     const url = `https://quiet-cove-29243.herokuapp.com/service/${id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [id]);


    const handleUpdateService = event => {

        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const photoUrl = event.target.photoUrl.value;

        const updateService = { name, description, price, photoUrl }

        const url = `https://quiet-cove-29243.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateService)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Service Added successfully')
                event.target.reset();
            })
    }
    return (
        <div className='text-center w-25 mx-auto'>

            <h3 className=' text-info'>Updating user....</h3>

            <form className='d-flex flex-column ' onSubmit={handleUpdateService}>

                <input className='mb-3 py-2 rounded-3' type="text" name='name' placeholder='Name' required />
                <textarea className='mb-3 py-2 rounded-3' type="text" name='description' placeholder='description' required />
                <input className='mb-3 py-2 rounded-3' type="number" name='price' placeholder='price' required />

                <input className='mb-3 py-2 rounded-3' type="text" name='photoUrl' placeholder='photo url' required />

                <input className=' py-3 rounded-3' type="submit" value='Update service' />

            </form>


        </div>
    );
};

export default UpdateUser;