import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search" />
            <input 
              type="text"
              value={searchTerm}
              placeholder='search through thousands of movies'
              onChange={(e)=>{
                setSearchTerm(e.target.value)
              }}

               />

               
        </div>
        <h1 className='text-white'>{searchTerm}</h1>
    </div>
  )
}
export default Search
