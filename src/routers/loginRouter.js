const express = require('express');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.get('/', loginController.index)

module.exports = loginRouter;