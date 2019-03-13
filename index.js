function fetchBooks() {
}

function renderBooks(json) {
  const main = document.querySelector('body')
  json.forEach(book => {
    const h1 = document.createElement('h1');
    h1.innerHTML = `<h1>${book.name}</h1>`
    main.appendChild(h1)
  })
}

fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))

	}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
})
