import React, { Dispatch, SetStateAction, useRef } from 'react';
import { Movie } from '../../local';
import DetailsHeader from './DetailsHeader';
import DetailsBody from './DetailsBody';
import ImagePoster from './ImagePoster';

interface CardDetailsIn {
    movie: Movie;
    setShowDetails: Dispatch<SetStateAction<boolean>>;
}
const CardDetails = ({ movie, setShowDetails }: CardDetailsIn) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === divRef.current) {
          setShowDetails(false);
        }
      };

    const renderValue = (value: string) => {
        return movie[value] ? (movie)[value] : '--'
    }

    return (
        <div 
            ref={divRef}
            className='w-screen h-screen absolute opacity-90 bg-black'
            onClick={handleDivClick}
            data-testid='details-container'
        >
            <div className='w-2/3 lg:w-1/2 h-1/2 flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white  rounded-lg'>
                <ImagePoster />
                <div className='w-full lg:w-3/5 h-full flex flex-col text-black p-3 overflow-scroll overflow-x-hidden rounded-r-lg'>
                    <DetailsHeader renderValue={renderValue}/>
                    <DetailsBody renderValue={renderValue}/>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;