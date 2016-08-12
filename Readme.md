
# Component Routing in React (Proof-of-concept)

A POC of routing in React.js using container components. Implemented via functional Higher-Order Components.

While programming with React.js, I wanted to see how routing can be implemented apart from the standard practice of using React-Router.

Lately, I have been using function HOCs to abstract functionalities in a React app. Coupled alongwith 'Container (smart)' components, it has been a fun way to write apps in a React-Redux setup.

So, it occured to me, what if routing could be implemented similarly?

Hence I came with this approach. Basically, I wanted to implement routes in my app as,

### `ContainerComponent.js`
```javascript
import Router from '../enhancers/router'

const ChildContainer = connect(
  (state) => state
)(Router(Child, { route: 'childRoute' }))
```

### `ParentPresentationalComponent.js`
```javascript
import ChildContainer from '../containers/ChildContainer'

class A extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        A
        <br/>
        <a href="#"  onClick={() => this.props.setRoute('route/childRoute')}>Expand Child component</a>
        <br/>
        <ChildContainer/>
        <br/>
      </div>
    )
  }
}
```

## To run

```
$ npm install && npm start
```

# License

MIT
