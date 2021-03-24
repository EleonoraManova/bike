const express = require('express');



module.exports = function(app) {

    app.use('/static', express.static('public'));

    app.use(express.urlencoded({ extended: true }));


};