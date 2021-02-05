import React, { useState } from 'react'

const SearchForm = ({ searchText }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    searchText(text)
  }

  return (
    <div>
      <h2 className="text-center font-bold text-xl text-white mb-2">
        Not to your liking? Search other articles
      </h2>
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="e.g sports"
            onChange={(e) => setText(e.target.value)}
            className="border-gray-200 border-4 py-1 px-4"
          />
          <button type="submit" className="bg-gray-700 text-white py-2 px-4">
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
