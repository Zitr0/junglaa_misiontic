//import { nanoid } from 'nanoid';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Ventas = () => {
  const [mostrarLista, setMostrarLista] = useState(true);
  const [Ventas, setVentas] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo producto");

  useEffect(() => {
    const obtenerVentas = async () => {
      const options = {
        method: 'GET',
        url: 'http://localhost:3001/api/venta',
        headers: {'Content-Type': 'application/json'}
      };
     
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setVentas(response.data.ventas);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    //Obtener lista de productos desde el backend
    if(mostrarLista){
      obtenerVentas();
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
      <button onClick={() => {setMostrarLista(!mostrarLista)}} className="absolute top-20 right-20 bg-indigo-500 
      text-white rounded border p-3 hover:bg-blue-400">{textoBoton}</button>
      {mostrarLista ? (
      <ListaVentas tablaVentas={Ventas} />
      ) : (
      <RegistroVentas 
      setMostrarLista = {setMostrarLista}
      tablaVentas = {Ventas}
      setVentas = {setVentas}/>
      )}
      <ToastContainer position="bottom-center" autoClose={4000} />
    </div>
  );
};


const ListaVentas = ({tablaVentas}) => {
  useEffect(() => {
    console.log("Esta es la tabla de ventas en el componente lista", tablaVentas);
  }, [tablaVentas]);

  return(
    <div className="flex flex-col items-center justify-center table-fixed">
      <h2 className="text-4xl font-serif my-10">Ventas</h2>
        <table className="tabla border-separate">
          <thead>
            <tr>
              <th className="tabla th">Id</th>
              <th className="tabla th">Cantidad</th>
              <th className="tabla th">Total</th>
              <th className="tabla th">Valor Unitario</th>
              <th className="tabla th">Fecha</th>
              <th className="tabla th">Cliente</th>
              <th className="tabla th">Documento</th>
              <th className="tabla th">Nombre De Encargado</th>
            </tr>
          </thead>
          <tbody>
            {tablaVentas.map((venta) => {
              return(
                //key={nanoid()}
                <tr>
                  <td>{venta.Id}</td>
                  <td>{venta.Cantidad}</td>
                  <td>{venta.Total}</td>
                  <td>{venta.ValorUnitario}</td>
                  <td>{venta.Fecha}</td>
                  <td>{venta.Cliente}</td>
                  <td>{venta.Documento}</td>
                  <td>{venta.NombreDeEncargado}</td>
                  <td>
                    <div className="flex w-full justify-around">
                      <i className="fas fa-pencil-alt text-blue-700 hover:text-blue-900" />
                    </div>
                  </td>
                </tr> 
              );
            })}
          </tbody>
        </table>
        <Link to="/">
          <button className="bg-indigo-500 my-5
             text-white rounded border p-4  hover:bg-blue-400">Página principal</button>
        </Link>
    </div>
  );
};



const RegistroVentas = ({setMostrarLista, tablaVentas, setVentas}) => {

  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });


    const options = {
      method: 'POST',
      url: 'http://localhost:3001/api/venta',
      headers: {'Content-Type': 'application/json'},
      data: {
        Id: nuevaVenta.Id,
        Cantidad: nuevaVenta.Cantidad,
        Total: nuevaVenta.Total,
        ValorUnitario: nuevaVenta.ValorUnitario,
        Fecha: nuevaVenta.Fecha,
        Cliente: nuevaVenta.Cliente,
        Documento: nuevaVenta.Documento,
        NombreDeEncargado: nuevaVenta.NombreDeEncargado
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
            <h2 className="text-3xl font-serif">Crear nuevo producto</h2>

              <label className="my-4 font-serif" htmlFor="identificador">Id: </label>
              <input name="Id" type="number" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
              placeholder="Ingrese el Id" required />

              <label className="font-serif" htmlFor="Cantidad">Cantidad: </label>
              <input name="Cantidad" type="number" className=" bg-gray-50 border rounded border-gray-300 p-1 m-2" 
              cols="22" rows="3" placeholder="Ingrese la Cantidad" required></input>

              <label className="font-serif" htmlFor="Total">Total: </label>
                <input name="Total" type="number" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Ingrese el valor total del producto" required/>
              
              <label className="font-serif" htmlFor="ValorUnitario">Valor Unitario: </label>
                <input name="ValorUnitario" type="number" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Infrese el valor unitario del producto" required/>
                
            <label className="font-serif" htmlFor="Fecha">Fecha: </label>
                <input name="Fecha" type="date" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Ingrese la fecha" required/>
            
            <label className="font-serif" htmlFor="Cliente">Cliente: </label>
                <input name="Cliente" type="text" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Ingrese el cliente" required/>  

            <label className="font-serif" htmlFor="Documento">Documento: </label>
                <input name="Documento" type="number" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Ingrese el Documento" required/>

            <label className="font-serif" htmlFor="NombreDeEncargado">Nombre de Encargado: </label>
                <input name="NombreDeEncargado" type="text" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Ingrese el nombre del encargado" required/>

                <br />  

              <button type="submit"
              className='col-span-2 bg-indigo-500 
              text-white rounded border p-3 m-5 w-1/5 hover:bg-blue-400'>Agregar producto</button>
            </form>
        </div>
  );
};

export default Ventas;