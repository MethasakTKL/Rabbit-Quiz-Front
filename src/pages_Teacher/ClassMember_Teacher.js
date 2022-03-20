import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React from "react";
import "./ClassMember_Teacher.css";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

//import components
import AddMember from "../components_teacher/ClassmemberTeacher/addmember";
import DeleteMember from "../components_teacher/ClassmemberTeacher/deletemember";

const columns = [
  { field: "id", headerName: "ID", width: 20 },
  {
    field: "firstName",
    headerName: "ชื่อ",
    width: 100,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "นามสกุล",
    width: 100,
    editable: false,
  },
  {
    field: "AllPoint",
    headerName: "คะแนนทั้งหมด",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "Point",
    headerName: "คะแนนที่ได้",
    type: "number",
    width: 110,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    firstName: "ชนาวัฒน์",
    lastName: "ทั้วสุภาพ",
    AllPoint: 2,
    Point: 2,
  },
  {
    id: 2,
    firstName: "นัฏฐวัฒน์",
    lastName: "สิงห์อินทร์",
    AllPoint: 2,
    Point: 2,
  },
  {
    id: 3,
    firstName: "เมธาศักดิ์",
    lastName: "ทิพย์กองลาศ",
    AllPoint: 2,
    Point: 1,
  },
  {
    id: 4,
    firstName: "อิฟฟาฮาน",
    lastName: "สุขสุวรรณ",
    AllPoint: 2,
    Point: 2,
  },
  { id: 5, firstName: "ธรรมาธิป", lastName: "ชิตพงศ์", AllPoint: 2, Point: 1 },
];

function ClassMember_Teacher() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
    <div>
      <h1 className="classname">ห้องเรียนการเกษตร</h1>
      <Stack
        marginLeft={"auto"}
        marginRight={"auto"}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingBottom={2}
      >
        <Grid>
          <AddMember/>
        </Grid>
        <Grid>
          <DeleteMember/>
        </Grid>
      </Stack>
      <div className="allstudentmember">นักเรียน ทั้งหมด 5 คน</div>
      <Box>
        <Paper
          sx={{
            width: "98%",
            maxWidth: 600,
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              style={{ fontFamily: "prompt" }}
            />
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default ClassMember_Teacher;
