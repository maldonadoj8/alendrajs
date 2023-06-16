/**
* Objeto que define las funciones de un router para manejar la navegación de un 
* SPA, este objeto obedece el patrón SINGLETON por lo que solo existirá una 
* instancia en la aplicación en la que se implemente
* El proceso para la configuración ideal es:

1. Importar el archivo router.js lo que nos dara acceso al router a traves del 
objeto window (window.router).

2. Nuestra aplicación SPA debera tener un contenedor HTML principal por lo que 
debemos establecerlo mediante la función 
window.router.setContenedor(contenedor)

3. Nuestra aplicación SPA estara alojada en una carpeta raiz por lo que debemos 
establecerlo mediante la función window.router.setCarpetaRaiz('carpeta')

4. Nuestra aplicación SPA estara formada por una serie de rutas y vistas, las 
cuales seran presentadas en interfaz dependiendo de la URL actual del navegador
por lo que debemos establecerlas por medio de la función 
window.router.setRutas(rutas), las rutas deberan ser una lista de objetos con la
estructura:
[{
  "url"  : "url-a",
  "vista": vista-a,
  "rutas":[{
    "url"  : "url-a1",
    "vista": vista-a1,
    "rutas": [{
      "url"  : "url-a11",
      "vista": vista-a11,
    }]
  }]
},
{
  "url"  : "url-b",
  "vista": vista-b
}]
donde URL representa a la URL actual que debe tener el navegador para definir a 
la ruta como ruta actual, vista es el componente que representa a la vista y 
rutas es una lista que representa a sus rutas anidadas 

5. Utilizar las siguientes funciones cuando sea necesario:
* window.router.atras(). Esta función provoca que el navegador vaya a la pestaña 
anterior en el historial

* window.router.navegarA(url, parametros, delegado). Esta función provoca que el 
navegador cambie la url actual del navegador y presente la vista correspondiente
los parametros indican: 
- 'url': STRING con el url a donde queremos navegar 
EJEMPLO: 'productos'
- 'parametros'. Parametros que queremos enviar a la siguiente pestaña 
EJEMPLO: {'id': '1234567890', 'nombre': 'producto1'}
estos parametros se presentaran en la url con el formato clasico de POST/GET
?id=1234567890&nombre=producto1
- 'delegado'. Función delegada nos servira para enviar información de regreso a 
la vista presentadora

* window.router.obtenerParametrosUrl(). Esta función lee la url y extrae los 
parametros cuando estos estan en el formato clasico POST/GET, y los entrega en 
un formato {'id': '1234567890', 'nombre': 'producto1'}

* window.router.recargarApp(url). Esta función reinicia el historial de la app y 
muestra como página inicial la página correspondiente a la url dada o la url de 
la primera ruta de la lista de rutas

* window.router.recargarNavegador(). Esta función reinicia el historial de la 
app y dirige a la pestaña a la raíz

6. En caso de querer navegar por medio de una etiqueta <a></a> puedes optar por 
añadir la propiedad data-router-link a la etiqueta, de esta forma el router 
sabra que debera obtener el url de la propiedad href e interceptar el 
funcionamiento predeterminado
EJEMPLO:
  <a href="ruta-a-navegar" data-router-link>link</a>
**/

