import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import ClassIcon from "@mui/icons-material/Class";
import "./Home.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import classIMG from "../Static/image/Classroomimg.jpg";
import { ax, useAuth } from "../auth/auth";
import { useLocation, useNavigate } from "react-router";
import { message } from "antd";
import AddClassRoomPopup from "../components/Popup/AddClassRoomPopup";
import CreateClassRoomPopup from "../components/Popup/CreateClassRoomPopup";
import UserClassRoomCard from "../components/User/UserClassRoomCard";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        let userFirstName = localStorage.getItem('user_first_name')
        let userIsStaff = JSON.parse(localStorage.getItem('user_is_staff'))
        return (
            <div>
                <h4 className="hello">สวัสดี, {userFirstName}</h4>
                {/* ADD AND CREATE CLASSROOM SECTION USER*/}
                {userIsStaff ? <CreateClassRoomPopup /> : <AddClassRoomPopup />}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            m: 1,
                            width: "90%",
                            maxWidth: 1000,
                            borderRadius: 3,
                            marginLeft: "auto",
                            marginRight: "auto",
                        },
                    }}
                >
                    <Paper elevation={3}>
                        <h1 className="titleclass" sx={{}}>
                            ห้องเรียน <ClassIcon sx={{ fontSize: "50" }} />
                        </h1>
                        <UserClassRoomCard />

                    </Paper>
                </Box>
            </div >
        );
    }
}

export default Home;
