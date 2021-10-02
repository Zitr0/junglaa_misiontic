import React from "react";
import { Link } from "react-router-dom";

const TablaGv = () =>{
    return(
        <>
        <header>
        <ul className="nv">
            
            <li className="tl">
                Listado de Venta
            </li>
            <Link to="/">
            <li className="us">
                Volver
            </li>
            </Link>
        </ul>
    </header>

         <input className="buscar" type="text" placeholder="buscar"></input> 
         
        
        <br/>
        <div className="cont">
        <table className="tab">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Total</th>
                    <th>Cantidad</th>
                    <th>Valor Unitario</th>
                    <th>Fecha</th>
                    <th>Nombre del Cliente</th>
                    <th>Documento</th>
                    <th>Nombre del Encargado</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>10021</td>
                    <td>24.000</td>
                    <td>1</td>
                    <td>20.000</td>
                    <td>20/10/2021</td>
                    <td>María</td>
                    <td>1018456602</td>
                    <td>Sebastian</td>
                </tr>
                <tr>
                    <td>00215</td>
                    <td>30.000</td>
                    <td>1</td>
                    <td>25.000</td>
                    <td>19/10/2021</td>
                    <td>Santiago</td>
                    <td>70629270</td>
                    <td>Sebastian</td>
                </tr>
            </tbody>
        </table>
        <input className="botos" type="button" value="Actualizar"/>
        
        </div>
        </>
    )

}

export default TablaGv;