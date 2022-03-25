import React from 'react'
import { Button } from "@mui/material";
import { ax } from '../auth/auth';
import { message } from "antd";

function TestApiButton() {
    let api = "/getMessage/5"
    const handleSendApi = async () => {
        try {
            var result = await ax.request(`${api}`)
            if (result.status === 200 && result.data) {
                console.log(result)
                message.success({
                    content: `ทดสอบ api ${api} สำเร็จ`,
                    style: { fontFamily: "Prompt", marginTop: 140, fontSize: "20px" },
                    duration: 3
                });
            }
        } catch (error) {
            message.error({
                content: `ทดสอบ api ${api} ไม่สำเร็จเนื่องจาก ${error}`,
                style: { fontFamily: "Prompt", marginTop: 140, fontSize: "20px" },
                duration: 3
            });

            console.error(error)
        }
    }
    return (
        <div>
            <Button
                variant="outlined"
                sx={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontFamily: "Prompt",
                }}
                onClick={handleSendApi}
            >ทดสอบ Api</Button>
            <p />
        </div>
    )
}

export default TestApiButton