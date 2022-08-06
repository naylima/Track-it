import { useContext } from "react";

import { Progress } from "../Common/Progress";
import { BsTrash } from "react-icons/bs";
import { deleteHabit, getHabits, getHabitsToday } from "../Common/Service";
import ChooseDays from './ChooseDays';
import { Weekdays, HabitBox } from "../Style/HabitsMain";

export default function Habit ( { habit, setHabitList} ) {

    const { setProgress} = useContext(Progress);

    function trash (id) {

        const confirm = window.confirm("Tem certeza que quer deletar esse hábito?");
        if (confirm) {
            const promise = deleteHabit(id);

            promise.then(() => {
                const request = getHabits();
                
                request.then ((res) => {
                    setHabitList(res.data);

                    const promise = getHabitsToday();
                    promise.then((res) => {  
                        const total = res.data.length;
                        const done = res.data.filter( data => (data.done === true));
                        setProgress(Math.round((done.length/total) * 100));
                    });
                })
            })
        }
    }

    return (
        <HabitBox>
            <div>
                <h2>{habit.name}</h2>
                <BsTrash 
                    className="trash"
                    onClick={() => trash(habit.id)}
                />            
            </div>
            <Weekdays>
                <ChooseDays event={false} form={habit}/>
            </Weekdays>
        </HabitBox>
    )
}
