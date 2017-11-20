/* Funcionalidades
Versión 0.0.3
Al dar click en "Añadir una tarea", deberá mostrar
un formulario con un textarea y un botón que diga "Añadir".*/

window.addEventListener('load', function() {
    
    var firstText = document.getElementById('first-js');
    var container = document.getElementById('container-js'); 
    var newDiv = document.createElement('div');
    var input = document.createElement('input');
    var button = document.createElement('button');
    var secondDiv = document.createElement('div');
    var nameInput= document.createElement('p');
    var addCard = document.createElement('p');
    var area = document.createElement('textarea');
    var addButton = document.createElement('button');

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
            
            secondDiv.classList.add('second-div');
            nameInput.classList.add('name-input');
            addCard.classList.add('add-card');
            }
        }
        
    addCard.addEventListener('click',addArea)
        function addArea(){
        if(addCard){
            secondDiv.removeChild(addCard);
            secondDiv.appendChild(area);
            secondDiv.appendChild(addButton);
            
            addButton.textContent = 'Añadir';
            addButton.classList.add('add-button');
            area.classList.add('style-area');

            }
        }
    
});
