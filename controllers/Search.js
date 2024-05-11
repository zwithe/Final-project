const router = require('express').Router()

router.get('/', (req,res)=>{
    res.render('home')
})


router.get('/result/:page', async (req,res) => {
    
    console.log(req)
    console.log(req._parsedUrl)
    let page = req.params.page
    let search = req._parsedUrl.search.slice(11)
    let queryUrl = 'https://openlibrary.org/search.json?q=' + search + '&fields=title,author_name,key,editions&limit=20&page=' + page
    const response = await fetch(queryUrl)
    const data = await response.json()
    console.log(search)
    if(data.docs.length > 0){
        res.render('searchResult', { data, page, search })
    } else{
        //TODO display oops no books or something
    }
})  

module.exports = router

    