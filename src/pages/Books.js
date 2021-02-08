import React, { useState, useEffect } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import axios from 'axios'
import loading from '../loading.gif'

const Books = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      )
      setBooks(response.data.results.books)
      setIsLoading(false)
    }

    fetchBooks()
  }, [])

  return (
    <>
      <h1 className="text-6xl text-center font-bold mt-10">Books</h1>
      <div className="header-underline mx-auto"></div>
      {isLoading ? (
        <img src={loading} alt="Loading" className="block mx-auto" />
      ) : (
        <section className="grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => {
            const {
              rank,
              primary_isbn10,
              publisher,
              description,
              price,
              title,
              author,
              book_image,
              age_group,
              buy_links,
            } = book

            return (
              <article key={rank} className="bg-gray-100 pt-10 rounded">
                <div>
                  <img
                    src={book_image}
                    alt={title}
                    className="w-2/3 block mx-auto"
                  />
                </div>

                <div className="px-5 py-4 sm:px-4 lg:px-10">
                  <div className="mb-4">
                    <h3 className="font-bold text-2xl mb-1">{title}</h3>
                    <p>{description}</p>
                  </div>

                  <div>
                    <ul>
                      <li>Author: {author}</li>
                      <li>ISBN: {primary_isbn10}</li>
                      <li>Publisher: {publisher}</li>
                      <li>Ages: {age_group}</li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-bold text-xl mb-1">Buy from:</h4>
                    <ul className="grid grid-cols-2 gap-5">
                      {buy_links.map((link) => {
                        return (
                          <div key={link.name}>
                            <a
                              href={link.url}
                              className="flex items-center font-bold"
                              target="_blank"
                              rel="noopenner noreferrer"
                            >
                              {link.name} <BiLinkExternal />
                            </a>
                            <p>Price: ${price}</p>
                          </div>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default Books
