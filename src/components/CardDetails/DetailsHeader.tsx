import React from 'react';
import { BsStarFill, BsHandThumbsUpFill } from 'react-icons/bs';

interface DetailsHeaderIn {
    renderValue: (value: string) => string | number | null;
};

const DetailsHeader = ({ renderValue }: DetailsHeaderIn) => {

    return (
        <>
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
        </>
    )
}

export default DetailsHeader;