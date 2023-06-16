/**
 * @class 
 * 
 * Función constructora que permite la creación de objetos ideados para 
 * encapsular la logica y la representación visual una parte de una interfaz 
 * grafica.
 */
export default function Componente() {

//==============================================================================
//--------------------------------- Plantilla ----------------------------------
//==============================================================================
/**
 * En esta sección se va a definir la estructura HTML del componente con 
 * plantillas literales (``), que nos permiten utilizar cadenas de texto 
 * multilinea y funcionalidades como interpolación de caracteres.
 */

  /**
   * Establece la estructura HTML que se quiere representar, se crea por medio 
   * del método this.elemento.
   * 
   * Se recomienda utilizar una extensión como Inline HTML para mejorar 
   * legibilidad, el texto "html" entre slash y asterisco es el comando 
   * de la extensión Inline HTML.
   */
  this.setPlantilla(
  /* html */ `
    <!-- DIV contenedor (siempre se requiere un elemento contenedor) -->
    <div>
      <!-- Etiquetas HTML del contenido ej: -->
      <!-- <div data-id="nombreDelElemento"></div> -->
      alendra.js
    </div>`);

//==============================================================================
//------------------------------- Inicialización -------------------------------
//==============================================================================
/**
 * En esta sección llamaremos a nuestros métodos de configuración, esto nos 
 * permitirá automatizar ciertos comportamientos, dichos métodos están definidos 
 * en el prototipo y funcionan como HOOKS, llamaremos a aquellos que sean 
 * relevantes para nuestra lógica.
 */

  /**
   * Define el comportamiento que tendra nuestro componente al modificar la 
   * estructura HTML el componente (this.html), este comportamiento se llevara a 
   * cabo solo cuando esta modificación ocurra llamando al método del prototipo 
   * this.setPlantilla.
   */
  this.setAlActualizar(_ => { });

  /**
   * Define el comportamiento que tendra nuestro componente al eliminar el HTML 
   * (this.html) del DOM, este comportamiento se llevara a cabo solo cuando esta 
   * eliminación ocurra llamando a la función del prototipo this.eliminar.
   */
  this.setAlEliminar(_ => { });

  /**
   * Define el comportamiento que tendra nuestro componente al asignar un 
   * elemento del DOM como elemento contenedor, este comportamiento se llevara a 
   * cabo solo cuando esta asignacion ocurra llamando a la función del prototipo 
   * this.setContenedor
   */
  this.setAlRecibirContenedor(_ => { });

  /**
   * Define el comportamiento que tendra nuestro componente al recibir una 
   * actualización de estado, el estado representa a todos los objetos volatiles 
   * que en algún momento interactuen o mantengan una relación con el 
   * componente, este comportamiento se llevara a cabo solo cuando la asignación 
   * de registro ocurra llamando a la función del prototipo this.setEstado
   */
  this.setAlRecibirEstado(_ => { });

  /**
   * Define el comportamiento que tendra nuestro componente al asignar un 
   * elemento del DOM como elemento oulet, este comportamiento se llevara a cabo 
   * solo cuando esta asignacion ocurra llamando a la función del prototipo 
   * this.setOulet
   */
  this.setAlRecibirOulet(_ => { });
  
  /**
   * Define el comportamiento que tendra nuestro componente al asignarle un 
   * registro, por lo regular un componente se utiliza para representar 
   * graficamente los valores de un registro (OBJECT) el cual contiene nuestra 
   * logica, por lo que podemos asignar un registro a nuestro componente con el 
   * fin de tener dicha información accesible, este comportamiento se llevara a 
   * cabo solo cuando la asignación de registro ocurra llamando a la función del 
   * prototipo this.setRegistro
   */
  this.setAlRecibirRegistro(_ => { });

  /**
   * Define el comportamiento que tendra nuestro componente 
   * al este (la propiedad this.html) ser renderizado en el DOM, este 
   * comportamiento se llevara a cabo solo cuando esta renderizacion ocurra 
   * llamando a la función del prototipo this.render
   */
  this.setAlRenderizar(_ => { });
  
//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================

  /**
   * Propiedad que guarda el elemento HTML del DOM que funcionara como 
   * contenedor del componente, se puede utilizar al crear componentes 
   * especiales como sidebar, tabbar, etc.
   */
  this.contenedor = null;

  /**
   * Propiedad que guarda cada uno de los elementos HTML que se encuentran en la 
   * variable this.html por separado, para guardarlos correctamente debe de 
   * asignar la propiedad custom 'data-id' al elemento cuando lo defina en la 
   * plantilla, puede consultar cada elemento de la forma 'this.dom.data-id'
   */
  this.dom = { };

  /**
   * Propiedad que guarda cada uno de los objetos cuya información son 
   * relevantes para el estado actual del componente (si así lo requerimos, su 
   * uso es opcional)
   */
  this.estado      = { };
  this.estadoProxy = new Proxy(this.estado, {
    'get': (target, prop, receiver) => {
      return Reflect.get(target, prop, receiver); },
    'set': (target, prop, val, receiver) => {
      let res = Reflect.set(target, prop, val, receiver);
      this.alRecibirEstado(prop, receiver[prop]);
      return res; }});

  /**
   * Propiedad que guarda los elementos HTML definidos en la plantilla del 
   * componente, incluye al elemento contenedor.
   */
  this.html = null;
  
  /**
   * Esta es una propiedad especial ya que se utiliza en conjunto con router.js,
   * (un componente tambien puede ser utilizado para representar una vista de un 
   * SPA), este router se encarga de presentar en pantalla el componente (en 
   * forma de vista) que corresponda a la ruta actual del navegador y esta 
   * propiedad nos ayuda a presentar rutas anidadas.
   */
  this.oulet = null;

  /**
   * Propiedad que guarda el objeto cuya información guarda la lógica que 
   * representa nuestro componente (si así lo requerimos, su uso es opcional)
   */
  this.registro = { };

//==============================================================================
//---------------------------------- Métodos -----------------------------------
//==============================================================================

  /**
   * Propiedad que almacena la función que se ejecuta al llamar al metodo del 
   * prototipo this.setPlantilla
   */
  this.alActualizar;

  /**
   * Propiedad que almacena la función que se ejecuta al llamar al metodo del 
   * prototipo this.eliminar
   */
  this.alEliminar;

  /**
   * Propiedad que almacena la función  que se ejecuta al llamar al metodo del 
   * prototipo this.setContenedor
   */
  this.alRecibirContenedor;

  /**
   * Propiedad que almacena la función  que se ejecuta al llamara al metodo del 
   * prototipo this.setEstado
   */
  this.alRecibirEstado;
  
  /**
   * Propiedad que almacena la función  que se ejecuta al llamara al metodo del 
   * prototipo this.setOulet
   */
  this.alRecibirOulet;

  /**
   * Propiedad que almacena la función  que se ejecuta al llamara al metodo del 
   * prototipo this.setRegistro
   */
  this.alRecibirRegistro;
  
  /**
   * Propiedad que almacena la función  que se ejecuta al llamara al metodo del 
   * prototipo this.render
   */
  this.alRenderizar;

  /**
   * Propiedad que se utiliza cuando necesitamos delegar la ejecución de una 
   * función de un componente a otro, esta función se asigna a traves del metodo 
   * del prototipo this.setDelegado
   */
  this.delegado;

//==============================================================================
//---------------------------------- Eventos -----------------------------------
//==============================================================================
/**
 * En esta sección agregaremos eventos a nuestros controles obtenidos en la 
 * sección controles (leer sección de eventos del prototipo)
 */

  /**
   * ** EJEMPLO: **
   * this.onClick(this.dom.idElemento, event => { });
   */

//==============================================================================
//----------------------------------- Proxy ------------------------------------
//==============================================================================
/**
 * En esta sección realizaremos la configuración de objetos proxys para la 
 * interacción con la base de datos
 */

//==============================================================================
//------------------------------------ Apis ------------------------------------
//==============================================================================
/**
 * En esta sección realizaremos las llamadas a las apis para conectarnos con el 
 * servidor
 */

//==============================================================================
//---------------------------------- Interfaz ----------------------------------
//==============================================================================
/**
 * En esta sección llevaremos a cabo procesos que involucren cambios a la 
 * interfaz.
 */

  /**
   * ** EJEMPLO: **
   * this.dom.idElemento.innerHTML = 'Hola mundo';
   */

//==============================================================================
//---------------------------------- Creación ----------------------------------
//==============================================================================
/**
 * En esta sección llevaremos a cabo procesos que queremos que ocurran despues
 * de que hayamos configurado nuestro componente, obtenido nuestros controles y 
 * definido nuestra logica personalizada
 */

  /**
   * Establece el elemento HTML que funcionara como contenedor (this.contenedor)
   */
  this.setContenedor(null);

  /**
   * Establece la función delegada (this.delegado)
   */
  this.setDelegado(_ => { });

  /**
   * Establece el estado actual del componente (this.estado)
   */
  this.setEstado({ });

  /**
   * Establece el registro que representa nuestro componente (this.registro)
   */
  this.setRegistro({ });

  /**
   * Establece el elemento HTML que funcionara como OULET (this.oulet)
   */
  this.setOulet(null);

}

