// เอาไว้แปะโค้ดที่สำเร็จรูป

function UserClassRoomCard() {
  const [classroomList, setClassRoomList] = useState();

  let auth = useAuth()
  let id = auth.id
  let setID = auth.setID
  const handleClick = function (id) {
    setID(id)
    console.log('You clicked:', id);
  }


  // setTimeout(alertFunc, 3000);
  useEffect(() => {
    async function fetchClassroom() {
      const userRoom = await ax.get('/getUserClassroom')
      let classroom = [];
      let rooms = userRoom.data
      let n = 0;
      for (const prop in rooms) {
        let roomID = rooms[n].id
        let roomName = rooms[n].name
        classroom.push({ id: roomID, name: roomName })
        n++
      }

      setClassRoomList(
        classroom.map(function (room, i) {
          return (
            <div>  </div>
          )
        })
      )
    }
    fetchClassroom();
  }, []);

  return <div class="user-classroom">{classroomList}</div>
}

export default UserClassRoomCard;



ASSIGN

import { Box, CircularProgress, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import "./MyPointsPage.css";
import scorevector from "../Static/image/scorevector.png";
import { EmojiEvents } from "@mui/icons-material";

function MyPointsPage() {
   
   let auth = useAuth()
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [title, setTitle] = React.useState(null);
    const [description, setDescription] = React.useState(null);
    const [choice_true, setChoiceTrue] = React.useState(null);
    const [choice_false, setChoiceFalse] = React.useState(null);
    const [activityID, setActivityID] = React.useState(null);
    const handleOpen = (title, description, choice_true, choice_false, id) => {
        setTitle(title)
        setDescription(description)
        setChoiceTrue(choice_true)
        setChoiceFalse(choice_false)
        setActivityID(id)
        setOpen(true)
        // setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        // setOpen(false);
    };



    ///////////////////////CARD ASSIGNMENT SECTION ///////////////////////
    const [checkACT, setCheckACT] = React.useState(false)
    const [assignmentList, setAssignmentList] = React.useState(null)
    const [isEmpty, setIsEmpty] = React.useState(false)
    useEffect(() => {
        async function fetchActivity() {



         //vvvvvvvvvvvvvvvvvvv CHECKING USER HAS FINISH ASSIGNMENT YET? vvvvvvvvvvvvvvvvvvv
         try {
            const check = await ax.get(`assignment_status/`)
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

               if (`${classroom_id}` === localStorage.getItem("classid")) {
                  assignments.push({ title, description, posted_date, deadline, choice_true, choice_false, id })
               }
               n++
            }
            if (assignments.length === 0) { setIsEmpty(true) }


            setAssignmentList(

               assignments.map(function (a, index) {
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
                  console.log(date1)
                  var date = toThaiDateString(date1);

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





                  let today = moment().format()
                  let isOutDate = moment(today).isAfter(a.deadline)

                  return (
                     < Stack direction="column-reverse"  >
                        <Grid paddingTop={2} paddingBottom={2}>
                           {isOutDate ?
                              <Button
                                 disabled
                                 variant="contained"
                                 onClick={() => handleOpen(a.title, a.description, a.choice_true, a.choice_false, a.id)}
                                 style={{
                                    width: "80%",
                                    display: "flex",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    bottom: 10,
                                    top: 1,
                                    background: "#453566",
                                    borderRadius: 15,
                                    paddingBottom: 15,

                                 }}
                              >
                                 <Stack>
                                    <h1 className="activitybutton-outed-date">
                                       {a.title}
                                    </h1>
                                    <Grid className="statussent-outed-date">
                                       {thisASN_status ? <CheckCircleIcon sx={{ fontSize: "40px" }} /> : <CheckCircleOutlineIcon sx={{ fontSize: "40px" }} />}
                                       <div>{thisASN_status ? "ส่งแล้ว" : "ยังไม่ส่ง"}</div>
                                    </Grid>
                                    <h2 className="questionACT-outed-date">
                                       {thisASN_status ? <div>คำตอบที่เลือก {thisASN_status}</div> : <div>ยังไม่ได้เลือกคำตอบ</div>}
                                    </h2>
                                    <div className="assignment-detail-activity">
                                       <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                                       <div className="end-time">สิ้น</div>
                                       <div className="end-time">สุด</div>
                                       <div className="duetimeactivity-outed-date">
                                          {date}
                                       </div>
                                    </div>
                                    <Grid>
                                       <div className="outtime">ไม่ได้อยู่ในระยะเวลา</div>
                                    </Grid>
                                 </Stack>
                              </Button>

                              : <Button
                                 disabled={thisASN_status}
                                 variant="contained"
                                 onClick={() => handleOpen(a.title, a.description, a.choice_true, a.choice_false, a.id)}
                                 style={{
                                    width: "80%",
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
                                       {a.title}
                                    </h1>
                                    <Grid className="statussent">
                                       {thisASN_status ? <CheckCircleIcon sx={{ fontSize: "40px" }} /> : <CheckCircleOutlineIcon sx={{ fontSize: "40px" }} />}
                                       <div>{thisASN_status ? "ส่งแล้ว" : "ยังไม่ส่ง"}</div>
                                    </Grid>
                                    <h2 className="questionACT">
                                       {thisASN_status ? <div>คำตอบที่เลือก {thisASN_status}</div> : <div>ยังไม่ได้เลือกคำตอบ</div>}
                                    </h2>
                                    <div className="assignment-detail-activity">
                                       <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                                       <div className="end-time">สิ้น</div>
                                       <div className="end-time">สุด</div>
                                       <div className="duetimeactivity-activate" >
                                          {date}
                                       </div>
                                    </div>
                                    <Grid>
                                       <div className="intime">อยู่ในระยะเวลา</div>
                                    </Grid>
                                 </Stack>
                              </Button>}
                        </Grid>
                     </Stack >

                  )
               })
            )
         } catch (err) {
            navigate('/reload', { replace: true })
            navigate('/classroom-activity', { replace: true })
         }
      }
      fetchActivity();
   }, []);