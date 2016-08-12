import {connect} from 'react-redux'
import A from '../components/A'
import * as a from '../actions'

import Router from '../enhancers/router'

const mapDispatchToProps = (dispatch) => {
  return {
    setRoute: (route) => {
      dispatch(a.setRoute(route))
    }
  }
}

const AContainer = connect(
  (state) => state,
  mapDispatchToProps
)(Router(A, { route: 'routeA' }))

export default AContainer
