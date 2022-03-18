import { Button, Box, Paper, Grid, Stack } from "@mui/material";
import React from "react";
import "./ClassMember_Teacher.css";
import Card from "@mui/material/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FaceIcon from "@mui/icons-material/Face";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";

//import components

const columns = [
  { field: "id", headerName: "ID", width: 20 },
  {
    field: "firstName",
    headerName: "ชื่อ",
    width: 100,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "นามสกุล",
    width: 100,
    editable: false,
  },
  {
    field: "AllPoint",
    headerName: "คะแนนทั้งหมด",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "Point",
    headerName: "คะแนนที่ได้",
    type: "number",
    width: 110,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    firstName: "ชนาวัฒน์",
    lastName: "ทั้วสุภาพ",
    AllPoint: 2,
    Point: 2,
  },
  {
    id: 2,
    firstName: "นัฏฐวัฒน์",
    lastName: "สิงห์อินทร์",
    AllPoint: 2,
    Point: 2,
  },
  {
    id: 3,
    firstName: "เมธาศักดิ์",
    lastName: "ทิพย์กองลาศ",
    AllPoint: 2,
    Point: 1,
  },
  {
    id: 4,
    firstName: "อิฟฟาฮาน",
    lastName: "สุขสุวรรณ",
    AllPoint: 2,
    Point: 2,
  },
  { id: 5, firstName: "ธรรมาธิป", lastName: "ชิตพงศ์", AllPoint: 2, Point: 1 },
];

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
        <Grid>
          <Button disabled variant="contained" style={{ background: "#D64A55" }}>
            <DeleteOutlineIcon />
            <div className="deletebutton">ลบ</div>
            
          </Button>
        </Grid>
      </Stack>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          style={{ fontFamily: "prompt" }}
        />
      </div>
    </div>
  );
}

export default ClassMember_Teacher;
