const React = require('react')
const Default = require('./default')

function searchResult ({data, page, search}){
    let pageNumber = Number(page)
    let oldSearch = search.replaceAll('+', ' ')
    let searchDisplay = data.docs.map(books =>{
        if(undefined === books.author_name || undefined === books.title || undefined === books.editions.docs[0]){

        } else{
            let olid = books.editions.docs[0].key.slice(7)
            
            return(
                <div className='card' key={books.editions.docs[0].key}>
                    <a href={`${books.editions.docs[0].key}`}>
                    <img src={`https://covers.openlibrary.org/b/olid/${olid}-L.jpg`} alt='Cover Page'/>
                    <h3>{books.title}</h3>
                    <h3>{books.author_name.map(authors => {
                        return(
                        <p key={authors}>{authors}</p>
                        )})}
                    </h3>
                    </a>    
                </div>
        )}})
    if(pageNumber > 1){
        return(
            <Default>
                    <div>
                    <div>
                            {searchDisplay}
                    </div>
                    <div>
                    <form action={`/search/result/${pageNumber + 1}`} method='GET'>
                        <label htmlFor={'nextbutton'}></label>
                        <input type='text' name='q' value={`${oldSearch}`} className='hidden' readOnly={true}/>
                        <input type="submit" id={'nextbutton'}/>
                    </form>
                    <form action={`/search/result/${pageNumber - 1}`} method='GET'>
                            <label htmlFor="previouspage"></label>
                            <input type='text' name='q' value={`${oldSearch}`} className='hidden' readOnly={true}/>
                            <input type="submit" id="previouspage" />
                    </form>
                    </div>
                    </div>
            </Default>
        )
    } else {
        return (
            <Default>
                <div>
                <div>
                        {searchDisplay}
                </div>
                <div>
                <form action={`/search/result/${pageNumber + 1}`} method='GET'>
                    <label htmlFor={'nextbutton'}></label>
                    <input type='text' name='q' value={`${oldSearch}`} className='hidden' readOnly={true}/>
                    <input type="submit" id={'nextbutton'} value={`Next`}/>
                </form>
                </div>
                </div>
            </Default>
        )
    }
}

module.exports = searchResult