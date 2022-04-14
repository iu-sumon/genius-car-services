import React from 'react';
import notfound from '../../../images/notfound.avif'
const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-content-center'>
           <div>
           <h3>Sleeping time !.Do not distrub.!</h3>
            <img src={notfound} alt="" />
           </div>
        </div>
    );
};

export default NotFound;