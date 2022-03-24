import "./UserClassRoomCard.css"
import React from 'react'
import { ax, useAuth } from '../../auth/auth';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function UserTeacherClassRoomCard() {
    const [classroomList, setClassRoomList] = useState();

    let auth = useAuth()
    let id = auth.id
    let setID = auth.setID
    const handleClick = function (id) {
        setID(id)
        console.log('You Clicked Class ID:', id);
    }


    // setTimeout(alertFunc, 3000);
    useEffect(() => {
        async function fetchClassroom() {
            const userRoom = await ax.get('/classroom')
            console.log(userRoom)
            let classroom = [];
            let rooms = userRoom.data.results
            let n = 0;
            for (const prop in rooms) {
                let roomID = rooms[n].id
                let roomName = rooms[n].classroomName
                let teacherAtRoom = rooms[n].teacher_firstname
                if (teacherAtRoom === localStorage.getItem("user_first_name")) {
                    classroom.push({ id: roomID, name: roomName })
                }
                n++
            }
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
                                        <div className="cardcontent">ห้องเรียน {room.name}</div>
                                    </CardContent>
                                </CardActionArea>
                            </Box>
                        </Stack>
                    )
                })
            )
        }
        fetchClassroom();
    }, []);

    return <div class="user-classroom">{classroomList}</div>;
}

export default UserTeacherClassRoomCard;
