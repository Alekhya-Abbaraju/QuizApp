import React from "react";
function QuestquizResults(props){
    return(
        <>
            <div className="show-score">
                Your Score :{props.score}<br/>
                Total Score :{props.totalScore}
            </div>
            <button id="next-button" onClick={props.tryagain}>TRY AGAIN</button>
        </>
    )
}
export default QuestquizResults