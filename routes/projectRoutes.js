const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const projectController = require('../controllers/projectController');

router.get('/', projectController.getProjects);
router.post('/', authMiddleware, projectController.createProject);
router.put('/:id', authMiddleware, projectController.updateProject);
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;