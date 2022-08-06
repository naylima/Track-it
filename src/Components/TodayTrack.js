import { useState } from "react";

import { TodayBox, Track, CheckIcon } from "../Style/TodayMain";
import { checkHabit, getHabitsToday, uncheckHabit } from "../Common/Service";

export function TodayTrack ({id, done, name, currentSequence, highestSequence, setData, setProgress}) {

    const [isDone, setIsDone] = useState(done)

    function checkHabitToday (id){
        let promise;
        isDone ? (
            promise = uncheckHabit(id)
        ):(
            promise = checkHabit(id)
        );
        
        promise.then(() => {
            setIsDone(!isDone);

            const request = getHabitsToday();
            request.then ((res) => {
                setData(res.data);

                const total = res.data.length;
                const done = res.data.filter( data => (data.done === true));
                setProgress(Math.round((done.length/total) * 100));
            })
        });
    }

    return (
        <TodayBox>
            <Track 
                color={isDone ? "#8FC549" : "#666666"} 
                colorRecord={(currentSequence === highestSequence && highestSequence > 0) ? 
                                "#8FC549" : "#666666"
                            }>

                <h2>{name}</h2>

                <p>
                    Sequência atual:{" "}                   
                    <span className="sequence">{currentSequence} dias</span>
                    <br/>
                    Seu recorde:{" "}
                    <span className="record">{highestSequence} dias</span>  
                </p> 
            </Track>

            <CheckIcon 
                color={ isDone ? "#8FC549" : "#EBEBEB"} 
                onClick={() => checkHabitToday(id)} 
            />
                    
        </TodayBox>
    )
}
