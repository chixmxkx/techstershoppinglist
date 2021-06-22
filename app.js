function addItem(){
    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listButton = document.createElement('button');

    let selectItem = input.value
    input.value = '';

    listItem.appendChild(listText);
    listText.textContent = selectItem;

    listItem.appendChild(listButton);
    listButton.textContent = 'Delete';

    list.appendChild(listItem);

    listButton.onclick=()=>{
        list.removeChild(listItem)
    }
}

let list = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

listButton.addEventListener('submit', addItem)
input.focus()