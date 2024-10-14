  
    function fetchBooks() {
      // Return the fetch promise
      return fetch('https://anapioficeandfire.com/api/books')
          .then(response => {
              // Check if the response is okay (status in the range 200-299)
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              // Return the parsed JSON data
              return response.json();
          })
          .then(data => {
              // Call renderBooks with the fetched data
              renderBooks(data);
          })
          .catch(error => {
              console.error('Error fetching books:', error);
          });
    //
  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
