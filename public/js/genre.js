const books = [
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "pages": 336,
    "genre": "Fiction",
    "image": "./images/to-kill-a-mockingbird.webp"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "pages": 328,
    "genre": "Dystopian",
    "image": "./images/1984.jpg"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "pages": 432,
    "genre": "Classic",
    "image": "./images/pride-and-prejudice.jpg"
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "pages": 180,
    "genre": "Classic",
    "image": "./images/the-great-gatsby.jpg"
  },
  {
    "title": "To the Lighthouse",
    "author": "Virginia Woolf",
    "pages": 209,
    "genre": "Modernist",
    "image": "./images/to-the-lighthouse.jpg"
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "pages": 288,
    "genre": "Dystopian",
    "image": "./images/brave-new-world.jpg"
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "pages": 224,
    "genre": "Coming-of-Age",
    "image": "./images/the-catcher-in-the-rye.webp"
  },
  {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez",
    "pages": 417,
    "genre": "Magical-Realism",
    "image": "./images/one-hundred-years-of-solitude.jpg"
  },
  {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "pages": 1178,
    "genre": "Fantasy",
    "image": "./images/the-lord-of-the-rings.jpg"
  },
  {
    "title": "The Chronicles of Narnia",
    "author": "C.S. Lewis",
    "pages": 767,
    "genre": "Fantasy",
    "image": "./images/the-chronicles-of-narnia.jpg"
  },
  {
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "pages": 635,
    "genre": "Adventure",
    "image": "./images/moby-dick.jpg"
  },
  {
    "title": "The Odyssey",
    "author": "Homer",
    "pages": 541,
    "genre": "Epic-Poetry",
    "image": "./images/the-odyssey.jpg"
  },
  {
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "pages": 532,
    "genre": "Gothic-Fiction",
    "image": "./images/jane-eyre.jpg"
  },
  {
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "pages": 193,
    "genre": "Science-Fiction",
    "image": "./images/the-hitchhikers-guide-to-the-galaxy.jpg"
  },
  {
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "pages": 280,
    "genre": "Gothic-Science-Fiction",
    "image": "./images/frankenstein.jpg"
  },
  {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "pages": 464,
    "genre": "Historical-Fiction",
    "image": "./images/The-Grapes-of-Wrath.jpg"
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "pages": 310,
    "genre": "Fantasy",
    "image": "./images/the-hobbit.jpg"
  },
  {
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "pages": 342,
    "genre": "Gothic-Fiction",
    "image": "./images/wuthering-heights.jpg"
  },
  {
    "title": "The Shining",
    "author": "Stephen King",
    "pages": 447,
    "genre": "Horror",
    "image": "./images/the-shining.jpg"
  },
  {
    "title": "The Road",
    "author": "Cormac McCarthy",
    "pages": 287,
    "genre": "Post-Apocalyptic",
    "image": "./images/the-road.jpg"
  }
];

// Function to render filtered books based on selected genre
function renderFilteredBooks(selectedGenre) {
  const filteredBooks = selectedGenre === 'all' ? books : books.filter(book => book.genre === selectedGenre);
  const bookList = document.querySelector('.filtered-books');
  bookList.innerHTML = ''; // Clear previous books

  filteredBooks.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('row', 'mb-2');
    bookDiv.innerHTML += `
        <div class="col-md-8">
          <h4><a href="/book/${book.id}">${book.title}</a> by ${book.author}</h4>
          <p>Genre: ${book.genre}</p>
        </div>
      `;
    bookList.appendChild(bookDiv);
  });
}

// Initial render with all books
window.addEventListener('load', function(event) {
    renderFilteredBooks('all');
});


function dropMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
document.querySelector('.dropbtn').onclick = function(event) {
  console.log("hello")
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }}}
// renderFilteredBooks('all');

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}