//==============================================================================
//--------------------------------- Prototipo ----------------------------------
//==============================================================================

/** 
 * Retorna un elemento HTML a partir de una plantilla
 * 
 * @param {String} plantilla Plantilla equivalente al HTML a generar
 * 
 * @return {HTMLElement}
 */
Componente.prototype.elemento = function(plantilla) {
  let template       = document.createElement('template');
  template.innerHTML = plantilla.trim();
  return template.content.firstElementChild; };

/** 
 * Elimina del DOM el HTML del componente
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.eliminar = function() {
  if(typeof this.alEliminar === 'function' || 
  this.alEliminar instanceof Function) {
    this.alEliminar(this); }
  this.html.remove();
  return this; };

/**
 * Retorna un fragmento HTML formado por una función generadora a partir de una
 * lista de objetos
 * 
 * @param {Array} lista Lista con los objetos
 * @param {Function} generador Función que genera el elemento HTML que 
 * se ha de agregar al fragmento
 * 
 * @return {DocumentFragment}
 */
Componente.prototype.fragmentoHtml = function(lista, generador) {
  let fragmento = new DocumentFragment();
  lista.forEach(elemento => { 
    fragmento.appendChild(generador(elemento)); });
  return fragmento; };

/**
 * Retorna un fragmento HTML formado por componentes generados por una función 
 * generadora a partir de una lista de objetos
 * 
 * @param {Array} lista Lista con los objetos
 * @param {Componente} componente Componente a generar
 * @param {Function} generador Función que genera el componente que 
 * se ha de agregar al fragmento
 * 
 * @return {DocumentFragment}
 */
