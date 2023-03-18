const constants = require('../constants/constants');
const cors = require('cors');
const flatFileService = require("../services/flatFileService");

const express = require("express");
var app = express();
app.listen(constants.SERVER.portNumber);

app.use(cors({
    origin: '*'
}));

app.get("/students", (req, res) => {
    res.json(flatFileService.getStudents());
});