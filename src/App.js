import './App.css';

//components
import AppHeader from './components/Bars/AppHeader';
import AppNavBar from './components/Bars/AppNavBar';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";


//pages
import Home from './pages/Home';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import Falsepage from './pages/Falsepage';


function App() {
  return (
    <div>
      <AppHeader/>
      <AppNavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/activity" component={Activity} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={Falsepage} />
      </Switch>
    </div>
  );
}

export default App;
