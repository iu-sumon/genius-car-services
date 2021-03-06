import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, loading1, githubError] = useSignInWithGithub(auth);

    const [token]=useToken(googleUser||githubUser)
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";





    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (googleError || githubError) {

        errorElement = <p className='text-danger text-center'>Error: {googleError?.message} {githubError?.message}</p>

    }

    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}  {/*show error */}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;