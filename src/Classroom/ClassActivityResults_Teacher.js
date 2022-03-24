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
import waterplant from "../Static/image/waterplant.png";
import { Link } from "react-router-dom";
import { ax, useAuth } from "../auth/auth";

//css
import "./ClassActivityResults_Teacher.css";
import { message } from "antd";
import DetailActivity from "../Classroom/ClassTeacherActivity/DetailActivity";
import EditActivity from "../Classroom/ClassTeacherActivity/EditActivity";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

function ClassActivityResults_Teacher() {
    let auth = useAuth()
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [title, setTitle] = React.useState(null);
    const [discription, setDescription] = React.useState(null);
    const [choice_true, setChoiceTrue] = React.useState(null);
    const [choice_false, setChoiceFalse] = React.useState(null);
    const [activityID, setActivityID] = React.useState(null);
    const handleOpen = (title, discription, choice_true, choice_false, id) => {
        setTitle(title)
        setDescription(discription)
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
    useEffect(() => {
        async function fetchActivity() {
            const res = await ax.get(`/assignments/`)
            console.log(res)
            const check = await ax.get(`/assignment_status/`)
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
                let classroom_id = r[n].classroom_id
                let id = r[n].id

                assignments.push({ title, description, posted_date, deadline, choice_true, choice_false, id })
                n++
            }

            setAssignmentList(

                assignments.map(function (a, index) {
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
                                    <Grid
                                        container
                                        rowSpacing={1}
                                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                        paddingTop={2}
                                    >
                                        <Grid item xs={6}>
                                            <div className="activityname">
                                                {a.title}
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="activityduedate">
                                                สิ้นสุดเวลา {a.deadline}
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="textinbutton">ทั้งหมด</div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="textinbutton">5</div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="textinbutton">{a.choice_true}</div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="textinbutton">4</div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="textinbutton">{a.choice_false}</div>
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
                                                <EditActivity />
                                            </Grid>
                                            <Grid>
                                                <Button
                                                    variant="contained"
                                                    style={{ background: "#D64A55" }}
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
                                </Box>
                            </Grid>
                        </Stack>
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
        )
    }
    ///////////////////////POPUP ASSIGNMENT SECTION ///////////////////////

    return (
        <div class="activity-list">
            {assignmentList}
            {open && renderPopup()}
        </div>
    )
}

export default ClassActivityResults_Teacher