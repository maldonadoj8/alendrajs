/**
 * Importa el objeto Componente de la libreria de Alendra.js
 */
import Componente from '../javascript/componente.js';

/**
 * Componente Modal
 * 
 * @interface
 * 
 * @implements {Componente}
 */
export default function Modal() {
  /**
	 * Establece la herencia del objeto Componente
	 */
  Componente.call(this);

//==============================================================================
//--------------------------------- Plantilla ----------------------------------
//==============================================================================

  /**
   * Define la plantilla del componente Modal
   */
  this.setPlantilla(
  /* html */ `
    <!-- DIV contenedor -->
    <div
    class="ctr-modal">
      <!-- Nodos hijos -->
      <div
      class="modal">
        
        <!-- Header del modal -->
        <div>
          <!-- Titulo del modal -->
          <h4
          data-id="h4_titulo">
            Titulo
          </h4>
        </div>

        <!-- Divisor -->
        <div class="bg-gris divisor mb-24p mt-16p"></div>
        
        <!-- Contenido del modal -->
        <div
        data-id="div_contenido">
        </div>

        <!-- Divisor -->
        <div class="bg-gris divisor mb-16p mt-24p"></div>

        <!-- Footer del modal -->
        <div
        class="d-flex justify-end">
          <!-- Boton de cancelacion -->
          <button
          data-id="btn_cancelar"
          class="bg-error btn btn-m mr-16p txt-blanco3">
            Cancelar
          </button>

          <!-- Boton de confirmación -->
          <button
          data-id="btn_confirmar"
          class="btn btn-m">
            Confirmar
          </button>
        </div>
      </div>
      
      <!-- Overlay del modal -->
      <div
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
   * btn_cancelar
   */
  this.cancelar = function() { 
    this.eliminar(); };

  /**
   * Se ejecuta en caso de que el usuario presione el boton con data-id 
   * btn_confirmar
   */
  this.confirmar = function() { 
    this.eliminar(); };
  
  /**
   * Limpia el div con data-id div_contenido
   */
  this.limpiar = function() {
    this.limpiarInputs(this.dom.div_contenido); };

  /**
   * Renderiza el componente en el body del DOM
   */
  this.mostrar = function() { 
    this.render(document.body);
    this.dom.btn_cancelar.focus();  
    return this; };

//==============================================================================
//----------------------------------- Hooks ------------------------------------
//==============================================================================

  /**
   * Define la función que se ejecutara cuanto el usuario presione el boton con 
   * data-id btn_cancelar
   */
  this.setFuncionCancelar = function(funcion) {
    this.cancelar = funcion;
    return this; };

  /**
   * Define la función que se ejecutara cuanto el usuario presione el boton con 
   * data-id btn_confirmar
   */
  this.setFuncionConfirmar = function(funcion) {
    this.confirmar = funcion;
    return this; };

  /**
   * Define la plantilla que tendra el div con data-id div_contenido 
   */
  this.setPlantillaContenido = function(plantilla) {
    this.dom.div_contenido.innerHTML = this.elemento(plantilla).outerHTML;
    this.reestablecerDom();
    let elementos = this.html.querySelectorAll('[data-id]');
    elementos.forEach(elemento => this.dom[elemento.dataset.id] = elemento);
    if(typeof this.onUpdate === 'function' || this.onUpdate instanceof Function) 
      this.onUpdate(this);
    return this.dom.div_contenido; };

  /**
   * Define el texto que tendra el span con data-id btn_cancelar
   */
  this.setTextoCancelar = function(texto) {
    if(typeof texto === 'string' || texto instanceof String)
      this.dom.btn_cancelar.innerHTML = texto;
    return this; };

  /**
   * Define el texto que tendra el span con data-id btn_confirmar
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
   * Agrega un evento click al boton con data-id btn_cancelar
   */
  this.onClick(this.dom.btn_cancelar, event => {
    this.cancelar(this); });

  /**
   * Agrega un evento click al boton con data-id btn_confirmar
   */
  this.onClick(this.dom.btn_confirmar, event => {
    this.confirmar(this); });

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
Modal.prototype = Object.create(Componente.prototype);