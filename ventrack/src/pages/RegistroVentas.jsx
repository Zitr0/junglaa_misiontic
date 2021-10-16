import React,{useEffect, useState,useRef} from "react";
import { Link } from "react-router-dom";
import AddDatoForm from "../components/Funciones/AddDatoForm";
import EditDatoForm from "../components/Funciones/EditDatoForm";
import Tabla from "../components/Tabla";



const RegistroVentas = ()=>{
  
  const datosVenta = [
    {id:1 ,Id:1, Cantidad: 2, Total: 2400, ValorUnitario: 2000, Fecha: '10/10/2020', Cliente: "Mario", Documento: 401247147, NombreDeEncargado: "Luz" },
    {id:2 ,Id:2, Cantidad: 1, Total: 3000, ValorUnitario: 2500, Fecha: '11/10/2020', Cliente: "María", Documento: 101482147, NombreDeEncargado: "Julian"},
    {id:3 ,Id:3, Cantidad: 1, Total: 5000, ValorUnitario: 4000, Fecha: '12/10/2020', Cliente: "Carlota", Documento: 487217147, NombreDeEncargado: "Mirian"},
  ]

  const initialFormState = {id: undefined, Id:'', Cantidad: '', Total: '', ValorUnitario: '', Fecha: '', Cliente: '', Documento: '', NombreDeEncargado: ''}


  const updateDato = (id, updateDato) =>{
    setEditing(false)
    
    setDatos(datos.map((dato)=>(dato.id == id ? updateDato : dato)))
  }

  const [datos, setDatos] = useState(datosVenta)
  const [editing, setEditing] = useState(false)
  const [currentDato, setCurrentDato] = useState(initialFormState)
  const editRow = (dato) => {
    setEditing(true)

    setCurrentDato({id: dato.id, Id: dato.Id, Cantidad: dato.Cantidad, Total: dato.Total, ValorUnitario: dato.ValorUnitario, Fecha: dato.Fecha, Cliente: dato.Cliente, Documento: dato.Documento, NombreDeEncargado: dato.NombreDeEncargado})
  }

  


  const addDato= (dato) =>{
    dato.id = datos.lenght + 1
    setDatos([...datos,dato])
  }



    return(
    
    <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
      
      <h1 className="text-center ">Registro De Ventas</h1>
      <br/>
      <div className="flex-row">  
        <div className="flex-1">  
        {editing ? (
          <div>
            <h2>Editar Venta</h2>
            <EditDatoForm
              setEditing={setEditing}
              currentDato={currentDato}
              updateDato={updateDato}
            />
          </div>
        ) : (     
          <div>
        <br/>
        <br/>
        <h2 className='text-center'>Agregar Venta</h2>
        <br/>
        <AddDatoForm addDato = {addDato}/>
        </div>
        )}
        </div>
          <br/>
          <br/>
        <div className="flex-1">  
          <h2 className='text-center'>Tabla Ventas</h2>
          <Tabla datos={datos} editRow={editRow} />

        </div>
      </div>
    </div>
    

    
    )
    
    
  
}
export default RegistroVentas;