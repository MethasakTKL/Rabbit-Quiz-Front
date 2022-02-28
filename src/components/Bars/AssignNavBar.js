import React from 'react'
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

function AssignNavBar() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { height: 3 } }}

            >
                <Tab
                    className="navtext"
                    label="ที่ได้รับมอบหมาย"
                    sx={{ color: "darkgrey", fontFamily: "Prompt" }}
                    to="/activity"
                    component={Link}



                />
                <Tab
                    className="navtext"
                    label="เสร็จเรียบร้อยแล้ว"
                    sx={{ color: "darkgrey", fontFamily: "Prompt" }}
                    to="/complete"
                    component={Link}

                />
            </Tabs>
        </div>
    )
}

export default AssignNavBar