Componente.prototype.fragmentoComponente = function(lista, componente, generador) {
  let fragmento = new DocumentFragment();
  lista.forEach(elemento => {
    fragmento.appendChild(generador(elemento, new componente())); });
  return fragmento; };

/**
 * Limpia los inputs que se encuentren dentro del elemento HTML especificado
 * 
 * @param {HTMLElement} contenedor
 */
Componente.prototype.limpiarInputs = function(contenedor) {
  contenedor.querySelectorAll('input, select, textarea, img').forEach(el => {
    if(!el.dataset.mantener) {
      if(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
        el.value = null; }
      else if(el instanceof HTMLImageElement) {
        el.removeAttribute('src'); }}}); };

/**
 * Elimina del objeto this.dom los elementos registrados y retorna este vacío
 * 
 * @return {Object}
 */
Componente.prototype.reestablecerDom = function() {
  for(let elemento in this.dom) { 
    if(this.dom.hasOwnProperty(elemento)) {
      delete this.dom[elemento]; }}
  return this.dom; };

/** 
 * Retorna el HTML del componente y lo inserta en el contenedor si este es dado
 * 
 * @param {HTMLElement} contenedor Contenedor padre
 * 
 * @return {HTMLElement}
 */
Componente.prototype.render = function(contenedor) {
  if(contenedor instanceof Element) {
    contenedor.appendChild(this.html); }
  if(typeof this.alRenderizar === 'function' || 
  this.alRenderizar instanceof Function) {
    this.alRenderizar(this); }
  return this.html; };

//==============================================================================
//----------------------------------- Hooks ------------------------------------
//==============================================================================

