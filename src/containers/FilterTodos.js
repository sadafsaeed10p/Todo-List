import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/SetVisibilityFilterAction'
import Button from '../components/ActionButton'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
