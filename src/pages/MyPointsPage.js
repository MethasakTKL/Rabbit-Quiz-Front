import { Box, CircularProgress, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import "./MyPointsPage.css";
import scorevector from "../Static/image/scorevector.png";
import { EmojiEvents } from "@mui/icons-material";

function MyPointsPage() {
  return (
    <Box>
      <Grid>
        <Box
          sx={{
            width: "auto",
            maxWidth: 1000,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          <Paper elevation={2} sx={{ paddingLeft: 3, paddingBottom: 2 , background:'#f5df4d'}}>
            <h1 className="title">คะแนน <EmojiEvents/></h1>
            <Grid container columnSpacing={1}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={2.5}>
                  <div className="score">ทั้งหมด</div>
                </Grid>
                <Grid item xs={1}>
                  <div className="score">2</div>
                </Grid>
                <Grid item xs={2}>
                  <div className="score">คะแนน</div>
                </Grid>
                <Grid item xs={2.5}>
                  <div className="score">ทำได้</div>
                </Grid>
                <Grid item xs={1}>
                  <div className="score">1</div>
                </Grid>
                <Grid item xs={2}>
                  <div className="score">คะแนน</div>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        {/* --------------------------------------------------------------------------------------------------- */}
        <Box >
          <div className="titlescore">คะแนนกิจกรรม</div>
        </Box>
        <Stack direction={'column-reverse'}>
          <Grid paddingTop={1}>
            <Box
              sx={{
                width: "auto",
                maxWidth: 1000,
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              <Paper sx={{ paddingLeft: 3, paddingBottom: 2, paddingTop: 2 }}>
                <Grid container columnSpacing={1}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={3}>
                      <div className="score">
                        กิจกรรมที่ 1
                      </div>
                      <div className="score">
                        รดน้ำต้นไม้วันที่ 1
                      </div>
                    </Grid>
                    <Grid item xs={2.5}>
                      <div className="score">ห้องเรียนการเกษตร</div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="score">ทำได้</div>
                    </Grid>
                    <Grid item xs={1}>
                      <div className="score">1</div>
                    </Grid>
                    <Grid item xs={2}>
                      <div className="score">คะแนน</div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>

          {/* ------------------------------------------ */}
          <Grid>
            <Box
              sx={{
                width: "auto",
                maxWidth: 1000,
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              <Paper sx={{ paddingLeft: 3, paddingBottom: 2, paddingTop: 2 }}>
                <Grid container columnSpacing={1}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={3}>
                      <div className="score">
                        กิจกรรมที่ 2
                      </div>
                      <div className="score">
                        รดน้ำต้นไม้วันที่ 2
                      </div>
                    </Grid>
                    <Grid item xs={2.5}>
                      <div className="score">ห้องเรียนการเกษตร</div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="score">ทำได้</div>
                    </Grid>
                    <Grid item xs={1}>
                      <div className="score">0</div>
                    </Grid>
                    <Grid item xs={2}>
                      <div className="score">คะแนน</div>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>

          {/* ------------------------------------------ */}
        </Stack>
      </Grid>
    </Box>
  );
}

export default MyPointsPage;
