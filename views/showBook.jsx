
function showBook ({id, bookData, descriptionData}){
        //TODO process description data with regex //[a-z]
        let rawDescription = descriptionData.description.value
        function filterDescription(input) {
            let removeTags = /\/[A-Za-z]/i;
            let tagsRemoved = removeTags.replaceAll(input, '');
            let removeCover = /--back cover/i;
            let newDescription = removeCover.replaceAll(tagsRemoved, '');
            return newDescription
        }
        filterDescription(rawDescription)
  return(
    <div>
        <img src={`https://covers.openlibrary.org/b/olid/${id}-L.jpg`}/>
        <h2>{bookData.docs[0].title}</h2>
        <h3>{bookData.docs[0].author_name.forEach(authors => {
            return(
                <b>{authors}</b>
            )})}
        </h3>
        <h3>{newDescription}</h3>
    </div>
  )
}

module.exports = showBook