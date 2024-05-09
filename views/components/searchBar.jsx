import { useState } from 'react'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')
    let [searchBy, setSearchBy] = useState('')
  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm, searchBy)}>
        <input type="text" placeholder="search here"
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <label for='searchBy'>Search By:</label>
        <select id="searchBy" name="searchBy" onChange={(e) => setSearchBy(e.target.value)}>
            <option value="Title" selected>Title</option>
            <option value="Author">Author</option>
        </select>
        <input type="submit"/>
    </form>
  )
}

export default SearchBar