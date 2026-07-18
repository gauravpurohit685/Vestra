import React, { useState } from "react";
import "./Varsity.css";

const Lesson = ({ lesson }) => {

    const [selectedOption, setSelectedOption] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {

        if (selectedOption === null) return;

        setSubmitted(true);

    };

    return (

        <div className="lesson-container">

            {/* Header */}

            <div className="lesson-header">

                <div className="lesson-title">

                    <span className="lesson-emoji">
                        {lesson.icon}
                    </span>

                    <div>

                        <h1>{lesson.title}</h1>

                        <p>
                            Learn the fundamentals of trading in simple
                            language.
                        </p>

                    </div>

                </div>

            </div>

            {/* Description */}

            <div className="lesson-card">

                <h2>Overview</h2>

                <p>
                    {lesson.description}
                </p>

            </div>

            {/* Example */}

            <div className="lesson-card example-card">

                <h2>{lesson.example.title}</h2>

                <ul>

                    {
                        lesson.example.content.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>

                        ))
                    }

                </ul>

            </div>

            {/* Tip */}

            <div className="lesson-card tip-card">

                <h2>💡 Pro Tip</h2>

                <p>
                    {lesson.tip}
                </p>

            </div>

            {/* Quiz */}

            <div className="lesson-card quiz-card">

                <h2>
                    Quick Quiz
                </h2>

                <h3>
                    {lesson.quiz.question}
                </h3>

                <div className="quiz-options">

                    {

                        lesson.quiz.options.map((option, index) => (

                            <button

                                key={index}

                                className={
                                    selectedOption === index
                                        ? "quiz-option selected"
                                        : "quiz-option"
                                }

                                onClick={() => {

                                    if (!submitted)
                                        setSelectedOption(index);

                                }}

                            >

                                {option}

                            </button>

                        ))

                    }

                </div>

                <button

                    className="submit-answer"

                    onClick={handleSubmit}

                    disabled={
                        selectedOption === null || submitted
                    }

                >

                    Submit Answer

                </button>

                {

                    submitted && (

                        <div

                            className={
                                selectedOption === lesson.quiz.answer
                                    ? "correct-answer"
                                    : "wrong-answer"
                            }

                        >

                            {

                                selectedOption === lesson.quiz.answer

                                    ? "🎉 Correct! Great Job."

                                    : `❌ Incorrect. Correct Answer: ${lesson.quiz.options[lesson.quiz.answer]}`

                            }

                        </div>

                    )

                }

            </div>

        </div>

    );

};

export default Lesson;