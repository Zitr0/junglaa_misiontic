//import { nanoid } from 'nanoid';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productos = () => {
  const [mostrarLista, setMostrarLista] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo producto");

  useEffect(() => {

    // const obtenerProductos = async () => {
    //   const options = {
    //     method: 'GET',
    //     url: 'http://localhost:3001/api/producto',
    //     headers: {'Content-Type': 'application/json'}
    //   };
      
    //   await axios
    //     .request(options)
    //     .then(function (response) {
    //       setProductos(response.data);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // }

    //Obtener lista de productos desde el backend
      const options = {
        method: 'GET',
        url: 'http://localhost:3001/api/producto',
        headers: {'Content-Type': 'application/json'}
      };
      
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          //Este es el que no funciona
          //setProductos(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
  }, []);

  useEffect(() => {
    if(mostrarLista){
      setTextoBoton("Crear nuevo producto");
    }
    else{
      setTextoBoton("Volver a la lista");
    }
  }, [mostrarLista]);

  return (
    <div>
      <button onClick={() => {setMostrarLista(!mostrarLista)}} className="absolute top-20 right-20 bg-indigo-500 
      text-white rounded border p-3 hover:bg-blue-400">{textoBoton}</button>
      {mostrarLista ? (
      <ListaProductos tablaProductos={productos} />
      ) : (
      <RegistroProductos 
      setMostrarLista = {setMostrarLista}
      tablaProductos = {productos}
      setProductos = {setProductos}/>
      )}
      <ToastContainer position="bottom-center" autoClose={4000} />
    </div>
  );
};


const ListaProductos = ({tablaProductos}) => {
  useEffect(() => {
    console.log("Esta es la tabla de productos en el componente lista", tablaProductos);
  }, [tablaProductos]);

  return(
    <div className="flex flex-col items-center justify-center table-fixed">
      <h2 className="text-4xl font-serif my-10">Todos los productos</h2>
        <table className="tabla border-separate">
          <thead>
            <tr>
              <th className="tabla th">Identificador único</th>
              <th className="tabla th">Descripción</th>
              <th className="tabla th">Valor unitario</th>
              <th className="tabla th">Estado</th>
              <th className="tabla th">Actualizar</th>
            </tr>
          </thead>
          <tbody>
            {tablaProductos.map((producto) => {
              return(
                //key={nanoid()}
                <tr>
                  <td>{producto.descripcion}</td>
                  <td>{producto.estado}</td>
                  <td>{producto.identificador}</td>
                  <td>{producto.valor}</td>
                  {/* <td>
                    <div className="flex w-full justify-around">
                      <i className="fas fa-pencil-alt text-blue-700 hover:text-blue-900" />
                    </div>
                  </td> */}
                </tr> 
              );
            })}
          </tbody>
        </table>
          <button className="bg-indigo-500 my-5
             text-white rounded border p-2 w-1/6 hover:bg-blue-400">Buscar producto</button>
    </div>
  );
};



const RegistroProductos = ({setMostrarLista, tablaProductos, setProductos}) => {

  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });


    const options = {
      method: 'POST',
      url: 'http://localhost:3001/api/producto',
      headers: {'Content-Type': 'application/json'},
      data: {
        identificador: nuevoProducto.identificador,
        descripcion: nuevoProducto.descripcion,
        valor: nuevoProducto.valor,
        estado: nuevoProducto.estado
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto agregado con éxito");
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Error al crear el producto");
      });

    setMostrarLista(true);
  };

  return (
        <div>
            <form ref={form} onSubmit={submitForm} className='text-lg flex flex-col items-center'>
            <h2 className="text-3xl font-serif">Crear nuevo producto</h2>

              <label className="my-4 font-serif" htmlFor="identificador">Identificador unico: </label>
              <input name="identificador" type="number" 

              className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
              placeholder="Ingrese el identificador" required />

              <label className="font-serif" htmlFor="descripcion">Descripción: </label>
              <textarea name="descripcion" className=" bg-gray-50 border rounded border-gray-300 p-1 m-2" 
              cols="22" rows="3" placeholder="Descripción del producto" required></textarea>

              <label className="font-serif" htmlFor="valor">Valor unitario: </label>
                <input name="valor" type="number" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Valor del producto" required/>

              <label className="font-serif" htmlFor="estado">Estado: </label>
                <select name="estado" defaultValue={0} required>
                  <option disabled value={0}>Seleccione una opción</option>
                  <option >Disponible</option>
                  <option >No disponible</option>
                </select>
                <br />  

              <button type="submit"
              className='col-span-2 bg-indigo-500 
              text-white rounded border p-3 m-5 w-1/5 hover:bg-blue-400'>Agregar producto</button>
            </form>
        </div>
  );
};

export default Productos;
