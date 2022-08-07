import React, { useState, useEffect, useContext } from "react";

import { Progress } from "../Common/Progress";
import { getHabits, getHabitsToday } from "../Common/Service";
import AddHabit from "./AddHabit";
import Habit from "./Habit";
import { HabitsMain, Text } from "../Style/HabitsMain";

export default function Habits () {

    const [hidden, setHidden] = useState(true);
    const [habitList, setHabitList] = useState([]);
    const { setProgress} = useContext(Progress);

    useEffect(() => {

        const promise = getHabits();

        promise.then((res) => {

            setHabitList(res.data);

            const promise = getHabitsToday();
            promise.then((res) => {  
                const total = res.data.length;
                const done = res.data.filter( data => (data.done === true));
                setProgress(Math.round((done.length/total) * 100));
            })
        })

    }, [setHabitList]);

    return (
        <>
            <HabitsMain>
                <div className="top">
                    <h1>Meus hábitos</h1>
                    <button onClick={() => {
                        setHidden(!hidden)}}>
                        +
                    </button>
                </div>

                <AddHabit 
                    hidden={hidden}
                    setHidden={setHidden}
                    setHabitList={setHabitList} 
                /> 

                { habitList.length === 0 ? (

                    <Text>
                        Você não tem nenhum hábito cadastrado ainda. 
                        Adicione um hábito para começar a trackear!
                    </Text>

                ) : (

                    habitList.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            setHabitList={setHabitList}
                        />
                     ))
                )}
                
            </HabitsMain>
        </>
    )
}

