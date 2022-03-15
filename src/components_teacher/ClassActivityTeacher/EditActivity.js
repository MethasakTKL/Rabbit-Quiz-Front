import React from "react";
import "./EditActivity.css";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

function EditActivity() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(
    new Date("2018-01-01T00:00:00.000Z")
  );

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ background: "#EFBA44" }}
      >
        <EditIcon />
        <div className="editbutton">แก้ไข</div>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="titledialog">แก้ไขกิจกรรม</div>
        </DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="nameactivity"
            label="ชื่อกิจกรรม"
            defaultValue="กิจกรรมที่ 2 รดน้ำต้นไม้วันที่ 2"
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <TextField
            required
            margin="dense"
            id="nameactivity"
            label="คำถาม"
            defaultValue="ต้องการจะรดน้ำต้นไม้หรือไม่ ?"
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <TextField
            required
            margin="dense"
            id="nameactivity"
            label="ตัวเลือกที่ 1"
            defaultValue="รดน้ำ"
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <TextField
            required
            margin="dense"
            id="nameactivity"
            label="ตัวเลือกที่ 2"
            defaultValue="ไม่รดน้ำ"
            fullWidth
            variant="standard"
            inputProps={{ style: { fontFamily: "Prompt" } }}
            InputLabelProps={{ style: { fontFamily: "Prompt" } }}
          />
          <Grid paddingTop={3}>
            <TextField
              required
              id="datetime-local"
              label="กำหนดวันที่ส่ง"
              type="datetime-local"
              sx={{ width: 250 }}
              value={value}
              inputProps={{ style: { fontFamily: "Prompt" } }}
              InputLabelProps={{
                shrink: true,
                style: { fontFamily: "Prompt" },
              }}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <div className="cancelbutton">ยกเลิก</div>
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ width: 150 }}
          >
            <div className="createbutton">บันทึก</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditActivity;
