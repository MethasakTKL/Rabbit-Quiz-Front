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


function CreateClassRoomPopup() {
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
                content: "สร้างห้องเรียนเสร็จสิ้น",
                style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                key,
                duration: 2,
            });
        }, 3000);

    };


    let teacher = localStorage.getItem("id_username")
    let navigate = useNavigate()
    const [className, setClassName] = useState('')
    const [classCode, setClassCode] = useState('')
    const handleCreateClass = async () => {
        console.log("teacher", teacher)
        try {
            var existClass = await ax.get('/classroom')
            var res = existClass.data.results

            let n = 0; let curClassCode = [];
            for (const prop in res) {
                curClassCode.push(res[n].classCode)
                n++
            }
            if (Object.values(curClassCode).indexOf(classCode) > -1) {
                console.error('This code already exists.');
                setOpen(false)
                message.loading({
                    content: 'กรุณารอซักครู่...',
                    style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                    key
                });
                setTimeout(() => {
                    message.error({
                        content: "รหัสห้องเรียนนี้ถูกใช้แล้ว กรุณาลองใช้รหัสอื่น",
                        style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                        key,
                        duration: 3,
                    });
                }, 3000);
                return
            }


            var result = await ax.post('/createClass', {
                className,
                classCode,
                teacher
            })
            if (result.status === 200 && result.data) {
                console.log(`Successfully Created classroom...`)
                setOpen(false)
                openMessage()
                navigate('/reload', { replace: true })
                navigate('/teacher', { replace: true })


            }
        } catch (error) {
            setOpen(false)
            message.error({
                content: "ห้องเรียนไม่สามารถสร้างได้ กรุณาลองใหม่",
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
                onClick={handleClickOpen}
            >
                <FiPlus /> สร้างห้องเรียน
            </Button>
            <Dialog open={open} onClose={handleClose} sx={{ marginBottom: "200px" }}>
                <DialogTitle sx={{ fontFamily: "Prompt" }}>สร้างห้องเรียน</DialogTitle>
                <DialogTitle sx={{ fontFamily: "Prompt", fontSize: "16px" }}>กรุณากรอกชื่อห้องเรียนและรหัสห้องเรียนให้ครบถ้วน</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="nameclass"
                        label="ชื่อห้องเรียน"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        type="name"
                        fullWidth
                        variant="standard"
                        inputProps={{ style: { fontFamily: "Prompt" } }}
                        InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                    />
                    <TextField
                        margin="dense"
                        id="codeclass"
                        label="รหัสห้องเรียน"
                        value={classCode}
                        onChange={(e) => setClassCode(e.target.value)}
                        fullWidth
                        variant="standard"
                        inputProps={{ style: { fontFamily: "Prompt" } }}
                        InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={className === '' || classCode === ''}
                        variant="contained"
                        onClick={handleCreateClass}
                        sx={{ fontFamily: "Prompt", color: "white" }}
                    >
                        สร้างห้องเรียน
                    </Button>
                    <Button onClick={handleClose} sx={{ fontFamily: "Prompt" }}>
                        ยกเลิก
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateClassRoomPopup