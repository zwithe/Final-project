import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useHistory } from "react-router"
import Home from './views/home'
import signUp from './views/signUp'
import login from './views/login'
import Default from './views/default'
import searchResult from './views/searchResult'
import showBook from './views/showBook'

function App() {
  const history = useHistory()
  let [search, setSearch] = useState('')
  let [page, setPage] = useState('')
  let [data, setData] = useState()
  let [descriptionData, setDescriptionData] = useState()
  let [id, setId] = useState('')
  useEffect(()=>{
    if(search){
        const resetPageCount = ()=>{
            setPage('1')
        }
        resetPageCount()
    } else if (page){
        const getData = async ()=>{
            let queryUrl = 'https://openlibrary.org/search.json?q=' + search + '&fields=title,author_name,key,editions&limit=20&page=' + page
            const response = await fetch(queryUrl)
            const resData = await response.json()
            if(resData.docs.length > 0){
                setData(resData)
            } else{
                //TODO display oops no books or something
            }
        }
      getData()
      history.push(`result/${page}`)    
    }
}, [search, page])

const handleSearch = (e, term) => {
  e.preventDefault();
  setSearch(term)
}
const handlePage = (e, nextPage) => {
  e.preventDefault();
  if (nextPage === true){
    let pageNumber = Number(page)
    setPage(`${pageNumber + 1}`)
  } else if (nextPage === false){
    let pageNumber = Number(page)
    setPage(`${pageNumber - 1}`)
  } else {
    // throw error
  }
}
const handleShow = async (e, olid) => {
  // Probably not the best way to set this up but limits how much i have to refactor...
  e.preventDefault();
  setId(olid)
  const descriptionResponse = await fetch(`https://openlibrary.org/books/${id}.json`)
  const descriptionData = await descriptionResponse.json()
  setDescriptionData(descriptionData)
  const bookResponse = await fetch(`https://openlibrary.org/search.json?q=${id}&fields=title,author_name,key,editions`)
  const bookData = await bookResponse.json()
  setData(bookData)
  history.push(`/books/${id}`)
}
//TODO add <ContextProvider> wrapper around when implemnted
  return (
  
      <BrowserRouter>
        <Default handleSearch={handleSearch}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={signUp} />
          <Route exact path="/login" component={login} />
          <Route exact path="/result/:page" component={searchResult} data={data} page={page} handlePage={handlePage} handleShow={handleShow}/>
          <Route exact path="/books/:id" component={showBook} id={id} bookData={data} descriptionData={descriptionData} />
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
