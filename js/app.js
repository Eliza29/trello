/* Funcionalidades
Versión 0.0.1
Se mostrará el texto "Añadir una lista ...".
Al hacer click se debe ocultar el texto y mostrar un formulario.
El formulario está conformado por un input y un botón para que 
pueda añadir tareas a tu lista.*/

window.addEventListener('load', function() {
    
    var firstText = document.getElementById('first-js')
    var container = document.getElementById('container-js') 
    
    firstText.addEventListener('click',hidden)
    // ocultar texto
    function hidden(){
        if(firstText){
            container.removeChild(firstText);
            var newDiv = document.createElement('div');
            var input = document.createElement('input');
            var button = document.createElement('button');
            
            container.appendChild(newDiv);
            newDiv.appendChild(input);
            newDiv.appendChild(button);
            button.textContent = 'Guardar';   
            
            newDiv.classList.add('new-div')
            input.classList.add('style-input')
            button.classList.add('style-button')
        }

  
    }
   
   


});
