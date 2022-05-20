const path = require('path');
const fs = require('fs');

const mainController = {
    index: (req, res) => {
        res.render('main')
    }
}
module.exports = mainController