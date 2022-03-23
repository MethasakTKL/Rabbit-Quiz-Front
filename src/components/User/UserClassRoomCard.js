<<<<<<< HEAD
import "./UserClassRoomCard.css"
import React from 'react'
import { ax, useAuth } from '../../auth/auth';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Paper, Stack, TextField, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { IDContext } from "../../App"
=======
import "./UserClassRoomCard.css";
import React from "react";
import { ax } from "../../auth/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import classroomimg from "../../Static/image/classroom.png";
import { BorderColor } from "@mui/icons-material";
>>>>>>> bd837851f3979e5429dc885c3464f8a8d71c3d85

function UserClassRoomCard() {
  const [classroomList, setClassRoomList] = useState();

<<<<<<< HEAD
    let auth = useAuth()
    let id = auth.id
    let setID = auth.setID
    const handleClick = function (id) {
        setID(id)
        console.log('You clicked:', id);
    }


    // setTimeout(alertFunc, 3000);
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
            setClassRoomList(

                classroom.map(function (room, i) {

                    return (
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
                                                key={room.id}
                                                onClick={() => handleClick(room.id)}
                                            >
                                                <div className="roomname">เข้าห้องเรียน</div>
                                            </Button>
                                        </Box>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Stack>
                    )
                })
            )

=======
  useEffect(() => {
    async function fetchClassroom() {
      const userRoom = await ax.get("/getUserClassroom");
      let classroom = [];
      let rooms = userRoom.data;
      let n = 0;
      for (const prop in rooms) {
        let roomID = rooms[n].id;
        let roomName = rooms[n].name;
        classroom.push({ id: roomID, name: roomName });
        n++;
      }
      setClassRoomList(
        classroom.map((room) => (
          <Stack sx={{ paddingBottom: 5 }}>
            <Box>
              <CardActionArea
                component={Link}
                to="/classroom"
                sx={{
                  width: "90%",
                  maxWidth: 700,
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
                  height="180"
                  image={classroomimg}
                  sx={{borderRadius: 1 }}
                />
                <CardContent>
                  <div className="cardcontent">ห้องเรียน {room.name}</div>
                </CardContent>

              </CardActionArea>
            </Box>
          </Stack>
        ))
      );
    }
    fetchClassroom();
  }, []);
>>>>>>> bd837851f3979e5429dc885c3464f8a8d71c3d85

  return <div class="user-classroom">{classroomList}</div>;
}

export default UserClassRoomCard;
