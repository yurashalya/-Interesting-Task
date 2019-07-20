export const TODOS_ADD = 'TODOS_ADD';
export const TODOS_REMOVE = 'TODOS_REMOVE';
export const TODOS_EDIT = 'TODOS_EDIT';

const initialState = [];


export function add (todo = '') {
  return {
    type: TODOS_ADD,
    payload: todo
  }
};

export function remove (todo) {
  return {
    type: TODOS_REMOVE,
    payload: todo
  }
};

export function edit (previous, updated) {
  return {
    type: TODOS_EDIT,
    payload: {
      previous,
      updated
    }
  }
};


const ACTION_HANDLERS = {
  [TODOS_ADD]: (state, action) => {
    let stateCopy = [...state, action.payload];
    localStorage.setItem('state', JSON.stringify(stateCopy));
    return stateCopy;
  },
  [TODOS_REMOVE]: (state, action) => {
    let stateCopy = state.filter(t => t !== action.payload);
    localStorage.setItem('state', JSON.stringify(stateCopy));
    return stateCopy;
  },
  [TODOS_EDIT]: (state, action) => {
    let stateCopy = state.map(t => t === action.payload.previous ? action.payload.updated : t );
    localStorage.setItem('state', JSON.stringify(stateCopy));
    return stateCopy;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function todosReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
