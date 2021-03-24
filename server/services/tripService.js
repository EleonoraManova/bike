const Destination = require('../Models/Destination')

const create = (tripData) => {
    let course = new Course({ ...tripData});

    return course.save();
}

module.exports = {create}