import React, { useState, useEffect } from 'react';
// import movies from '../../mocks/movies';
import Card from '../../components/Card/Card';
import CardDetails from '../../components/CardDetails/CardDetails';
import { Movie } from '../../local';
import { useNavigate } from 'react-router-dom';

const ViewHistory = () => {
    const [selectedMovie, setSelectedMovie] = useState({id: 0});
    const [showDetails, setShowDetails] = useState(false);
    const [movies, setMovies] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setMovies(JSON.parse(sessionStorage.getItem('recentlyViewed') || '[]'));
    }, [])
    const MovieCards = movies.map((movie: Movie) => (
        <Card 
            key={movie.id as React.Key}
            movie={movie} setSelectedMovie={setSelectedMovie}
            setShowDetails={setShowDetails}
        />
    ));
    
    return (
        <div className='w-full h-full flex flex-col'>
            <div className='w-full h-1/4 flex flex-col md:justify-center'>
                <button 
                    className='w-full h-fit md:w-16 text-pink underline m-auto cursor-pointer md:absolute md:left-12'
                    onClick={() => navigate('/searchResult')}
                >Retour</button>
                <span className='text-3xl m-auto text-pink'>Récemment consultés</span>
            </div>
            <div className='w-full h-3/4 overflow-scroll overflow-x-hidden flex flex-row flex-wrap justify-center md:p-5'>
                {MovieCards}
                {showDetails && (
                    <div className='absolute top-0 left-0'>
                        <CardDetails movie={selectedMovie} setShowDetails={setShowDetails}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewHistory;