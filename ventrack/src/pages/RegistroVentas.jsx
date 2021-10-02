import React,{Component, useRef} from "react";
import { Link } from "react-router-dom";
const RegistroVentas = () =>{

    const handleClickEvent = () =>{
        
        const ID = document.getElementById("ID").value;
        const Total = document.getElementById("Total").value;
        const Cantidad = document.getElementById("Cantidad").value;
        const ValorU = document.getElementById("ValorU").value;
        const Fecha = document.getElementById("Fecha").value;
        const Nombre = document.getElementById("Nombre").value;
        const Documento = document.getElementById("Documento").value;
        const NombreDeEncargado = document.getElementById("NombreDeEncargado").value;
        alert(`id: ${ID} Total: ${Total} Cantidad: ${Cantidad} Valor unitario: ${ValorU} Fecha: ${Fecha} Nombre: ${Nombre} Documento: ${Documento} Nombre del encargado: ${NombreDeEncargado}`)
        
    }
    
    
    return (
       <>
    
         
       
           <form className="formulario">
           <h4>Registro de Venta</h4>
            <input class="controls" type="number" id="ID" placeholder="Ingrese el ID del Producto"/>
            <input class="controls" type="number" id="Total" placeholder="Ingrese el Valor Total del Producto"/>
            <input class="controls" type="number" id="Cantidad" placeholder="Ingrese la Cantidad del Producto"/>
            <input class="controls" type="number" id="ValorU" placeholder="Ingrese el Valor Unitario"/>
            <input class="controls" type="date" id="Fecha" placeholder="Ingrese la Fecha de Venta"/>
            <input class="controls" type="text" id="Nombre" placeholder="ingrese el Nombre del cliente"/>
            <input class="controls" type="number" id="Documento" placeholder="ingrese el documento del cliente"/>
            <input class="controls" type="text" id="NombreDeEncargado" placeholder="Ingrese el nombre del encargado"/>
            <input class="botons" type="submit" value="Registrar Venta" onClick={handleClickEvent}/>
            <Link to = '/'>
            <p>Volver</p>
            </Link>
            </form>
         
   
   
   </>
    )
}
export default RegistroVentas;