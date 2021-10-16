import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Sidebar = () =>{
  
  return (
    <div>
          <aside id="sidebar" className="bg-gray-400 relative h-screen w-72 md:w-64 hidden sm:block shadow-xl">
                <ul className="list-reset flex flex-col">
                    <li className=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a href="#"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-tachometer-alt float-left mx-2"></i>
                        
                            <span><i className="fas fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    
                </ul>
            </aside>
           
           
     
    
</div>
  );
  
}

export default Sidebar;