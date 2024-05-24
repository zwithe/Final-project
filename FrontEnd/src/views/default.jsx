import { useState } from "react"

function Default(handleSearch) {
  let [searchTerm, setSearchTerm] = useState('')
  return (


      <div>
        <nav>
          <ul>
            <li>          
              <form onSubmit={(e) => handleSearch(e, searchTerm)} >
                <label htmlFor="searchbar"></label>
                <input type="text" id="searchbar" onChange={(e) => setSearchTerm(e.target.value)} placeholder="search here"/>
                <input type="submit"/>
              </form>
            </li>
          </ul>
          <ul>
            <li>          
              <form action='/users/login' method='GET'>
                <input type="submit" value='Login'/>
              </form>
            </li>
            <li>          
              <form action='/users/create' method='GET'>
                <input type="submit" value='Sign Up'/>
              </form>
            </li>
          </ul>
        </nav>
      </div>


  )
}

export default Default;