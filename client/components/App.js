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
        <A visible={true}/>
        <B visible={false}/>
      </div>
    )
  }
}

export default App
