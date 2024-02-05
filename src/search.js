let sectionBooks = document.getElementById('book-list');

async function getBooksByTitle() {
    const title = document.getElementById('book-titles').value;
    const result = await fetch('http://localhost:3000/books');
    const books = await result.json()
    const foundTitle = books.filter(x => x.title.toLowerCase() == title.toLowerCase());
    // printBooks(foundTitle);
    if (foundTitle.length > 0) {
        printBooks(foundTitle);
    } else {
        swal('No existe un libro con ese nombre de autor')
    }  
};

async function getBooksByAuthor(){
    const author = document.getElementById('book-authors').value;
    const result = await fetch('http://localhost:3000/books');
    const books = await result.json();
    const foundAuthors = books.filter(x => x.author.toLowerCase() == author.toLowerCase());
    if (foundAuthors.length > 0) {
        printBooks(foundAuthors);
    } else {
        swal('No existe un libro con ese nombre de autor')
    }  
}

function printBooks(books) {
    console.log(books)
    // sectionBooks.innerHTML = '';  
    books.map(book => { 
    sectionBooks.innerHTML += `
    <br>
        <h3>Titulo: ${book.title}</h3>
        <ul><li>Referencia: ${book.id}</li>
        <li>Autor: ${book.author}</li>
        <li>Valoración: ${book.rating}</li></ul>
        <br>`
    });
}
