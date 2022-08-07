import { checkHabit, getHabitsToday, uncheckHabit } from "../Common/Service";
import { TodayBox, Track, CheckIcon } from "../Style/TodayMain";

export function TodayTrack ({ habit, setData, setProgress}) {

    function checkHabitToday (id){
        let promise;
        habit.done ? (
            promise = uncheckHabit(id)
        ):(
            promise = checkHabit(id)
        );
        
        promise.then(() => {

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
            <Track habit={habit} >

                <h2>{habit.name}</h2>

                <p>
                    Sequência atual:{" "}                   
                    <span className="sequence">
                        {habit.currentSequence} dias
                    </span>
                    <br/>
                    Seu recorde:{" "}
                    <span className="record">
                        {habit.highestSequence} dias
                    </span>  
                </p> 
            </Track>

            <CheckIcon 
                habit={habit}
                onClick={() => checkHabitToday(habit.id)} 
            />                    
        </TodayBox>
    )
}
