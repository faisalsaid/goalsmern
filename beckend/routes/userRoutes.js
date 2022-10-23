const express = require('express');
const router = express.Router();
const { getUsers, addUser, editUser, deleteUser, loginUser, getMe } = require('../controllers/userControllers');
const { protected } = require('../middelware/authMiddleware');

// @- modern way to write CRUD route
router.route('/').get(getUsers).post(addUser);
router.route('/:id').put(editUser).delete(deleteUser);

router.post('/login', loginUser);
router.get('/me', protected, getMe);

module.exports = router;
