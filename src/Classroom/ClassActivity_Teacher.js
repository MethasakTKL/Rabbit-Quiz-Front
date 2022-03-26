import React from "react";
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
import "./ClassActivity_Teacher.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddIcon from "@mui/icons-material/Add";
import Link from "@mui/material/Link";
import ClassScore from "./ClassScore";
//import component
import EditActivity from "../Classroom/ClassTeacherActivity/EditActivity";
import DetailActivity from "../Classroom/ClassTeacherActivity/DetailActivity";

import ClassActivityResults_Teacher from "./ClassActivityResults_Teacher";
import { ax, useAuth } from "../auth/auth";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function ClassActivity_Teacher() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [classroomName, setClassroomName] = React.useState(null);

  let id = localStorage.getItem("classid");
  React.useEffect(() => {
    async function fetchClassroom() {
      let res = await ax.get(`/classroom/${id}`);
      setClassroomName(res.data.classroomName);
    }
    fetchClassroom();
  }, []);

  let navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [choice_true, setChoiceTrue] = React.useState("ใช่");
  const [choice_false, setChoiceFalse] = React.useState("ไม่ใช่");
  const [deadline, setDeadline] = React.useState("");
  const handleCreateAssignment = async () => {
    try {
      let id = localStorage.getItem("classid");
      var result = await ax.post(`/createAssignment/${id}`, {
        title,
        description,
        deadline,
        choice_true,
        choice_false,
      });
      console.log(result);
      if (result.status === 200 && result.data) {
        handleClose();

        navigate("/reload", { replace: true });
        navigate("/classroom-activity", { replace: true });
        message.success({
          content: "สร้างกิจกรรมสำเร็จ",
          style: { fontFamily: "Prompt", marginTop: 20, fontSize: "20px" },
          duration: 3,
        });
        console.log("Create assignment Success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ height: 1050 }}>
      <Link href="classroom" underline="none">
        <h1 className="classname" style={{ fontSize: 36 }}>
          {classroomName}
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
          <ClassScore />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            style={{ background: "#EFBA44", width: 150 }}
            onClick={handleClickOpen}
          >
            <AddIcon />
            <div className="createactivity">สร้างกิจกรรม</div>
          </Button>
          {/* ----------------------------------------------------------------------------------------------------------------------- */}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
              <div className="titledialog">สร้างกิจกรรม</div>
            </DialogTitle>
            <DialogContent>
              <TextField
                required
                margin="dense"
                id="nameactivity"
                label="ชื่อกิจกรรม"
                fullWidth
                variant="standard"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                required
                margin="dense"
                id="nameactivity"
                label="คำถาม"
                fullWidth
                variant="standard"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                required
                margin="dense"
                id="nameactivity"
                label="ตัวเลือกที่ 1 (ใช่)"
                fullWidth
                variant="standard"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                value={choice_true}
                onChange={(e) => setChoiceTrue(e.target.value)}
              />
              <TextField
                required
                margin="dense"
                id="nameactivity"
                label="ตัวเลือกที่ 2 (ไม่ใช่)"
                fullWidth
                variant="standard"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                value={choice_false}
                onChange={(e) => setChoiceFalse(e.target.value)}
              />
              <Grid paddingTop={3}>
                <TextField
                  required
                  id="datetime-local"
                  label="กำหนดวันที่ส่ง"
                  type="datetime-local"
                  sx={{ width: 250 }}
                  inputProps={{ style: { fontFamily: "Prompt" } }}
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                    style: { fontFamily: "Prompt" },
                  }}
                />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>
                <div className="cancelbutton">ยกเลิก</div>
              </Button>
              <Button
                onClick={handleCreateAssignment}
                variant="contained"
                style={{ width: 150 }}
              >
                <div className="createbutton">สร้าง</div>
              </Button>
            </DialogActions>
          </Dialog>
          {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
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
            paddingTop: 3,
          },
        }}
      >
        {/* SUMMARY ALL OF ASSIGNMENT FOR TEACHER */}
        <Paper elevation={3}>
          <ClassActivityResults_Teacher />
        </Paper>
      </Box>
      <Box sx={{ paddingTop: 15 }}></Box>
    </Box>
  );
}
export default ClassActivity_Teacher;
