import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { Button, Grid, Paper, Stack, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useAuth, ax } from "../auth/auth";
import { styled } from "@mui/material/styles";


import "../pages/ClassRoom.css";
import ClassPostResult from "./ClassPostResults";
import { message } from "antd";
import { useNavigate } from "react-router";


function ClassAnnoucement() {
   const auth = useAuth()
   const navigate = useNavigate()



   const [text, setText] = useState('')
   const handleSendPost = async () => {
      var post = await ax.post(`/postMessage/${auth.id}`, { text })
      console.log(post.data)
      setText(' '); setText('')
      message.success({
         content: "โพสต์สำเร็จ",
         style: { fontFamily: "Prompt", marginTop: 100, fontSize: "24px" },
      });
      navigate(`/reload`, { replace: true })
      navigate(`/classroom`, { replace: true })

   };
   return (
      <div>
         <Box>
            <Paper
               elevation={3}
               sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 2,
                  paddingBottom: 2,
                  borderRadius: 3,
               }}
               className="screenpaper"
            >
               <h1 className="post" style={{ paddingLeft: 40, fontSize: 24 }}>
                  ประกาศข้อความของคุณ
               </h1>
               <Grid direction="row" spacing={2}>
                  <Grid item className="center">
                     <TextField
                        label="สร้างโพสต์"
                        placeholder="พิมพ์ข้อความที่ต้องการบอกสมาชิกในห้องเรียน"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        margin="normal"
                        style={{ width: "90%" }}
                        multiline
                        inputProps={{ style: { fontFamily: "Prompt" } }}
                        InputLabelProps={{ style: { fontFamily: "Prompt" } }}
                     />
                  </Grid>
                  <Grid className="postbutton">
                     <Button
                        disabled={text === ''}
                        className="postbutton"
                        variant="contained"
                        sx={{ width: "100%", height: 50, borderRadius: 4 }}
                        style={{ background: "#5F498C" }}
                        onClick={handleSendPost}
                     >
                        <div className="postbuttontext">โพสต์</div>
                     </Button>
                  </Grid>
               </Grid>
            </Paper>
         </Box>
         <Box sx={{ paddingTop: 2 }}>
            <Paper
               elevation={3}
               sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 2,
                  paddingBottom: 2,
                  borderRadius: 3,
               }}
               className="screenpaper"
            >
               <h1 className="post" style={{ paddingLeft: 40, fontSize: 24 }}>
                  โพสต์ล่าสุด
               </h1>

               <Stack direction="column-reverse" spacing={4} paddingBottom={3}>
                  <ClassPostResult />
               </Stack>

            </Paper>
         </Box></div>
   )
}

export default ClassAnnoucement