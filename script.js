const ul = document.querySelector('ul');

const input = document.querySelector('input')

const button = document.querySelector('button')



button.onclick = function (){
  

let item = input.value;


input.value = ' ';


const li = document.createElement('li');

const span = document.createElement('span');

const  button1 = document.createElement('button');




li.appendChild(button1);

li.appendChild(span);


span.textContent = item

button1.textContent = 'Excluir'


ul.appendChild(li)










input.focus()






}





