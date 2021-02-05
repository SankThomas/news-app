import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'

const FetchArticles = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // eslint-disable-next-line
  const [term, setTerm] = useState('everything')

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${term}&from=2021-01-04&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        )
        setArticles(response.data.articles)
        console.log(response.data.articles)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchArticleData()
  }, [term])

  const removeArticle = (title) => {
    const newArticles = articles.filter((article) => article.title !== title)
    setArticles(newArticles)
  }

  return (
    <>
      <h1 className="font-bold text-4xl text-center px-5 pt-5">
        Browse The Latest News Articles
      </h1>
      <p className="font-bold text-center text-xl">
        There are {articles.length} articles on this page
      </p>
      <div className="header-underline mx-auto"></div>
      {isLoading ? (
        <h1 className="text-center mt-32 text-8xl font-bold">Loading...</h1>
      ) : (
        <section className="p-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-4">
          {articles.map((article, index) => {
            const {
              source: { name },
              author,
              title,
              description,
              url,
              urlToImage,
              publishedAt,
            } = article

            return (
              <article key={index} className="md:grid md:grid-cols-2">
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
                    onClick={() => removeArticle(title)}
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

export default FetchArticles
