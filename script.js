const $ = (selector) => document.getElementById(selector)

// buscamos el input con menos codigo 
const input = $('newItemInput');
// console.log(input);



// ESTAMOS CREANDO LA LISTA PARA PONER LAS COMPRAS PENDIENTES
const shoppingList = [];

const addItem = () => {
    let itemsCreated = $('newItemInput').value.toUpperCase();
    shoppingList.push(itemsCreated)
    createList(itemsCreated)

        $('listForm').reset()
}

//AL APRETAR ENTER SE ACTUALIZA LALISTA CON EL NUEVO PRODUCTO AGREGADO
$('newItemInput').addEventListener('keydown', function (event) {
    if (event.keyCode === 13 || event.key === "enter") {
        addItem()
    }
})

const createList = () => {
    $('list').innerHTML = ""
    shoppingList.forEach((item, index) => {
                // esto es para que todos los productos que apuntemos se vean en el documento
                let liContainer = document.createTextNode(`${item}`) // crea un nuevo nodo de texto para que se vea en el html
                let liItem = document.createElement('li');
                // le agregamos el botones para eliminar listas y para editarlas
                let deleteElement = document.createElement('button');
                deleteElement.classList.add('btn')
                deleteElement.innerText = "⛔"
                deleteElement.addEventListener('click', () => deleteItem(index))
                let editItemButoon = document.createElement('button')
                editItemButoon.classList.add('btn')
                editItemButoon.innerText = "✏️"
                editItemButoon.addEventListener('click', () => updateItem(index))
                //
                liItem.appendChild(liContainer) // agrega nuevos elementos an un documento
                liItem.classList.add('list-item')
                liItem.appendChild(liContainer)
                // y agregamos los emojis ⛔ y ✏️ a la lista de items
                liItem.appendChild(deleteElement)
                liItem.appendChild(editItemButoon)
                //
                $('list').appendChild(liItem)
                //
    });
}

// ELIMINAR UN ELEMENTO DE LA LISTA DE COMPRAS CON ⛔
const deleteItem = (itemIndex) => {
    // const itemIndex = shoppingList.indexOf(itemIndex) // con esto nos da la posicion y guardamos el nuemro de la posicion en el que esta el elemento a eliminar 
    shoppingList.splice(itemIndex, 1)
    createList(shoppingList) //le pasas la nueva lista con el elemento ya eliminado a la vista
}
//

// EDITAR LA LISTA DE COMPRAS CON ✏️
const updateItem = (itemIndex) => {
    let newValue = prompt('cambio');
    shoppingList[itemIndex] = newValue // le pasamos el nuevo valor
    createList(shoppingList) //actualiza la lista con los elementos actualizados
}
//


$('addButton').addEventListener('click', addItem)
//


// MOODO CLARO/OSCURO 
const changeMode = () => {
    console.log($('body').getAttribute('data-theme'))
    if ($('body').getAttribute('data-theme') === 'light') {
        $('body').setAttribute ('data-theme', 'dark')
        $('modeBtn').innerText = '🌞'
    } else {
        $('body').setAttribute ('data-theme', 'light')
        $('modeBtn').innerText = '🌑'
    }
}

$('modeBtn').addEventListener('click', changeMode)




