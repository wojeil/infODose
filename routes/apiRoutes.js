const router = require("express").Router();
const db = require("../models");
// // you this file to code your API routes

// // route: /api
router.get("/info/:state/:county/:year", (req, res) => {
    //your code here
    console.log(req.params.state);
    console.log(req.params.county);
    console.log(req.params.year);
    db.odstats.findOne({
        where: {
            state:req.params.state,
            county:req.params.county,
            year:req.params.year
        }
    }).then(function(dbstats){
        res.json(dbstats);
      
    });

});

//route for posting new form 
//route for updating form
//rout for deleting form
router.delete("/api/report/:id", function(req, res) {
    db.Report.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReport) {
      res.json(dbReport);
      window.location.reload()
    });
  });

router.post("/api/newreport", (res, req)=>{
  db.Report.create({
    email: Report.email,
    organization: Report.organization,
    report: Report.report,
  })
  .then(dbReport=>{
    res.send(dbReport)
  })
})


module.exports = router;