/**
 * Como convención utilizamos "PascalCase" para nombrar a las vistas y estas 
 * deberán estar localizadas en el folder vistas, para nombrar al archivo que 
 * contiene la definición de la vista deberá usarse "kebab-case".
 * 
 * Ejemplo:
 * - Nombre de la vista: VistaEjemplo
 * - Nombre del archivo: vista-ejemplo.js
 * - Ruta del archivo: /vistas/vista-ejemplo.js
 */

/**
 * Importa la función constructora "Componente" de la libreria alendra.js.
 */
// import Componente from '../node_modules/alendra.js/javascript/componente.js';

/**
* @interface
 * @implements {Componente}
 * 
 * Función constructora para la vista componente "VistaEjemplo".
 */
export default function VistaEjemplo() {
  /**
	 * Cuando se crea una nueva instancia de "VistaEjemplo" mediante el operador 
   * "new", se crea un objeto vacío accesible mediante la palabra clave "this", 
   * el cual se envia como parametro en la llamada a la función constructora 
   * "Componente", esto provoca la ejecución del código de la función 
   * constructora "Componente" en el contexto del objeto "VistaEjemplo" enviado, 
   * de esta manera las asignaciónes dínamicas de propiedades y metodos que 
   * suceden en la función constructora "Componente" se hacen sobre el objeto 
   * "VistaEjemplo" enviado.
	 */
  // Componente.call(this);

//==============================================================================
//--------------------------------- Plantilla ----------------------------------
//==============================================================================

  /**
	 * Establece la representación visual de la vista.
   *
   * Para definir correctamente la estructura, esta deberá comenzar siempre por 
   * un elemento contenedor y dentro de este deberán estar los nodos hijos.
   * 
   * Los IDs para los elementos se especificaran utilizando la convención 
   * "snake_case" y mediante propiedad personalizada data-id.
   * 
   * Utiliza la clase "vista" de la libreria CSS de alendra.js
	 */
  // this.setPlantilla(
  // /* html */ `
  //   <!-- DIV contenedor -->
  //   <div
  //   class="vista">
  //     <!-- Nodos hijos -->
  //   </div>
  // `);

//==============================================================================
//----------------------------------- Hooks ------------------------------------
//==============================================================================

//==============================================================================
//--------------------------------- Variables ----------------------------------
//==============================================================================

//==============================================================================
//---------------------------------- Métodos -----------------------------------
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
 * Establece la herencia entre las funciones constructoras "VistaEjemplo" y 
 * "Componente". 
 */
// VistaEjemplo.prototype = Object.create(Componente.prototype);

/**
 * Reestablece la función constructora "VistaEjemplo" como constructor de los 
 * objetos "VistaEjemplo" instanciados mediante el operador "new".
 */
// VistaEjemplo.prototype.constructor = VistaEjemplo;