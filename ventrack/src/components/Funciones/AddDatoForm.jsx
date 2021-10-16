import React,{useEffect, useState,useRef} from "react";
import axios from "axios";
const AddDatoForm = (props) => {

    const form = useRef(null);

  const submitForm = async (e) =>{
    e.preventDefault();
    const fd = new FormData(form.current);
    if (!dato.Cantidad || !dato.Total || !dato.ValorUnitario || !dato.Fecha || !dato.Cliente || !dato.Documento || !dato.NombreDeEncargado) return

                props.addDato(dato)
                setDato(initialFormState)

    const nuevaVenta = {};
    fd.forEach((value, key) =>{
      nuevaVenta[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'http://localhost:3001/api/venta',
      headers:{'Content-Type': 'application/json'},
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
      .then(function(response){
        console.log(response.data);
        alert("Venta agregado con exito")
      })
      .catch(function (error) {
        console.error(error);
        alert("error al crear venta")  
      

        
      });

  };
    
    const initialFormState = {id: undefined, Id:'', Cantidad: '', Total: '', ValorUnitario: '', Fecha: '', Cliente: '', Documento: '', NombreDeEncargado: '' }
    const [dato, setDato] = useState(initialFormState)

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setDato({...dato,[name]: value})
    }

    return (
        <form
            ref={form} onSubmit={submitForm}
            /*onSubmit = {(e)=>{
                e.preventDefault()
                if (!dato.Cantidad || !dato.Total || !dato.ValorUnitario || !dato.Fecha || !dato.Cliente || !dato.Documento || !dato.NombreDeEncargado) return

                props.addDato(dato)
                setDato(initialFormState)
            }}*/
            >
            <label>Id</label>
            <input
            type='number'
            name='Id'
            value = {dato.id}
            onChange = {handleInputChange}
            />

            <label>Cantidad</label>
            <input 
                type='number' 
                name='Cantidad' 
                value= {dato.Cantidad}
                onChange = {handleInputChange}
                />
                
            <label>Total</label>
            <input 
                type='number' 
                name='Total' 
                value= {dato.Total}
                onChange = {handleInputChange}
                />
            <label>Valor Unitario</label>
            <input 
                type='number' 
                name='ValorUnitario' 
                value= {dato.ValorUnitario}
                onChange={handleInputChange}
                />
                
            <label>Fecha</label>
            <input 
                type='date' 
                name='Fecha' 
                value= {dato.Fecha}
                onChange = {handleInputChange}
                />
            <label>Cliente</label>
            <input 
                type='text' 
                name='Cliente' 
                value= {dato.Cliente}
                onChange = {handleInputChange}
                />
            <label>Documento</label>
            <input 
                type='number' 
                name='Documento' 
                value= {dato.Documento}
                onChange={handleInputChange}
                />
            <label>Nombre del Encargado</label>
            <input 
                type='text' 
                name='NombreDeEncargado' 
                value= {dato.NombreDeEncargado}
                onChange={handleInputChange}
                />
            <button>Agregar venta</button>
        </form>
    )
}

export default AddDatoForm;