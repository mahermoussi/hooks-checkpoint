import MovieList from "./component/MovieList"
import './App.css';
import {Switch ,Route ,BrowserRouter as Router} from 'react-router-dom'
import Video from './component/Video'



function App() {
  return (
    <div className="App" >
      
     
     <Switch>
     <Route exact path="/" component={MovieList}/>
       <Route path="/trailer/:info" component={Video} />
       
     </Switch>
     
    </div>
  );
}

export default App;
