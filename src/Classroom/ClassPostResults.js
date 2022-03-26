import React from 'react'
import { ax, useAuth } from '../auth/auth';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CardActionArea,
    Grid,
} from "@mui/material";
import "./ClassPostResults.css"
import FaceIcon from "@mui/icons-material/Face";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ReportIcon from "@mui/icons-material/Report";
import { message } from "antd";
import { useNavigate } from "react-router";

function ClassPostResult() {
    const [openChange, setOpenChange] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [postList, setClassPostList] = useState();
    const [column, setColomn] = useState()
    const [isEmpty, setIsEmpty] = useState()
    let auth = useAuth()
    let id = localStorage.getItem("classid")


    const [messageID, setMessageID] = useState('')
    const [messageText, setMessageText] = useState('')
    const clickPopupChange = (text, id) => {
        setMessageText(text)
        setMessageID(id)
        setOpenChange(true)
    }

    const clickPopupDelete = (text, id) => {
        setMessageText(text)
        setMessageID(id)
        setOpenDelete(true)
    }

    const clickClose = () => {
        setOpenDelete(false)
        setOpenChange(false)
    }



    // setTimeout(alertFunc, 3000);
    useEffect(() => {
        async function fetchListPost() {
            try {
                const res = await ax.get(`/getMessage/${id}`)
                let post = res.data
                let n = 0;
                let allPost = []
                for (var a in post) {
                    let id = post[n].id
                    let text = post[n].text
                    let name = post[n].firstname + " " + post[n].lastname
                    let role = post[n].is_staff
                    allPost.push({ text, name, role, id })
                    n++
                }
                if (allPost.length === 0) { setIsEmpty(true) }


                setClassPostList(
                    allPost.map(function (p, i) {
                        return (
                            <Stack direction="column-reverse" spacing={4} paddingBottom={3}>
                                <Grid>
                                    <Paper
                                        style={{
                                            background: "#E7E6E5",
                                            width: "80%",
                                            height: "auto",
                                            margin: "auto",
                                            borderRadius: 10,
                                        }}
                                    >
                                        <Grid
                                            container
                                            direction="row"
                                            alignItems="center"
                                            paddingLeft={2}
                                        >
                                            {p.role ? <AccountCircleIcon sx={{ fontSize: 30, color: "#5F498C" }} /> : <FaceIcon sx={{ fontSize: 30, color: "#ECA400" }} />}
                                            <p className="postername" key={p.id}>{p.name}</p>
                                        </Grid>
                                        <p className="postinfo" >
                                            {p.text}
                                        </p>
                                        <Stack
                                            spacing={1}
                                            paddingBottom={2}
                                            paddingRight={2}
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="flex-start"
                                        >
                                            {p.name === localStorage.getItem("user_first_name") + " " + localStorage.getItem("user_last_name") &&
                                                < Grid >
                                                    <Button onClick={() => clickPopupChange(p.text, p.id)}>
                                                        <DeleteOutlineIcon />
                                                        <div className="buttonedit">แก้ไข</div>
                                                    </Button>
                                                </Grid>
                                            }
                                            {JSON.parse(localStorage.getItem("user_is_staff")) &&
                                                <Grid>
                                                    <Button onClick={() => clickPopupDelete(p.text, p.id)}>
                                                        <DeleteOutlineIcon />
                                                        <div className="buttondelete">ลบ</div>
                                                    </Button>
                                                </Grid>
                                            }
                                        </Stack>
                                    </Paper>
                                </Grid>
                            </Stack >
                        )
                    })

                )
            } catch (err) {
                if (err.response.data.detail) {
                    navigate("/reload");
                    navigate("/classroom", { replace: true })
                }
            }
        }
        fetchListPost();
    }, []);


    const navigate = useNavigate()
    const handleGoback = () => {
        navigate(-1)
    }
    const handleDeleteMessage = () => {
        ax.post(`deleteMessage/${messageID}`, { messageText })
        message.success({
            content: "ข้อความถูกลบเรียบร้อยแล้ว",
            style: { fontFamily: "Prompt", marginTop: 80, fontSize: "22px" },
            duration: 3,
        });
        clickClose()
        navigate("/reload")
        setTimeout(() => { navigate("/classroom", { replace: true }) }, 50);

    }

    const handleChangeMessage = () => {
        ax.post(`changeMessage/${messageID}`, { text: messageText })
        message.success({
            content: "ข้อความถูกเปลี่ยนเรียบร้อยแล้ว",
            style: { fontFamily: "Prompt", marginTop: 50, fontSize: "22px" },
            duration: 3,
        });
        clickClose()
        navigate("/reload")
        setTimeout(() => { navigate("/classroom", { replace: true }) }, 50);
    }

    const renderPopupChange = () => {
        return (
            <Dialog open={openChange} onClose={clickClose} fullWidth>
                <DialogContent>
                    <DialogContentText>
                        <div className="textleave">แก้ไขข้อความประกาศ</div>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="ข้อความที่แก้ไข"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        type="name"
                        fullWidth
                        variant="standard"
                        inputProps={{ style: { fontFamily: "Prompt" } }}
                        InputLabelProps={{ style: { fontFamily: "Prompt", color: "black" } }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        style={{ background: "#5F498C" }}
                        sx={{ width: 150 }}
                        onClick={handleChangeMessage}
                    >
                        <div className="answer2">บันทึก</div>
                    </Button>
                    <Button onClick={clickClose}>
                        <div className="answer1">ยกเลิก</div>
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }

    const renderPopupDelete = () => {
        return (
            <Dialog open={openDelete} onClose={clickClose}>
                <DialogContent>
                    <DialogContentText>
                        <Stack direction="row" justifyContent="center">
                            <Box>
                                <ReportIcon sx={{ fontSize: 96, color: "#7D0000" }} />
                            </Box>
                        </Stack>
                        <div className="textleave">ต้องการจะลบข้อความนี้ใช่หรือไม่</div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        style={{ background: "#7D0000" }}
                        sx={{ width: 150 }}
                        onClick={handleDeleteMessage}
                    >
                        <div className="answer2">ใช่</div>
                    </Button>
                    <Button onClick={clickClose}>
                        <div className="answer1">ยกเลิก</div>
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }



    return <div class="user-post">
        {openDelete && renderPopupDelete()}
        {openChange && renderPopupChange()}
        {postList}
        {isEmpty ?
            <Box sx={{ paddingTop: 5 }}>
                <div className="noroom">ยังไม่มีมีประกาศ</div>
            </Box> : <div />}
    </div>;
}

export default ClassPostResult;
