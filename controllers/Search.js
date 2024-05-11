const router = require('express').Router()

router.get('/', (req,res)=>{
    res.render('home')
})


router.get('/search/:page', async (req,res) => {
    let  page = req.params
    let search = await URLSearchParams.get('searchbar')
    let queryUrl = 'https://openlibrary.org/search.json?authors=' + search + '&fields=title,author_name,key,editions&limit=20&page=' + page
    const response = await fetch(queryUrl)
    const data = await response.json()
    if(data.docs.length > 0){
        res.render('searchResult', { data, page })
    } else{
        //TODO display oops no books or something
    }
})  

module.exports = router

    