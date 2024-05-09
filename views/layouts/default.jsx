import {useState, useEffect} from 'react'

import SearchBar from 'views\components\searchBar.jsx';
function App() {
  let [message, setMessage] = useState('Search for books')
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [url, setUrl] = useState('')
  let [searchBy, setSearchBy] = useState('')
  useEffect(()=>{
    if(search){
    const fetchData = async () => {
        if(searchBy === 'Author') {
            let queryUrl = 'https://openlibrary.org/search.json?authors=' + search + '&fields=title,author_name,isbn' + limit + offset
            await setUrl(queryUrl)
        } else if(searchBy === 'Subject') {
            let queryUrl = 'https://openlibrary.org/subjects/' + search + '.json?' + limit + offset
            await setUrl(queryUrl)
        } else {
            let queryUrl = 'https://openlibrary.org/search.json?q=' + search + '&fields=title,author_name,isbn' + limit + offset
            await setUrl(queryUrl)
        }
    const response = await fetch(url)
    const resData = await response.json()
    if(resData.docs.length > 0){
        setData(resData.docs)
    } else{
        setMessage('Not Found')
      }
    }
    fetchData()
    }
  }, [search])

  const handleSearch = (e, term, searchBy) => {
    e.preventDefault();
    setSearchBy(searchBy);
    setSearch(term)
    
  }

  return (
    <div>
    {message}
    
      <SearchBar handleSearch = {handleSearch}/>
      <searchResult data={data} />
      
    </div>
)
}





  export default App;