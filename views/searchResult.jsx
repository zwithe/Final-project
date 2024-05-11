const React = require('react')
const Default = require('./default')

function searchResult ({data, page}){
    let searchDisplay = data.docs.map(books =>{
    let olid = books.editons.docs.key.slice(6,0)
    return(
        <div className='card' key={books.key}>
            <a href={`${books.key}`}>
            <img src={`https://covers.openlibrary.org/b/olid/${olid}-L.jpg`}/>
            <h3>{books.title}</h3>
            <h3>{books.author_name.forEach(authors => {
                return(
                <p>{authors}</p>
                )})}
            </h3>
            </a>    
        </div>
    )})
    if(page > 1){
        return(
        <Default>
                <div>
                  <form action='/search/1' method='GET'>
                      <label for="searchbar"></label>
                      <input type="text" id="searchbar" name="searchbar" placeholder="search here"/>
                      <input type="submit"/>
                  </form>
                  <div>
                        {searchDisplay}
                  </div>
                  <div>
                  <form action={`/search/${number(page) + 1}`} method='GET'>
                      <label for="nextpage"></label>
                      <input type="submit" id="nextpage" name="nextpage"/>
                  </form>
                  <form action={`/search/${number(page) - 1}`} method='GET'>
                        <label for="previouspage"></label>
                        <input type="submit" id="previouspage" name="previouspage"/>
                   </form>
                  </div>
                </div>
        </Default>
        )
    } else {
        return (
        <Default>
            <div>
              <form action='/search/1' method='GET'>
                  <label for="searchbar"></label>
                  <input type="text" id="searchbar" name="searchbar" placeholder="search here"/>
                  <input type="submit"/>
              </form>
              <div>
                    {searchDisplay}
              </div>
              <div>
              <form action={`/search/${number(page) + 1}`} method='GET'>
                  <label for="nextpage"></label>
                  <input type="submit" id="nextpage" name="nextpage"/>
              </form>
              </div>
            </div>
        </Default>
          )
    }
}