import * as React from "react";
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
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddIcon from "@mui/icons-material/Add";

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

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: 1050 }}>
      <h1 className="classname" style={{ paddingLeft: "5%", fontSize: 36 }}>
        ห้องเรียนการเกษตร
      </h1>
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
              />
              <TextField
                required
                margin="dense"
                id="nameactivity"
                label="ตัวเลือกที่ 1"
                defaultValue="ใช่"
                fullWidth
                variant="standard"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
              />
              <TextField
                required
                margin="dense"
                id="nameactivity"
                label="ตัวเลือกที่ 2"
                defaultValue="ไม่ใช่"
                fullWidth
                variant="standard"
                inputProps={{ style: { fontFamily: "Prompt" } }}
                InputLabelProps={{ style: { fontFamily: "Prompt" } }}
              />
              <Grid paddingTop={3}>
                <TextField
                  required
                  id="datetime-local"
                  label="กำหนดวันที่ส่ง"
                  type="datetime-local"
                  sx={{ width: 250 }}
                  inputProps={{ style: { fontFamily: "Prompt" } }}
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
                onClick={handleClose}
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
          },
        }}
      >
        <Paper elevation={3}>
          <Stack direction={'column-reverse'}>
            <Grid paddingTop={2} paddingBottom={2}>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              <Box
                style={{
                  display: "flex",
                  marginRight: "auto",
                  marginLeft: "auto",
                  background: "#5F498C",
                  width: "95%",
                  paddingBottom: 10,
                  paddingLeft: "5%",
                  paddingTop: 10,
                  borderRadius: 15,
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
                      สิ้นสุด 28 กุมภาพันธ์ 2022 10.00 PM
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
                  <Grid item xs={6}>
                    <div className="textinbutton">ยังไม่ส่ง</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="textinbutton">-</div>
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
                        <div className="editbutton">รายละเอียด</div>
                      </Button>
                    </Grid>
                  </Stack>
                  <Stack
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    direction="row"
                  >
                    <Grid className="status">
                      <AccessTimeFilledIcon />
                    </Grid>
                    <Grid className="status">
                      <div>หมดเวลาเเล้ว</div>
                    </Grid>
                  </Stack>
                </Grid>
              </Box>
            </Grid>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <Grid paddingBottom={3}>
              <Box
                style={{
                  display: "flex",
                  marginRight: "auto",
                  marginLeft: "auto",
                  background: "#5F498C",
                  width: "95%",
                  paddingBottom: 10,
                  paddingLeft: "5%",
                  paddingTop: 10,
                  borderRadius: 15,
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
                      กิจกรรมที่ 2 รดน้ำต้นไม้วันที่ 2
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="activityduedate">
                      สิ้นสุด 1 มีนาคม 2022 10.00 PM
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
                    <div className="textinbutton">4</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="textinbutton">ไม่รดน้ำต้นไม้</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="textinbutton">-</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="textinbutton">ยังไม่ส่ง</div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="textinbutton">1</div>
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
                        <div className="editbutton">รายละเอียด</div>
                      </Button>
                    </Grid>
                  </Stack>
                  <Stack
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    direction="row"
                  >
                    <Grid className="statusactive">
                      <AccessTimeFilledIcon />
                    </Grid>
                    <Grid className="statusactive">
                      <div>อยู่ในระยะเวลา</div>
                    </Grid>
                  </Stack>
                </Grid>
              </Box>
            </Grid>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
export default ClassActivity_Teacher;
