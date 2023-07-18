import React, { useState } from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { ORDER_BY } from '../../constans';

const SortByButton = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };
    const handleSelectOption = (option: String) => {
        console.log(`Selected option: ${option}`);
        setShowOptions(false);
        // TODO update the panrent state via setSortByValue to then do the async call and get the new movies
        // and update the MoviesList with the new movie selection
    };

    const options = Object.keys(ORDER_BY).map( (item: string)  => (
        <span 
            key={item}
            className='cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap hover:underline hover:text-pink my-1' 
            onClick={() => handleSelectOption(item)}
        >{ORDER_BY[item]}</span>
    ));
    
    return (
        <div className='w-30 flex flex-col justify-center relative'>
            <button 
                className='flex-none'
                data-testid='sort-by-button'
                onClick={handleButtonClick}
            >
                <BsFillFilterSquareFill 
                    className='m-auto text-pink' size={32}
                    data-testid='sort-by-icon'
                />
            </button>
            {showOptions && (
                <div 
                    className='w-40 h-30 flex flex-col bg-black p-5 border border-slate-400 rounded-xl absolute top-10 right-1/4 md:right-1/2  md:translate-x-1/2'
                    data-testid='sort-by-options'   
                >
                    {options}
                </div>
            )}
        </div>
    );
};

export default SortByButton;