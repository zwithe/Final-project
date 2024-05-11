
function App() {

  return (
    <div>
      <form action='/search/1' method='GET'>
          <label for="searchbar"></label>
          <input type="text" id="searchbar" name="searchbar" placeholder="search here"/>
          <input type="submit"/>
      </form>
    </div>
  )
}





  export default App;