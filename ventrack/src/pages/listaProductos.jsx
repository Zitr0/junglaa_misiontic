import React from 'react'
import { Link } from 'react-router-dom'

const listaProductos = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Link to ='/registroProducto'>
            <button type="button" className="absolute top-20 right-20 bg-indigo-500 
              text-white rounded border p-2 w-1/6 hover:bg-blue-400">Agregar producto</button>
            </Link>
            <h2 className="text-4xl font-serif my-20">Todos los productos</h2>
            <table className="bg-gray-300">
                <thead>
                <tr>
                    <th>Identificador único</th>
                    <th>Descripción</th>
                    <th>Valor unitario</th>
                    <th>Estado</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>123</td>
                    <td>Esta es la descripcion del producto 1</td>
                    <td>10.000</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                    <td>456</td>
                    <td>Esta es la descripcion del producto 1</td>
                    <td>20.000</td>
                    <td>No disponible</td>
                </tr>
                <tr>
                    <td>789</td>
                    <td>Esta es la descripcion del producto 1</td>
                    <td>30.000</td>
                    <td>No disponible</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default listaProductos
