
// Este evento se activa cuando el DOM ha sido completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
// Al cargar el DOM, se llama a la función cargarDatos para mostrar la información inicial.
    cargarDatos();
});

// Método GET del CRUD (READ). La función cargarDatos realiza una solicitud GET a la API para obtener la lista de libros.
async function getBooks(){
    const result = await fetch("http://localhost:3000/books");
// Obtenemos la lista de libros en formato JSON.
    const data = await result.json();
     return data
 }
 
 let addBooks = document.getElementById("books-list")
 // Se itera sobre cada libro y se genera una fila en la tabla con su información.
 async function printBooks() {
     let books = await getBooks()
     books.map(book => {
     addBooks.innerHTML += 
     `<p>${book.id}</p>
     <h3>${book.title}</h3>
     <p>${book.author}</p>`
 
     })
 }

 //Metodo DELETE del CRUD.
async function deleteBook(id) {
    const result = await fetch(`http://localhost:3000/books${id}`,
    {method: "DELETE"})
    return result
}

 //Método POST C (CREATE) del CRUD con formulario 
async function createBook() {
    // Solicitar al usuario ingresar información para el nuevo libro.
    const formBook = document.getElementById("books-form")
    const newBook = {
        "title": formBook.elements[1].value,
        "author": formBook.elements[2].value

    };

    const result = await fetch(`http://localhost:3000/books`, 
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook),
    });
}


 
 //Método delete D del CRUD
//  async function deleteBooks(title) {
//      const result = await fetch (`http://localhost:3000/books${title}`,
//      {method:"DELETE"})
//      return result
 //}

 //let deleteBooks = document.getElementById("book-list")

//async function printBooks() {
    //let book = await getBooks()
    //users.map(user => {
    //sectionTag.innerHTML += 
    //`<h3>${book.name}</h3>
    // <p>${book.email}</p>
    // <button onclick="deleteBook(${user.id})">Delete</button>`

   // })
//}
 //La función se llama deleteBooks y la llamamos con el botón

