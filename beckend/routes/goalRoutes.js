const express = require('express');
const router = express.Router();
const { getGoals, addGoal, editGoal, deleteGoal } = require('../controllers/goalControllers');

// @- modern way to write crud route
router.route('/').get(getGoals).post(addGoal);
router.route('/:id').put(editGoal).delete(deleteGoal);

module.exports = router;

// @- primitive way to write crud route
// router.get('/', getGoals);
// router.post('/', addGoal);
// router.put('/:id', editGoal);
// router.delete('/:id', deleteGoal);
