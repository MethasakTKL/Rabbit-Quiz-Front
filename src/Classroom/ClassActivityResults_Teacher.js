import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { height, maxWidth } from "@mui/system";
import { EmojiEvents } from "@mui/icons-material";
import Linkform from "@mui/material/Link";
import { message } from "antd";
import moment from "moment";

//import image
import waterplant from "../Static/image/waterplant.png";
import { Link } from "react-router-dom";
import { ax, useAuth } from "../auth/auth";

//Icon
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ReportIcon from "@mui/icons-material/Report";

//css
import "./ClassActivityResults_Teacher.css";

//Components
import EditActivity from "../Classroom/ClassTeacherActivity/EditActivity";
import DetailActivity from "../Classroom/ClassTeacherActivity/DetailActivity";

function ClassActivityResults_Teacher() {
  let auth = useAuth();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [title, setTitle] = React.useState(null);
  const [discription, setDescription] = React.useState(null);
  const [choice_true, setChoiceTrue] = React.useState(null);
  const [choice_false, setChoiceFalse] = React.useState(null);
  const [activityID, setActivityID] = React.useState(null);
  const handleOpen = (title, discription, choice_true, choice_false, id) => {
    setTitle(title);
    setDescription(discription);
    setChoiceTrue(choice_true);
    setChoiceFalse(choice_false);
    setActivityID(id);
    setOpen(true);
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
    setOpenEdit(false);
    // setOpen(false);
  };

  const [ASNID, setASNID] = useState();
  const [ASNText, setASNText] = useState();

  ///////////////////////CARD ASSIGNMENT SECTION ///////////////////////
  const [checkACT, setCheckACT] = React.useState(false);
  const [assignmentList, setAssignmentList] = React.useState(null);
  useEffect(() => {
    async function fetchActivity() {
      try {
        const res = await ax.get(`/assignments/`);
        const check = await ax.get(`/assignment_status/`);
        let c = check.data.results;
        console.log(check);
        let r = res.data.results;
        let n = 0;
        let assignments = [];
        for (var a in r) {
          let title = r[n].title;
          let description = r[n].description;
          let choice_true = r[n].choice_true;
          let choice_false = r[n].choice_false;
          let classroom_id = r[n].classroom_id;
          let id = r[n].id;
          let deadline = r[n].deadline;
          let posted_date = r[n].posted_date;

          assignments.push({
            title,
            description,
            choice_true,
            choice_false,
            deadline,
            id,
            posted_date,
          });
          n++;
        }

        setAssignmentList(
          assignments.map(function (a, index) {
            function toThaiDateString(date) {
              let monthNames = [
                "มกราคม",
                "กุมภาพันธ์",
                "มีนาคม",
                "เมษายน",
                "พฤษภาคม",
                "มิถุนายน",
                "กรกฎาคม",
                "สิงหาคม.",
                "กันยายน",
                "ตุลาคม",
                "พฤศจิกายน",
                "ธันวาคม",
              ];

              let year = date.getFullYear() + 543;
              let month = monthNames[date.getMonth()];
              let numOfDay = date.getDate();

              let hour = date.getHours().toString().padStart(2, "0");
              let minutes = date.getMinutes().toString().padStart(2, "0");

              return (
                `${numOfDay} ${month} ${year} ` + `เวลา ${hour}:${minutes} น.`
              );
            }
            let date1 = new Date(a.deadline);
            var date = toThaiDateString(date1);

            return (
              <Stack direction={"column-reverse"}>
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
                     <Stack>

                    <div className="activityname">
                        ชื่อ <div className="titleASN">{a.title}</div>
                    </div>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      paddingTop={2}
                    >
                      <div />
                      <Grid item xs={6}>
                        <div className="questionASN">
                          <div className="questionASNedit">
                            คำถาม <br className="newline" />
                            <div className="questionASN">{a.description}</div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="activityduedate">
                          <div className="datetimeASNedit">
                            สิ้นสุดวันที่ <br className="newline" />
                            {date}
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="textinbutton">ทั้งหมด</div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="textinbutton">5</div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="textinbutton">
                          เลือก {a.choice_true}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="textinbutton">4</div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="textinbutton">
                          เลือก {a.choice_false}
                        </div>
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
                          <DetailActivity />
                        </Grid>

                        <Grid>
                          <div>
                            <Button
                              variant="contained"
                              style={{ background: "#EFBA44" }}
                              onClick={() =>
                                clickPopupEdit(
                                  a.title,
                                  a.description,
                                  a.choice_true,
                                  a.choice_false,
                                  a.deadline,
                                  a.id
                                )
                              }
                            >
                              <EditIcon />
                              <div className="editbutton">แก้ไข</div>
                            </Button>
                          </div>
                        </Grid>

                        <Grid>
                          <Button
                            variant="contained"
                            style={{ background: "#D64A55" }}
                            onClick={() => clickPopupDelete(a.id, a.title)}
                          >
                            <DeleteIcon />
                            <div className="deletebutton">ลบ</div>
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
                    </Stack>
                  </Box>
                </Grid>
              </Stack>
            );
          })
        );
      } catch (err) {
        if (err.response.data.detail) {
          navigate("/reload", { replace: true });
          setTimeout(navigate("/classroom-activity", { replace: true }), 100);
        }
      }
    }
    fetchActivity();
  }, []);
  ///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^CARD ASSIGNMENT SECTION ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ///////////////////////POPUP ASSIGNMENT SECTION ///////////////////////
  let navigate = useNavigate();
  const handleSendAPI = async () => {
    var submit = await ax.post(`/user_result_do/${activityID}`, {
      result: "True",
    });

    const key = "updatable";
    message.loading({
      content: "กำลังดำเนินการ...",
      style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
      key,
    });
    navigate("/reload", { replace: true });
    navigate("/classroom-activity", { replace: true });
    setTimeout(() => {
      message.success({
        content: `เลือก ${choice_true} สำหรับกิจกรรม${title}สำเร็จ`,
        style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
        key,
        duration: 10,
      });
    }, 2000);
  };

  ////VVVVVVVVVVVVVVVVVVVVVVVVVVVVPOPUP ASSIGNMENT DETAIL VVVVVVVVVVVVVVVVVVVVVVVVVVV
  const renderPopup = () => {
    return (
      <Dialog open={open} onClose={handleClose} fullWidth={fullWidth}>
        <DialogTitle>
          <Grid paddingLeft={"90%"}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <div className="ActivityTitle">{title}</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="Question">{discription}</div>
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
                  onClick={handleSendAPI}
                  style={{
                    width: 150,
                    height: 50,
                    background: "#5BC0DE",
                  }}
                >
                  <div className="buttonyes">{choice_true}</div>
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
                  <div className="buttonno">{choice_false}</div>
                </Button>
              </Grid>
            </Stack>
          </DialogActions>
        </Grid>
      </Dialog>
    );
  };
  //^^^^^^^^^^^^^^^^^^^^ POPUP ASSIGNMENT DETAIL ^^^^^^^^^^^^^^^^^^^^///

  ///VVVVVVVVVVVVVVVV POPUP DELETE VVVVVVVVVVVVVVVVVVVVVVVVVVVV///

  const [openDelete, setOpenDelete] = useState(false);
  const clickPopupDelete = (id, title) => {
    setASNID(id);
    setASNText(title);
    setOpenDelete(true);
  };
  const key = "updatable";
  const handleDeleteASN = () => {
    ax.post(`deleteAssignment/${ASNID}`);
    message.loading({
      content: `กำลังลบกิจกรรม...`,
      style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
      key,
    });
    setTimeout(() => {
      message.warn({
        content: `กิจกรรมถูกลบแล้ว`,
        style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
        key,
        duration: 2,
      });
      navigate("/reload");
      setTimeout(() => {
        navigate("/classroom-activity", { replace: true });
      }, 20);
    }, 3000);
    handleClose();
  };

  const renderPopupDelete = () => {
    return (
      <Dialog open={openDelete} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <Stack direction="row" justifyContent="center">
              <Box>
                <ReportIcon sx={{ fontSize: 96, color: "#7D0000" }} />
              </Box>
            </Stack>
            <div className="textleave">ต้องการจะลบ {ASNText} ใช่หรือไม่</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ background: "#7D0000" }}
            sx={{ width: 150 }}
            onClick={handleDeleteASN}
          >
            <div className="answer2">ลบ</div>
          </Button>
          <Button onClick={handleClose}>
            <div className="answer1">ยกเลิก</div>
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^ POPUP DELETE ^^^^^^^^^^^^^^^^^^^^^^^////

  //VVVVVVVVVVVVVVVVVV POPUP EDIT VVVVVVVVVVVVVVVVVVVVVVV

  const [EditASNID, setEditASNID] = useState();
  const [EditASNText, setEditASNText] = useState();
  const [EditASNDescription, setEditASNDescription] = useState();
  const [EditASNChoiceTrue, setEditASNChoiceTrue] = useState();
  const [EditASNChoiceFalse, setEditASNChoiceFalse] = useState();
  const [EditASNDeadline, setEditASNDeadline] = useState();
  const clickPopupEdit = (
    title,
    description,
    choice_true,
    choice_false,
    deadline,
    id
  ) => {
    setEditASNID(id);
    setEditASNText(title);
    setEditASNDescription(description);
    setEditASNChoiceTrue(choice_true);
    setEditASNChoiceFalse(choice_false);
    setEditASNDeadline(moment(deadline).format("YYYY-MM-DDTkk:mm"));
    setOpenEdit(true);
  };

  const [openEdit, setOpenEdit] = useState();
  const handleEditASN = () => {
    console.log("ID", EditASNID);
    console.log("Title", EditASNText);
    console.log("Description", EditASNDescription);
    console.log("Choice True", EditASNChoiceTrue);
    console.log("Choice False", EditASNChoiceFalse);
    console.log("Deadline", EditASNDeadline);

    ax.post(`changeAssignment/${EditASNID}`, {
      title: EditASNText,
      description: EditASNDescription,
      choice_true: EditASNChoiceTrue,
      choice_false: EditASNChoiceFalse,
      deadline: EditASNDeadline,
    });
    message.loading({
      content: `กำลังแก้ไข ${EditASNText}...`,
      style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
      key,
    });
    setTimeout(() => {
      message.warn({
        content: `แก้ไขกิจกรรมเรียบร้อยแล้ว`,
        style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
        key,
        duration: 2,
      });
      navigate("/reload");
      setTimeout(() => {
        navigate("/classroom-activity", { replace: true });
      }, 20);
    }, 3000);
    handleClose();
  };

  ///// Edit Assignment Popup /////////
  const renderPopupEdit = () => {
    return (
      <Dialog open={openEdit} onClose={handleClose}>
        <DialogTitle>
          <div className="titledialog">แก้ไขกิจกรรม</div>
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="nameactivity"
            label="ชื่อกิจกรรม"
            value={EditASNText}
            onChange={(e) => setEditASNText(e.target.value)}
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          {/* <TextField */}
          required margin="dense" id="nameactivity" label={"คำถาม"}
          value={EditASNDescription}
          onChange={(e) => setEditASNDescription(e.target.value)}
          fullWidth variant="standard" inputProps=
          {{ style: { fontFamily: "Prompt" } }}
          InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <TextField
            required
            margin="dense"
            id="nameactivity"
            label="ตัวเลือกที่ 1"
            value={EditASNChoiceTrue}
            onChange={(e) => setEditASNChoiceTrue(e.target.value)}
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
            value={EditASNChoiceFalse}
            onChange={(e) => setEditASNChoiceFalse(e.target.value)}
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
              value={EditASNDeadline}
              onChange={(e) => setEditASNDeadline(e.target.value)}
              inputProps={{ style: { fontFamily: "Prompt" } }}
              InputLabelProps={{
                shrink: true,
                style: { fontFamily: "Prompt" },
              }}
            />
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleEditASN}
            variant="contained"
            style={{ width: 150 }}
          >
            <div className="createbutton">บันทึก</div>
          </Button>
          <Button onClick={handleClose}>
            <div className="cancelbutton">ยกเลิก</div>
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  ///^^^^^^^^^^^^^^^^^^^^^^^ POPUP EDIT ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/

  //^^^^^^^^^^^^^^^^^^POPUP ASSIGNMENT SECTION ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/

  return (
    <div class="activity-list">
      {assignmentList}
      {open && renderPopup()}
      {openEdit && renderPopupEdit()}
      {openDelete && renderPopupDelete()}
    </div>
  );
}

export default ClassActivityResults_Teacher;
