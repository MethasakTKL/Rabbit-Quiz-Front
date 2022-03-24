import React from "react";
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
import "./ClassActivity.css";
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
import waterplant from "../Static/image/waterplant.png";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/auth";

//import list result
import ClassActivityResults from "../Classroom/ClassActivityResults";

function ClassActivity() {
  let auth = useAuth()
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = () => {
    setOpen(false);
  };
  return (
    <Box height={800}>
      <Linkform href="classroom" underline="none">
        <h1 className="classname" style={{ fontSize: 36 }}>
          ห้องเรียนการเกษตร
        </h1>
      </Linkform>
      <Stack
        marginLeft={"auto"}
        marginRight={"auto"}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingBottom={1}
      >
        <Grid>
          <Button
            variant="contained"
            style={{ background: "#f5df4d", width: 180 }}
            to="/mypoints"
            component={Link}
          >
            <EmojiEvents className="viewscore" />
            <Grid>
              <div className="viewscore">คะแนนของคุณ</div>
            </Grid>
          </Button>
        </Grid>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,

            width: "90%",
            maxWidth: 1000,
            height: "auto",
            borderRadius: 3,
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >


        <ClassActivityResults />


      </Box>
    </Box>
  );
}
export default ClassActivity;
