import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalsSlice';

export default function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div>{new Date(goal.createdAt).toLocaleString('en-UK')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))}>Delete</button>
    </div>
  );
}
