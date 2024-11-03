const taskController = require('../controllers/taskcontroller');
const taskRoutes = (req , res) =>{

    if(req.method === 'GET' && req.url ==='/task') {

        taskController.getTasks(req,res);

    }else if (req.method === 'post' && req.url === '/tasks') {
        taskController.createTask(req,res);

    }
};

module.exports = taskRoutes;
