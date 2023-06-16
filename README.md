Git: https://gitlab.com/maldonadoj_8/alendra.js.git

Componente.
Es una función constructora que permite la creación de objetos ideados para 
encapsular la logica y la representación visual una parte de una interfaz 
grafica.

- Propiedades.
* html: Permite guardar el objeto de la clase HTMLElement que representa 
visualmente al componente cuando se renderiza en el DOM, puede contener 
elementos anidados.

* registro: Permite guardar el objeto de la clase Object o Proxy cuya 
información representa la logica del componente.

* dom: Objeto de la clase Object que guarda los objetos de la clase HTMLElement 
anidados dentro de la propiedad "html" siempre y cuando estos contengan la 
propiedad personalizada "data-id". 

- Métodos:
* alRenderizar: Metodo que es ejecutado si se llama al método "render", dicha 
ejecución se realizara despues de que el método "render" agregue el objeto 
"html" al DOM si este es el caso y antes de que el objeto "html" sea retornado 
por el metodo "render", (se define a travez del hook setAlRenderizar).

* alRecibirRegistro: Método que es ejecutado si se llama al método 
"setRegistro", (se define a travez del hook setAlRecibirRegistro).

- Métodos definidos en el prototipo.
* render: Toma el objeto guardado en la propiedad "html" y lo agrega al DOM 
dentro del elemento del tipo HTMLElement si este fue especificado, de otra 
manera solo retorna el objeto guardado en la propiedad "html".

- Metodos hooks definidos en el prototipo.
* setAlRenderizar: Recibe como parametro una función la cual sera asignada al 
método del objeto "alRenderizar". 

* setAlRecibirRegistro:Recibe como parametro una función la cual sera asignada 
al método del objeto "alRecibirRegistro". 

* setPlantilla: Recibe como parametro un String preferentemente utilizando 
plantillas literales el cual debera contener en forma de texto el objeto 
HTMLElement que se desea que el componente represente, a partir de este texto se 
creara un objeto HTMLElement y se asignara a la propiedad "html".