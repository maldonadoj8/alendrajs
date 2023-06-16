//==============================================================================
//------------------------------------ URLS ------------------------------------
//==============================================================================

  /**
  * URL para la carga de archivos a la nube (EXCLUSIVO WEEII)
  **/
  let apiCloudinary = 'https://api.cloudinary.com/v1_1/weeii/auto/upload/';

  /**
  * URL para la descarga de imagenes de la nube (EXCLUSIVO WEEII)
  **/
  let imgCloudinary = 'https://res.cloudinary.com/weeii/image/upload/';
  
  /**
  * URL para la descarga de videos de la nube (EXCLUSIVO WEEII)
  **/
  let vdoCloudinary = 'https://res.cloudinary.com/weeii/video/upload/';

  /**
   * 
   * @param {String} cloud Define el nombre de la nuebe para cloudinary
   */
  export function setCloudinary(cloud) {
    apiCloudinary = `https://api.cloudinary.com/v1_1/${cloud}/auto/upload`;
    imgCloudinary = `https://res.cloudinary.com/${cloud}/image/upload/`;
    vdoCloudinary = `https://res.cloudinary.com/${cloud}/video/upload/`;
  }
  
//==============================================================================
//-------------------------------- Definiciones --------------------------------
//==============================================================================

  /**
  * Contiene los tamaños de imágenes comunes
  **/
  export const IMG_TAMANO = {
    'AVATAR'  : { 'h': 320, 'w': 320 },
    'AVATAR_S': { 'h': 80,  'w': 80  },
    'ICONO'   : { 'h': 48,  'w': 48  },
    
    'COVER' : { 'h': 360,  'w': 840  },
    'POST_H': { 'h': 400,  'w': 764  },
    'POST_V': { 'h': 1000, 'w': 800  },
    
    'PAISAJE': { 'h': 450, 'w': 800  },
    'RETRATO': { 'h': 800, 'w': 450  }}

//==============================================================================
//------------------------------------ HTML ------------------------------------
//==============================================================================

  /**
  * Retorna el elemento del DOM con el identificador indicado
  * @param  {String     } identificador Id del elemento
  * @return {HTMLElement}               Elemento encontrado
  **/
  export function id(identificador) {
    return document.getElementById(identificador); }

  /** 
  * Retorna los elementos del DOM con clase indicada
  * @param  {String          } clase Nombre de la clase
  * @return {HTMLCollectionOf}       Elementos encontrados
  **/
  export function clase(clase) {
    return document.getElementsByClassName(clase); }

  /** 
  * Retorna los hijos directos del elemento padre que contengan la clase 
  * indicada
  * @param  {HTMLElement} padre Elemento padre
  * @param  {String     } clase Nombre de la clase
  * @return {NodeList   }
  **/
  export function hijosDirectosClase(padre, clase) {
    return padre.querySelectorAll(`:scope > .${clase}`); }

  /** 
  * Retorna un objeto con los hijos de un contenedor que tengan asignado un id
  * con el formato { id: elemento }
  * @param  {HTMLElement} contenedor Elemento padre
  * @return {Object     }
  **/
  export function controlesConIds(contenedor) {
    let objeto = {}
    contenedor.querySelectorAll('[id]').forEach(elemento => {
      objeto[elemento.id] = elemento; });
    return objeto; }

  /*--------------------------------------------------------------------------*/

  /** 
  * Elimina el contenido del elemento indicado
  * @param  {HTMLElement} elemento Elemento a limpiar
  * @return {HTMLElement}          Retorna el elemento sin contenido
  **/
  export function limpiar(elemento) {
    elemento.innerHTML = null;  
    return elemento; }

  /**
  * Inserta un elemento antes del elemento hermano
  * @param {HTMLElement} hermano  Elemento hermano
  * @param {HTMLElement} elemento Elemento a agregar
  **/
  export function antes(hermano,  elemento) {
    hermano.parentNode.insertBefore(elemento, hermano); }

  /**
  * Agrega un elemento despues del elemento hermano
  * @param {HTMLElement} hermano  Elemento hermano
  * @param {HTMLElement} elemento Elemento a agregar
  **/
  export function despues(hermano, elemento) {
    hermano.parentNode.insertBefore(elemento, hermano.nextSibling); }

  /**
  * Reemplaza elemento por remplazo en el DOM
  * @param {HTMLElement} elemento Elemento a remplazar
  * @param {HTMLElement} remplazo Elemento reemplazador
  **/
  export function reemplazar(elemento, remplazo) {
    elemento.parentNode.replaceChild(remplazo, elemento); }

  /*--------------------------------------------------------------------------*/
    
  /** 
  * Agrega un evento onvisibilitychange al objeto window
  * @param {HTMLCollection} elemento Elementos
  * @param {Function      } funcion  Función a ejecutar
  **/
  export function onVisibilityChange(elemento, funcion) {
    let visibilitychange;
    if(typeof document.hidden !== 'undefined')
      visibilitychange = 'visibilitychange';
    else if(typeof document.msHidden !== 'undefined')
      visibilitychange = 'msvisibilitychange';
    else if(typeof document.webkitHidden !== 'undefined')
      visibilitychange = 'webkitvisibilitychange';
    window.addEventListener(visibilitychange, event => {
      funcion(event, elemento, document.visibilityState === 'visible'); });}

  /*--------------------------------------------------------------------------*/

