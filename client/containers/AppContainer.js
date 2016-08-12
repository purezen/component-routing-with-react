import {connect} from 'react-redux'
import App from '../components/App'
import * as a from '../actions'

const mapStateToProps = (state) => {
  return {
    currencyList: state.currencyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => {
      dispatch(a.setRoute(route))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
