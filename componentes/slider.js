/**
 * Importa el objeto Componente de la libreria de Alendra.js
 */
import Componente from '../javascript/componente.js';

/**
 * Importa el modulo Alendra de la libreria alendra.js
 */
import * as Alendra from '../javascript/alendra.js';

/**
 * Componente Slider
 * 
 * @interface
 * 
 * @implements {Componente}
 */
export default function Slider() {
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
    class="ctr-slider">
      <!-- Nodos hijos -->
      <!-- Contenedor de slides -->
      <div
      data-id="div_contenedorSlides"
      class="slides-x">
      </div>
      <!-- Contenedor de indicadores -->
      <div
      data-id="div_contenedorIndicadores"
      class="indicadores">
      </div>
    </div>
  `);

//==============================================================================
//------------------------------- Inicialización -------------------------------
//==============================================================================

//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================
  
  /**
   * Propiedad que guarda el indice del slide que se muestra actualmente
   */
  this.indiceActual;
  
  /**
   * Propiedad que guarda los elementos indicadores
   */
  this.indicadores;

  /**
   * Propiedad que guarda el slide que se muestra actualmente
   */
  this.slideActiva;

  /**
   * Propiedad que guarda los slides a mostrar
   */
  this.slides;

  /**
   * Timer que ejecuta el movimiento y centra el slide correspondiente
   */
  let timerDeslizando;

//==============================================================================
//--------------------------------- Funciones ----------------------------------
//==============================================================================

  /**
   * Llama a la función actualizarIndice con el indiceActual
   */
  this.actualizar = function() {
    this.actualizarIndice(this.indiceActual); }

  /**
   * Realiza los cambios de interfaz para que coincida con el indice actual
   * 
   * @param {Number} indice Indice actual
   */
  this.actualizarIndice = function(indice) {
    /**
     * Quita la clase indicador-activo al indicador actual
     */
    this.indicadores[this.indiceActual].classList
    .toggle('indicador-activo', false);
    /**
     * Quita la clase slide-activa al slide actual
     */
    this.slides[this.indiceActual].classList
    .toggle('slide-activa', false);
    /**
     * Agrega la clase indicador-activo al indicador actual
     */
    this.indicadores[indice].classList
    .toggle('indicador-activo', true);
    /**
     * Agrega la clase slide-activa al slide actual
     */
    this.slides[indice].classList
    .toggle('slide-activa', true);
    /**
     * Asigna el indice al indice actual
     */
    this.indiceActual = indice;
    /**
     * Hace scroll al slide correspondiente en el contenedor de slides
     */
    this.dom.div_contenedorSlides.scrollLeft = 
    this.slides[this.indiceActual].offsetWidth * this.indiceActual; }

  /**
   * Agrega los indicadores necesarios en base al numero de slides dados
   */
  this.agregarIndicadores = function() {
    this.dom.div_contenedorIndicadores.appendChild(
      this.fragmentoHtml(this.slides, slide => {
      return this.elemento(
      /* html */ `
        <div
        class="indicador 
        ${
          slide.classList.contains('slide-activa') && 'indicador-activo'
        }"
        data-indice="${this.obtenerIndiceSlide(slide)}">
        </div>
      `); })); }

  /**
   * Retorna el indice numero que indica la posición del slide dado en el 
   * arreglo de slides
   * 
   * @param {HTMLElement} slide Slide a buscar
   * @returns {Number}
   */
  this.obtenerIndiceSlide = function(slide) {
    return Array.from(this.slides).indexOf(slide); }

//==============================================================================
//----------------------------------- Hooks ------------------------------------
//==============================================================================

  /**
   * Asigna las slides a mostrar en el slider
   * 
   * @param  {...String} slides Slides en formato plantilla String
   * 
   * @returns {Componente} Retorna a si mismo
   */
  this.setSlides = function(...slides) {
    /**
     * Itera el parametro slides para agregar cada una al contenedor de slides
     */
    slides.forEach(slide => {
      this.dom.div_contenedorSlides.appendChild(this.elemento(slide)); });
    /**
     * Obtiene los elementos con la propiedad custom data-id dentro de cada 
     * slide y los agrega al objeto dom del componente
     */
    this.actualizarDom();
    /**
     * Asigna a la propiedad slides del componente cada uno de los elementos 
     * HTML con la clase .slides
     */
    this.slides = this.dom.div_contenedorSlides.querySelectorAll('.slide');
    /**
     * Llama a la función para agregar indicadores
     */
    this.agregarIndicadores();
    /**
     * Asigna a la propiedad slideActiva del componente el elemento HTML con la 
     * clase .slide-activa
     */
    this.slideActiva = Alendra.elementoDeListaConClase(this.slides, 'slide-activa');
    /**
     * Asigna a la propiedad indicadores del componente cada uno de los 
     * elementos HTML con la clase .indicador
     */
    this.indicadores = this.dom.div_contenedorIndicadores.querySelectorAll('.indicador');
    /**
     * Asigna a la propiedad indiceActual del componente el indice 
     * correspondiente al slide actual
     */
    this.indiceActual = this.obtenerIndiceSlide(this.slideActiva);
    /**
     * Llama a la función para actualizar el indice
     */
    this.actualizarIndice(this.indiceActual);
    /**
     * Retorna a si mismo
     */
    return this; }

//==============================================================================
//---------------------------------- Eventos -----------------------------------
//==============================================================================

  /**
   * Agrega un evento scroll al div con data-id div_contenedorSlides
   */
  this.onScroll(this.dom.div_contenedorSlides, event => {
    /**
     * Limpia el timer que monitorea el scroll
     */
    window.clearTimeout(timerDeslizando);
    /**
     * Inicia el timer que monitorea el scroll
     */
    timerDeslizando = setTimeout(_ => {
      let anchoSlide = event.target.scrollWidth / this.slides.length;
      let indice     = (Math.round(event.target.scrollLeft / anchoSlide));
      this.actualizarIndice(indice); }, 100); }); 

  /**
   * Agrega un evento click al div con data-id div_contenedorIndicadores
   */
  this.onClick(this.dom.div_contenedorIndicadores, event => {
    let indicador = event.target.closest('.indicador');
    if(!indicador) {
      return; }
    this.actualizarIndice(indicador.dataset.indice); });

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
Slider.prototype = Object.create(Componente.prototype);