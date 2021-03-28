import { Card, Image, Avatar } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import "./index.css";

const { Meta } = Card;
export default function CourseItem(props) {
    // 可以通过外部包裹 Link 的方式来做点击 全体、局部跳转
    const coverImg = props.coverImg;
    const courseName = props.courseName;
    const courseStartTime = props.startTime;
    const endStartTime = props.endTime;
    const cover = (
        <div className="course-cover" style={{ backgroundImage: `url(${coverImg})`}}>
            <p className="course-cover-term">{courseStartTime} - {endStartTime}</p>
            <div className="course-cover-code">课堂码🧾: </div>
        </div>        
    );
    return (
        <Link to="/">
            <Card
                style={{ width: "300px", boxShadow: "0px 2px 3px #dddddd", marginBottom: "10px" }}
                cover={cover}
                >
                    <Meta 
                        avatar={<Link to="/vip"><Avatar src="http://images.nowcoder.com/head/934m.png" /></Link> }
                        title={courseName}
                        description="向老师教你如何科学摸鱼"
                    />
            </Card>
        </Link>
    )
}
