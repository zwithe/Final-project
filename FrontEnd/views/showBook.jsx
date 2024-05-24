const React = require('react')
const Default = require('./default')

function showBook ({id, bookData, descriptionData}){
    if(descriptionData.description === undefined){
        return(
        
                <div>
                    <img src={`https://covers.openlibrary.org/b/olid/${id}-L.jpg`}/>
                    <h2>{bookData.docs[0].title}</h2>
                    <h3>{bookData.docs[0].author_name.map(authors => {
                        return(
                            <b key={authors}>{authors}</b>
                        )})}
                    </h3>
                    <h3>This book has no description listed</h3>
                </div>
            
        )
    } else {
        let rawDescription = descriptionData.description.value
        function filterDescription(input) {
            let removeTags = input;
            let tagsRemoved = removeTags.replaceAll(/\/[A-Za-z]/g, '');
            let removeCover = tagsRemoved;
            let newDescription = removeCover.replaceAll(/--back cover/g, '');
            console.log(tagsRemoved)
            console.log(newDescription)
            return (
                <p>{newDescription}</p>
            )
        }    
        return(
    
            <div>
                <img src={`https://covers.openlibrary.org/b/olid/${id}-L.jpg`}/>
                <h2>{bookData.docs[0].title}</h2>
                <h3>{bookData.docs[0].author_name.map(authors => {
                    return(
                        <b key={authors}>{authors}</b>
                    )})}
                </h3>
                <h3>{filterDescription(rawDescription)}</h3>
            </div>
        
        )}
}

module.exports = showBook