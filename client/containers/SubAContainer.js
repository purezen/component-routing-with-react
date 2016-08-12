import {connect} from 'react-redux'
import SubA from '../components/SubA'

import Router from '../enhancers/router'

const SubAContainer = connect(
  (state) => state
)(Router(SubA, { route: 'subRouteA' }))

export default SubAContainer
