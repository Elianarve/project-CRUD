
//Método GET R (read) del CRUD. hay dos funciones: la primera, en línea 3 llama a la API con fetch. Recibe datos y los saca con un return. Línea dos pasamos la petición a JSON.
async function getBooks(){
    const result = await fetch ("http://localhost:3000/books")
    const data = await result.json()
     return data
 }
 
 let addBooks = document.getElementById("book-list")
 
 async function printBooks() {
     let book = await getBooks()
     book.map(book => {
     addBooks.innerHTML += 
     `<h3>${book.title}</h3>
     <p>${book.id}</p>
     <button onclick="getBook(${book.title})">Añadir</button>`
 
     })
 }
 //La segunda función, en línea 7 se selecciona la section de html y la selecciona. Creo función para imprimir libros. La línea 9 ha recibido un array de libros, que puedo recorrer con map
 // En la línea 10, por cada libro, imprime
 
 //Método delete D del CRUD
 async function deleteBooks(id) {
     const result = await fetch (`http://localhost:3000/books${id}`,
     {method:"DELETE"})
     return result
 }
 //La función se llama deleteUser y la llamamos con el botón

