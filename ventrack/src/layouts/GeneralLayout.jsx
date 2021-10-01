import React from 'react'
import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer'

const GeneralLayout = ({children}) => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar/>
            <main className="h-full overflow-y-scroll">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default GeneralLayout
