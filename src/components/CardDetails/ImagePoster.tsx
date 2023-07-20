import React from "react";
import PlaceHolderBackground from '../../assets/images/placeholder.jpg';

const ImagePoster = () => {

    return(
        <div className='w-2/5 h-full hidden lg:inline-flex flex-col justify-center rounded-l-lg'>
            <img 
                className='w-full h-full'
                src={PlaceHolderBackground}
                alt='movie poster'
                sizes='cover'
            />
        </div>
    )
};

export default ImagePoster;