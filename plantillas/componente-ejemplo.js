/**
 * Como convención utilizamos "PascalCase" para nombrar a los componentes y 
 * estos deberán estar localizados en el folder compontenes, para nombrar al 
 * archivo que contiene la definición del componente deberá usarse "kebab-case".
 * 
 * Ejemplo:
 * - Nombre del componente: ComponenteEjemplo
 * - Nombre del archivo: componente-ejemplo.js
 * - Ruta del archivo: /componentes/componente-ejemplo.js
 */

/**
 * Importa la función constructora "Componente" de la libreria alendra.js.
 */
// import Componente from '../node_modules/alendra.js/javascript/componente.js';

/**
* @interface
 * @implements {Componente}
 * 
 * Función constructora para el componente "ComponenteEjemplo"
 */
export default function ComponenteEjemplo() {
  /**
	 * Cuando se crea una nueva instancia de "ComponenteEjemplo" mediante el 
   * operador "new", se crea un objeto vacío accesible mediante la palabra clave 
   * "this", el cual se envia como parametro en la llamada a la función 
   * constructora "Componente", esto provoca la ejecución del código de la 
   * función constructora "Componente" en el contexto del objeto 
   * "ComponenteEjemplo" enviado, de esta manera las asignaciónes dínamicas de 
   * propiedades y metodos que suceden en la función constructora "Componente" 
   * se hacen sobre el objeto "ComponenteEjemplo" enviado.
	 */
  // Componente.call(this);

//==============================================================================
//--------------------------------- Plantilla ----------------------------------
//==============================================================================

  /**
	* Establece la representación visual del componente.
  *
  * Para definir correctamente la estructura, esta deberá comenzar siempre por 
  * un elemento contenedor y dentro de este deberán estar los nodos hijos.
  * 
  * Los IDs para los elementos se especificaran utilizando la convención 
  * "snake_case" y mediante propiedad personalizada data-id.
	*/
  // this.setPlantilla(
  // /* html */ `
  //   <!-- DIV contenedor -->
  //   <div>
  //     <!-- Nodos hijos -->
  //     <p
  //     data-id="p_ejemplo">
  //       Este es un ejemplo de un componente
  //     </p>
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
 * Establece la herencia entre las funciones constructoras "ComponenteEjemplo" y 
 * "Componente". 
 */
// ComponenteEjemplo.prototype = Object.create(Componente.prototype);

/**
 * Reestablece la función constructora "ComponenteEjemplo" como constructor de 
 * los objetos "ComponenteEjemplo" instanciados mediante el operador "new".
 */
// ComponenteEjemplo.prototype.constructor = ComponenteEjemplo;