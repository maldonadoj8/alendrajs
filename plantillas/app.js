/**
 * @module App
 * @description Este módulo define la función constructora para el componente 
 * principal de la aplicación.
 */

/**
 * Importa la función constructora "Componente" de la libreria alendrajs.
 */
// import Componente from '.ruta-a/javascript/componente.js';

/**
 * Importa la función constructora "Router" de la libreria alendrajs.
 */
// import Router from '.ruta-a/javascript/router.js';

/**
 * Importa las funciones constructoras de los componentes que seran usados como 
 * vistas.
 */
// import VistaN from '.ruta-a/vistas/vista-n.js';

/**
 * @interface
 * @implements {Componente}
 * @class
 * Función constructora para el componente principal de una aplicación.
 */
export default function App() {
	/**
	 * Cuando se crea una nueva instancia de "App" mediante el operador "new", se 
	 * crea un objeto vacío accesible mediante la palabra clave "this", el cual se 
	 * envia como parametro en la llamada a la función constructora "Componente", 
	 * esto provoca la ejecución del código de la función constructora 
	 * "Componente" en el contexto del objeto "App" enviado, de esta manera las 
	 * asignaciónes dínamicas de propiedades y metodos que suceden en la función 
	 * constructora "Componente" se hacen sobre el objeto "App" enviado.
	 */
	// Componente.call(this);
	
//==============================================================================
//--------------------------------- Plantilla ----------------------------------
//==============================================================================

	/**
	 * Establece la estructura HTML que se quiere representar.
	 */
	this.setPlantilla(
	/* html */ `
		<div
		class="app">
		</div>
	`);
	
//==============================================================================
//------------------------------- Inicialización -------------------------------
//==============================================================================
	
//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================

 /**
	* Crea una nueva instancia de "Router".
	*/
	// this.router = new Router();

//==============================================================================
//---------------------------------- Métodos -----------------------------------
//==============================================================================

//==============================================================================
//----------------------------------- Hooks ------------------------------------
//==============================================================================

//==============================================================================
//---------------------------------- Eventos -----------------------------------
//==============================================================================

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

	/*-------------------------------- Routing ---------------------------------*/
	
	/**
	 * Configura el router de la aplicación.
	 */
	// this.router.setContenedor(this.render());
	// this.router.setCarpetaRaiz('carpeta-raiz');

	/**
	 * Establece las rutas de la aplicación.
	 */
	// this.router.setRutas([
	// 	{
	// 		'url'  : 'vista-uno',
	// 		'vista': new VistaUno()
	// 	},
	// 	{
	// 		'url'  : 'vista-dos',
	// 		'vista': new VistaDos()
	// 	}
	// ]);	
};
	
/**
 * Establece la herencia entre las funciones constructoras "App" y "Componente". 
 */
App.prototype = Object.create(Componente.prototype);
	
/**
 * Reestablece la función constructora "App" como constructor de los objetos 
 * "App" instanciados mediante el operador "new".
 */
App.prototype.constructor = App;