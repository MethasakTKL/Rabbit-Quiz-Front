import React, { useEffect, useState } from 'react'
import { ax } from '../auth/auth'
import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuth } from "../auth/auth";
import { Link, useNavigate } from "react-router-dom";
import "./ClassMemberList.css";
import { message } from 'antd';


function ClassMemberList() {

    let auth = useAuth()
    let navigate = useNavigate();
    const [memberList, setMemberList] = useState([])
    const [memberSize, setMemberSize] = useState(0)
    const [teacher, setTeacher] = useState(null)
    useEffect(() => {
        async function fetchMember() {
            try {
                let id = localStorage.getItem("classid")
                let res = await ax.get(`classroom/${id}`)
                setMemberSize(res.data.Member.length)
                setTeacher(res.data.teacher_firstname + " " + res.data.teacher_lastname)


                let classMember = await ax.get(`ClassMembers/${id}`)
                let members = classMember.data
                let memberlist = []; let n = 0
                for (var i in members) {
                    let name = members[n].firstname + " " + members[n].lastname
                    memberlist.push({ name })
                    n++
                }
                setMemberList(
                    memberlist.map(function (m, i) {
                        return (
                            <Box>


                                <Box
                                    sx={{
                                        borderBottom: 2,
                                        borderColor: "#e8dcff",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        paddingTop: 3,
                                    }}
                                    className="boxtitle"
                                >
                                    <Stack
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={4}
                                    >
                                        <Grid>
                                            <FaceIcon sx={{ fontSize: 26, color: "#EC9D11 " }} />
                                        </Grid>
                                        <Grid>
                                            <div className="namestudent" key={i}>{m.name}</div>
                                        </Grid>
                                    </Stack>
                                </Box>
                            </Box>
                        )
                    })

                )
            }
            catch (err) {
                if (err.response.data.detail) {
                    message.warn({
                        content: "มีปัญหาบางอย่างเกิดขึ้นกรุณาลองใหม่..",
                        style: { fontFamily: "Prompt", marginTop: 50, fontSize: "20px" },
                    })
                    navigate("/")
                }
            }
        }
        fetchMember();
    }, []);


    return <div>
        <Box
            sx={{
                borderBottom: 2,
                borderColor: "#7c6aa1",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: 3,
            }}
            className="boxtitle"
        >
            <Stack direction="row" justifyContent="space-between">
                <Grid>
                    <div className="texttitle1">คุณครู</div>
                </Grid>
            </Stack>
        </Box>
        <Box
            sx={{
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: 3,
                paddingBottom: 2
            }}
            className="boxtitle"
        >
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
            >
                <Grid>
                    <AccountCircleIcon sx={{ fontSize: 32, color: "#ff9c19" }} />
                </Grid>
                <Grid>
                    <div className="nameteacher">{teacher}</div>
                </Grid>
            </Stack>
        </Box>
        <Box
            sx={{
                borderBottom: 2,
                borderColor: "#7c6aa1",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: 3,
            }}
            className="boxtitle"
        >
            <Stack direction="row" justifyContent="space-between">
                <Grid>
                    <div className="texttitle1">{JSON.parse(localStorage.getItem('user_is_staff')) ? "สมาชิกในห้อง" : "เพื่อนร่วมชั้น"}</div>
                </Grid>
                <Grid>
                    <div className="texttitle2">ทั้งหมด {memberSize} คน</div>
                </Grid>
            </Stack>
        </Box>
        {memberList}
    </div>

}

export default ClassMemberList