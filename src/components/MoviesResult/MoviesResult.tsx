import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import movies from '../../mocks/movies';
import SortByButton from '../SortButton/SortByButton';
import CardDetails from '../CardDetails/CardDetails';
import { Movie } from '../../local';
import { getAllMovies } from '../../api/api';
import { getTokenFromSession, removeRokenFromSession } from '../../helpers';
import { useNavigate } from 'react-router-dom';

const MoviesResult = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({id: 0});
    const navigate = useNavigate();

    useEffect(() => {
        const token = getTokenFromSession();
        
        if(token) {
            const fetchData =  async () => {
                 const resp = await getAllMovies();
                 console.log('resp fom axios !!', resp)
            };
     
            fetchData();
        } else {
            navigate('/');
        }

    }, []);

    const handleLogout = () => {
        removeRokenFromSession();
        navigate('/');
    };

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
                    <SearchBar />
                </div>
                <div className="w-14 flex flex-col justify-center">
                    <SortByButton />
                </div>
            </div>
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
