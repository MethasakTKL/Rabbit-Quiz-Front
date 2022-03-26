import React, { useEffect, useState } from "react";
import "./DetailActivity.css";
import { Button, Grid, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import { ax } from "../../auth/auth";










function DetailActivity() {
  const rows = [
    { id: 1, col1: 1, col2: "ชนาวัฒน์ ทั้วสุภาพ", col3: "รดน้ำ", col4: 1 },
    { id: 2, col1: 2, col2: "นัฏฐวัฒน์ สิงห์อินทร์", col3: "รดน้ำ", col4: 1 },
    { id: 3, col1: 3, col2: "เมธาศักดิ์ ทิพย์กองลาศ", col3: "รดน้ำ", col4: 1 },
    { id: 4, col1: 4, col2: "อิฟฟาฮาน สุขสุวรรณ", col3: "รดน้ำ", col4: 1 },
    { id: 5, col1: 5, col2: "ธรรมาธิป ชิตพงศ์", col3: "ไม่ได้ส่ง", col4: 0 },
  ];

  const columns = [
    { field: "col1", headerName: "ลำดับ", width: 10 },
    { field: "col2", headerName: "ชื่อ-นามสกุล", width: 150 },
    { field: "col3", headerName: "สถานะ", width: 100 },
    { field: "col4", headerName: "คะแนน", width: 100 },
  ];

  const [detailList, setDetailList] = useState()
  useEffect(() => {
    async function fetchActivity() {


      //vvvvvvvvvvvvvvvvvvv CHECKING USER HAS FINISH ASSIGNMENT YET? vvvvvvvvvvvvvvvvvvv

      const check = await ax.get(`/assignment_status/`)
      let c = check.data.results; let m = 0
      let ASNList = []
      for (var a in c) {
        let CUR_student_id = localStorage.getItem("student_id")
        let ASN_student_id = (c[m].student_id).toString()
        let ASN_id = c[m].assignment_id
        let ASN_status = c[m].status
        ASNList.push({ ASN_id, ASN_status })
        m++
      }
      // ^^^^^^^^^^^^^^^^^ CHECKING USER HAS FINISH ASSIGNMENT YET? ^^^^^^^^^^^^^^^^^



      // vvvvvvvvvvvvvvvvv ALL OF ASSIGNMENT IS vvvvvvvvvvvvvvvvvvVVVVVVVVVVVVVV

      const res = await ax.get(`/assignments/`)
      let r = res.data.results
      let assignments = []; let n = 0;
      for (var a in r) {
        let title = r[n].title
        let description = r[n].description
        let posted_date = r[n].posted_date
        let deadline = r[n].deadline
        let choice_true = r[n].choice_true
        let choice_false = r[n].choice_false
        let id = r[n].id
        let classroom_id = r[n].classroom_id
        let current_id = localStorage.getItem("classid")

        if (`${classroom_id}` === localStorage.getItem("classid")) {
          assignments.push({ title, description, posted_date, deadline, choice_true, choice_false, id })
        }
        n++
      }
      setDetailList(

        assignments.map(function (a, index) {

          let thisASN_status = false
          let thisASN_choice = ''
          let p = 0
          for (var asn in ASNList) {
            if (ASNList[p].ASN_id === a.id) {
              if (ASNList[p].ASN_status === true) {
                thisASN_status = a.choice_true
              }
              if (ASNList[p].ASN_status === false) {
                thisASN_status = a.choice_false
              }
            }
            p++
          }

          return (
            <div />
          )
        })
      )
    }
    fetchActivity();
  }, []);



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
        style={{ background: "#7AD400" }}
      >
        <div className="editbutton">ดูรายละเอียด</div>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="detialtitle">สรุปผลกิจกรรม</div>
        </DialogTitle>
        <DialogContent>
          <div className="allstudent">ทั้งหมด 5 คน</div>
          <div style={{ height: 500, width: "auto" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              style={{ fontFamily: "prompt" }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ width: 150 }}
          >
            <div className="createbutton">ตกลง</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DetailActivity;
