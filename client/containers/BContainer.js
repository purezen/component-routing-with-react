import React, {Component} from 'react'
import {connect} from 'react-redux'
import B from '../components/B'

import Router from '../enhancers/router'

const BContainer = connect(
  (state) => state
)(Router(B))

export default BContainer
