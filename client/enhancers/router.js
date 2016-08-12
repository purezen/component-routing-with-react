import React, {Component} from 'react'

export default function Router(RoutedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      if (this.props.visible === false) return null
      else {
        return (
          <RoutedComponent {...this.props} />
        )
      }
    }
  }
}
