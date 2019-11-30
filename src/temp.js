
import {Router, Route, Link, Switch} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

class MainPage extends Component {
  render(){
    console.log(this.props)
    return(
     <div>Main</div>
    )
  }
}

class NotFound extends Component {
  render(){
    console.log(this.props)
    return(
     <div>404</div>
    )
  }
}

class ChatPage extends Component {
  render() {
    console.log(this.props)
    let sum = +this.props.match.params.param1 +  (+this.props.match.params.param2);
    console.log(sum);
    console.log(+this.props.match.params.param1);
    return (
        <div className="App">
            {this.props.match.params.param1} <br/>
            {this.props.match.params.param2}

            <div>Chat</div>
            <div>Total: {sum}</div>
            <Link to='/'>...go to main</Link>
        </div>
    )
  }
}

{/* <Router history = {createHistory()}>
<div>
  <Switch>
  <Route path="/chat/:param1/:param2" component = { ChatPage } />
      <Route path="/chat/" component = { ChatPage } />
      <Route path="/" component = { MainPage } exact />
      <Route component = { NotFound } />
  </Switch>
</div>
</Router> */}