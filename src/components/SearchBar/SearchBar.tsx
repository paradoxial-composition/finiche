import React, { useState } from 'react';
import  { BsSearchHeart } from 'react-icons/bs';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = () => {
        console.log('Searching ..', searchValue);
    }

    return (
        <div className='w-4/5 max-w-lg h-10 flex justify-center'>
            <input 
                className='w-full h-full px-2 pl-3 border border-slate-300 rounded-l-lg bg-black' 
                placeholder='Recherche ..'
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button 
                className='w-12 h-full border border-pink flex px-2 pl-3 rounded-r-lg bg-pink'
                aria-label='search'
                onClick={handleSubmit}
            >
                <BsSearchHeart className='m-auto' size={24} />
            </button>
        </div>
    );
};

export default SearchBar;