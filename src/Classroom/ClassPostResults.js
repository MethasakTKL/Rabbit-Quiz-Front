import React from 'react'
import { ax, useAuth } from '../auth/auth';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
    Grid,
} from "@mui/material";
import "./ClassPostResults.css"

function ClassPostResult() {
    const [postList, setClassPostList] = useState();
    const [column, setColomn] = useState()
    const [isEmpty, setIsEmpty] = useState()
    let auth = useAuth()
    let id = localStorage.getItem("classid")

    // setTimeout(alertFunc, 3000);
    useEffect(() => {
        async function fetchListPost() {
            const res = await ax.get(`/getMessage/${id}`)
            console.log(res)
            let post = res.data
            let n = 0;
            let allPost = []
            for (var a in post) {
                let text = post[n].text
                let name = post[n].firstname + " " + post[n].lastname
                allPost.push({ text, name })
                n++
            }
            if (allPost.length === 0) { setIsEmpty(true) }
            setClassPostList(
                allPost.map(function (p, i) {
                    return (
                        <Stack direction="column-reverse" spacing={4} paddingBottom={3}>
                            <Grid>
                                <Paper
                                    style={{
                                        background: "#E7E6E5",
                                        width: "80%",
                                        height: "auto",
                                        margin: "auto",
                                        borderRadius: 10,
                                    }}
                                >
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="center"
                                        paddingLeft={2}
                                    >
                                        <AccountCircleIcon sx={{ fontSize: 30, color: "#9C2431" }} />
                                        <p className="postername">{p.name}</p>
                                    </Grid>
                                    <p className="postinfo">
                                        {p.text}
                                    </p>
                                    <Stack
                                        spacing={1}
                                        paddingBottom={2}
                                        paddingRight={2}
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="flex-start"
                                    >
                                        <Grid>
                                            <Button
                                                disabled>
                                                <DeleteOutlineIcon />
                                                <div className="buttonedit">แก้ไข</div>
                                            </Button>
                                        </Grid>
                                        <Grid>
                                            <Button
                                                disabled>
                                                <DeleteOutlineIcon />
                                                <div className="buttondelete">ลบ</div>
                                            </Button>
                                        </Grid>
                                    </Stack>
                                </Paper>
                            </Grid>
                        </Stack >
                    )
                })

            )
        }
        fetchListPost();
    }, []);

    return <div class="user-post">
        {postList}
        {isEmpty ?
            <Box sx={{ paddingTop: 5 }}>
                <div className="noroom">ยังไม่มีมีประกาศ</div>
            </Box> : <div />}
    </div>;
}

export default ClassPostResult;
