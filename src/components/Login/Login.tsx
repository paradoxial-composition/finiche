import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../api/api';
import { saveTokenInSession, getTokenFromSession } from '../../helpers';

const Login = () => {
    const [userCredentials, setUserCredentials] = useState({username: '', password: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = getTokenFromSession();
        if(token) {
            navigate('/searchResult');
        }
    }, []);

    const handleAuthenticate = async () => {
        setIsLoading(true);

        const response = await authenticate(userCredentials);
        if(response.err) {
            setErrorMessage(response.err);
        } else {
            saveTokenInSession(response.token);
            navigate('/searchResult');
        }

        setIsLoading(false);
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='w-fit p-1 text-center text-4xl uppercase'>Finiche</h1>
            <span className='w-fit p-1 mb-2 text-center'>Un coin pour vos Film niche ;)</span>
            <div className='w-4/5 max-w-lg flex flex-col items-center p-2 my-2 '>
                <input 
                    className={'w-4/5 h-10 border border-slate-300 bg-black px-2 pl-3 my-2 rounded-lg' + (isLoading ? ' opacity-20': '') }
                    placeholder='Identifiant Canal+'
                    onChange={(event) => setUserCredentials({...userCredentials, username: event.target.value})}
                    disabled={isLoading}
                />
                <input 
                    className={'w-4/5 h-10 border border-slate-300 bg-black px-2 pl-3 my-2 rounded-lg' + (isLoading ? ' opacity-20': '') }
                    placeholder='Mot de passe'
                    type='password'
                    onChange={(event) => setUserCredentials({...userCredentials, password: event.target.value})}
                    disabled={isLoading}
                />
                {errorMessage != '' && (<span className='text-red'>{errorMessage}</span>)}
                <button className='w-32 h-10 bg-pink rounded-lg mt-4' onClick={handleAuthenticate}>Se connecter</button>
            </div>
        </div>
    );
};

export default Login;