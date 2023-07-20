import React, { Dispatch, SetStateAction, useState } from 'react';
import  { BsSearchHeart } from 'react-icons/bs';

interface SearchBarIn {
    setSearchValue: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
};

const SearchBar = ({ setSearchValue, isLoading }: SearchBarIn) => {
    const [inputValue, setInputValue] = useState('')

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setSearchValue(inputValue)
        }
    };


    return (
        <div className='w-4/5 h-10 max-w-lg flex justify-center m-auto'>
            <input 
                className={'w-full px-2 pl-3 border border-pink rounded-l-lg bg-black' + (isLoading ? ' opacity-20': '')} 
                placeholder='Recherche ..'
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
                data-testid='search-bar'
            />
            <button 
                className='w-12 h-full border border-pink flex px-2 pl-3 rounded-r-lg bg-pink'
                aria-label='search'
                onClick={() => setSearchValue(inputValue)}
                data-testid='search-button'
            >
                <BsSearchHeart className='m-auto' size={24} />
            </button>
        </div>
    );
};

export default SearchBar;