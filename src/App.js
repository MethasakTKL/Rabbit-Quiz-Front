import "./App.css";

//components
import AppHeader from "./components/Bars/AppHeader";
import AppNavBar from "./components/Bars/AppNavBar";
import AssignNavBar from "./components/Bars/AssignNavBar";
import { Route, Switch } from "react-router-dom";

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
import Activity_Complete from "./pages/Activity_Complete";
//pages teacher
import Home_teacher from "./pages_Teacher/Home_Teacher";
import AppHeaderTeacher from "./components_teacher/Bars/AppHeader_Teacher";
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
            <Route exact path="/teacher" component={Home_teacher} />
            <Route path="/profile" component={Profile} />
            <Route path="/classroom" component={Classroom} />
            <Route path="/classroom-member" component={ClassMember} />
            <Route path="/classroom-activity" component={ClassActivity} />
            <div class="Activity-Page">
              <AssignNavBar />
              <Route path="/activity" component={Activity} />
              <Route path="/complete" component={Activity_Complete} />
            </div>
            <div class="FalsePage">
              <Route path="*" component={Falsepage} />
            </div>
          </Switch>
        </div>
        <div>
          <AppHeaderTeacher />
          <Route exact path="/teacher" component={Home_teacher} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
