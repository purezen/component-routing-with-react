import React, {Component} from 'react'

export default function Router(RoutedComponent, routeArgs) {
  return class extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      console.log(1, this.props.route, routeArgs.route)
      if (this.props.route.split('/').filter((r) => r === routeArgs.route).length !== 0) {
        return (
          <RoutedComponent {...this.props} />
        )
      }
      else {
        return null
      }
    }
  }
}
