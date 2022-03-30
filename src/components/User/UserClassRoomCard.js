import "./UserClassRoomCard.css"
import React from 'react'
import { ax, useAuth } from '../../auth/auth';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IDContext } from "../../App"
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
} from "@mui/material";
import Classroom from "../../Static/image/Untitled-2.png"
import AddClassRoomPopup from "../Popup/AddClassRoomPopup";


function UserClassRoomCard() {
    const [classroomList, setClassRoomList] = useState();
    const [isEmptyRoom, setIsEmptyRoom] = useState(false)
    let navigate = useNavigate()
    let auth = useAuth()
    const handleClick = function (id) {
        localStorage.setItem("classid", id)
    }


    // setTimeout(alertFunc, 3000);
    useEffect(() => {
        async function fetchClassroom() {
            try {
                const userRoom = await ax.get('getUserClassroom')
                let classroom = [];
                let rooms = userRoom.data
                let n = 0;
                for (const prop in rooms) {
                    let roomID = rooms[n].id
                    let roomName = rooms[n].name
                    classroom.push({ id: roomID, name: roomName })
                    n++
                }
                if (classroom.length === 0) { setIsEmptyRoom(true) }
                setClassRoomList(

                    classroom.map(function (room, i) {

                        return (
                            <Stack direction="column-reverse" sx={{ paddingBottom: 5 }}>
                                <Box>
                                    <CardActionArea
                                        component={Link}
                                        to="/classroom"
                                        key={room.id}
                                        onClick={() => handleClick(room.id)}
                                        sx={{
                                            width: "90%",
                                            maxWidth: 500,
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            paddingBottom: 2,
                                            border: 2,
                                            borderColor: "#566E7A",
                                            borderRadius: 3,
                                        }}
                                        elevation={5}
                                    >
                                        <CardMedia
                                            component="img"
                                            alt="classroom"
                                            height="130"
                                            image={Classroom}
                                            sx={{ borderRadius: 1 }}
                                        />

                                        <CardContent>
                                            <div className="cardcontent">ห้องเรียน <div className="new-line" />{room.name}</div>
                                        </CardContent>
                                    </CardActionArea>
                                </Box>
                            </Stack>
                        )
                    })
                )
            } catch (err) {
                if (err.response.data.detail) {
                    navigate("/")
                }
            }
        }
        fetchClassroom();
    }, []);

    return <div class="user-classroom">
        {classroomList}
        {isEmptyRoom ? <div className="noroom">
            <div className="textnoroom">ยังไม่มีห้องเรียนให้แสดง กรุณาเข้าร่วมห้องเรียน</div><br />
            <AddClassRoomPopup style={{ color: "white" }} />
        </div> : <div />}
    </div>;
}

export default UserClassRoomCard;
