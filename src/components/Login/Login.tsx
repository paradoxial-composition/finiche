import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userCredentials, setUserCredentials] = useState({login: '', password: ''});
    const navigate = useNavigate();

    const handleAuthenticate = () => {
        console.log('Logging in ..', userCredentials);
        // TODO ADD Authentication async call and error handling
        // Save Auth token in session storage, add the func in a helper.ts file

        navigate('/searchResult');
    };

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='w-fit p-1 text-center text-4xl uppercase'>Finiche</h1>
            <span className='w-fit p-1 mb-2 text-center'>Un coin pour vos Film niche ;)</span>
            <div className='w-4/5 max-w-lg flex flex-col items-center p-2 my-2 '>
                <input 
                    className='w-4/5 h-10 border border-slate-300 bg-black px-2 pl-3 my-2 rounded-lg'
                    placeholder='Identifiant Canal+'
                    onChange={(event) => setUserCredentials({...userCredentials, login: event.target.value})}
                    />
                <input 
                    className='w-4/5 h-10 border border-slate-300 bg-black px-2 pl-3 my-2 rounded-lg' 
                    placeholder='Mot de passe'
                    type='password'
                    onChange={(event) => setUserCredentials({...userCredentials, password: event.target.value})}
                    />
                <button className='w-32 h-10 bg-pink rounded-lg mt-4' onClick={handleAuthenticate}>Se connecter</button>
            </div>
        </div>
    );
};

export default Login;