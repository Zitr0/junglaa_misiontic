import React from "react";
import { Link } from "react-router-dom";
function SisVenta(){
    return(
        <div>
       <header>
        <ul className="nv">
            <li className="tl">
                Inicio
            </li>
            <li className="us">
                Usuario
            </li>
        </ul>
    </header>
    
        <section className="">
        <h1 className='ti'>Sistema de Venta</h1>
        <br/>
        <Link to='/RegistroVentas'>
        <h2>Registrar Venta</h2>
        </Link>
        <br/>
        <h2>Consultar Estado de Venta</h2>
        </section>
    
    </div>
    )
}

export default SisVenta;