import React, { useEffect, useState } from 'react'
import { ax } from '../auth/auth'
import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuth } from "../auth/auth";



function ClassMemberList() {

    let auth = useAuth()
    const [memberList, setMemberList] = useState([])

    useEffect(() => {
        async function fetchMember() {
            let id = auth.id
            let res = await ax.get(`/classroom/${id}`)
            let members = res.data.Member
            let teacher = res.data.teacher_firstname + " " + res.data.teacher_lastname
            setMemberList(
                members.map(function (m, i) {
                    return (
                        <Box>
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
                                        <AccountCircleIcon sx={{ fontSize: 32, color: "#F19528" }} />
                                    </Grid>
                                    <Grid>
                                        <div className="namestudent">{teacher}</div>
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
                                        <div className="texttitle1">เพื่อนร่วมชั้น</div>
                                    </Grid>
                                    <Grid>
                                        <div className="texttitle2">ทั้งหมด {members.length} คน</div>
                                    </Grid>
                                </Stack>
                            </Box>
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
                                        <FaceIcon sx={{ fontSize: 32, color: "#F19528" }} />
                                    </Grid>
                                    <Grid>
                                        <div className="namestudent">{m}</div>
                                    </Grid>
                                </Stack>
                            </Box>
                        </Box>
                    )
                })

            )
        }
        fetchMember();
    }, []);


    return <div>
        {memberList}
        <Box>Hey</Box>
    </div>

}

export default ClassMemberList