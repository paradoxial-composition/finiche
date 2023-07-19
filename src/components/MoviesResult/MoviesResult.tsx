import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import SortByButton from '../SortButton/SortByButton';
import CardDetails from '../CardDetails/CardDetails';
import { Movie } from '../../local';
import { getAllMovies, getSearchResult } from '../../api/api';
import { getTokenFromSession, removeRokenFromSession, handleErrorMessages } from '../../helpers';
import { useNavigate } from 'react-router-dom';

const MoviesResult = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState({id: 0});
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = getTokenFromSession();
        
        if(token) {
            const fetchData =  async () => {
                try {
                    const resp = await getAllMovies();
                    if (resp.response) {
                        setErrorMessage(handleErrorMessages(resp.response.status));
                    }
                    if(resp.data) {
                        setMovies(resp.data);
                    }
                } catch (error) {
                    console.log('Error while getting movies', error)
                };
            };
                
            fetchData();
            setIsLoading(false);
        } else {
            navigate('/');
        }
    }, []);

    const handleLogout = () => {
        removeRokenFromSession();
        navigate('/');
    };

    const handleSubmit = async (value: string) => {
        try {
            const resp = await getSearchResult(value);
            if (resp.response) {
                setErrorMessage(handleErrorMessages(resp.response.status));
            }
            if(resp.data) {
                setMovies(resp.data);
            }
        } catch (error) {
            console.log('Error while getting search result', error)
        };

        setIsLoading(false);
    }

    const MovieCards = movies.map((movie: Movie) => (
        <Card 
            key={movie.id as React.Key}
            movie={movie} setSelectedMovie={setSelectedMovie}
            setShowDetails={setShowDetails}
        />
    ));

    return (
        <div className='w-full h-full flex flex-col justify-center items-center pt-5 px-5'>
            <div className='w-full flex flex-row justify-end pl-5'>
                <button 
                    className=' text-pink hover:color-white cursor-pointer'
                    onClick={handleLogout}
                >Se déconnecter</button>
            </div>
            <div className='my-5 text-center'>
                <h1 className='text-4xl uppercase'>Finiche</h1>
                    <span>Quelle est votre choix pour ce soir ?</span>
            </div>
            <div className='w-full flex flex-row justify-center'>
                <div className="flex-2 w-14">
                    01
                </div>
                <div className="grow max-w-lg">
                    <SearchBar handleSubmit={handleSubmit} isLoading={isLoading}/>
                </div>
                <div className="w-14 flex flex-col justify-center">
                    <SortByButton />
                </div>
            </div>
            {errorMessage != '' && (
                <div className='w-full flex flex-row justify-center mt-5'> 
                    <span className='margin-auto text-red'>{errorMessage}</span>
                </div>
            )}
            <div className='w-full overflow-scroll overflow-x-hidden flex flex-row flex-wrap justify-center p-5 mt-12'>
                {MovieCards}
            </div>
            {showDetails && (
                <CardDetails movie={selectedMovie} setShowDetails={setShowDetails}/>
            )}
        </div>
    );
};

export default MoviesResult;