/** 
 * Establece la función alActualizar
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setAlActualizar = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.alActualizar = funcion; }
  return this; };

/** 
 * Establece la función alEliminar
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setAlEliminar = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.alEliminar = funcion; }
  return this; };

/** 
 * Establece la función alRecibirContenedor
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setAlRecibirContenedor = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.alRecibirContenedor = funcion; }
  return this; };

/** 
 * Establece la función alRecibirEstado
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setAlRecibirEstado = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.alRecibirEstado = funcion; }
  return this; };

/** 
 * Establece la función alRecibirOulet
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setAlRecibirOulet = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.alRecibirOulet = funcion; }
  return this; };

/** 
 * Establece la función alRecibirRegistro
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setAlRecibirRegistro = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.alRecibirRegistro = funcion; }
  return this; };

/** 
 * Establece la función alRenderizar
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setAlRenderizar = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.alRenderizar = funcion; }
  return this; };

/** 
 * Establece el elemento contenedor
 * 
 * @param {HTMLElement} elemento Elemento contenedor
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setContenedor = function(elemento) {
  if(elemento instanceof Element) {
    this.contenedor = elemento;
    this.render(this.contenedor); }
  if(typeof this.alRecibirContenedor === 'function' || 
  this.alRecibirContenedor instanceof Function) {
    this.alRecibirContenedor(elemento); }
  return elemento; };

/** 
 * Establece la función delegada
 * 
 * @param {Function} funcion Función a ejecutar
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setDelegado = function(funcion) {
  if(typeof funcion === 'function' || funcion instanceof Function) {
    this.delegado = funcion; }
  return this; };

/** 
 * Modifica el estado del componente
 * 
 * @param {String} llave Campo del estado a definir
 * @param {Function} generador Función clasificadora que retorna el objeto a 
 * guardar en el estado
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setEstado = function(llave, generador, limpiar = false) {
  if(limpiar && this.estado.hasOwnProperty(llave)) {
    this.estado[llave] = { }; }
  if(typeof generador === 'function' || generador instanceof Function) {
    this.estadoProxy[llave] = 
    this.estado.hasOwnProperty(llave) ? 
    generador(this.estadoProxy[llave]) :
    generador(null); }
  else {
    this.estadoProxy[llave] = generador; }
  return this; };

/**
 * @param id Id que se asignara
 * 
 * @returns  {Componente} Retorna a sí mismo
 */
Componente.prototype.setId = function(id) {
  this.html.dataset.id = id;
  return this; };

/** 
 * Establece el objeto HTML que sera el oulet de la vista
 * 
 * @param {HTMLElement} elemento Elemento HTML
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setOulet = function(elemento) {
  if(elemento instanceof Element) {
    this.oulet = elemento; }
  if(typeof this.alRecibirOulet === 'function' || 
  this.alRecibirOulet instanceof Function) {
    this.alRecibirOulet(elemento); }
  return this; };
  
/** 
 * Modifica el HTML del componente
 * 
 * @param {String} plantilla Plantilla con el HTML
 * 
 * @return {HTMLElement}
 */
Componente.prototype.setPlantilla = function(plantilla) {
  this.reestablecerDom();
  this.html = this.elemento(plantilla);
  this.actualizarDom();
  if(typeof this.alActualizar === 'function' || 
  this.alActualizar instanceof Function) {
    this.alActualizar(this); }
  return this.html; };

/** 
 * Modifica el HTML del componente
 * 
 * @param {HTMLElement} contenedor Contenedor padre
 * @param {String|HTMLElement} plantillas Elementos a agregar
 * 
 * @return {HTMLElement}
 */
Componente.prototype.setPlantillas = function(contenedor, ...plantillas) {
  contenedor      = this.elemento(contenedor);
  const fragmento = new DocumentFragment();
  plantillas.forEach(plantilla => {
    fragmento.appendChild(this.elemento(plantilla)); });
  contenedor.appendChild(fragmento);
  this.html = contenedor;
  if(typeof this.alActualizar === 'function' || 
  this.alActualizar instanceof Function) {
    this.alActualizar(this); }
  return this.html; };

/** 
 * Modifica el Objeto Javascript del componente (registro)
 * 
 * @param {Object} registro Objeto con la información
 * 
 * @return {Componente} Retorna a sí mismo
 */
Componente.prototype.setRegistro = function(registro) {
  for(let propiedad in this.registro) { 
    if(this.registro.hasOwnProperty(propiedad)) {
      delete this.registro[propiedad]; }}
  for(let propiedad in registro) { 
    if(registro.hasOwnProperty(propiedad)) {
      this.registro[propiedad] = registro[propiedad]; }}
  if(typeof this.alRecibirRegistro === 'function' || 
  this.alRecibirRegistro instanceof Function) {
    this.alRecibirRegistro(registro); }
  return this; };


/**
 * Retorna el estado con la llave indicada
 * 
 * @param {String} llave
 * 
 * @returns {Object|any}
 */
Componente.prototype.useEstado = function(llave) {
  return this.estado.hasOwnProperty(llave) ?  
  this.estado[llave] : 
  this.estado; }

//==============================================================================
//---------------------------------- Eventos -----------------------------------
//==============================================================================

