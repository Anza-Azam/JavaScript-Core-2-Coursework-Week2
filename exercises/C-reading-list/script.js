function readingList (books) {
  const content = document.querySelector('#content')

  const bookList = document.createElement('ul')
  const heading = document.createElement('h1')
  heading.innerText = 'Book List'
  content.append(heading, bookList)
  heading.style.textAlign = 'left'
  bookList.className = 'flex'

  books.forEach(book => {
    const pElement = document.createElement('li')
    pElement.className = 'list'

    bookList.appendChild(pElement)
    const bookTitle = document.createElement('p')
    bookTitle.innerHTML = `${book.title} ---- ${book.author}`

    pElement.appendChild(bookTitle)

    const bookImage = document.createElement('img')

    bookImage.src = book.image

    bookImage.alt = book.title
    pElement.appendChild(bookImage)

    if (book.alreadyRead) {
      pElement.style.backgroundColor = 'green'
    } else pElement.style.backgroundColor = 'red'
  })

  // Write your code here...
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg'
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,

    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg'
  }
]

readingList(books)
