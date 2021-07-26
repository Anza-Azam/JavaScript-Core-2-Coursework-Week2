function readingList (books) {
  const content = document.querySelector('#content')

  const bookList = document.createElement('ul')
  content.appendChild(bookList)
  bookList.style.display = 'flex'
  bookList.style.justifyContent = 'space-around'
  bookList.style.listStyleType = 'none'

  books.forEach(book => {
    const pElement = document.createElement('li')
    bookList.appendChild(pElement)
    const bookTitle = document.createElement('p')
    bookTitle.innerHTML = `${book.title} ---- ${book.author}`

    pElement.appendChild(bookTitle)

    const bookImage = document.createElement('img')

    if (book.title === 'The Design of Everyday Things') {
      bookImage.src =
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483319609l/13356708._SY475_.jpg'
    }

    if (book.title === 'The Most Human Human') {
      bookImage.src =
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
    }
    if (book.title === 'The Pragmatic Programmer') {
      bookImage.src =
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg'
    }

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
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
]

readingList(books)
