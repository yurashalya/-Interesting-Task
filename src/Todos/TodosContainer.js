import { connect } from 'react-redux'
import { remove, add} from './TodosReducer'

import Todos from './Todos'

const mapDispatchToProps = {
  remove: (todo) => remove(todo),
  add: (data) => add(data)
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
