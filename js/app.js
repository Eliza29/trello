/* Funcionalidades
Versión 0.0.2
Al dar click en el botón de "Guardar", se mostrará 
un nuevo cuadro donde estará el nombre de la lista agregada.
Mostrar un texto de "Añadir una tarea" dentro de la lista*/

window.addEventListener('load', function() {
    
    var firstText = document.getElementById('first-js')
    var container = document.getElementById('container-js') 
    var newDiv = document.createElement('div');
    var input = document.createElement('input');
    var button = document.createElement('button');
    var secondDiv = document.createElement('div');
    var nameInput= document.createElement('p');
    var addCard = document.createElement('p');
    
    firstText.addEventListener('click',hidden)
    // ocultar texto y mostrar formulario
    function hidden(){
        if(firstText){
            container.removeChild(firstText);
            container.appendChild(newDiv);
            newDiv.appendChild(input);
            newDiv.appendChild(button);
            button.textContent = 'Guardar';   
            
            newDiv.classList.add('new-div')
            input.classList.add('style-input')
            button.classList.add('style-button')
        }
    }
    //obteniendo el valor del texto agregado en el input
    input.addEventListener('keyup',name)
    function name(){
        if(input.value){
            nameInput.textContent = input.value;
        }
    }
    button.addEventListener('click',nameCard)
    function nameCard(){
        if(button){
            container.removeChild(newDiv);
            container.appendChild(secondDiv);
            secondDiv.appendChild(nameInput);
            secondDiv.appendChild(addCard);
            
            addCard.textContent = 'Añadir una tarjeta ...'
            
            secondDiv.classList.add('second-div')
            nameInput.classList.add('name-input')
            addCard.classList.add('add-card')
            }
        }
});
