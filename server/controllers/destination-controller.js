const Destination = require('../Models/Destination')

createDestination = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a destination',
        })
    }

    const destination = new Destination(body)

    if (!destination) {
        return res.status(400).json({ success: false, error: err });
    }

    destination
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: destination._id,
                message: 'Destination created!'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Destination not created!',
            })
        })
}

getDestination = async (req, res) => {
    await Destination.find({}, (err, destinations) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if(!destinations.length){
            return res
            .status(404)
            .json({ success: false, error: `Destination not found` })
        }
        return res.status(200).json({ success: true, data: destinations })
    }).catch(err => console.log(err))
}

module.exports = {
    createDestination,
    getDestination,
}
