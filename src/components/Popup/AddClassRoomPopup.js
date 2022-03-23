import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ax } from "../../auth/auth";
import { useNavigate } from "react-router";
import { message } from "antd";


function AddClassRoomPopup() {
    const handleSendApi = async () => {
        var post = await ax.get('/getMessage/8')
        console.log(post.data)
        let postData = post.data
        let n = 0;
        let allPost = []
        for (var a in postData) {
            let text = postData[n].text
            let name = postData[n].firstname + " " + postData[n].lastname
            allPost.push({ text, name })
        }
        let formattedAllPost = allPost.map(function (p, i) {
            return (
                console.log(`A post ${p.text} has post by ${p.name}`)
            )
        })
        console.log(formattedAllPost)
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const key = 'updatable';
    // Fake loading Message
    const openMessage = () => {
        message.loading({
            content: 'กรุณารอซักครู่...',
            style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
            key
        });
        setTimeout(() => {
            message.success({
                content: "เข้าร่วมห้องเรียนสำเร็จ",
                style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                key,
                duration: 3,
            });
            navigate('/reload', { replace: true })
            navigate('/', { replace: true })
        }, 3000);

    };
    let navigate = useNavigate()
    const [classCode, setClassCode] = useState('')
    const handleAddClass = async () => {
        try {
            var result = await ax.post('/join', { classCode })
            if (result.status === 200 && result.data) {
                setOpen(false)
                openMessage()
                console.log(`Successfully joined classroom...`)
            }
        } catch (error) {
            setOpen(false)
            message.error({
                content: "รหัสห้องเรียนนี้ไม่สามารถเข้าร่วมได้ กรุณาลองใหม่",
                style: { fontFamily: "Prompt", marginTop: 140, fontSize: "20px" },
                duration: 3
            });

            console.error(error)
        }
    }

    return (
        <div>
            <Button
                variant="outlined"
                sx={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontFamily: "Prompt",
                }}
                onClick={handleSendApi}
            >
                <FiPlus /> ทดสอบ Api
            </Button><p />

            <Button
                variant="outlined"
                sx={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontFamily: "Prompt",
                }}
                onClick={handleClickOpen}
            >
                <FiPlus /> เข้าร่วมห้องเรียน
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{ marginBottom: "200px" }}>
                <DialogTitle sx={{ fontFamily: "Prompt" }}>เข้าร่วมห้องเรียน</DialogTitle>
                <DialogTitle sx={{ fontFamily: "Prompt", fontSize: "16px", marginBottom: "-20px" }}>กรุณากรอกรหัสห้องเรียนที่จะเข้าร่วม</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="รหัสห้องเรียน"
                        value={classCode}
                        onChange={(e) => setClassCode(e.target.value)}
                        type="name"
                        fullWidth
                        variant="standard"
                        inputProps={{ style: { fontFamily: "Prompt" } }}
                        InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={classCode === ''}
                        onClick={handleAddClass}
                        sx={{ fontFamily: "Prompt", color: "white" }}
                        variant="contained"
                    >
                        เพิ่ม
                    </Button>
                    <Button onClick={handleClose} sx={{ fontFamily: "Prompt" }}>
                        ยกเลิก
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddClassRoomPopup