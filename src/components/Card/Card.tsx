import React from 'react';
import PlaceHolderBackground from '../../assets/images/placeholder.jpg';
import { BsStarFill } from 'react-icons/bs';
import { Movie } from '../../local';
import { motion } from 'framer-motion';

interface CardIn {
    movie: Movie;
};

const Card : React.FC<CardIn> = ({ movie }) => {
    const {
        ["IMDB Rating"]: imdbRating,
        ["Title"]: title,
        ["Major Genre"]: majorGenra
    } = movie;

    return (
        <motion.div 
            className='w-64 h-96 flex flex-col justify-end rounded-xl shadow-lg shadow-slate-500/50 bg-cover bg-center m-5 my-5 p-3'
            style={{ backgroundImage: `url(${PlaceHolderBackground})` }}
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
            whileTap={{ scale: 1.5 }}
        >
            <div 
                className='flex flex-row'
                aria-label='rating'
            >
                <BsStarFill 
                    className='mr-2'
                    style={{ color: '#E6BC2F' }}
                    size={16}/>
                {imdbRating?.toString()}
            </div>
            <span>{title}</span>
            <span>{majorGenra}</span>
        </motion.div>
    );
}

export default Card;