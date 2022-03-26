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