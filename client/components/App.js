import React, { Component } from 'react'
import A from '../containers/AContainer'
import B from '../containers/BContainer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <a href="#" onClick={() => this.props.setRoute('routeA')}>Expand A</a>
        <br/>
        <A/>
        <br/>
        <a href="#"  onClick={() => this.props.setRoute('routeB')}>Expand B</a>
        <B/>
      </div>
    )
  }
}

export default App
