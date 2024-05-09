const React = require('react')



function searchResult (data){

    let searchDisplay = data.map(books =>{
        let olid = books.editons.docs.key.slice(6,0)
        return(
            <div className='card' key={books.key}>
                <img src={`https://covers.openlibrary.org/b/olid/${olid}-L.jpg`}/>
                <h3>{books.title}</h3>
                <h3>{books.author_name.forEach(authors => {
                        return(
                            <p>{authors}</p>
                        )
                })}</h3>    
            </div>
        )
    })
    
    
    return(
            <div className="main-container">
            {searchDisplay}
            </div>
    )
}

module.exports = searchResult