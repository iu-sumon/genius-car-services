import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(
        auth
    );
    let location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    //user k console korle providerData paowa jabe
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {


        return <div className='h-15'>

            <h3 className='text-red text-center'>your email is not verified</h3>
            <h5 className='text-success text-center'>Please verify your email</h5>
            <div className='text-center'>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    sent  Verify email
                </button>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    }
    return children;
};

export default RequireAuth;