import React from 'react';

export default function Error500() {
    return (
        <div className='w-full h-full overflow-hidden'>
            <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
                <h1>500 - Server-side error occurred</h1>
            </div>
        </div>
    )
  }