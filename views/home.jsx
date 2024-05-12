const React = require('react')


function App() {

  return (
    <html>
    <head>
      <title>Default</title>
      <link rel="stylesheet" href="/main.css"></link>
    </head>
    <body>
      <div>
        <div>
          <form action='/search/result/1' method='GET'>
              <label htmlFor="searchbar"></label>
              <input type="text" id="searchbar" name="q" placeholder="search here"/>
              <input type="submit"/>
          </form>
        </div>
      </div>
    </body>
  </html>
  )
}
  export default App;