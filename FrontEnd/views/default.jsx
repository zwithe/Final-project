const React = require('react')

function Default(handleSearch) {
  let [searchTerm, setSearchTerm] = useState('')
  return (
    <html>
    <head>
      <title>Default</title>
      <link rel="stylesheet" href="/main.css"></link>
    </head>
    <body>
      <div>
        <nav>
          <ul>
            <li>          
              <form onSubmit={(e) => handleSearch(e, searchTerm)} >
                <label htmlFor="searchbar"></label>
                <input type="text" id="searchbar" name="q" onChange={(e) => setSearchTerm(e.target.value)} placeholder="search here"/>
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
          {html.children}
      </div>
    </body>

  </html>
  )
}

module.exports = Default