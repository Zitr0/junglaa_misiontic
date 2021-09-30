function RegistroVentas() {
    return(
       <div>   <header>
       <ul class="nv">
           <li class="tl">
               Ventrack
           </li>
           <li class="us">
               Usuario
           </li>
       </ul>
   </header>
   <main>
       <section class="formulario">
           <form>
           <h4>Registro de Venta</h4>
           <input class="controls" type="number" name="ID" id="ID" placeholder="Ingrese el ID del Producto"/>
           <input class="controls" type="number" name="Total" id="Total" placeholder="Ingrese el Valor Total del Producto"/>
           <input class="controls" type="number" name="Cantidad" id="Cantidad" placeholder="Ingrese la Cantidad del Producto"/>
           <input class="controls" type="number" name="Valor unitario" id="Valor unitario" placeholder="Ingrese el Valor Unitario"/>
           <input class="controls" type="date" name="Fecha" id="Fecha" placeholder="Ingrese la Fecha de Venta"/>
           <input class="controls" type="text" name="Nombre" id="Nombre" placeholder="ingrese el Nombre del cliente"/>
           <input class="controls" type="number" name="Documento" id="Documento" placeholder="ingrese el documento del cliente"/>
           <input class="controls" type="text" name="Nombre encargado" id="Nombre encargado" placeholder="Ingrese el nombre del encargado"/>
           <input class="botons" type="submit" value="Registrar Venta"/>
           <p><a href="#">Volver</a></p>
           </form>
         </section>
   <section>

   </section>
   </main>
   <footer>

   </footer> </div>
    )
}
export default RegistroVentas;