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


//import image
import waterplant from "../Static/image/waterplant.png";
import { Link } from "react-router-dom";

function ClassActivity() {
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
    <Box height={800}>
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
            style={{ background: "#f5df4d", width: 170 }}
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
        <Paper elevation={4}>
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <Stack direction="column-reverse">
            <Grid paddingTop={2} paddingBottom={2}>
              <Button
                disabled
                variant="contained"
                onClick={handleClickOpen}
                style={{
                  width: "80%",
                  display: "flex",
                  marginRight: "auto",
                  marginLeft: "auto",
                  bottom: 10,
                  top: 1,
                  background: "#5F498C",
                  borderRadius: 15,
                  paddingBottom: 15,
                }}
              >
                <Stack>
                  <h1 className="activitybutton">
                    กิจกรรมที่ 1 <div />รดน้ำต้นไม้วันที่ 1
                  </h1>
                  <div className="assignment-detail-activity">
                    <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                    <div className="end-time">สิ้น</div>
                    <div className="end-time">สุด</div>
                    <div className="duetimeactivity">
                      28 กุมภาพันธ์ 2022 10.00 PM
                    </div>
                  </div>
                  <Grid className="status">
                    <div>หมดเวลาเเล้ว</div>
                  </Grid>
                  <Grid className="statussent">
                    <CheckCircleIcon />
                    <div>ส่งเเล้ว</div>
                  </Grid>
                </Stack>
              </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose} fullWidth={fullWidth}>
              <DialogTitle>
                <Grid paddingLeft={"90%"}>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <div className="ActivityTitle">
                  กิจกรรมที่ 1 รดน้ำต้นไม้วันที่ 1
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div className="Question">ต้องการจะรดน้ำต้นไม้หรือไม่ ?</div>
                </DialogContentText>
                <img className="imgwater" src={waterplant} />
              </DialogContent>
              <Grid paddingTop={2} paddingBottom={2}>
                <DialogActions>
                  <Stack
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    direction="row"
                    spacing={1}
                  >
                    <Grid>
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        style={{
                          width: 150,
                          height: 50,
                          background: "#5BC0DE",
                        }}
                      >
                        <div className="buttonyes">รดน้ำ</div>
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        style={{
                          width: 150,
                          height: 50,
                          background: "#D9534F",
                        }}
                      >
                        <div className="buttonno">ไม่รดน้ำ</div>
                      </Button>
                    </Grid>
                  </Stack>
                </DialogActions>
              </Grid>
            </Dialog>

            {/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid paddingTop={2} paddingBottom={2}>
              <Button
                variant="contained"
                onClick={handleClickOpen}
                style={{
                  width: "80%",
                  display: "flex",
                  marginRight: "auto",
                  marginLeft: "auto",
                  bottom: 10,
                  top: 1,
                  background: "#5F498C",
                  borderRadius: 15,
                  paddingBottom: 15,
                }}
              >
                <Stack>
                  <h1 className="activitybutton">
                    กิจกรรมที่ 2 <div />รดน้ำต้นไม้วันที่ 2
                  </h1>
                  <div className="assignment-detail-activity">
                    <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                    <div className="end-time">สิ้น</div>
                    <div className="end-time">สุด</div>
                    <div className="duetimeactivity">
                      1 มีนาคม 2022 10.00 PM
                    </div>
                  </div>
                  <Grid className="statusactive">
                    <div>อยู่ในระยะเวลา</div>
                  </Grid>
                  <Grid className="statussent">
                    <CheckCircleOutlineIcon />
                    <div>ยังไม่ส่ง</div>
                  </Grid>
                </Stack>
              </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose} fullWidth={fullWidth}>
              <DialogTitle>
                <Grid paddingLeft={"90%"}>
                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <div className="ActivityTitle">
                  กิจกรรมที่ 2 รดน้ำต้นไม้วันที่ 2
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div className="Question">ต้องการจะรดน้ำต้นไม้หรือไม่ ?</div>
                </DialogContentText>
                <img className="imgwater" src={waterplant} />
              </DialogContent>
              <Grid paddingTop={2} paddingBottom={2}>
                <DialogActions>
                  <Stack
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    direction="row"
                    spacing={1}
                  >
                    <Grid>
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        style={{
                          width: 150,
                          height: 50,
                          background: "#5BC0DE",
                        }}
                      >
                        <div className="buttonyes">รดน้ำ</div>
                      </Button>
                    </Grid>
                    <Grid>
                      <Button
                        variant="contained"
                        onClick={handleClose}
                        style={{
                          width: 150,
                          height: 50,
                          background: "#D9534F",
                        }}
                      >
                        <div className="buttonno">ไม่รดน้ำ</div>
                      </Button>
                    </Grid>
                  </Stack>
                </DialogActions>
              </Grid>
            </Dialog>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
export default ClassActivity;
