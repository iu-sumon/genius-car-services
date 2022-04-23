 
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
  const [services]=useServices()

    console.log(services);
    return (
        <div id="services" className='mt-5'>
            <h1 className='services-title'>Our Services :{services.length}</h1>
           <div className='service-container '>
           {
                services.map(service=><Service
                service={service}
                key={service._id}
                
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;