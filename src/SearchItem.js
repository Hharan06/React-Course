import React from 'react'

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <div>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input 
            type="text"
            id='search'
            placeholder='Search Item'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchItem
