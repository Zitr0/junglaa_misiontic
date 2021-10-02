import React from 'react'
import { Link } from 'react-router-dom'

const listaProductos = () => {
    return (
        <div className="flex flex-col items-center justify-center table-fixed">
            <Link to ='/registroProducto'>
            <button type="button" className="absolute top-20 right-20 bg-indigo-500 
              text-white rounded border p-2 w-1/6 hover:bg-blue-400">Agregar producto</button>
            </Link>
            <h2 className="text-4xl font-serif my-20">Todos los productos</h2>
            <table className="border-separate">
                <thead>
                <tr className="bg-gray-300">
                    <th className="w-1/6 border border-gray-600 text-gray-800">Identificador único</th>
                    <th className="w-1/3 border border-gray-600 text-gray-800">Descripción</th>
                    <th className="w-1/6 border border-gray-600 text-gray-800">Valor unitario</th>
                    <th className="w-1/6 border border-gray-600 text-gray-800">Estado</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-600">123</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 1</td>
                    <td className="border border-gray-600">10.000</td>
                    <td className="border border-gray-600">Disponible</td>
                </tr>
                <tr className="bg-gray-200">
                    <td className="border border-gray-600">456</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 2</td>
                    <td className="border border-gray-600">20.000</td>
                    <td className="border border-gray-600">No disponible</td>
                </tr>
                <tr>
                    <td className="border border-gray-600">789</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 3</td>
                    <td className="border border-gray-600">30.000</td>
                    <td className="border border-gray-600">No disponible</td>
                </tr>
                <tr className="bg-gray-200">
                    <td className="border border-gray-600">987</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 4</td>
                    <td className="border border-gray-600">40.000</td>
                    <td className="border border-gray-600">Disponible</td>
                </tr>
                <tr>
                    <td className="border border-gray-600">654</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 5</td>
                    <td className="border border-gray-600">50.000</td>
                    <td className="border border-gray-600">Disponible</td>
                </tr>
                <tr className="bg-gray-200">
                    <td className="border border-gray-600">321</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 6</td>
                    <td className="border border-gray-600">60.000</td>
                    <td className="border border-gray-600">No disponible</td>
                </tr>
                <tr>
                    <td className="border border-gray-600">132</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 7</td>
                    <td className="border border-gray-600">70.000</td>
                    <td className="border border-gray-600">Disponible</td>
                </tr>
                <tr className="bg-gray-200">
                    <td className="border border-gray-600">354</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 8</td>
                    <td className="border border-gray-600">80.000</td>
                    <td className="border border-gray-600">No disponible</td>
                </tr>
                <tr>
                    <td className="border border-gray-600">687</td>
                    <td className="border border-gray-600">Esta es la descripcion del producto 9</td>
                    <td className="border border-gray-600">90.000</td>
                    <td className="border border-gray-600">Disponible</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default listaProductos
