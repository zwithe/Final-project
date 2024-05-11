const router = require('express').Router()

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const descriptionResponse = await fetch(`https://openlibrary.org/books/${id}.json`)
    const descriptionData = await descriptionResponse.json()
    const bookResponse = await fetch(`https://openlibrary.org/search.json?q=${id}&fields=title,author_name,key,editions`)
    const bookData = await bookResponse.json()
    res.render('showBook', {id, descriptionData, bookData})
})

module.exports = router