import React from 'react'

export const Tabla = (props) => {
    return (
        <table className="content-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Valor Unitario</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Documento</th>
            <th>NombreDeEncargado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
         {props.datos.length > 0 ?(
             props.datos.map((dato)=>(
                 <tr key={dato.id}>
                     <td>{dato.Id}</td>
                     <td>{dato.Cantidad}</td>
                     <td>{dato.Total}</td>
                     <td>{dato.ValorUnitario}</td>
                     <td>{dato.Fecha}</td>
                     <td>{dato.Cliente}</td>
                     <td>{dato.Documento}</td>
                     <td>{dato.NombreDeEncargado}</td>
                     <td><button
                        onClick={()=>{
                            props.editRow(dato)
                        }}
                     >
                         editar
                     </button></td>
                 </tr>       
             ))
         ) : (
            <tr>
                <td colSpan={8}>Sin ventas</td>
            </tr>
         )}   
          

        </tbody>

      </table>
    )
}

export default Tabla;