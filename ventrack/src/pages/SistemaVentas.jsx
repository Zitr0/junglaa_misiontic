import React from "react";
import { Link } from "react-router-dom";
function SisVenta(){
    return(
        <div>
       <header>
        <ul className="nv">
            <li className="tl">
                Sistema de Venta
            </li>
            <li className="us">
                Usuario
            </li>
        </ul>
    </header>
    
        <section className="">
        <br/>
        <Link to='/RegistroVentas'>
        <h2>Registrar Venta</h2>
        </Link>
        <br/>
        <Link to='/TablaGV'>
        <h2>Consultar Tabla de Venta</h2>
        </Link>
        </section>
    
    </div>
    )
}

export default SisVenta;