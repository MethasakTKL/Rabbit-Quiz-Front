import { message } from 'antd';
import "./AddMemberClassRoom.css"
import { ax, useAuth } from '../../auth/auth';
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import SaveIcon from "@mui/icons-material/Save";
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { UserAddOutlined } from '@ant-design/icons';
import AddIcon from '@mui/icons-material/Add';


function AddMemberClassRoom() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const auth = useAuth()
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('');


    const handleEditEmail = async () => {
        setOpen(false)
        try {
            var result = await ax.post(`addUser/${localStorage.getItem('classid')}`, {
                "email": userEmail
            })
            if (result.status === 200 && result.data) {
                auth.user.email = userEmail
                console.log(`Add Member successfully...`)
                handleClose()
                message.success({
                    content: "เพิ่มผู้ใช้สำเร็จ",
                    style: { fontFamily: "Prompt", marginTop: 20, fontSize: "20px" },
                    duration: 3
                });

            }
        } catch (error) {
            if (error.response) {
                message.error({
                    content: "ไม่สามารถเพิ่มผู้ใช้ด้วยอีเมลนี้ได้",
                    style: { fontFamily: "Prompt", marginTop: 20, fontSize: "20px" },
                    duration: 3
                });
                console.log(error)
            }
        }
    }


    return (
        <div className='AddMemberButton'>
            <Button
                variant="contained"
                style={{ background: "#F19528" }}
                onClick={handleClickOpen}
            >
                <UserAddOutlined style={{ fontSize: "18px" }} /><div className="buttonADD">เพิ่มสมาชิกด้วยอีเมล</div>
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    <div className="edit-profile">เพิ่มสมาชิกด้วยอีเมล</div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ fontFamily: "Prompt", width: 400 }}>
                        กรอกที่อยู่อีเมลของสมาชิกที่ต้องการเพิ่ม
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="nameclass"
                        label="อีเมล"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        type="email"
                        fullWidth
                        variant="standard"
                        inputProps={{ style: { fontFamily: "Prompt" } }}
                        InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                    />

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={handleEditEmail}
                        sx={{ fontFamily: "Prompt", color: "white", width: 100 }}

                    >
                        <div className="saveButtonIcon"><AddIcon /></div>
                        <div className="saveButton">เพิ่ม</div>
                    </Button>
                    <Button onClick={handleClose} sx={{ fontFamily: "Prompt" }}>
                        ยกเลิก
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AddMemberClassRoom