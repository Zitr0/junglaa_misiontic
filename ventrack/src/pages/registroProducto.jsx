import { Link } from 'react-router-dom';

const registroProducto = () => {

    const handleClickEvent = () => {
     const identificador = document.getElementById("identificador").value;
     const descripcion = document.getElementById("descripcion").value;
     const valor = document.getElementById("valor").value;
     const estado = document.getElementById("estado").value;
    //  alert("Identificador unico:" + " " + identificador + " " + "Descripcion:" + " " + descripcion + " " + "Valor Unitario:" + " " + valor +
    //   " " + "Estado:"+ " " + estado)
      alert(`Identificador único: ${identificador} Descripción: ${descripcion} Valor unitario: ${valor} Estado: ${estado}`)

    }

    return (
        <div>
            <Link to ='/listaProductos'>
            <button type="button" className="absolute top-21 right-20 bg-indigo-500 
              text-white rounded border p-2 w-24 hover:bg-blue-400">Volver</button>
            </Link>

            <form className='text-lg flex flex-col items-center my-28'>
            {/* gap-6 flex flex-col' */}

              <label htmlFor="identificador">Identificador unico: </label>
              <input id="identificador" type="number" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
              placeholder="Ingrese el identificador" required/>

              <label htmlFor="descripcion">Descripción: </label>
                {/* <input type="text" className='flex bg-gray-50 border border-gray-600 p-1 rounded-lg m-2' /> */}
                <textarea id="descripcion" className=" bg-gray-50 border rounded border-gray-300 p-1 m-2" cols="22" rows="3" placeholder="Descripción del producto" required></textarea>

              <label htmlFor="valor">Valor unitario: </label>
                <input id="valor" type="number" className=' bg-gray-50 border rounded border-gray-300 p-1 m-2' 
                placeholder="Valor del producto" required/>

              <label htmlFor="estado">Estado: </label>
                <select id="estado" required defaultValue={0}>
                  <option disabled value={0}>Seleccione una opción</option>
                  <option >Disponible</option>
                  <option >No disponible</option>
                </select>
              {/* <input id="estado" name="Estado" type="radio" value="1" required/>Disponible
              <input id="estado" name="Estado" type="radio" value="2" required/>No Disponible */}

              <button onClick={handleClickEvent} type="submit" className='col-span-2 bg-indigo-500 
              text-white rounded border p-3 m-5 w-1/5 hover:bg-blue-400'>Agregar producto</button>
            </form>
        </div>
    )
}

export default registroProducto;
