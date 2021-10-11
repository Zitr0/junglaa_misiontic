import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const productosBackend = [
  {
    identificador: 123,
    descripcion: "Esta es una descripción",
    valor: 10.000,
    estado: "Disponible"
  },
  {
    identificador: 234,
    descripcion: "Esta es una descripción",
    valor: 10.000,
    estado: "No Disponible"
  },
  {
    identificador: 345,
    descripcion: "Esta es una descripción",
    valor: 10.000,
    estado: "No Disponible"
  },
  {
    identificador: 456,
    descripcion: "Esta es una descripción",
    valor: 10.000,
    estado: "Disponible"
  },
  {
    identificador: 567,
    descripcion: "Esta es una descripción",
    valor: 10.000,
    estado: "No Disponible"
  }
]

const ListaProductos = ({}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //obtener lista de los productos desde el backend
        setProductos(productosBackend);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center table-fixed">
            <Link to ='/registroProducto'>
            <button type="button" className="absolute top-20 right-20 bg-indigo-500 
              text-white rounded border p-2 w-1/6 hover:bg-blue-400">Agregar producto</button>
            </Link>
            <h2 className="text-4xl font-serif my-20">Todos los productos</h2>
            <table className="tabla border-separate">
                <thead>
                <tr>
                    <th className="tabla th">Identificador único</th>
                    <th className="tabla th">Descripción</th>
                    <th className="tabla th">Valor unitario</th>
                    <th className="tabla th">Estado</th>
                </tr>
                </thead>
                <tbody>
                  {

                  }
                <tr>
                    <td>123</td>
                    <td>Esta es la descripcion del producto 1</td>
                    <td>10.000</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                    <td>456</td>
                    <td>Esta es la descripcion del producto 2</td>
                    <td>20.000</td>
                    <td>No disponible</td>
                </tr>
                <tr>
                    <td>789</td>
                    <td>Esta es la descripcion del producto 3</td>
                    <td>30.000</td>
                    <td>No disponible</td>
                </tr>
                <tr>
                    <td>987</td>
                    <td>Esta es la descripcion del producto 4</td>
                    <td>40.000</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                    <td>654</td>
                    <td>Esta es la descripcion del producto 5</td>
                    <td>50.000</td>
                    <td>Disponible</td>
                </tr>
                <tr>
                    <td>321</td>
                    <td>Esta es la descripcion del producto 6</td>
                    <td>60.000</td>
                    <td>No disponible</td>
                </tr>
                <tr>
                    <td className="tbody">132</td>
                    <td className="tbody">Esta es la descripcion del producto 7</td>
                    <td className="tbody">70.000</td>
                    <td className="tbody">Disponible</td>
                </tr>
                <tr>
                    <td>354</td>
                    <td>Esta es la descripcion del producto 8</td>
                    <td>80.000</td>
                    <td>No disponible</td>
                </tr>
                </tbody>
            </table>
            <button className="bg-indigo-500 my-5
              text-white rounded border p-2 w-1/6 hover:bg-blue-400">Buscar producto</button>
            <button className="bg-indigo-500 
              text-white rounded border p-2 w-1/6 hover:bg-blue-400">Actualizar producto</button>
        </div>
    )
}

export default ListaProductos
