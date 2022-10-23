const express = require('express');
const router = express.Router();
const { getGoals, addGoal, editGoal, deleteGoal } = require('../controllers/goalControllers');

const { protected } = require('../middelware/authMiddleware');

// @- modern way to write crud route
router.route('/').get(protected, getGoals).post(protected, addGoal);
router.route('/:id').put(protected, editGoal).delete(protected, deleteGoal);

module.exports = router;

// @- primitive way to write crud route
// router.get('/', getGoals);
// router.post('/', addGoal);
// router.put('/:id', editGoal);
// router.delete('/:id', deleteGoal);
