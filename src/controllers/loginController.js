const path = require('path');
const fs = require('fs');

const loginController = {
    index: (req, res) => {
        res.render('login')
    }
}
module.exports = loginController