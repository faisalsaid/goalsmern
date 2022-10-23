const asyncHandler = require('express-async-handler');

// @desc    GET goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals Router Controllers' });
});

// @desc    POST goal
// @route   POST /api/goals
// @access  Private
const addGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error('Pleas add a text field');
  }
  res.status(200).json({ message: req.body.text });
});

// @desc    PUT goal
// @route   PUT /api/goals/:id
// @access  Private
const editGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals with id ${req.params.id}` });
});

// @desc    DELETE goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals with id ${req.params.id}` });
});

module.exports = { getGoals, addGoal, editGoal, deleteGoal };
