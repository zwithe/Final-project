const router = require('express').Router()

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const descriptionData = await fetch(`https://openlibrary.org/books/${id}.json`)
    const bookData = await fetch(`https://openlibrary.org/search.json?q=${id}&fields=title,author_name,key,editions`)
    res.render('showBook', {id, descriptionData, bookData})
})