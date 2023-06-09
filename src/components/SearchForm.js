import React from 'react'
import { useGlobalContext } from '../context'

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef();
  React.useEffect(()=> {
    searchValue.current.focus()
  } , [])
  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (   
    <div className="py-8 px-8 mt-8 mb-8 sm:mt-12 sm:mb-12">
     <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Search your favorites Cocktail</h2>
     <form onSubmit={handleSubmit}>
    <div className="flex flex-col items-center sm:flex-row sm:justify-center ">
      
    <input
      type="text"
      className="py-8 sm:py-8 px-4 border border-gray-300 focus:border-green-500 searchInput"
      placeholder="Enter your search... (Ex: margarita)"
      ref={searchValue}
      onChange={searchCocktail}
    />
     <button className="bg-green-500 text-white py-4 sm:py-8 px-6 sm:px-8 mt-4 sm:mt-0 sm:ml-0">
      Search
    </button> 

    </div>
    </form>
  </div>
  )
}

export default SearchForm