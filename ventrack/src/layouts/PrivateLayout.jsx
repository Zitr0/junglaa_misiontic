import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

export const PrivateLayout = ({children}) => {
  
     
    return (
        <div className="mx-auto bg-grey-400">
            <div className="min-h-screen flex flex-col">
            <Navbar/>
           
            <main className = 'flex bg-gray-100' >
            <Sidebar/>
                {children}
            </main>
           <Footer/> 
           </div>
        </div>
    )
}

export default PrivateLayout;