import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillTrophy } from 'react-icons/ai';
import { FaRegSadTear } from 'react-icons/fa';
import question from './question.json'

const AfterLogin = () => {
    const [userPassed, setUserPassed] = useState(false);
    const [questions, setQuestion] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState({});
    const optionDesign =
        'text-[16px] my-[1px] p-4 cursor-pointer  w-full text-left focus:outline-none bg-gray-900 text-white';


    useEffect(() => {
    setQuestion(question)
    setLoading(false)

        // fetch('./question.json')
        //     .then(response => response.json())
        //     .then(data => {
        //         setQuestion(data)
        //         setLoading(false);
        //     })
    }, [])
  
    console.log(questions);

    const tryAgain = () => {
        setCurrentQuestion(0);
        setShowScore(false);
    };

    const currentOption = (option) => {
        setSelectedOption(option);
    };

    const passedUser = () => {
        const userScore = Math.ceil((score / questions?.length) * 100);
        console.log(userScore);
        userScore > 75 ? setUserPassed(true) : setUserPassed(false);
    };

    const handleAnsBtnClick = (selectedOption) => {
        if (selectedOption.isCorrect) setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions?.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            passedUser();
        }
        setSelectedOption({});
    };
    const handleQuestionBack = (selectedOption) => {
        const prevQuestion = (currentQuestion - 1);
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
        }
        setSelectedOption({});

    }





    // if (userLoading) return 'loading...';


    return (
        <div className=' py-[120px]'>
            <div className="w-[30%]  m-auto bg-slate-800">
                <div className=" font-sans font-semibold pt-3 text-white">
                    {!showScore && <div className="flex flex-row mx-auto w-[100%]  justify-between px-5 items-center mt-3 md:mt-7 text-black">
                        <button
                            className=" bg-violet-500 text-white btn px-3 rounded hover:opacity-80 text-[16px]"
                            onClick={() => handleQuestionBack(selectedOption)}
                        >
                            &lt;
                        </button>
                        <fieldset className="sm:w-60 dark:text-gray-100">
                            <input type="range" className="w-full accent-violet-400"
                                value={currentQuestion + 1}
                                max={questions?.length} />
                        </fieldset>
                    </div>
                    }
                </div>

                <div className="flex flex-col justify-center">
                    {loading && <progress className="progress w-56"></progress>}
                    {showScore && userPassed ? (
                        <>
                            <div className="flex flex-col justify-center items-center text-black  mt-7 md:mt-20">
                                <AiFillTrophy className="text" size={100} />
                                <p className="text-3xl md:text-6xl font-semibold mt-6">
                                    Congratulations! You've passed the test with a score of 75%
                                    above.
                                </p>
                            </div>
                        </>
                    ) : showScore && !userPassed ? (
                        <>
                            <div className="flex flex-col justify-center items-center text-black  mt-7 md:mt-20">
                                <FaRegSadTear className="text" size={100} />
                                <p className="text-3xl md:text-3xl font-semibold mt-6">
                                    Sorry! You score is less than 75%. Which is unexpected. Please{' '}
                                    <span onClick={tryAgain} className="cursor-pointer underline">
                                        Try again
                                    </span>
                                    .
                                </p>
                            </div>
                        </>
                    ) : (
                        !loading && (
                            <>
                                <div className="px-5 rounded-xl mx-auto mt-4">
                                    <h3 className="text-xl text-white py-2">
                                        {questions[currentQuestion].question}
                                    </h3>
                                    {questions[currentQuestion]?.options.map((option, i) => (
                                        <>
                                            <button
                                                key={i}
                                                onClick={() => currentOption(option)}
                                                className={
                                                    selectedOption.option === option.option
                                                        ? `bg-gray-600 ${optionDesign}`
                                                        : ` ${optionDesign}`
                                                }
                                            >
                                                <p
                                                    className={
                                                        selectedOption.option === option.option
                                                            ? `w-3 h-3 rounded-full bg-green-600 inline-block`
                                                            : `w-3 h-3 rounded-full bg-violet-200 inline-block`
                                                    }></p> {option.option}
                                            </button>
                                        </>
                                    ))}
                                    <button
                                        className="float-right mt-5 bg-violet-500 text-white px-6 py-3 rounded hover:opacity-80"
                                        disabled={Object.keys(selectedOption).length === 0}
                                        onClick={() => handleAnsBtnClick(selectedOption)}
                                    >
                                        {currentQuestion === questions?.length - 1
                                            ? 'Submit'
                                            : 'Next Question'}
                                    </button>
                                    <button
                                        className="float-right mt-5 bg-violet-500 text-white mx-2 px-6 py-3 rounded hover:opacity-80"
                                        onClick={() => handleAnsBtnClick(selectedOption)}
                                    >
                                        Skip
                                    </button>

                                </div>
                            </>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default AfterLogin;