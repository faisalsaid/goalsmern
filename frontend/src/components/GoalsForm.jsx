import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalsSlice';

export default function GoalsForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText('');
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type={'text'} name={'goals'} id={'goals'} value={text} onChange={(e) => setText(e.target.value)} />
        <br />
        <button type="submit">Add Goal</button>
      </form>
    </section>
  );
}
