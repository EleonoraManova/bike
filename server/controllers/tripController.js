const router = require('express').Router();

router.post('/racing/create', (req, res, next) => {
    let { category, image, description } = req.body;

    let tripData = {
        category,
        image,
        description

    }


    tripService.create(courseData)
        .then(createdTrip => {
            res.redirect('/');
        })
        .catch(next);
});

router.get('/', (req, res) => {
    console.log('hello');
    res.end()
})

module.exports = router;