import React,{useState,useEffect} from "react";

import "./Quiz.css";

const FlashCard =({question,answer,incrementIndex}) => {
    const [showAnswer,setShowAnswer] = useState(false);

    useEffect(() => setShowAnswer(false),[question]);

    return (
        <>
            <div 
             className="flashcard-container"
             onclick={() => setShowAnswer(!showAnswer)}>
                {!showAnswer && question}
                {showAnswer && answer}
             </div>
             {showAnswer && (
                <button onclick={incrementIndex} className="flashcard-button">
                    Next question
                </button>
             )}
        </>
    );
};

export default FlashCard;