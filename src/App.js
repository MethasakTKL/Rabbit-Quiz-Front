import "./App.css";

//components
import AppHeader from "./components/Bars/AppHeader";
import AppNavBar from "./components/Bars/AppNavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Falsepage from "./pages/Falsepage";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Classroom from "./pages/ClassRoom";
import ClassMember from "./pages/ClassMember";
import ClassActivity from "./pages/ClassActivity";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <AppHeader />
        <Route exact path="/" component={Home} />
        <Route path="/activity" component={Activity} />
        <Route path="/profile" component={Profile} />
        <Route path="/classroom" component={Classroom} />
        <Route path="/classroom-member" component={ClassMember} />
        <Route path="/classroom-activity" component={ClassActivity} />
        <Route path="*" component={Falsepage} />
        <AppNavBar />
      </Switch>
    </div>
  );
}

export default App;
