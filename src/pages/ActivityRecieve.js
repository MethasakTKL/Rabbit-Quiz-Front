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
import { message } from "antd";
import "./Activity.css"


function ActivityRecieve() {

    let auth = useAuth()
    const [checkACT, setCheckACT] = React.useState(false)
    const [assignREC, setAssignmentREC] = React.useState(null)
    useEffect(() => {
        async function fetchActivity() {
            const res = await ax.get(`/assignments`)
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

                if (classroom_id === auth.id) {
                    assignments.push({ title, description, posted_date, deadline, choice_true, choice_false, id })
                }
                n++
            }

            setAssignmentREC(

                assignments.map(function (a, index) {
                    return (
                        <Grid paddingTop={2} paddingBottom={2}>
                            <Button
                                sx={{
                                    color: "black",
                                    display: "block",
                                    border: 0,
                                    paddingBottom: 1.5,
                                    boxShadow: 3,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    width: "80%"
                                }}>
                                <h1 className="activity">{a.title}</h1>
                                <div className="assignment-detail">
                                    <div type="time-activity">
                                        <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                                        <div className="due-time">สิ้นสุด</div>
                                        <div type="duetime">{a.deadline}</div>
                                    </div>
                                </div>
                            </Button>
                        </Grid>
                    )
                })
            )
        }
        fetchActivity();
    }, []);


    return (
        <div>

            {assignREC}
        </div>
    )
}

export default ActivityRecieve