//Metodo GET -> R
async function listBooks(){
    const result = await fetch('http://localhost:3000/books');
    const data = await result.json();
    return data;
}

//Metodo POST -> C 
debugger;
let addBooks = document.getElementById('list-books');

async function printBooks(){
    let books = await listBooks(); 
   books.map(book => addBooks.innerHTML += `
    <h3>Titulo: ${book.title}</h3>
    <ul><li>Autor: ${book.author}</li>
    <li>Valoración: ${book.rating}</li></ul>
    <img src="${book.imageUrl}">`
)};

