import React from "react";
import "./ClassScore.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ลำดับ", width: 10 },
  { field: "firstName", headerName: "ชื่อจริง", width: 100 },
  { field: "lastName", headerName: "นามสกุล", width: 100 },
  {
    field: "score",
    headerName: "ทั้งหมด",
    type: "number",
    width: 90,
  },
  {
    field: "myscore",
    headerName: "ทำได้",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, firstName: "ชือ 1", lastName: "นามสกุล 1", score: 5, myscore: 5 },
  { id: 2, firstName: "ชือ 1", lastName: "นามสกุล 1", score: 5, myscore: 5 },
  { id: 3, firstName: "ชือ 1", lastName: "นามสกุล 1", score: 5, myscore: 5 },
];

function ClassScore() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ background: "#F19528" }}
      >
        <div className="buttonscore">ดูคะแนนรวมนักเรียน</div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="Titlescore">คะแนนรวมของนักเรียน</div>
        </DialogTitle>
        <DialogContent>

          <div style={{ height: 400, width: "100%", minWidth: 500 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              style={{ fontFamily: "prompt" }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} sx={{ width: 150 }}>
            <div className="buttonscore">ตกลง</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ClassScore;
