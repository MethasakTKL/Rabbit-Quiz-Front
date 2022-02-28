import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React from "react";
import "./ClassMember_Teacher.css";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";

function ClassMember_Teacher() {
  return (
    <div>
      <h1 className="classname" style={{ paddingLeft: "5%", fontSize: 36 }}>
        ห้องเรียนการเกษตร
      </h1>
      <Stack
        marginLeft={"auto"}
        marginRight={"auto"}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingBottom={2}
      >
        <Grid>
          <Button
            variant="contained"
            style={{ background: "#F19528", width: 150 }}
          >
            <AddIcon />
            <div className="buttonAdd">เพิ่มสมาชิก</div>
          </Button>
        </Grid>
      </Stack>
      {/* // Mockup data----------------------------------------------------------------------------------------------------------------------- */}
      <Box sx={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
        <Paper elevation={3} sx={{ height: "auto", borderRadius: 5 }}>
          <Stack sx={{ paddingBottom: "15%" }}>
            <Grid>
              <Box
                sx={{
                  width: "75%",
                  height: 40,
                  borderRadius: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 2,
                }}
              >
                <Card variant="contained" sx={{ borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    paddingLeft={3}
                    sx={{ background: "#E4E4E5" }}
                  >
                    <AccountCircleIcon
                      sx={{ fontSize: 40, color: "#9C2431" }}
                    />
                    <p className="centertext">อาจารย์ อารีย์ มีสุข</p>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid>
              <Box
                sx={{
                  width: "75%",
                  height: 40,
                  borderRadius: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 7,
                }}
              >
                <Card variant="contained" sx={{ borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    paddingLeft={3}
                    sx={{ background: "#E4E4E5" }}
                  >
                    <FaceIcon sx={{ fontSize: 30, color: "#F19528" }} />
                    <p className="centertext">ชนาวัฒน์ ทั้วสุภาพ</p>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid>
              <Box
                sx={{
                  width: "75%",
                  height: 40,
                  borderRadius: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 10,
                }}
              >
                <Card variant="contained" sx={{ borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    paddingLeft={3}
                    sx={{ background: "#E4E4E5" }}
                  >
                    <FaceIcon sx={{ fontSize: 30, color: "#F19528" }} />
                    <p className="centertext">เมธาศักดิ์ ทิพย์กองลาศ</p>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid>
              <Box
                sx={{
                  width: "75%",
                  height: 40,
                  borderRadius: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 10,
                }}
              >
                <Card variant="contained" sx={{ borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    paddingLeft={3}
                    sx={{ background: "#E4E4E5" }}
                  >
                    <FaceIcon sx={{ fontSize: 30, color: "#F19528" }} />
                    <p className="centertext">นัฏฐวัฒน์ สิงห์อินทร์</p>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid>
              <Box
                sx={{
                  width: "75%",
                  height: 40,
                  borderRadius: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 10,
                }}
              >
                <Card variant="contained" sx={{ borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    paddingLeft={3}
                    sx={{ background: "#E4E4E5" }}
                  >
                    <FaceIcon sx={{ fontSize: 30, color: "#F19528" }} />
                    <p className="centertext">อิฟฟาฮาน สุขสุวรรณ</p>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            {/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Grid>
              <Box
                sx={{
                  width: "75%",
                  height: 40,
                  borderRadius: 20,
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: 10,
                }}
              >
                <Card variant="contained" sx={{ borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    paddingLeft={3}
                    sx={{ background: "#E4E4E5" }}
                  >
                    <FaceIcon sx={{ fontSize: 30, color: "#F19528" }} />
                    <p className="centertext">ธรรมาธิป ชิตพงศ์</p>
                  </Grid>
                </Card>
              </Box>
            </Grid>
            {/* --------------------------------------------------------------------------------- */}
          </Stack>
        </Paper>
      </Box>
    </div>
  );
}

export default ClassMember_Teacher;
