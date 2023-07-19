import React, { Dispatch, SetStateAction, useState } from 'react';
import  { BsSearchHeart } from 'react-icons/bs';

interface SearchBarIn {
    handleSubmit: (value: string) => void;
    isLoading: boolean;
};

const SearchBar = ({ handleSubmit, isLoading }: SearchBarIn) => {
    const [searchValue, setSearchValue] = useState('');

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          handleSubmit(searchValue);
        }
    };

    return (
        <div className='w-4/5 h-10 max-w-lg flex justify-center m-auto'>
            <input 
                className={'w-full px-2 pl-3 border border-pink rounded-l-lg bg-black' + (isLoading ? ' opacity-20': '')} 
                placeholder='Recherche ..'
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
            />
            <button 
                className='w-12 h-full border border-pink flex px-2 pl-3 rounded-r-lg bg-pink'
                aria-label='search'
                onClick={() => handleSubmit(searchValue)}
            >
                <BsSearchHeart className='m-auto' size={24} />
            </button>
        </div>
    );
};

export default SearchBar;