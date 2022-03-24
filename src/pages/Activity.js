import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid, Paper, Stack } from "@mui/material";
import "./Activity.css";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Activity() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* ------------------------------------------------------------------ */}
      {/* TabActivity */}
      <Stack direction="row" justifyContent="center">
      <Box sx={{borderBottom: 1, borderColor: "divider" }}>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tablabel"
        >
          <Tab
            label="ได้รับมอบหมาย"
            {...a11yProps(0)}
            sx={{ fontFamily: "Prompt" }}
          />
          <Tab
            label="เสร็จเรียบร้อยแล้ว"
            {...a11yProps(1)}
            sx={{ fontFamily: "Prompt" }}
          />
        </Tabs>
      </Box>
      </Stack>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <TabPanel value={value} index={0}>
        <Box
          sx={{        
            bgcolor: "white",
            height: "500px",
            width: "100%",
            display: "block",
            flexWrap: "wrap",
            paddingLeft: 3,
            paddingRight: 3,
            "& > :not(style)": { mb: 2 },
          }}
        >
          <Box sx={{ paddingTop: 1 }}></Box>
          <Button
            sx={{
              color: "black",
              display: "block",
              border: 0,
              paddingBottom: 1.5,
              boxShadow: 3,
              marginLeft:'auto',
              marginRight:'auto'
            }}
            className='screenpaper'
            
            style={{ backgroundColor: "white" }}
            to="/classroom-activity"
            component={Link}
          >
            <h1 className="activity">กิจกรรมที่ 2 รดน้ำต้นไม้วันที่ 2</h1>
            <div className="assignment-detail">
              <div>240-124 การเกษตร</div>
              <div type="time-activity">
                <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                <div>สิ้นสุด</div>
                <div type="duetime">1 มีนาคม 2020 10.00 PM</div>
              </div>
            </div>
          </Button>
        </Box>
      </TabPanel>
      {/* ---------------------------------------------------------------------------------------------------- */}
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            bgcolor: "white",
            height: "500px",
            width: "100%",
            display: "block",
            flexWrap: "wrap",
            paddingLeft: 3,
            paddingRight: 3,
            "& > :not(style)": { mb: 2 },
          }}
        >
          <Box sx={{ paddingTop: 1 }}></Box>
          <Button
            sx={{
              color: "black",
              display: "block",
              border: 0,
              paddingBottom: 1.5,
              boxShadow: 3,
              marginLeft:'auto',
              marginRight:'auto'
            }}
            className='screenpaper'
            style={{ backgroundColor: "white" }}
            to="/classroom-activity"
            component={Link}
          >
            <h1 className="activity">กิจกรรมที่ 1 รดน้ำต้นไม้วันที่ 1</h1>
            <div className="assignment-detail">
              <div>240-124 การเกษตร</div>
              <div type="time-activity">
                <AccessTimeIcon sx={{ ml: 1, mr: 1 }} />
                <div>หมดเวลาเเล้ว</div>
                <div type="duetime">ส่งเเล้ว</div>
              </div>
            </div>
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}

export default Activity;
