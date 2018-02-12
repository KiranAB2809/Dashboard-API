var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
var Project = require('./../../project');

// Create new project
router.post('/', function (req, res) { 
    Project.create({
        id: req.body.id,
        name : req.body.name,
        server : req.body.server,
        type: req.body.type
    },
    function(err, project) {
        if(err){
            return res.status(500).send("Error");
            res.status(200).send(project);
        }
    });
});
    // Project.find({}, function (err, projects){
    //     if(err) {
    //         return res.status(500).send("Error Problem");
    //         res.status(200).send(projects);
    //     }
    // });
    

//get projects
getAllProjects = function(req,res){
    var query = Project.find();
    // query.select();
    var project_list = [];
    query.exec(function(err, projects){
        if(err){
            res.status(500).json({message: err.message, projects:null});
            return;
        }
        else
        {
            projects.forEach(function(project){
                var project_info = {
                    _id: project._id,
                    name: project.name,
                    server: project.server,
                    type: project.type
                };
                console.log(project_info);
                project_list.push(project_info);
            });
            console.log(projects);
            res.status(200).json({projects:project_list});
        } 
    })
}
// insertProject = function(req,res){

// }



router.get('/api/projects', getAllProjects);

module.exports = router;