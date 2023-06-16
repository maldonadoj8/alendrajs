/**
 * Importa la función constructora "Componente" de la libreria alendra.js.
 */
import Componente from './node_modules/alendra.js/javascript/componente.js';

/**
 * Importa la función constructora "Router" de la libreria alendra.js
 */
// import Router from './node_modules/alendra.js/javascript/router.js';

/**
 * Importa las funciones constructoras de los componentes que seran usados como 
 * vistas.
 */
// import VistaN from './vistas/vista-n.js';

/**
 * @interface
 * @implements {Componente}
 * 
 * Función constructora para el componente principal de una aplicación
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
	 * Establece la representación visual del componente.
	 * 
	 * Utiliza la clase "app" de la libreria CSS de alendra.js
	 */
	// this.setPlantilla(
  // /* html */ `
	// 	<div
	// 	class="app">
	// 	</div>
  // `);

//==============================================================================
//------------------------------- Inicialización -------------------------------
//==============================================================================

	/**
	 * Establece la configuración para el routing de la aplicación
	 */
	// window.router.setContenedor(this.render());
	// window.router.setCarpetaRaiz('carpetaRaiz');
	// window.router.setRutas([
	// 	{
	// 		'url'  : 'vista-uno',
	// 		'vista': new VistaUno()
	// 	},
	// 	{
	// 		'url'  : 'vista-dos',
	// 		'vista': new VistaDos()
	// 	}
	// ]);

//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================

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

}			

/**
 * Establece la herencia entre las funciones constructoras "App" y "Componente". 
 */
// App.prototype = Object.create(Componente.prototype);

/**
 * Reestablece la función constructora "App" como constructor de los objetos 
 * "App" instanciados mediante el operador "new".
 */
// App.prototype.constructor = App;