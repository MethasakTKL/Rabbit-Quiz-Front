import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid, Paper, Stack } from "@mui/material";
import "./Activity.css";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import ActivityRecieve from "./ActivityRecieve";
import { ax } from "../auth/auth";
import { useNavigate } from "react-router";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { message } from "antd";
import moment from "moment";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


function Activity() {
   const [open, setOpen] = React.useState(false);
   const [value, setValue] = React.useState('1');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const handleOpen = (title, description, choice_true, choice_false, id) => {
      setTitle(title)
      setDescription(description)
      setChoiceTrue(choice_true)
      setChoiceFalse(choice_false)
      setActivityID(id)
      setOpen(true)
      // setOpen(true);
   };

   let navigate = useNavigate()
   const [title, setTitle] = React.useState(null);
   const [description, setDescription] = React.useState(null);
   const [checkACT, setCheckACT] = React.useState(false)
   const [assignmentList, setAssignmentList] = React.useState(null)
   const [assignmentSummary, setAssignmentSummary] = React.useState(null)
   const [isEmpty, setIsEmpty] = React.useState(false)


   const [choice_true, setChoiceTrue] = React.useState(null);
   const [choice_false, setChoiceFalse] = React.useState(null);
   const [activityID, setActivityID] = React.useState(null);


   const [CompletedASN, setCompletedASN] = React.useState()
   const [AssignedASN, setAssignedASN] = React.useState()
   const completeASNList = []
   const assignedASNList = []

   useEffect(() => {
      async function fetchActivity() {



         //vvvvvvvvvvvvvvvvvvv CHECKING USER HAS FINISH ASSIGNMENT YET? vvvvvvvvvvvvvvvvvvv
         const check = await ax.get(`assignment_status/`)
         const respon = await ax.get('/classroom')
         const classR = respon.data.results

         let c = check.data.results; let m = 0
         console.log("ASN_Status", c)
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
         console.log("List of your ASN", ASNList)
         // ^^^^^^^^^^^^^^^^^ CHECKING USER HAS FINISH ASSIGNMENT YET? ^^^^^^^^^^^^^^^^^



         // vvvvvvvvvvvvvvvvv ALL OF ASSIGNMENT IS vvvvvvvvvvvvvvvvvvVVVVVVVVVVVVVV

         const res = await ax.get(`assignments/`)
         let r = res.data.results
         console.log("Assignments", r)
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

         assignments.map(function (a, index) {
            console.log(a)
            function toThaiDateString(date) {
               let monthNames = [
                  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
                  "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม.",
                  "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
               ];

               let year = date.getFullYear() + 543;
               let month = monthNames[date.getMonth()];
               let numOfDay = date.getDate();

               let hour = date.getHours().toString().padStart(2, "0");
               let minutes = date.getMinutes().toString().padStart(2, "0");
               let second = date.getSeconds().toString().padStart(2, "0");

               return `${numOfDay} ${month} ${year} ` +
                  `${hour}:${minutes}:${second} น.`;
            }
            let date1 = new Date(a.deadline);
            var date = toThaiDateString(date1);

            let thisASN_status = '-'
            let p = 0
            for (var asn in ASNList) {
               if (ASNList[p].ASN_id === a.id) {
                  if (ASNList[p].ASN_status === true) {
                     thisASN_status = "1"

                  }
                  if (ASNList[p].ASN_status === false) {
                     thisASN_status = "0"

                  }
               }
               p++
            }

            let title = a.title
            let deadline = a.deadline
            let desciption = a.desciption
            let classroom_id = a.classroom_id
            let today = moment().format()

            let timeup = null
            let isOutDate = moment(today).isAfter(a.deadline)
            let j = 0

            let classroomName = ''
            for (var t in classR) {
               if (a.classroom_id === classR[j].id) {
                  classroomName = classR[j].classroomName
               }
               j++
            }


            if (isOutDate) {
               timeup = true
            } else {
               timeup = false
            }

            if (thisASN_status === "1" || thisASN_status === "2") {
               completeASNList.push({ title, deadline, classroomName, classroom_id, description, timeup })
            }


            if (thisASN_status === "-") {
               assignedASNList.push({ title, deadline, classroomName, classroom_id, description, timeup })
            }
         })


         setCompletedASN(
            completeASNList.map(function (b, index) {
               return (
                  <Button
                     sx={{
                        color: "black",
                        display: "block",
                        border: 0,
                        paddingBottom: 1.5,
                        boxShadow: 3,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '1.5em',
                     }}
                     className='screenpaper'
                     style={{ backgroundColor: "white" }}
                     onClick={() => handleClickASN(b.classroom_id)}
                  >
                     <h1 className="activity">{b.title}</h1>
                     <div className="assignment-detail">
                        <div>ห้องเรียน {b.classroomName}</div>
                        <div type="time-activity">
                           <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                           <div>เสร็จสิ้นแล้ว</div>
                        </div>
                     </div>
                  </Button >)
            })
         )

         setAssignedASN(
            assignedASNList.map(function (b, index) {
               console.log(b.timeup)
               return (
                  <Button
                     sx={{
                        color: "black",
                        display: "block",
                        border: 0,
                        paddingBottom: 1.5,
                        boxShadow: 3,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '1.5em',
                     }}
                     className='screenpaper'
                     style={{ backgroundColor: "white" }}
                     onClick={() => handleClickASN(b.classroom_id)}
                  >
                     <h1 className="activity">{b.title}</h1>
                     <div className="assignment-detail">
                        <div>ห้องเรียน {b.classroomName}</div>
                        <div type="time-activity">
                           <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                           {b.timeup ? <div>หมดเวลาแล้ว</div> : <div>กำหนดส่ง {b.deadline}</div>}
                        </div>
                     </div>
                  </Button >)
            })



         )
      }
      fetchActivity();
   }, []);


   const handleClickASN = (id) => {
      localStorage.setItem('classid', id)
      navigate("/classroom-activity")
   }





   return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
         <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="กิจกรรมที่ได้รับมอบหมาย" value="1" sx={{ fontFamily: "Prompt" }} />
                  <Tab label="เสร็จสิ้นเรียบร้อยแล้ว" value="2" sx={{ fontFamily: "Prompt" }} />
               </TabList>
            </Box>
            <TabPanel value="1">{AssignedASN}</TabPanel>
            <TabPanel value="2">{CompletedASN}</TabPanel>
         </TabContext>
      </Box>
   );
}

export default Activity;
