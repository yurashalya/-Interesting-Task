import { injectReducer } from '../store/reducers'
import TodosContainer from './TodosContainer'
import todosReducer from './TodosReducer'



// const store = createStore(reducer, localState);

export default (store) => {

  /*  Add the reducer to the store on key 'counter'  */
  injectReducer(store, { key: 'todos', reducer: todosReducer })


  // return container as main module for route definition
  return TodosContainer;
}
