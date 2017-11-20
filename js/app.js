/* Funcionalidades
Versión 0.0.1
Se mostrará el texto "Añadir una lista ...".
Al hacer click se debe ocultar el texto y mostrar un formulario.
El formulario está conformado por un input y un botón para que 
pueda añadir tareas a tu lista.*/

window.addEventListener('load', function() {
    
    var firstText = document.getElementById('first-js')
    
    firstText.addEventListener('click',hidden)
    // ocultar texto
    function hidden(){
    firstText.classList.toggle('text-hidden');
    }
    
    //function boxHidden(){
    //firstText.className = 'text-hidden';
     
    
    //añadir input
   


});
