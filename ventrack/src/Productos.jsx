import { nanoid } from 'nanoid';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productos = () => {
  const [mostrarLista, setMostrarLista] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo producto");

  useEffect(() => {
    const obtenerProductos = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:3001/api/producto',
        headers: {'Content-Type': 'application/json'}
      };
     
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setProductos(response.data.productos);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    //Obtener lista de productos desde el backend
    if(mostrarLista){
      obtenerProductos();
    }
  }, [mostrarLista]);

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
      <button onClick={() => {setMostrarLista(!mostrarLista)}} className="absolute my-10 mx-5 bg-indigo-500 
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

  const form = useRef(null);

  useEffect(() => {
    console.log("Esta es la tabla de productos en el componente lista", tablaProductos);
  }, [tablaProductos]);


  return(
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-serif my-10">Todos los productos</h2> 
        <table className="w-full tabla border-separate">
          <thead>
            <tr>
              <th className="border border-gray-400 text-gray-800 bg-gray-300">Identificador único</th>
              <th className="border border-gray-400 text-gray-800 bg-gray-300">Descripción</th>
              <th className="border border-gray-400 text-gray-800 bg-gray-300">Valor unitario</th>
              <th className="border border-gray-400 text-gray-800 bg-gray-300">Estado</th>
              <th className="border border-gray-400 text-gray-800 bg-gray-300">Actualizar</th>
            </tr>
          </thead>
          <tbody className="border border-gray-400 text-gray-800 bg-gray-200">
            {tablaProductos.map((producto) => {
              return <FilaProductos key={nanoid()} producto={producto} />;
            })}
          </tbody>
        </table>
        <Link to="/">
          <button className="bg-indigo-500 my-10
             text-white rounded border p-4  hover:bg-blue-400">Página principal</button>
        </Link>
    </div>
  );
};

const FilaProductos = ({producto}) => {
  console.log("Producto", producto);

  const [editar, setEditar] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    identificador : producto.identificador,
    descripcion : producto.descripcion,
    valor : producto.valor,
    estado : producto.estado
  })

  const actualizarProducto = async () => {
    console.log(infoNuevoProducto);
    //Enviar información al backend
    const options = {
      method: 'PATCH',
      url: 'http://localhost:3001/api/producto',
      headers: {'Content-Type': 'application/json'},
      //data: {...infoNuevoProducto, id: producto._id},
      data: {...infoNuevoProducto, identificador: producto.identificador},
    };
    
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto modificado con éxito");
        setEditar(false);
      })
      .catch(function (error) {
        toast.error("Error modificado el producto");
        console.error(error);
      });
  };

  return (
        <tr>
          {editar? (
            <>
              <td>
                {/* <span className=' bg-gray-50 border rounded border-gray-300 p-1 m-2'
                 type="text" value={infoNuevoProducto.identificador}
                 onChange={(e) => setInfoNuevoProducto({...infoNuevoProducto, identificador: e.target.value})} /> */}
                 <span>{infoNuevoProducto.identificador}</span>
              </td>
              <td>
                <input className=' bg-gray-50 border rounded border-gray-300 p-1 m-2'
                 type="text" value={infoNuevoProducto.descripcion}
                 onChange={(e) => setInfoNuevoProducto({...infoNuevoProducto, descripcion: e.target.value})} />
                </td>
              <td>
                <input className=' bg-gray-50 border rounded border-gray-300 p-1 m-2'
                 type="text" value={infoNuevoProducto.valor}
                 onChange={(e) => setInfoNuevoProducto({...infoNuevoProducto, valor: e.target.value})} />
              </td>
              <td>
                <input className=' bg-gray-50 border rounded border-gray-300 p-1 m-2'
                 type="text" value={infoNuevoProducto.estado}
                 onChange={(e) => setInfoNuevoProducto({...infoNuevoProducto, estado: e.target.value})} />
              </td>
            </>
          ) : (
            <>
              <td>{producto.identificador}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.valor}</td>
              <td>{producto.estado}</td>
            </>
          )}
        <td>
          <div className="flex w-full justify-around">
            {editar? ( 
              <i 
                  onClick={() => actualizarProducto()} 
                  className="fas fa-check text-green-700 hover:text-green-500" />
            ) : (
              <i 
                onClick={() => setEditar(!editar)}
                className="fas fa-pencil-alt text-blue-900 hover:text-blue-700" />
            )}
          </div>
        </td>
      </tr> 
  )
}

const RegistroProductos = ({setMostrarLista}) => {

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

  // sidebarToggle(){
  //   var sidebar = document.getElementById('sidebar');
   
  //   if (sidebar.style.display === "none") {
  //       sidebar.style.display = "block";
  //   } else {
  //       sidebar.style.display = "none";
  //   }
  // }

  return (
        <div>
            {/* <header class="bg-nav">
              <div class="flex justify-between">
                <div class="p-1 mx-3 inline-flex items-center">
                  <i class="fas fa-bars pr-2 text-white" onClick={this.sidebarToggle}></i>
                  <h1 class="text-white p-2">Ventrack</h1>
                </div>
              </div>
            </header> */}
            <form ref={form} onSubmit={submitForm} className='text-lg flex flex-col items-center'>
            <h2 className="text-4xl font-serif my-10">Crear nuevo producto</h2>

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
