import {Producto, Factura} from "./factura.js"
import * as formulario from "./formulario.js"
//Declaro array para agregar los productos
let productos= []

export function agregaProducto() {
    // let cantidad = document.getElementById("cantidad").value;
    // let precio = document.getElementById("precio").value;
    // let nombre = document.getElementById("producto").value;
    
    //Controles de producto
    let producto = new Producto(formulario.nombrep.value, formulario.precio.value, formulario.cantidad.value)
    productos.push(producto);

    formulario.nombrep.value = "";
    formulario.precio.value = "";
    formulario.cantidad.value = "";
  }
  
export function obtieneFactura() {
    let empresa = {} //no uso clases por que no se va a instanciar
    let cliente = {} //no uso clases por que no se va a instanciar
    let factura = null;
  
    //Captura de valores de fecha, empresa y cliente
    //Control de fecha
    empresa.fecha= formulario.fecha.value;
    empresa.nombre = formulario.empresa.value;
    empresa.cif = formulario.cife.value;
    cliente.nombre = formulario.cliente.value;
    cliente.cif = formulario.cifc.value;
  
  
    //instancio Factura con los productos, empresa,  cliente y fecha
    factura = new Factura(empresa, cliente, productos, fecha)
    factura.listadoFactura();
    productos.length = 0; //borro el array para agregar los productos de la siguiente factura
  
  }

  //export {agregaProducto, obtieneFactura}
  
  