export default function Router() {

//==============================================================================
//--------------------------------- Singleton ----------------------------------
//==============================================================================

  /**
   * Verifica que exista una instancia creada, si existe retorna la instancia 
   * (SINGLETON)
   */
  if(typeof Router.instancia === 'object' || Router.instancia instanceof Object)
    return Router.instancia;

//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================

  /**
   * Guarda el elemento HTML que servirá como contenedor general para renderizar 
   * la vista actual, se usa como contenedor predeterminado si la vista actual 
   * no pertenece a un padre o si dicho padre no contiene un OULET
   */
  this.contenedor;

  /**
   * Función que se ejecuta al presentar una nueva vista, se llama 
   * automáticamente
   */
  this.alPresentarVista;
  
  /**
   * Guarda la relación de las rutas que componen la aplicación, dichas rutas 
   * deben obedecer el siguiente patrón donde "URL" se refiere a la ruta del 
   * navegador a la que pertenece, una “VISTA” la cual es un componente 
   * (revisar componente.js) y “RUTAS” refiere a las rutas hijas que siguen un 
   * patrón anidado:
   [{
    "url"  : "url-a",
    "vista": vista-a,
    "rutas":[{
       "url"  : "url-a1",
       "vista": vista-a1
     }]
   },
   {
    "url"  : "url-b",
    "vista": vista-b
   }]
   *å/
  this.rutas;

  /**
   * Guarda el nombre de la carpeta contenedora de la aplicación (carpeta raíz)
   */
  this.carpetaRaiz;

  /**
   * Guarda el url actual
   */
  this.urlActual;

  /**
   * Singleton
   */
  Router.instancia = this;

//==============================================================================
//--------------------------------- Funciones ----------------------------------
//==============================================================================

  /**
   * Dispara el evento atrás del navegador
   */
  this.atras = function() {
    window.history.back(); };

  /**
   * Navega todos los campos de un objeto, los codifica UTF y los retorna en un 
   * arreglo con el formato: ["llave-a=valor-a",..."llave-n=valor-n"]
   * @param  {Object} objeto Objeto a codificar
   * @return {Array } Retorna los datos en un arreglo
   */
  this.codificarObjeto = function(objeto) {
    if(typeof objeto === 'object' || objeto instanceof Object)
      if(Object.keys(objeto).length)
        return Object.keys(objeto).map(k =>
          `${encodeURIComponent(k)}=${encodeURIComponent(objeto[k])}`);
    return []; };

  /**
   * Codifica un objeto y lo retorna en una cadena de texto con el formato: 
   * "?llave-a=valor-a&...llave-n=valor-n"
   * @param  {Object} parametros Objeto con parámetros a codificar
   * @return {String} Retorna los parámetros en formato query string
   */
  this.codificarParametros = function(parametros) {
    if(typeof parametros === 'object' || parametros instanceof Object)
      if(Object.keys(parametros).length)
        return `?${this.codificarObjeto(parametros).join('&')}`;
    return ''; };

  /**
   * Compara la dirección formada por el URL base y el URL especificado con la 
   * dirección actual de la barra de navegación
   * @param  {String } url URL a comparar
   * @return {Boolean} Retorna el resultado de la comparación
   */
  this.compararUrl = function(url) {
    return `${this.carpetaRaiz}/${url}` === 
    `${location.origin}${location.pathname}`; };

  /**
   * Encuentra la ruta correspondiente al URL actual del navegador iterando de 
   * manera recursiva el arreglo de rutas
   * @param  {Array } rutas Rutas a recorrer
   * @param  {String} url   Almacenta el url actual de la iteración
   * @return {Ruta  } Retorna la ruta encontrada
   */
  this.encontrarRutaAnidada = function(rutas, url = '') {
    for(let ruta of rutas) {
      if(this.compararUrl(`${url}${ruta.url}`))
        return { 
          'ruta': ruta,
          'link' : `${url}${ruta.url}` };
      else if(ruta.rutas) {
        let rutaAnidada = 
        this.encontrarRutaAnidada(ruta.rutas, `${url}${ruta.url}/`);
        if(rutaAnidada) {
          return {
            'ruta'     : rutaAnidada,
            'rutaPadre': ruta,
            'link'     : rutaAnidada.link }; }}}};

  /**
   * Modifica el URL de la página actual e inicia una transición de vista
   * @param {String  } url        URL de la nueva página a mostrar
   * @param {Object  } parametros Parámetros a enviar a la nueva vista
   * @param {Function} delegado   Función a ejecutar por la nueva vista
   */

  this.navegarA = function(url, conHistorial = false, parametros, delegado) {
    if(url === this.urlActual)
      return;
    let urlConParametros = `${url}${this.codificarParametros(parametros)}`;
    if(url.includes(this.urlActual))
      history.pushState(null, null, urlConParametros);
    else {
      if(conHistorial)
        history.pushState(null, null, urlConParametros);
      else 
        history.replaceState(null, null, urlConParametros); }
    this.presentarVista(delegado); };

  /**
   * Busca en la dirección de la barra de navegación los parámetros definidos 
   * con el formato '?parametro=valor'
   * @return {Object} Retorna un objeto que contiene los parámetros encontrados
   */
  this.obtenerParametrosUrl = function() {
    let parametros = 
    Object.fromEntries(new URLSearchParams(location.search).entries()); 
    return Object.entries(parametros).length ? parametros : undefined; };

  /**
   * Busca en la relación de vistas aquella cuyo valor de URL coincida con la 
   * dirección actual de la barra de navegación, si no coincide ninguna ruta 
   * tomara la primera de la lista
   *  @return {Ruta} Retorna la ruta encontrada
   */
  this.obtenerRuta = function() {
    return this.encontrarRutaAnidada(this.rutas) ?? { 
      'ruta': this.rutas[0],
      'link': this.rutas[0].url }; };

  /**
   * Muestra la vista en el contenedor de la aplicación y le envía a esta la 
   * función delegada
   * @param {Componente} delegado Función delegada que será ejecutada por la 
   * nueva vista que se mostrara 
   */
  this.presentarVista = function(delegado) {
    try {
      this.contenedor.innerHTML = null; }
    catch {
      console.error(`Para utilizar el router primero tienes que definir un 
      contenedor: router.setContenedor(HTMLElement)`);
      return; }
    try {
      if(!this.carpetaRaiz) 
        throw 'carpetaRaiz';
      if(!this.rutas) 
        throw 'rutas';
      let rutaAnidada = this.obtenerRuta();
      this.urlActual = rutaAnidada.link;
      history.replaceState(null, null, `${rutaAnidada.link}${location.search}`);
      let rutaRenderizada = this.renderizarRutas(rutaAnidada);
      if(typeof this.alPresentarVista === 'function' || this.alPresentarVista instanceof Function) 
        this.alPresentarVista(rutaRenderizada, delegado); }
    catch(error) {
      console.error(error);
      if(error === 'carpetaRaiz')
        console.error(`Para utilizar el router primero tienes que definir la
        carpeta de tu proyecto: router.setCarpetaRaiz(host/carpeta)`);
      else if(error = 'rutas')
        console.error(`Para utilizar el router primero tienes que definir las 
        rutas: router.setRutas([{url, vista}, {url, vista}])`);
      else
        console.error(error);
      return; }}

  /**
   * Reinicia el historial de la app y muestra como página inicial la página 
   * correspondiente a la url dada o la url de la primera ruta de la 
   * lista de rutas
   * @param {String} url URL a mostrar
   */
  this.recargarApp = function(url) {
    let ubicacion = url ?? this.rutas[0].url;
    history.replaceState(null, null, ubicacion);
    this.presentarVista(); }

  /**
   * Reinicia el historial de la app y dirige a la pestaña a la raíz
   */
  this.recargarNavegador = function() {
    history.replaceState(null, null, this.carpetaRaiz);
    location.reload(); }

  /**
   * Recorre recursivamente hacia adentro el objeto con las rutas hasta 
   * encontrar la ruta final (hija) para después hacer el recorrido inverso, 
   * renderizando la vista de cada ruta en OULET de su antecesora, en caso de 
   * que la ruta antecesora no cuente con un OULET definido se retorna la ruta 
   * hija al siguiente antecesor
   * @param  {Object} rutas Rutas a recorrer
   * @param  {String} padre Almacena ruta padre actual de cada iteración
   * @return {Ruta  } Retorna la raiz
   */
  this.renderizarRutas = function(rutas, padre = undefined) {
    if(rutas.rutaPadre) {
      let desanidada = this.renderizarRutas(rutas.ruta, rutas.rutaPadre);
      if(!padre) {
        this.contenedor.innerHTML = null;
        if(rutas.rutaPadre.vista.oulet) {
          rutas.rutaPadre.vista.oulet.innerHTML = null;
          rutas.rutaPadre.vista.render(this.contenedor);
          desanidada.ruta.vista.render(rutas.rutaPadre.vista.oulet); }
        else 
          desanidada.ruta.vista.render(this.contenedor);
        return desanidada.ruta; }
      else {
        if(rutas.rutaPadre.vista.oulet) {
          rutas.rutaPadre.vista.oulet.innerHTML = null;
          desanidada.ruta.vista.render(rutas.rutaPadre.vista.oulet);
          return {
            'ruta'     : rutas.rutaPadre,
            'rutaPadre': padre };}
        else
          return {
            'ruta'     : desanidada.ruta,
            'rutaPadre': padre }; }}
    else {
      if(!padre) {
        if(rutas.ruta.soloOulet && rutas.ruta.rutas.length) {
          this.navegarA(`${rutas.ruta.url}/${rutas.ruta.rutas[0].url}`);
          return; }
        if(rutas.ruta.vista.oulet && rutas.ruta.soloOulet)
          rutas.ruta.vista.oulet.innerHTML = null;
        this.contenedor.innerHTML = null;
        rutas.ruta.vista.render(this.contenedor); }
      return {
        'ruta': {
          'url'  : rutas.ruta.url,
          'vista': rutas.ruta.vista }}; }};

//==============================================================================
//------------------------------------ Hook ------------------------------------
//==============================================================================

  /**
   * Establece el elemento HTML que será el contenedor de la App
   * @param  {HTMLElement} contenedor Elemento contenedor
   * @return {Router     } Retorna a sí mismo
   */
  this.setContenedor = function(contenedor) {
    try {
      if(!(contenedor instanceof Element))
        throw new Error('contenedor no es un HTMLElement'); 
      this.contenedor = contenedor;
      return this; }
    catch(error) {
      console.error(error);
      return this; }}

  /**
   * Establece la funcion que se ejecutara al presentar una vista
   * @param  {Function} function Funcion a ejecutar
   * @return {Router  } Retorna a sí mismo
   */
  this.setOnPresentarVista = function(funcion) {
    this.alPresentarVista = (rutaEncontrada, delegado) => {
      funcion(this, rutaEncontrada, delegado); }
    return this; }

  /**
   * Establece la relación entre el URL y las vistas de la aplicación
   * @param  {Object} rutas Objeto que con llaves url y vista
   * @return {Router} Retorna a sí mismo
   */
  this.setRutas = function(rutas) {
    this.rutas = rutas;
    this.presentarVista();
    return this; }

  /**
   * Establece el url base de la app, debe darse como appFolder el nombre del 
   * folder que contiene el proyecto
   * @param  {String} appFolder Nombre de la carpeta que contiene el proyecto
   * @return {Router} Retorna a sí mismo
   */
  this.setCarpetaRaiz = function(appFolder) {
    let ruta = 
    window.location.href.substring(0, window.location.href.search(appFolder));
    if(ruta) 
      ruta = `${ruta}${appFolder}`;
    this.carpetaRaiz = ruta;
    return this; }

//==============================================================================
//---------------------------------- Eventos -----------------------------------
//==============================================================================

  /**
   * Agrega un EventListener para escuchar clicks en etiquetas <a> para prevenir 
   * el comportamiento default y en su lugar llama a la función navegarA, para 
   * ser utilizado debe de agregar la propiedad data-router-link a la etiqueta
   */
  document.body.addEventListener('click', event => {
    if(event.target.matches('[data-router-link]')) {
      event.preventDefault();
      this.navegarA(event.target.getAttribute('href')); }});

  /**
   * Agrega un EventListener para escuchar a eventos de la ventana para prevenir 
   * el comportamiento default y en su lugar llama a la función presentarVista
   */
  window.addEventListener('popstate', _ => this.presentarVista());

}

/**
 * Crea una instancia del router y lo agrega al objeto window para hacerla 
 * accesible globalmente via window.router
 */
window.router = new Router();