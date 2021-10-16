import React, {useState} from 'react'

const EditDatoForm = (props) => {
    const [dato, setDato] = useState(props.currentDato)

    const handleInputChange = (e) =>{
        const { name, value} = e.target

        setDato({...dato, [name]: value})
    }
    
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()

                props.updateDato(dato.id, dato)
            }}
        >
            <label>Cantidad</label>
            <input
                type="number"
                name="Cantidad"
                value={dato.Cantidad}
                onChange={handleInputChange}
            />
            <label>Total</label>
            <input
                type="number"
                name="Total"
                value={dato.Total}
                onChange={handleInputChange}
            />
            <label>Valor Unitario</label>
            <input
                type="number"
                name="ValorUnitario"
                value={dato.ValorUnitario}
                onChange={handleInputChange}
            />
            <label>Fecha</label>
            <input
                type="date"
                name="Fecha"
                value={dato.Fecha}
                onChange={handleInputChange}
            />
            <label>Cliente</label>
            <input
                type="text"
                name="Cliente"
                value={dato.Cliente}
                onChange={handleInputChange}
            />
            <label>Documento</label>
            <input
                type="number"
                name="Documento"
                value={dato.Documento}
                onChange={handleInputChange}
            />
            <label>Nombre De Encargado</label>
            <input
                type="text"
                name="NombreDeEncargado"
                value={dato.NombreDeEncargado}
                onChange={handleInputChange}
            />
            <button>Confirmar</button>
            <button
                onClick={()=> props.setEditing(false)}   
            >
                Cancelar
            </button>
            
        </form>
    )
}

export default EditDatoForm;