/** 
 * Agrega un evento blur al elemento dado
 * 
 * @param {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onBlur = function(elemento, funcion) {
  elemento.addEventListener('blur', event => {
    funcion(event); });
  return elemento; };

/** 
 * Agrega un evento change al elemento dado
 * 
 * @param {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onChange = function(elemento, funcion) {
  elemento.addEventListener('change', event => {
    funcion(event); }); 
  return elemento; };
  
/** 
 * Agrega un evento click al elemento dado
 * 
 * @param {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onClick = function(elemento, funcion) {
  elemento.addEventListener('click', event => {
    funcion(event); }); 
  return elemento; };

/** 
 * Agrega un evento focus al elemento dado
 * 
 * @param {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onFocus = function(elemento, funcion) {
  elemento.addEventListener('focus', event => {
    funcion(event); }); 
  return elemento; };

/** 
 * Agrega un observer de intersección al elemento dado y retorna el elemento
 * 
 * @param {Function} funcion Función a ejecutar al suceder el evento
 * @param {HTMLElement} root Elemento en el cual debera aparecer el 
 elemento para disparar el evento
 * @param {String} margen Margen deseado para disparar el evento
 * @param {Number|Array} limites Porcentaje (decimales) del elemento que 
 * debera aparecer en el root para disparar el evento, si se especifica un 
 * arreglo se disparara el evento multiples veces
 * @param {HTMLElement} elemento Elemento al cual se agregara el evento
 * 
 * @return {HTMLElement }
 */
Componente.prototype.onInterseccion = function(funcion, root, margen, limites, 
elemento) {
  let observer = new IntersectionObserver(funcion, { 
    'root'      : root,
    'rootMargin': margen,
    'threshold' : limites });
  observer.observe(elemento);
  return elemento; };

/** 
 * Agrega un evento keydown al elemento dado
 * 
 * @param {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onKeyDown = function(elemento, funcion) {
  elemento.addEventListener('keydown', event => {
    funcion(event); }); 
  return elemento; };

/** 
 * Agrega un evento keypress al elemento dado
 * 
 * @param  {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param  {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onKeyPress = function(elemento, funcion) {
  elemento.addEventListener('keypress', event => {
    funcion(event); }); 
  return elemento; };

/** 
 * Agrega un evento keyup al elemento dado
 * 
 * @param  {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param  {Function} funcion  Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onKeyUp = function(elemento, funcion) {
  elemento.addEventListener('keyup', event => {
    funcion(event); }); 
  return elemento; };

/** 
 * Agrega un evento scroll al elemento dado
 * 
 * @param  {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param  {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onScroll = function(elemento, funcion) {
  elemento.addEventListener('scroll', event => {
    funcion(event); }); 
  return elemento; };

/** 
 * Agrega un evento touchstart al elemento dado
 * 
 * @param  {HTMLElement} elemento Elemento al cual se agregara el evento
 * @param  {Function} funcion Función a ejecutar al suceder el evento
 * 
 * @return {HTMLElement}
 */
Componente.prototype.onTouch = function(elemento, funcion) {
  elemento.addEventListener('touchstart', event => {
    funcion(event); }); 
  return elemento; };

//==============================================================================
//---------------------------------- Updates -----------------------------------
//==============================================================================

  /** 
   * Comprueba si un elemento HTML con el id indicado existe en el contenedor 
   * indicado
   * 
   * @param  {HTMLElement} idContenedor Id del elemento contenedor
   * @param  {String} id Id a buscar
   * 
   * @return {HTMLElement}
   */ 
  Componente.prototype.contieneId = function(idContenedor, id) {
    let elemento = this.dom[idContenedor];
    return elemento ? 
    elemento.querySelector(`[data-id="${id}"]`) ?? null :
    null; };

  /**
   * Escanea los elementos HTML dentro de la variable this.html y agrega la 
   * objeto this.dom cada uno de los elementos que contengan la propiedad 
   * data-id
   * 
   * @returns {Object} Retorna el objeto this.dom
   */
  Componente.prototype.actualizarDom = function() {
    let elementos = this.html.querySelectorAll('[data-id]');
    elementos.forEach(elemento => {
      this.dom[elemento.dataset.id] = elemento; }); 
    return this.dom; }

  Componente.prototype.registroEnContenedor = function(idContenedor, registro) {
    let elemento = this.dom[idContenedor];
    return elemento ? 
    (elemento.querySelector(`[data-id="${registro.id_entidad}-${registro.id}"]`) 
    ?? null) :
    null; }

  Componente.prototype.idConRegistro = function(registro) {
    return `${registro.id_entidad}-${registro.id}`; }