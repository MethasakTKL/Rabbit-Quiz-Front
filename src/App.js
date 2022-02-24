import "./App.css";

//components
import AppHeader from "./components/Bars/AppHeader";
import AppNavBar from "./components/Bars/AppNavBar";
import { BrowserRouter as Route, Switch } from "react-router-dom";

//pages
import Falsepage from "./pages/Falsepage";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Classroom from "./pages/ClassRoom";
import ClassMember from "./pages/ClassMember";
import ClassActivity from "./pages/ClassActivity";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <div>
          <AppHeader />
          <AppNavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/activity" component={Activity} />
            <Route path="/profile" component={Profile} />
            <Route path="/classroom" component={Classroom} />
            <Route path="/classroom-member" component={ClassMember} />
            <Route path="/classroom-activity" component={ClassActivity} />
            <Route path="*" component={Falsepage} />
          </Switch>
        </div>
      </Switch>
    </div>
  );
}

export default App;
