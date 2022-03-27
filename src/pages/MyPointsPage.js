import "./MyPointsPage.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
   Button,
   Box,
   Paper,
   Grid,
   Fab,
   IconButton,
   Stack,
   Snackbar,
   Alert,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { height, maxWidth } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { EmojiEvents } from "@mui/icons-material";
import Linkform from '@mui/material/Link';


//import image
import question from "../Static/image/Question00.png";
import { Link } from "react-router-dom";
import { ax, useAuth } from "../auth/auth";

//css
import { message } from "antd";
import moment from "moment";
import { DataGrid } from '@mui/x-data-grid';


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function MyPointsPage() {

   let auth = useAuth()
   let navigate = useNavigate()
   const [title, setTitle] = React.useState(null);
   const [description, setDescription] = React.useState(null);

   const [checkACT, setCheckACT] = React.useState(false)
   const [assignmentList, setAssignmentList] = React.useState(null)
   const [assignmentSummary, setAssignmentSummary] = React.useState(null)
   const [isEmpty, setIsEmpty] = React.useState(false)


   useEffect(() => {
      async function fetchActivity() {

         //vvvvvvvvvvvvvvvvvvv CHECKING USER HAS FINISH ASSIGNMENT YET? vvvvvvvvvvvvvvvvvvv
         try {
            const check = await ax.get(`assignment_status/`)
            let c = check.data.results; let m = 0
            let ASNList = []
            for (var a in c) {
               let CUR_student_id = localStorage.getItem("student_id")
               let ASN_student_id = (c[m].student_id).toString()
               let ASN_id = c[m].assignment_id
               let ASN_status = c[m].status
               if (CUR_student_id === ASN_student_id) {
                  ASNList.push({ ASN_id, ASN_status })
               }
               m++
            }
            // ^^^^^^^^^^^^^^^^^ CHECKING USER HAS FINISH ASSIGNMENT YET? ^^^^^^^^^^^^^^^^^



            // vvvvvvvvvvvvvvvvv ALL OF ASSIGNMENT IS vvvvvvvvvvvvvvvvvvVVVVVVVVVVVVVV

            const res = await ax.get(`assignments/`)
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
               assignments.push({ title, description, posted_date, deadline, choice_true, choice_false, id, classroom_id })
               n++
            }
            if (assignments.length === 0) { setIsEmpty(true) }

            ////vvvvvvvvvvvvvvv classroom api vvvvvvvvvvvvvvvvvvv
            const respon = await ax.get('/classroom')
            const classR = respon.data.results
            let sumScore = 0
            let sumAsn = 0

            setAssignmentList(
               assignments.map(function (a, index) {
                  sumAsn++
                  let asn_status = 'ยังไม่ได้ทำ'
                  let thisASN_status = '-'
                  let p = 0
                  for (var asn in ASNList) {
                     if (ASNList[p].ASN_id === a.id) {
                        if (ASNList[p].ASN_status === true) {
                           thisASN_status = "1"
                           asn_status = 'ทำได้'
                           sumScore++
                        }
                        if (ASNList[p].ASN_status === false) {
                           thisASN_status = "0"
                           asn_status = 'ทำได้'
                        }
                     }
                     p++
                  }

                  let j = 0
                  let className = ''

                  for (var t in classR) {
                     if (a.classroom_id === classR[j].id) {
                        a.classroom_id = classR[j].classroomName
                     }
                     j++
                  }

                  return (
                     <Box>
                        <Grid>
                           <Stack >

                              <Stack ></Stack>
                              <Grid>
                                 <Box
                                    sx={{
                                       width: "auto",
                                       marginLeft: "auto",
                                       marginRight: "auto",
                                       paddingLeft: "2%",
                                       paddingRight: "2%",
                                       marginTop: "5px"
                                    }}
                                 >
                                    <Paper sx={{ paddingLeft: 3, paddingBottom: 2, paddingTop: 2 }}>
                                       <Grid container columnSpacing={1}>
                                          <Grid
                                             container
                                             rowSpacing={1}
                                             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                          >
                                             <Grid item xs={3.5}>
                                                <div className="score" key={a.title}>
                                                   {a.title}
                                                </div>
                                             </Grid>
                                             <Grid item xs={4}>
                                                <div className="score" key={a.classroom_id}>{a.classroom_id}</div>
                                             </Grid>
                                             <Grid item xs={2.4}>
                                                <div className="score">{asn_status}</div>
                                             </Grid>
                                             <Grid item xs={1}>
                                                <div className="score-asn" key={classR}>{thisASN_status}</div>
                                             </Grid>
                                          </Grid>
                                       </Grid>
                                    </Paper>
                                 </Box>
                              </Grid>
                           </Stack>
                        </Grid >
                     </Box >
                  )
               })
            )
            setAssignmentSummary(

               <Box
                  sx={{
                     width: "auto",
                     marginLeft: "auto",
                     marginRight: "auto",
                     paddingLeft: "2%",
                     paddingRight: "2%",
                     paddingTop: '2%',
                     marginBottom: "1%"
                  }}
               >
                  <Paper elevation={2} sx={{ paddingLeft: 3, paddingBottom: 2, background: '#f5df4d' }}>
                     <Box style={{ textAlign: "center" }}>
                        <h1 className="title">คะแนนรวม <EmojiEvents /></h1>
                        <div className="score-summary">คุณมีทั้งหมด {sumScore} คะแนน จากทั้งหมด {sumAsn} กิจกรรม </div>
                     </Box>
                  </Paper>
               </Box>
            )
         } catch (err) {
            console.log(err.response)
         }
      }
      fetchActivity();
   }, []);


   return (
      <Box>
         {assignmentSummary}
         <Box >
            <div className="titlescore">คะแนนกิจกรรมทั้งหมด</div>
         </Box>
         <Box>
            <Grid>
               <Stack >

                  <Stack ></Stack>
                  <Grid>
                     <Box
                        sx={{
                           width: "auto",
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
                                 <Grid item xs={3.5}>
                                    <div className="score-header" >
                                       ชื่อกิจกรรม
                                    </div>
                                 </Grid>
                                 <Grid item xs={4}>
                                    <div className="score-header" >ห้องเรียน</div>
                                 </Grid>
                                 <Grid item xs={2.4}>
                                    <div className="score-header">สรุปผลกิจกรรม</div>
                                 </Grid>
                                 <Grid item xs={1}>
                                    <div className="score-asn-header">คะแนน</div>
                                 </Grid>
                              </Grid>
                           </Grid>
                        </Paper>
                     </Box>
                  </Grid>
               </Stack>
            </Grid >
         </Box >
         <Grid sx={{ pb: "5em" }}><Stack direction="column-reverse" >{assignmentList}</Stack></Grid>

      </Box>
   );
}

export default MyPointsPage;
