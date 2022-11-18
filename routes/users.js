var express = require('express');
var router = express.Router();
const controller = require("../controllers/controller");
router.get("/getstudents", controller.allStudents);
router.post("/admitstudent", controller.admitStudents)
router.post("/updatestudent/:id", controller.updateStudent);
router.post("/findstudent/:id", controller.findstudent);

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');  
// })   

module.exports = router;