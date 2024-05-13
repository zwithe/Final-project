const React = require('react')

function Default(html) {
  
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
              <form action='/search/result/1' method='GET'>
                <label htmlFor="searchbar"></label>
                <input type="text" id="searchbar" name="q" placeholder="search here"/>
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