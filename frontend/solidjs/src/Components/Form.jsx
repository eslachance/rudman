import { createSignal } from 'solid-js';

import { useStore } from '../store';

const Form = () => {
  const [title, setTitle] = createSignal('');

  const [, { addTodo }] = useStore();

  const handleChange = (event) => {
    setTitle((event.target).value);
  };

  const handleClickButton = () => {
    addTodo({ title: title(), completed: false });
    setTitle('');
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      event.preventDefault(); 
      handleClickButton();
    }
  };

  return (
    <div class="hstack gap-3">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        value={title()}
        onInput={handleChange}
        onKeyPress={handleKeyPress}
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
