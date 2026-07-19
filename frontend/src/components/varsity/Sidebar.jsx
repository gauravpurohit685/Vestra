import React from "react";
import { Link } from 'react-router-dom'

import "./varsity.css";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

const Sidebar = ({
    lessons,
    currentLesson,
    setCurrentLesson,
}) => {

    return (

        <div className="varsity-sidebar">

            <div className="sidebar-header">

                <Link to = "/" style={{cursor: "pointer", textDecoration: "none"}}><h2>📚 Varsity</h2></Link>

                <p>
                    Master trading one lesson at a time.
                </p>

            </div>

            <div className="lesson-list">

                {
                    lessons.map((lesson, index) => {

                        const completed =
                            index < currentLesson;

                        const active =
                            index === currentLesson;

                        return (

                            <div
                                key={lesson.id}
                                className={
                                    active
                                        ? "lesson-item active"
                                        : "lesson-item"
                                }
                                onClick={() =>
                                    setCurrentLesson(index)
                                }
                            >

                                <div className="lesson-left">

                                    <span className="lesson-icon">
                                        {lesson.icon}
                                    </span>

                                    <div>

                                        <h4>
                                            {lesson.title}
                                        </h4>

                                        <small>
                                            Lesson {index + 1}
                                        </small>

                                    </div>

                                </div>

                                <div>

                                    {
                                        completed ? (

                                            <CheckCircleIcon
                                                className="completed-icon"
                                            />

                                        ) : active ? (

                                            <PlayCircleFilledWhiteIcon
                                                className="active-icon"
                                            />

                                        ) : (

                                            <RadioButtonUncheckedIcon
                                                className="pending-icon"
                                            />

                                        )
                                    }

                                </div>

                            </div>

                        );

                    })
                }

            </div>

        </div>

    );

};

export default Sidebar;