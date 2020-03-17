import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bulma/css/bulma.css'
import MainPage from './component/main'
import About from './component/about'
var homeLocate = "http://localhost:3000"

class App extends React.Component{
    
    goHome = () => { window.location.href = homeLocate }

  render(){
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/about" component={About}/>
                </div>
            </div>
        </Router>
      
    );
  }
}
export default App;
