/**
 * Importa el objeto Componente de la libreria de Alendra.js
 */
import Componente from '../javascript/componente.js';

/**
 * Componente para crear un elemento Sidebar (revisar clase side-bar de la 
 * libreria alendra.js)
 * 
 * @interface
 * 
 * @implements {Componente}
 */
export default function Sidebar() {
  /**
	 * Establece la herencia del objeto Componente
	 */
  Componente.call(this);

//==============================================================================
//--------------------------------- Plantilla ----------------------------------
//==============================================================================

  /**
   * Define la plantilla del componente
   */
  this.setPlantilla(
  /* html */ `
    <!-- DIV contenedor -->
    <div
    class="side-bar">
      <!-- Header del sidebar -->
      <div
      data-id="div_header">
      </div>

      <!-- Elementos del sidebar -->
      <div
      data-id="div_contenido"
      class="mb-24p sidebar-menu">
      </div>
      
      <!-- Footer del sidebar -->
      <div
      data-id="div_footer"
      class="d-flex flex-column">
      </div>
    </div>
  `);
  
//==============================================================================
//------------------------------- Inicialización -------------------------------
//==============================================================================

  /**
   * Define el comportamiento del componente al recibir un elemento HTML como 
   * contenedor
   */
  this.setAlRecibirContenedor(contenedor => {
    contenedor.classList.add('ctr-sidebar'); });

//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================

  /**
   * Elemento HTML que funcionara como overlay
   */
  this.overlay = this.elemento(
  /* html */ `
    <div
    class="sidebar-overlay">
    <div>
  `);

//==============================================================================
//--------------------------------- Funciones ----------------------------------
//==============================================================================

  /*-------------------------------- Sidebar ---------------------------------*/

  /**
   * Renderiza el componente en el body del DOM
   * 
   * @returns {void}
   */
  this.mostrar = function() {
    this.contenedor.classList.add('sidebar-mostrar');
    document.body.appendChild(this.overlay);
    return this; };

  /**
   * Oculta el sidebar moviendolo fuera de la pantalla y elimina el overlay del 
   * DOM
   * 
   * @returns {void}
   */
  this.ocultar = function() {
    this.contenedor.classList.remove('sidebar-mostrar');
    this.overlay.remove();
    return this; };

  /**
   * Establece la plantilla del contenido
   * 
   * @param {String} plantilla Plantilla a mostrar en la sección de contenido
   * 
   * @returns {Componente}
   */
  this.setPlantillaContenido = function(plantilla) {
    this.dom.div_contenido.appendChild(this.elemento(plantilla));
    this.actualizarDom();
    return this; }

  /**
   * Establece la plantilla del footer
   * 
   * @param {String} plantilla Plantilla a mostrar en la sección de footer
   * 
   * @returns {Componente}
   */
  this.setPlantillaFooter = function(plantilla) {
    this.dom.div_footer.appendChild(this.elemento(plantilla));
    this.actualizarDom();
    return this; }

  /**
   * Establece la plantilla del header
   * 
   * @param {String} plantilla Plantilla a mostrar en la sección de header
   * 
   * @returns {Componente}
   */
  this.setPlantillaHeader = function(plantilla) {
    this.dom.div_header.appendChild(this.elemento(plantilla));
    this.actualizarDom();
    return this; }

//==============================================================================
//----------------------------------- Hooks ------------------------------------
//==============================================================================

//==============================================================================
//---------------------------------- Eventos -----------------------------------
//==============================================================================

  //--------------------------------- Sidebar ----------------------------------

  /**
   * Agreaga un evento click al elemento overlay
   */
  this.onClick(this.overlay, event => 
    this.ocultar());

//==============================================================================
//----------------------------------- Proxy ------------------------------------
//==============================================================================

//==============================================================================
//------------------------------------ Apis ------------------------------------
//==============================================================================

//==============================================================================
//---------------------------------- Interfaz ----------------------------------
//==============================================================================

//==============================================================================
//---------------------------------- Creación ----------------------------------
//==============================================================================

}

/**
 * Establece la herencia del objeto Componente
 */
Sidebar.prototype = Object.create(Componente.prototype);