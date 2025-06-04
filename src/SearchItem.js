import React from 'react'

const SearchItem = ({search , setSearch}) => {
  return (
    
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
    <label htmlFor='searchForm'> Search Item</label>
    <input
        
        id='search'
        type='text'
        placeholder='searchbox items'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
    />
    </form>



  )
}

export default SearchItem