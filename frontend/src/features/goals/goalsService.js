import axios from 'axios';

const API_URL = '/api/goals/';
const API_URI = 'http://localhost:5000';

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URI + API_URL, goalData, config);

  return response.data;
};

// Get all goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URI + API_URL, config);

  return response.data;
};

// Delete goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URI + API_URL + goalId, config);

  return response.data;
};

const goalsService = { createGoal, getGoals, deleteGoal };

export default goalsService;
