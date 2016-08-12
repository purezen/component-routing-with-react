import React, { Component } from 'react'
import SubAContainer from '../containers/SubAContainer'

class A extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        A
        <br/>
        <a href="#"  onClick={() => this.props.setRoute('routeA/subRouteA')}>Expand SubA component</a>
        <br/>
        <SubAContainer/>
        <br/>
      </div>
    )
  }
}

export default A
