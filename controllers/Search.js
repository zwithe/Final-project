const router = require('express').Router()

router.get('/', (req,res)=>{
    res.render('home')
})


router.get('/:query/:page', async (req,res) => {
    let {search, page}= req.params
    let queryUrl = 'https://openlibrary.org/search.json?authors=' + search + '&fields=title,author_name,key,editions&limit=20&page=' + page
    const response = await fetch(queryUrl)
    const data = await response.json()
    if(data.docs.length > 0){
        res.render('searchResult', { data })
    } else{
        //TODO display oops no books or something
    }
})  

    