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

function UserClassRoomCard() {
  const [classroomList, setClassRoomList] = useState();

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

  return <div class="user-classroom">{classroomList}</div>;
}

export default UserClassRoomCard;
