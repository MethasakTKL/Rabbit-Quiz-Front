import "./UserClassRoomCard.css"
import React from 'react'
import { ax } from '../../auth/auth';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Paper, Stack, TextField, Card, CardActions, CardContent, CardMedia } from "@mui/material";

function UserClassRoomCard() {
    const [classroomList, setClassRoomList] = useState()

    useEffect(() => {
        async function fetchClassroom() {
            const userRoom = await ax.get('/getUserClassroom')
            let classroom = [];
            let rooms = userRoom.data
            let n = 0;
            for (const prop in rooms) {
                let roomID = rooms[n].id
                let roomName = rooms[n].name
                classroom.push({ id: roomID, name: roomName })
                n++
            }
            setClassRoomList(classroom.map(room =>
                <Stack sx={{ paddingBottom: 5 }}>
                    <Box>
                        <Card
                            sx={{
                                width: "90%",
                                maxWidth: 500,
                                marginLeft: "auto",
                                marginRight: "auto",
                                paddingBottom: 2,

                            }}
                            elevation={5}
                        >
                            <CardContent>
                                <div className="cardcontent">{room.name}</div>
                            </CardContent>
                            <CardActions>
                                <Box sx={{ marginLeft: "auto", paddingRight: 1.5 }}>
                                    <Button
                                        variant="contained"
                                        sx={{ width: 200, height: 50 }}
                                        component={Link}
                                        to="/classroom"
                                    >
                                        <div className="roomname">เข้าห้องเรียน</div>
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                </Stack>
            ))

        } fetchClassroom();
    }, [])

    return (
        <div class="user-classroom">{classroomList}</div>
    )
}

export default UserClassRoomCard