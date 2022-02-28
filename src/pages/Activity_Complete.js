import { Grid, Stack } from '@mui/material'
import React from 'react'
import { Button } from "@mui/material";

function Activity_Complete() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseYes = () => {
        setOpen(false);
    };

    return (
        <div>
            <Grid paddingTop={2} paddingBottom={2}>
                <Button
                    disabled
                    variant="contained"
                    onClick={handleClickOpen}
                    style={{
                        width: "70%",
                        display: "flex",
                        marginRight: "auto",
                        marginLeft: "auto",
                        bottom: 10,
                        top: 1,
                        background: "#5F498C",
                        borderRadius: 15,
                        paddingBottom: 15,
                    }}
                >
                    <Stack>
                        <h1 className="activitybutton">
                            กิจกรรมที่ 1 รดน้ำต้นไม้วันที่ 1
                        </h1>
                        <div className="assignment-detail-activity">
                            <div>สิ้นสุด</div>
                            <div className="duetimeactivity">
                                28 กุมภาพันธ์ 2022 10.00 PM
                            </div>
                        </div>
                        <Grid className="status">
                            <div>หมดเวลาเเล้ว</div>
                        </Grid>
                        <Grid className="statussent">
                            <div>ส่งเเล้ว</div>
                        </Grid>
                    </Stack>
                </Button>
            </Grid>
        </div>
    )
}

export default Activity_Complete;
