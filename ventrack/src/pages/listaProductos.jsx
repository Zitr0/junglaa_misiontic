import React from 'react'
import { Link } from 'react-router-dom'

const listaProductos = () => {
    return (
        <div>
            <Link to ='/registroProducto'>
            <button type="button" className="absolute top-21 right-20 bg-indigo-500 
              text-white rounded border p-2 w-24 hover:bg-blue-400">Volver</button>
            </Link>
            <table>
                <tr>
                    <th>Hoy</th>
                    <th>Mañana</th>
                    <th>Domingo</th>
                </tr>
                <tr>
                    <td>Soleado</td>
                    <td>Mayormente soleado</td>
                    <td>Parcialmente nublado</td>
                </tr>
                <tr>
                    <td>19°C</td>
                    <td>17°C</td>
                    <td>12°C</td>
                </tr>
                <tr>
                    <td>E 13 km/h</td>
                    <td>E 11 km/h</td>
                    <td>S 16 km/h</td>
                </tr>
            </table>
        </div>
    )
}

export default listaProductos
