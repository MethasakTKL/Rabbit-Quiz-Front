import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  Fab,
  IconButton,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";
import "./ClassActivity.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { height, maxWidth } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { EmojiEvents } from "@mui/icons-material";
import Linkform from "@mui/material/Link";

//import image
import question from "../Static/image/Question00.png";
import { Link } from "react-router-dom";
import { useAuth, ax } from "../auth/auth";

//import list result
import ClassActivityResults from "../Classroom/ClassActivityResults";
import ClassActivity_Teacher from "../Classroom/ClassActivity_Teacher";
import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ClassActivity() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let id = localStorage.getItem("classid")
  const [classroomName, setClassroomName] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchClassroom() {
      let res = await ax.get(`classroom/${id}`);
      console.log(res.data.classroomName);
      setClassroomName(res.data.classroomName);
    }
    fetchClassroom();
  }, []);

  let isstaff = JSON.parse(localStorage.getItem("user_is_staff"));

  return (
    <div className="ASNPage">
      {" "}
      {isstaff ? (<ClassActivity_Teacher />) :
        (
          <Box height={800}>
            <Link to="/classroom" underline="none">
              <h1 className="classname" style={{ fontSize: 36 }}>
                ห้องเรียน {classroomName}
              </h1>
            </Link>
            <Stack
              marginLeft={"auto"}
              marginRight={"auto"}
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              paddingBottom={1}
            >
              <Grid>
                <Button
                  variant="contained"
                  style={{
                    background: "#f5df4d", width: 180,
                    textAlign: "center"
                  }}
                  to="/mypoints"
                  component={Link}
                >
                  <EmojiEvents className="viewscore" />
                  <Grid>
                    <div className="viewscore">คะแนนของคุณ</div>
                  </Grid>
                </Button>
              </Grid>
            </Stack>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,

                  width: "90%",
                  maxWidth: 1000,
                  height: "auto",
                  borderRadius: 3,
                  marginLeft: "auto",
                  marginRight: "auto",
                },
              }}
            >
              <ClassActivityResults />
            </Box>
            <Box sx={{ height: 100 }}></Box>
          </Box>

        )}
      <div className="spacebot" />
    </div>
  );
}
export default ClassActivity;
