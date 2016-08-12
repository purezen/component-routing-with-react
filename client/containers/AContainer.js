import React, {Component} from 'react'
import {connect} from 'react-redux'
import A from '../components/A'

import Router from '../enhancers/router'

const AContainer = connect(
  (state) => state
)(Router(A))

export default AContainer
