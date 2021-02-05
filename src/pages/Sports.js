import React, { useState, useEffect } from 'react'
import { FcSportsMode } from 'react-icons/fc'
import axios from 'axios'
import moment from 'moment'
import loading from '../loading.gif'

const Sports = () => {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSportsData = async () => {
      const res = await axios.get(
        `http://newsapi.org/v2/everything?q=sports&from=2021-01-04&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      setCards(res.data.articles)
      setIsLoading(false)
    }

    fetchSportsData()
  }, [])

  const removeCard = (title) => {
    const newCards = cards.filter((card) => card.title !== title)
    setCards(newCards)
  }

  return (
    <>
      <h1 className="flex items-center justify-center font-bold text-4xl px-5 pt-5">
        Sports Section <FcSportsMode />
      </h1>
      <p className="font-bold text-center text-xl">
        There are {cards.length} articles on this page
      </p>
      <div className="header-underline mx-auto"></div>

      {isLoading ? (
        <img src={loading} alt="Loading..." className="block mx-auto" />
      ) : (
        <section className="p-10 grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-4">
          {cards.map((card) => {
            const {
              source: { name },
              author,
              title,
              description,
              url,
              urlToImage,
              publishedAt,
            } = card

            return (
              <article key={title} className="md:grid md:grid-cols-2">
                <div>
                  <img
                    src={urlToImage}
                    alt={name}
                    className="rounded-t-lg w-full md:h-full md:rounded-t-none md:rounded-l-lg"
                  />
                </div>

                <div className="bg-blue-100 px-8 py-4 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                  <h2 className="font-bold text-xl">{title}</h2>
                  <div className="header-underline"></div>
                  <p className="mb-2">{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopenner noreferrer"
                    className="underline"
                  >
                    Read Full Article
                  </a>
                  <div className="mt-2 flex flex-wrap items-center justify-between">
                    <p className="mr-2">
                      <span className="font-bold">Written by: </span>
                      {author}
                    </p>
                    <p>
                      <span className="font-bold">Published:</span>{' '}
                      {moment(`${publishedAt}`).format('MMM Do, YYYY')}
                    </p>
                  </div>
                  <button
                    onClick={() => removeCard(title)}
                    className="delete-btn text-white py-2 px-4 border-4 border-white mt-5"
                  >
                    Not Interested
                  </button>
                </div>
              </article>
            )
          })}
        </section>
      )}
    </>
  )
}

export default Sports
