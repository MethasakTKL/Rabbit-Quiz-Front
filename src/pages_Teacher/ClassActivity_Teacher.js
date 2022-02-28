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
import { createTheme, height, maxWidth } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
//import image
import waterplant from "../Static/image/waterplant.png";

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

  return (
    <div>
      <h1 className="classname" style={{ paddingLeft: "5%", fontSize: 36 }}>
        ห้องเรียนการเกษตร Test
      </h1>
      <Paper
        className="membertopic"
        variant="contained"
        sx={{
          borderRadius: 3,
          width: 150,
          height: 40,
          marginLeft: "5%",
          marginRight: 0,
        }}
        style={{ background: "#51D87A" }}
      >
        <h3 className="center" style={{ paddingLeft: "30%", paddingTop: 5 }}>
          กิจกรรม
        </h3>
      </Paper>
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
        <Paper elevation={3}>
          <Grid paddingTop={2} paddingBottom={2}>
            <Box
              style={{
                display: "flex",
                marginRight: "auto",
                marginLeft: "auto",
                background: "#5F498C",
                width: "95%",
                paddingBottom: 10,
                paddingLeft:'5%',
                paddingTop: 10,
              }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                paddingTop={2}
              >
                <Grid item xs={6}>
                  <div className="activityname">
                    กิจกรรมที่ 1 รดน้ำต้นไม้วันที่ 1
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="activityduedate">
                    สิ้นสุด 28 กุมภาพันธ์ 2022 22.00 PM
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="textinbutton">ทั้งหมด</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="textinbutton">5</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="textinbutton">รดน้ำต้นไม้</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="textinbutton">2</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="textinbutton">ไม่รดน้ำต้นไม้</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="textinbutton">3</div>
                </Grid>
                <Stack
                  marginLeft={"auto"}
                  marginRight={"auto"}
                  direction="row"
                  spacing={1}
                  paddingTop={3}
                  paddingBottom={2}
                >
                  <Grid>
                    <Button
                      variant="contained"
                      style={{ background: "#D64A55" }}
                    >
                      <DeleteIcon />
                      <div className="deletebutton">ลบ</div>
                    </Button>
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      style={{ background: "#EFBA44" }}
                    >
                      <EditIcon />
                      <div className="editbutton">แก้ไข</div>
                    </Button>
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      style={{ background: "#7AD400" }}
                    >
                      <div className="editbutton">เพิ่มเติม</div>
                    </Button>
                  </Grid>
                </Stack>
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
export default ClassActivity_Teacher;
