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
import Activity_Teacher from "./pages_Teacher/Activity_Teacher";
import Profile_Teacher from "./pages_Teacher/Profile_Teacher";
import Classroom_Teacher from "./pages_Teacher/ClassRoom_Teacher";
import ClassMember_Teacher from "./pages_Teacher/ClassMember_Teacher";
import ClassActivity_Teacher from "./pages_Teacher/ClassActivity_Teacher";
import Home_Teacher from "./pages_Teacher/Home_Teacher";
import { Box } from "@mui/system";


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
            <Route path="/profile" component={Profile} />
            <Route path="/classroom" component={Classroom} />
            <Route path="/classroom-member" component={ClassMember} />
            <Route path="/classroom-activity" component={ClassActivity} />

            <Route exact path="/teacher" component={Home_Teacher} />
            <Route path="/profile-teacher" component={Profile_Teacher} />
            <Route path="/classroom-teacher" component={Classroom_Teacher} />
            <Route path="/classroom-member-teacher" component={ClassMember_Teacher} />
            <Route path="/classroom-activity-teacher" component={ClassActivity_Teacher} />
            <Box>
              <AssignNavBar />
              <Route path="/activity" component={Activity} />
              <Route path="/complete" component={Activity_Complete} />
            </Box>
            <Route path="*" component={Falsepage} />
          </Switch>
        </div>
      </Switch>
    </div>
  );
}

export default App;
