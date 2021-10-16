import React,{useState} from 'react'

export const Navbar = () => {
  

    return (
       <div>
            
           <header className='bg-indigo-400'>
            <div className='flex justify-between'>
                <div className='p-1 mx-3 inline-flex items-center'>
                    <i className='fas fa-bars pr-2 text-white' ></i>
                    <h1 className='text-white p-2'>Ventrack</h1>
                </div>
                
            </div>
        </header>
        
       </div>
    ) 
    
}

export default Navbar