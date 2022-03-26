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
            const res = await ax.get(`/assignments/`)
            const check = await ax.get(`/assignment_status/`)
            console.log("Assignments", res)
            console.log("ASN_Status", check)
            let c = check.data.results
            let r = res.data.results
            let n = 0;
            let assignments = []
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
                    return (
                        < Stack direction="column-reverse" >
                            <Grid paddingTop={2} paddingBottom={2}>
                                <Button
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
                                        <h2 className="questionACT">
                                            {a.description}
                                        </h2>
                                        <div className="assignment-detail-activity">
                                            <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                                            <div className="end-time">สิ้น</div>
                                            <div className="end-time">สุด</div>
                                            <div className="duetimeactivity">
                                                {date}
                                            </div>
                                        </div>
                                        <Grid className="intime">
                                            <div>อยู่ในระยะเวลา</div>
                                        </Grid>
                                        <Grid className="statussent">
                                            <CheckCircleIcon />
                                            <div>ส่งเเล้ว</div>
                                        </Grid>
                                    </Stack>
                                </Button>
                            </Grid>
                        </Stack >
                    )
                })
            )
        }
        fetchActivity();
    }, []);
    ///////////////////////CARD ASSIGNMENT SECTION ///////////////////////


    ///////////////////////POPUP ASSIGNMENT SECTION ///////////////////////
    let navigate = useNavigate()
    const handleSendAPI = async () => {
        var submit = await ax.post(`/user_result_do/${activityID}`, { result: "True" })


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
                content: `เลือก ${choice_true} สำหรับกิจกรรม${title}สำเร็จ`,
                style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                key,
                duration: 10,
            });
        }, 2000);
    }

    const renderPopup = () => {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth={fullWidth}>
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