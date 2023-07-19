import React from 'react';

interface DetailsBodyIn {
    renderValue: (value: string) => string | number | null;
};

const DetailsBody = ({ renderValue } : DetailsBodyIn) => {

    return (
        <>
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
        </>
    );
};

export default DetailsBody;