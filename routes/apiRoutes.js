const router = require("express").Router();
const db = require("../models");
// // you this file to code your API routes

// // route: /api
router.get("/info/:state/:county/:year", (req, res) => {
    //your code here
    db.odstats.findOne({
        where: {
            State:req.params.state,
            County:req.params.county,
            Year:req.params.year,
        }
    }).then(function(dbstats){
        res.json(dbstats);
    });

});

module.exports = router;