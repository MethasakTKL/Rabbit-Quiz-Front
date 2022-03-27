import React, { useEffect } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { EmojiEvents } from "@mui/icons-material";
import Linkform from '@mui/material/Link';


//import image
import question from "../Static/image/Question00.png";
import { Link } from "react-router-dom";
import { ax, useAuth } from "../auth/auth";

//css
import "./ClassActivityResults.css";
import { message } from "antd";
import moment from "moment";


function ClassActivityResults() {
    let auth = useAuth()
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [title, setTitle] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [choice_true, setChoiceTrue] = React.useState(null);
    const [choice_false, setChoiceFalse] = React.useState(null);
    const [activityID, setActivityID] = React.useState(null);
    const handleOpen = (title, description, choice_true, choice_false, id) => {
        setTitle(title)
        setDescription(description)
        setChoiceTrue(choice_true)
        setChoiceFalse(choice_false)
        setActivityID(id)
        setOpen(true)
        // setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        // setOpen(false);
    };



    ///////////////////////CARD ASSIGNMENT SECTION ///////////////////////
    const [checkACT, setCheckACT] = React.useState(false)
    const [assignmentList, setAssignmentList] = React.useState(null)
    const [isEmpty, setIsEmpty] = React.useState(false)
    useEffect(() => {
        async function fetchActivity() {



            //vvvvvvvvvvvvvvvvvvv CHECKING USER HAS FINISH ASSIGNMENT YET? vvvvvvvvvvvvvvvvvvv
            try {
                const check = await ax.get(`assignment_status/`)
                let c = check.data.results; let m = 0
                let ASNList = []
                for (var a in c) {
                    let CUR_student_id = localStorage.getItem("student_id")
                    let ASN_student_id = (c[m].student_id).toString()
                    let ASN_id = c[m].assignment_id
                    let ASN_status = c[m].status
                    if (CUR_student_id === ASN_student_id) {
                        ASNList.push({ ASN_id, ASN_status })
                    }
                    m++
                }
                // ^^^^^^^^^^^^^^^^^ CHECKING USER HAS FINISH ASSIGNMENT YET? ^^^^^^^^^^^^^^^^^



                // vvvvvvvvvvvvvvvvv ALL OF ASSIGNMENT IS vvvvvvvvvvvvvvvvvvVVVVVVVVVVVVVV

                const res = await ax.get(`assignments/`)
                let r = res.data.results
                let assignments = []; let n = 0;
                for (var a in r) {
                    let title = r[n].title
                    let description = r[n].description
                    let posted_date = r[n].posted_date
                    let deadline = r[n].deadline
                    let choice_true = r[n].choice_true
                    let choice_false = r[n].choice_false
                    let id = r[n].id
                    let classroom_id = r[n].classroom_id
                    let current_id = localStorage.getItem("classid")

                    if (`${classroom_id}` === localStorage.getItem("classid")) {
                        assignments.push({ title, description, posted_date, deadline, choice_true, choice_false, id })
                    }
                    n++
                }
                if (assignments.length === 0) { setIsEmpty(true) }


                setAssignmentList(

                    assignments.map(function (a, index) {
                        function toThaiDateString(date) {
                            let monthNames = [
                                "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
                                "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
                                "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
                            ];

                            let year = date.getFullYear() + 543;
                            let month = monthNames[date.getMonth()];
                            let numOfDay = date.getDate();

                            let hour = date.getHours().toString().padStart(2, "0");
                            let minutes = date.getMinutes().toString().padStart(2, "0");
                            let second = date.getSeconds().toString().padStart(2, "0");

                            return `${numOfDay} ${month} ${year} ` +
                                `${hour}:${minutes}:${second} น.`;
                        }
                        let date1 = new Date(a.deadline);
                        var date = toThaiDateString(date1);

                        let thisASN_status = false
                        let thisASN_choice = ''
                        let p = 0
                        for (var asn in ASNList) {
                            if (ASNList[p].ASN_id === a.id) {
                                if (ASNList[p].ASN_status === true) {
                                    thisASN_status = a.choice_true
                                }
                                if (ASNList[p].ASN_status === false) {
                                    thisASN_status = a.choice_false
                                }
                            }
                            p++
                        }





                        let today = moment().format()
                        let isOutDate = moment(today).isAfter(a.deadline)

                        return (
                            < Stack direction="column-reverse"  >
                                <Grid paddingTop={2} paddingBottom={2}>
                                    {isOutDate ?
                                        <Button
                                            disabled
                                            variant="contained"
                                            onClick={() => handleOpen(a.title, a.description, a.choice_true, a.choice_false, a.id)}
                                            style={{
                                                width: "80%",
                                                display: "flex",
                                                marginRight: "auto",
                                                marginLeft: "auto",
                                                bottom: 10,
                                                top: 1,
                                                background: "#453566",
                                                borderRadius: 15,
                                                paddingBottom: 15,

                                            }}
                                        >
                                            <Stack>
                                                <h1 className="activitybutton-outed-date">
                                                    {a.title}
                                                </h1>
                                                <Grid className="statussent-outed-date">
                                                    {thisASN_status ? <CheckCircleIcon sx={{ fontSize: "40px" }} /> : <CheckCircleOutlineIcon sx={{ fontSize: "40px" }} />}
                                                    <div>{thisASN_status ? "ส่งแล้ว" : "ยังไม่ส่ง"}</div>
                                                </Grid>
                                                <h2 className="questionACT-outed-date">
                                                    {thisASN_status ? <div>คำตอบที่เลือก {thisASN_status}</div> : <div>ยังไม่ได้เลือกคำตอบ</div>}
                                                </h2>
                                                <div className="assignment-detail-activity">
                                                    <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                                                    <div className="end-time">สิ้น</div>
                                                    <div className="end-time">สุด</div>
                                                    <div className="duetimeactivity-outed-date">
                                                        {date}
                                                    </div>
                                                </div>
                                                <Grid>
                                                    <div className="outtime">ไม่ได้อยู่ในระยะเวลา</div>
                                                </Grid>
                                            </Stack>
                                        </Button>

                                        : <Button
                                            disabled={thisASN_status}
                                            variant="contained"
                                            onClick={() => handleOpen(a.title, a.description, a.choice_true, a.choice_false, a.id)}
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
                                                    {a.title}
                                                </h1>
                                                <Grid className="statussent">
                                                    {thisASN_status ? <CheckCircleIcon sx={{ fontSize: "40px" }} /> : <CheckCircleOutlineIcon sx={{ fontSize: "40px" }} />}
                                                    <div>{thisASN_status ? "ส่งแล้ว" : "ยังไม่ส่ง"}</div>
                                                </Grid>
                                                <h2 className="questionACT">
                                                    {thisASN_status ? <div>คำตอบที่เลือก {thisASN_status}</div> : <div>ยังไม่ได้เลือกคำตอบ</div>}
                                                </h2>
                                                <div className="assignment-detail-activity">
                                                    <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                                                    <div className="end-time">สิ้น</div>
                                                    <div className="end-time">สุด</div>
                                                    <div className="duetimeactivity-activate" >
                                                        {date}
                                                    </div>
                                                </div>
                                                <Grid>
                                                    <div className="intime">อยู่ในระยะเวลา</div>
                                                </Grid>
                                            </Stack>
                                        </Button>}
                                </Grid>
                            </Stack >

                        )
                    })
                )
            } catch (err) {
                if (err.response.data.detail) {
                    message.warn({
                        content: "มีปัญหาบางอย่างเกิดขึ้นกรุณาลองใหม่..",
                        style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                    })
                    navigate("/")
                }
            }
        }
        fetchActivity();
    }, []);
    ///////////////////////CARD ASSIGNMENT SECTION ///////////////////////


    ///////////////////////POPUP ASSIGNMENT SECTION ///////////////////////
    let navigate = useNavigate()
    const handleSendAPITrue = async () => {
        var submit = await ax.post(`user_result_do/${activityID}`, { result: "True" })


        const key = 'updatable';
        message.loading({
            content: 'กำลังดำเนินการ...',
            style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
            key
        });
        navigate('/reload', { replace: true })
        navigate('/classroom-activity', { replace: true })
        setTimeout(() => {
            message.success({
                content: `เลือก ${choice_true} สำหรับ ${title} สำเร็จ`,
                style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                key,
                duration: 10,
            });
        }, 2000);
    }


    const handleSendAPIFalse = async () => {
        var submit = await ax.post(`user_result_do/${activityID}`, { result: "False" })


        const key = 'updatable';
        message.loading({
            content: 'กำลังดำเนินการ...',
            style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
            key
        });
        navigate('/reload', { replace: true })
        navigate('/classroom-activity', { replace: true })
        setTimeout(() => {
            message.success({
                content: `เลือก ${choice_false} สำหรับ ${title} สำเร็จ`,
                style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                key,
                duration: 10,
            });
        }, 2000);
    }

    const renderPopup = () => {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>
                    <Grid paddingLeft={"90%"}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                    <div className="ActivityTitle">
                        {title}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className="Question">{description}</div>
                    </DialogContentText>
                    <img className="imgwater" src={question} />
                </DialogContent>
                <Grid paddingTop={2} paddingBottom={2}>
                    <DialogActions>
                        <div className="choiceselect">
                            <div className="buttonyes">
                                <Button className="choiceselectpc"
                                    variant="contained"
                                    onClick={handleSendAPITrue}
                                    style={{
                                        width: "10em",
                                        height: 60,
                                        background: "#5BC0DE",
                                    }}
                                >
                                    <div className="buttonchoice">{choice_true}</div>
                                </Button>
                            </div>

                            <div className="buttonno">
                                <Button className="choiceselectpc"
                                    variant="contained"
                                    onClick={handleSendAPIFalse}
                                    style={{
                                        width: "10em",
                                        height: 60,
                                        background: "#D9534F",
                                    }}
                                >
                                    <div className="buttonchoice">{choice_false}</div>
                                </Button>
                            </div>
                        </div>
                    </DialogActions>
                </Grid>
            </Dialog>
        )
    }
    ///////////////////////POPUP ASSIGNMENT SECTION ///////////////////////

    return (
        <div class="activity-list">
            {assignmentList}
            {open && renderPopup()}
            {isEmpty &&
                <Box sx={{ paddingTop: 8 }}>
                    <div className="noroom">ยังไม่มีกิจกรรม</div>
                </Box>
            }
        </div>
    )
}

export default ClassActivityResults