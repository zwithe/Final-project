const React = require('react')
const Default = require('./default')
import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router";
import { CurrentUser } from './contexts/CurrentUser';


function searchResult ({data, handlePage, handleShow}){

    const history = useHistory()
    let [nextPage, setNextPage] = useState()

    let searchDisplay = data.docs.map(books =>{
        if(undefined === books.author_name || undefined === books.title || undefined === books.editions.docs[0]){

        } else{
            let olid = books.editions.docs[0].key.slice(7)
            
            return(
                <div className='card' key={books.editions.docs[0].key}>
                     <a href="#" onClick={handleShow(e, olid)/*passing olid may not work here still worth a shot*/}>
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
        
                    <div>
                    <div>
                            {searchDisplay}
                    </div>
                    <div>
                    <form onSubmit={handlePage(e, nextPage)}>
                        <label htmlFor={'nextPage'}></label>
                        <input type="submit" id={'nextPage'} onClick={() => setNextPage(true)}/>
                    </form>
                    <form onSubmit={handlePage(e, nextPage)}>
                            <label htmlFor="previousPage"></label> 
                            <input type="submit" id="previousPage" onClick={() => setNextPage(false)} />
                    </form>
                    </div>
                    </div>
            
        )
    } else {
        return (
        
                <div>
                <div>
                        {searchDisplay}
                </div>
                <div>
                <form onSubmit={handlePage(e, nextPage)}>
                    <label htmlFor={'nextPage'}></label>
                    <input type="submit" id={'nextPage'} onClick={(e) => setNextPage(true)} value={`Next`}/>
                </form>
                </div>
                </div>
            
        )
    }
}

module.exports = searchResult