import { connect } from 'react-redux'
import { increase, decrease, reset } from './CounterReducer'

import Counter from './Counter'


const mapDispatchToProps = {
  increase: () => increase(1),
  decrease: () => decrease(1),
  reset: () => reset()
}

const mapStateToProps = state => ({
  counter: state.counter
})


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
