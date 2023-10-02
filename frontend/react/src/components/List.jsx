import { useContext, useEffect } from 'react';
import { StoreContext } from '../store';
import { marked } from 'marked';

const List = () => {
  const {state: { todos }, dispatch } = useContext(StoreContext);
  useEffect(() => {
    dispatch({
      type: 'FETCH_ALL_TODOS',
    });
  }, []);
  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {todos.map((el) => (
          <li
            key={el.id}
            className={el.isComplete ? 'completed' : ''}
            style={{
              textDecoration: el.isComplete ? 'line-through' : 'none',
            }}
          >
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="checkbox"
                  defaultChecked={el.isComplete}
                  type="checkbox"
                  onClick={() =>
                    dispatch({
                      type: 'TOGGLE_TODO',
                      payload: el.id,
                    })
                  }
                />
                <span dangerouslySetInnerHTML={{__html: marked.parse(el.title)}}></span>
                <i className="input-helper" />
              </label>
            </div>
            <i
              className="remove mdi mdi-close-circle-outline"
              onClick={() =>
                dispatch({
                  type: 'DELETE_TODO',
                  payload: el.id,
                })
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
