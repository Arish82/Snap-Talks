import React from "react";
import { Badge } from "antd";

export default function ProfileImage(props) {
    return (
        <>
            <Badge
                style={{ 
                    cursor: "pointer",
                    height: props.bh,
                    width: props.bw,
                    backgroundColor: props.bgColor
                }}
                count={props.count}
                dot={props.dot}
                offset={props.offset}
                status={props.status}
            >
                <div
                    style={{
                        cursor: "pointer",
                        width: props.width,
                        height: props.height,
                    }}
                    className="squircles"
                >
                    <img src={props.src} alt={props.alt} />
                </div>
            </Badge>
        </>
    );
}
