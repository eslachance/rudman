import { useState, useContext } from 'react';

import { StoreContext } from '../store';

// Using a functional component with useState from React Hooks.
// This works easily well with a class component, of course.

const Form = () => {
  const { dispatch } = useContext(StoreContext);

  // React Hooks FTW, baby!
  const [title, setTitle] = useState('');

  // This is to ensure the content of the the input box matches our state
  // Still irrelevant for redux.
  const handleChange = event => {
    setTitle(event.target.value);
  };

  // Whenever the Add button is clicked, we're adding the content, then clearing the form.
  const handleClickButton = () => {
    const id = crypto.randomUUID()

    // This calls the ADD_TODO action in the reducers.
    // Usually this would be in a mapDispatchToProps in classes,
    dispatch({
      type: 'ADD_TODO',
      payload: { title, id, isComplete: false }
    });
    setTitle('');
  };

  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        value={title}
        onChange={handleChange}
      />
      <button
        onClick={handleClickButton}
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
      >
        Add
      </button>
    </div>
  );
};

export default Form;
