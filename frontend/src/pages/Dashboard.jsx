import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalsForm from '../components/GoalsForm';
import GoalItem from '../components/GoalItem';
import { getGoals, reset } from '../features/goals/goalsSlice';

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isError, isLoading, isSucces, message } = useSelector((state) => state.goals);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalsForm />

      <section>
        {goals.length > 0 ? (
          <div>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You Have not set any Goals</h3>
        )}
      </section>
    </>
  );
}
