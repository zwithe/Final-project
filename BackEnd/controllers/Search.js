const router = require('express').Router()

router.get('/', (req,res)=>{

})


router.get('/result/:page', async (req,res) => {  
    /*
    let page = req.params.page
    let search = req._parsedUrl.search
    let queryUrl = 'https://openlibrary.org/search.json' + search + '&fields=title,author_name,key,editions&limit=20&page=' + page
    const response = await fetch(queryUrl)
    const data = await response.json()
    if(data.docs.length > 0){
        res.render('searchResult', { data, page, search })
    } else{
        //TODO display oops no books or something
    }
    */
})  

module.exports = router

    