//==============================================================================
//----------------------------------- Forms ------------------------------------
//==============================================================================

  /**
  * Agrega la clase necesaria para reproducir animacion al boton indicado
  * @param {HTMLButtonElement} boton Boton
  **/
  export function animarBoton(boton) {
    boton.classList.toggle('btn-load'); }

  /**
  * Agrega la clase necesaria para reproducir animacion a la imagen indicada
  * @param {HTMLImageElement} imagen Imagen
  **/
  export function animarImagen(imagen) {
    imagen.classList.toggle('img-load'); }

  /**
  * Elimina todas las etiquetas option del control select dado
  * @param {HTMLSelectElement} select Select
  **/
  export function slcLimpiar(select) {
    select.querySelectorAll('option').forEach(option => option.remove()); }

  /**
  * Retorna el valor del un conjunto de input tipo radio button
  * @param {HTMLInputElement} nombre Nombre del conjunto de radio buttons
  **/
  export function rdoValor(nombre) {
    const RADIOS       = document.querySelectorAll(`input[name="${nombre}"]`);
    const SELECCIONADO = Array.from(RADIOS).find(radio => radio.checked);
    return SELECCIONADO ? 
    ((SELECCIONADO.value || undefined) ?? undefined) : 
    undefined; }

//==============================================================================
//------------------------------------ CSS -------------------------------------
//==============================================================================

  /**
  * Agrega o elimina la clase indicada en el elemento indicado
  * @param {HTMLElement} elemento Elemento a modificar
  * @param {String     } clase    Nombre de la clase a agregar/eliminar
  * @param {Boolean    } agrega   Boleano que indica operación exclusiva (a/e)
  **/
  export function toogle(elemento, clase, agrega) {
    elemento.classList.toggle(clase, agrega); }

  /**
  * Oculta el elemento indicado por medio de la propiedad CSS display
  * @param {HTMLElement} elemento Elemento a ocular
  **/
  export function dNone(elemento) {
    elemento.style.display = 'none'; }

  /**
  * Encuentra el elemento de una lista con la clase CSS indicada
  * @param {NodeList} lista lista con elementos HTML
  * @param {String  } clase clase a encontrar
  **/
   export function elementoDeListaConClase(lista, clase) {
    return Array.from(lista).find(elemento =>
      elemento.classList.contains(clase)); }

//==============================================================================
//---------------------------------- Archivo -----------------------------------
//==============================================================================

  /**
  * Realiza una peticion POST para subir un archivo a la nube
  * @param {FormData} datos    Datos que seran enviados
  * @param {Function} exito    Función que se ejecuta en caso de exito
  * @param {Function} progreso Función que notifica el progreso de la petición
  * @param {Function} error    Función que se ejecuta en caso de error
  **/
  export function subirArchivo(datos, { exito, progreso, error }, 
  nube = apiCloudinary) {
    let peticion = new XMLHttpRequest();
    peticion.timeout = 10000;
    /**
     * Callback para caso de error
     */
    peticion.onerror = _ =>
      console.log('Error al subir archivo (error).');
    /**
     * Callback para caso solicitud completada
     */
    peticion.onload = _ =>
      console.log('La petición fue completada.');
    /**
     * Callback para caso de tiempo de espera
     */
    peticion.ontimeout = _ =>
      console.log('Error al subir archivo (timeout).');
    /**
     * Callback para monitorear progreso
     */
    peticion.upload.onprogress = event =>
      progreso(Math.round(100 * (event.loaded / event.total)));
    /**
     * Callback para monitorear la finalización de la petición
     */
    peticion.onreadystatechange = _ => {
      if(peticion.readyState == 4) {
        if(peticion.status == 200)
          exito(JSON.parse(peticion.responseText));
        else {
          const RESPUESTA = peticion.responseText ?
          JSON.parse(peticion.responseText).error.message :
          'Error de red, intenta de nuevo más tarde.';
          error(RESPUESTA);  }}};
    /**
     * Datos a enviar
     */
    let formData = new FormData();
    for(const dato in datos)
      formData.append(dato, datos[dato]);
    peticion.open('POST', `https://api.cloudinary.com/v1_1/${nube}/auto/upload/`);
    peticion.send(formData);  }

  /**
  * Retorna un string representando la extensión de imagenes compatible
  * @return  {String}
  **/
  export function extensionImagen() {
    const NAVEGADOR = navigator.userAgent;
    return NAVEGADOR.includes('Safari') && !NAVEGADOR.includes('Chrome') ? 
    'jpeg' :
    'webp'; }

  /** 
  * Retorna un url para la imagen de cloudinary con el id indicado
  * @param   {String} publicid  Id del adjunto
  * @param   {Object} dimension Objeto indicando la medida de la imagen { h, w }
  * @return  {String}
  **/
  export function urlImagen(publicid, dimension, nube = imgCloudinary) {
    let config = dimension ? `c_limit,h_${dimension.h},q_auto:eco,w_${dimension.w}/` : '';
    return `${nube}${config}${publicid}.${extensionImagen()}`; }

  /** 
  * Retorna true\false si la extensión del archivo dado es compatible
  * @param   {String } mimetype Formato de la imagen cargada
  * @return  {Boolean}
  **/
  export function imagenValida(mimetype) {
    return /^(image\/)(jpeg|jpg|png|gif|webp|svg\+xml)$/.test(mimetype); }

