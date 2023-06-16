/**
 * Importa el objeto Componente de la libreria de Alendra.js
 */
import Componente from '../javascript/componente.js';

/**
 * Componente Alerta
 * 
 * @interface
 * 
 * @implements {Componente}
 */
export default function Alerta() {
  /**
	 * Establece la herencia del objeto Componente
	 */
  Componente.call(this);

//==============================================================================
//--------------------------------- Plantilla ----------------------------------
//==============================================================================

  /**
   * Define la plantilla del componente Alerta
   */
  this.setPlantilla(
  /* html */ `
    <!-- DIV contenedor -->
    <div
    class="ctr-alerta">
      <!-- Nodos hijos -->
      <div
      class="alerta">
        
        <!-- Header del alerta -->
        <div>
          <!-- Titulo del alerta -->
          <h4
          data-id="h4_titulo">
            Titulo
          </h4>
        </div>

        <!-- Divisor -->
        <div class="bg-gris divisor mb-24p mt-16p"></div>
        
        <!-- Contenido del alerta -->
        <div
        data-id="div_contenido"
        class="txt-breaka">
          <p
          data-id="p_mensaje">
          </p>
        </div>

        <!-- Divisor -->
        <div class="bg-gris divisor mb-16p mt-24p"></div>

        <!-- Footer del alerta -->
        <div
        class="d-flex justify-end">
          <!-- Boton de confirmación -->
          <button
          data-id="btn_confirmar"
          class="btn btn-m">
            Confirmar
          </button>
        </div>
      </div>
      
      <!-- Overlay del alerta -->
      <div
      data-id="div_overlay"
      class="overlay">
      <div>
    </div>
  `);

//==============================================================================
//------------------------------- Inicialización -------------------------------
//==============================================================================

//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================

//==============================================================================
//--------------------------------- Funciones ----------------------------------
//==============================================================================

  /**
   * Se ejecuta en caso de que el usuario presione el boton con data-id 
   * btn_confirmar
   */
  this.confirmar = function() { 
    this.eliminar(); };

  /**
   * Renderiza el componente en el body del DOM
   */
  this.mostrar = function() { 
    this.render(document.body);
    this.dom.btn_confirmar.focus();  
    return this; };

//==============================================================================
//----------------------------------- Hooks ------------------------------------
//==============================================================================

  /**
   * Define la función que se ejecutara cuanto el usuario presione el boton con 
   * data-id btn_confirmar
   */
  this.setFuncionConfirmar = function(funcion) {
    this.confirmar = funcion;
    return this; };

  /**
   * Define el texto que tendra el p con data-id p_mensaje
   */
  this.setMensaje = function(texto) {
    if(typeof texto === 'string' || texto instanceof String)
      this.dom.p_mensaje.innerHTML = texto;
    return this; };

  /**
   * Define el texto que tendra el boton con data-id btn_confirmar
   */
  this.setTextoConfirmar = function(texto) {
    if(typeof texto === 'string' || texto instanceof String)
      this.dom.btn_confirmar.innerHTML = texto;
    return this; };

  /**
   * Define el texto que se mostrara en el h4 con data-id h4_titulo
   */
  this.setTitulo = function(titulo) {
    if(typeof titulo === 'string' || titulo instanceof String)
      this.dom.h4_titulo.innerHTML = titulo
    return this; };

//==============================================================================
//---------------------------------- Eventos -----------------------------------
//==============================================================================

  /**
   * Agrega un evento click al boton con data-id btn_confirmar
   */
  this.onClick(this.dom.btn_confirmar, event => {
    this.confirmar(this); });
  
  /**
   * Agrega un evento click al div con data-id div_overlay
   */
  this.onClick(this.dom.div_overlay, event => 
    this.eliminar());

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
 * Establece la herencia del objeto Alerta
 */
Alerta.prototype = Object.create(Componente.prototype);