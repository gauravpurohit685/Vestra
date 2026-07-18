import React, { useState } from "react";
import "./Varsity.css";

import Sidebar from "./Sidebar";
import Lesson from "./Lesson";
import lessons from "./lesson.js";

const Varsity = () => {

    const [currentLesson, setCurrentLesson] = useState(0);

    const totalLessons = lessons.length;

    const progress =
        ((currentLesson + 1) / totalLessons) * 100;

    const handleNext = () => {
        if (currentLesson < totalLessons - 1) {
            setCurrentLesson(currentLesson + 1);
        }
    };

    const handlePrevious = () => {
        if (currentLesson > 0) {
            setCurrentLesson(currentLesson - 1);
        }
    };

    return (
        <div className="varsity">

            <Sidebar
                lessons={lessons}
                currentLesson={currentLesson}
                setCurrentLesson={setCurrentLesson}
            />

            <div className="varsity-content">

                <div className="varsity-header">

                    <div>

                        <h1>Vestra Varsity</h1>

                        <p>
                            Learn stock market fundamentals before
                            placing your first trade.
                        </p>

                    </div>

                    <div className="progress-box">

                        <span>
                            Lesson {currentLesson + 1} of {totalLessons}
                        </span>

                        <div className="progress-bar">

                            <div
                                className="progress-fill"
                                style={{
                                    width: `${progress}%`
                                }}
                            />

                        </div>

                    </div>

                </div>

                <Lesson
                    lesson={lessons[currentLesson]}
                />

                <div className="navigation-buttons">

                    <button
                        onClick={handlePrevious}
                        disabled={currentLesson === 0}
                    >
                        ← Previous
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentLesson === totalLessons - 1}
                    >
                        Next →
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Varsity;