//==============================================================================
//------------------------------- Base de datos --------------------------------
//==============================================================================

  /** 
  * Retorna true\false si la extensión del archivo dado es compatible
  * @param   {Object } objetos Objeto que contiene objetos
  * @param   {String } llave   Llave del objeto a comparar
  * @param   {String } valor   Valor de la llave a encontrar
  * @return  {Object }
  **/
  export function encontrarObjeto(objetos, llave, valor) {
    return Object.values(objetos).find(objeto => {
      return objeto[llave] === valor  });}

//==============================================================================
//---------------------------------- Objetos -----------------------------------
//==============================================================================

  /** 
  * Retorna un Componente
  * @param  {Object} objeto Componente a crear
  * @return {Object}
  **/
   export function nuevo(objeto) {
    return new objeto(); }

  /** 
  * Retorna true\false si la lista dada es un array valido
  * @param   {Array  } lista Lista a evaluar
  * @return  {Boolean}
  **/
  export function listaValida(lista) {
    return Array.isArray(lista) && lista.length; }

  /** 
  * Retorna true\false si el objeto dado es un objeto valido
  * @param   {Object } objeto Objeto a evaluar
  * @return  {Boolean}
  **/
  export function objetoValido(objeto) {
    return esObjeto(objeto) && Object.keys(objeto).length; }

  /** 
  * Retorna true\false si el objeto dado es un objeto
  * @param   {Object } objeto Objeto a evaluar
  * @return  {Boolean}
  **/
  export function esObjeto(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]'; }

//==============================================================================
//----------------------------------- Lógica -----------------------------------
//==============================================================================

  /** 
  * Ejecuta la función indicada despues de esperar n segundos
  * @param {Number  } segundos Segundos a esperar
  * @param {Function} funcion  Función a ejecutar
  **/
  export function esperar(segundos, funcion) {
    setTimeout(() => { funcion(); }, segundos * 1000); }

  /** 
  * Ejecuta la funcion dada si se evalua como verdadero la condicion
  * @param {Boolean } condicion Expresión a evaluar
  * @param {Function} funcion   Función a ejecutar
  **/
  export function ejecutaSi(condicion, funcion) {
    if(condicion) 
      funcion(condicion); }

//==============================================================================
//--------------------------------- Elementos ----------------------------------
//==============================================================================

  export function video(identificador, source) {
    const VIDEO = elemento(`
    <div 
    class="ctr-video bg-black snap-center">
      <video
      id="${identificador}"
      class="video-player video-reel"
      data-src="${source}"
      playsinline
      controls
      loop>
      </video>
    </div>`);
    return VIDEO; }

  export function galeria(identificador, source) {
    const IMAGEN = elemento(`
    <div
    class="bg-black ratio-169 mb-50">
      <div
      class="ctr-fit grid-gallery">
        <div
        id="${identificador}"
        class="grid-image"
        style="background-image: url(${source}); 
        background-repeat: no-repeat; 
        background-position: center center; 
        background-size: cover;">
        </div>
        <div
        id="${identificador}"
        class="grid-image"
        style="background-image: url(${source}); 
        background-repeat: no-repeat; 
        background-position: center center; 
        background-size: cover;">
        </div>
        <div
        id="${identificador}"
        class="grid-image"
        style="background-image: url(${source}); 
        background-repeat: no-repeat; 
        background-position: center center; 
        background-size: cover;">
        </div>
        <div
        id="${identificador}"
        class="grid-image"
        style="background-image: url(${source}); 
        background-repeat: no-repeat; 
        background-position: center center; 
        background-size: cover;">
        </div>
      </div>
    </div>`);
    return IMAGEN; }

//==============================================================================
//----------------------------------- Fechas -----------------------------------
//==============================================================================

  export function stringATimestamp(valor) {
    return Math.round(new Date(valor).getTime() / 1000); };

  export function timestampAString(valor) {
    return new Date(valor * 1000); };

  export function timestampAString1(valor) {
    let fecha  = new Date(valor * 1000);
    let offset = fecha.getTimezoneOffset();
    return new Date(fecha.getTime() - offset * 60 * 1000).toISOString().slice(0, -1); };