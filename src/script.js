//METODO GET -> R

async function getBooks(){
    const result = await fetch('http://localhost:3000/books');
    const data = await result.json();
    return data;
}

let listBooks = document.getElementById('tb-body');


async function printBooks(){
    listBooks.innerHTML = '';
    const books = await getBooks(); 
    books.map(book => { 
    listBooks.innerHTML += `
    <tr>
    <td><strong>${book.id}</strong></td>
    <td><strong>${book.title}</strong></td>
    <td>${book.author}</td>
    <td>${book.rating}</td>
    <td>
    <button class=button-edit onclick="editBook('${book.id}')">Editar</button>
    <button class=button-delete onclick="deleteBook('${book.id}')">Eliminar</button>
    </td>
    </tr>
    `
    });
};

//METODO POST -> crear - añadir
async function addBooks() {
    const newTitle = prompt('Ingrese un titulo:');
    let newAutor = prompt('Ingrese un autor:');
    const newRating = prompt('Ingrese una valoracion del 1 al 10:');
    let regexAuthor = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    if (!/^[A-Za-z0-9\s]+$/g.test(newTitle)) {
        alert('Por favor, ingrese un titulo valido.');
        return;
    }

    if (!/^[0-9]+$/.test(newRating)) {
        alert('Por favor, ingrese un numero del 1 al 10.');
        return;
    }

    // if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(newAutor)) {
    //     alert('Por favor, ingrese un nombre valido.');
    //     return;
    // }
    
    do {
        newAutor = prompt('Introduce un nombre de autor valido:');
    } while (!regexAuthor.test(newAutor));
    printBooks();

    // La condición del bucle (while) verifica si la entrada del usuario (newAutor) no cumple
    // con la expresión regular regexAuthor. Esto significa que el bucle se seguirá ejecutando
    // mientras la entrada del usuario no coincida con el patrón definido por regexAuthor.

    const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: newTitle,
            rating: newRating,
            author: newAutor,
        }),
    });

    if (response.ok) {
        printBooks();
        swal('Libro añadido correctamente ✅');
    } else {
        console.error('Error al añadir el libro.');
    }
}

//METODO DELETE -> D

async function deleteBook(id){                 
    await fetch(`http://localhost:3000/books/${id}`, {method:"DELETE"}
    ).then(response => {
        // Verificar si la solicitud fue exitosa (código de estado 200-299)
        if (response.ok) {
            printBooks();
            swal('Libro eliminado correctamente ✅');
        }});
}

//METODO UPDATE -> U

async function editBook(id) {
    const newTitle = prompt('Ingrese un titulo:');
    const newAutor = prompt('Ingrese un autor:');
    const newRating = prompt('Ingrese una valoracion del 1 al 10:');

    if (!/^[A-Za-z0-9\s]+$/g.test(newTitle)) {
        alert('Por favor, ingrese un titulo valido.');
        return;
    }

    if (!/^[0-9]+$/.test(newRating)) {
        alert('Por favor, ingrese un numero del 1 al 10.');
        return;
    }

    if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(newAutor)) {
        alert('Por favor, ingrese un nombre valido.');
        return;
    }
    const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: newTitle,
            rating: newRating,
            author: newAutor,
        }),
    });

    if (response.ok) {
        printBooks();
    } else {
        swal('Error al cambiar el libro.');
    }
}
