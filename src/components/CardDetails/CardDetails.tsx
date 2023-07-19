import React, { Dispatch, SetStateAction, useRef } from 'react';
import { Movie } from '../../local';
import PlaceHolderBackground from '../../assets/images/placeholder.jpg';
import { BsStarFill, BsHandThumbsUpFill } from 'react-icons/bs';

interface CardDetailsIn {
    movie: Movie;
    setShowDetails: Dispatch<SetStateAction<boolean>>;
}
const CardDetails = ({ movie, setShowDetails }: CardDetailsIn) => {
    const divRef = useRef<HTMLDivElement>(null);
    const movieMock: { [key: string]: string | number | null }= {
		"Title": "Toy Story",
		"US Gross": 191796233,
		"Worldwide Gross": 361948825,
		"US DVD Sales": null,
		"Production Budget": 30000000,
		"Release Date": "Nov 22 1995",
		"MPAA Rating": "G",
		"Running Time min": null,
		"Distributor": "Walt Disney Pictures",
		"Source": "Original Screenplay",
		"Major Genre": "Adventure",
		"Creative Type": "Kids Fiction",
		"Director": "John Lasseter",
		"Rotten Tomatoes Rating": 100,
		"IMDB Rating": 8.2,
		"IMDB Votes": 151143,
		"id": 992
	}

    const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === divRef.current) {
          setShowDetails(false);
        }
      };

    const renderValue = (value: string) => {
        return movieMock[value] ? movieMock[value] : '--'
    }

    return (
        <div ref={divRef}
            className='w-screen h-screen absolute opacity-90 bg-black'
            onClick={handleDivClick}
        >
            <div className='w-2/3 lg:w-1/2 h-1/2 flex flex-row absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white  rounded-lg'>
                <div className='lg:w-2/5 lg:h-full hidden lg:inline-flex flex-col justify-center rounded-l-lg'>
                    <img 
                        className='w-full h-full'
                        src={PlaceHolderBackground}
                        alt='movie poster'
                        sizes='cover'
                    />
                </div>
                <div className='w-full lg:w-3/5 h-full flex flex-col text-black p-3 overflow-scroll overflow-x-hidden rounded-r-lg'>
                    <div className='w-full flex my-4'>
                        <span className='m-auto text-2xl'>{renderValue('Title')}</span>
                    </div>
                    <div className='w-full flex flex-wrap flex-row justify-around'>
                        <div className='w-36 text-center flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span className='flex-1'>Rotten Tomatoes:</span>
                            <div className='flex-1 flex flex-row m-auto'>
                                <span className='flex-none'>{renderValue('Rotten Tomatoes Rating')}</span>
                                <BsStarFill 
                                    className='flex-none ml-2 mt-1.5 text-gold'
                                    size={16}
                                />
                            </div>
                        </div>
                        <div className='w-36 text-center flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span className='flex-1'>IMDB Rating:</span>
                            <div className='flex-1 flex flex-row m-auto'>
                                <span className='flex-none'>{renderValue('IMDB Rating')}</span>
                                <BsStarFill 
                                    className='flex-none ml-2 mt-1.5 text-gold'
                                    size={16}
                                />
                            </div>
                        </div>
                        <div className='w-36 text-center flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span className='flex-1'>IMDB Votes:</span>
                            <div className='flex-1 flex flex-row m-auto'>
                                <span className='flex-none'>{renderValue('IMDB Votes')}</span>
                                <BsHandThumbsUpFill 
                                    className='flex-none ml-2 mt-1.5'
                                    size={16}
                                />
                            </div>
                        </div>
                        <div className='w-3/5  h-px bg-black opacity-20 mt-5'></div>
                    </div>
                    <div className='w-full flex flex-row flex-wrap justify-around p-1 mt-5'>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>US Gross:</span>
                            <span className='tracking-wide'>{renderValue('US Gross')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Worldwide Gross:</span>
                            <span className='tracking-wide'>{renderValue('Worldwide Gross')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>US DVD Sales:</span>
                            <span className='tracking-wide'>{renderValue('US DVD Sales')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Production Budget:</span>
                            <span className='tracking-wide'>{renderValue('Production Budget')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Release Date:</span>
                            <span>{renderValue('Release Date')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>MPAA Rating:</span>
                            <span>{renderValue('MPAA Rating')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Running Time min:</span>
                            <span className='tracking-wide'>{renderValue('Running Time min')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Distributor:</span>
                            <span>{renderValue('Distributor')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Source:</span>
                            <span>{renderValue('Source')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Major Genre:</span>
                            <span>{renderValue('Major Genre')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Creative Type:</span>
                            <span>{renderValue('Creative Type')}</span>
                        </div>
                        <div className='w-1/2 flex flex-col text-ellipsis overflow-hidden whitespace-nowrap p-3'>
                            <span>Director:</span>
                            <span>{renderValue('Director')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;