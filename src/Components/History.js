import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";

import { useState, useEffect, useRef } from 'react';
import { getHistory } from "../Common/Service";
import { HabitsMain } from '../Style/HabitsMain';
import { CalendarBox, HistoryBox, CheckIcon, XIcon } from '../Style/HistoryMain';

export default function History () {

    const [history, setHistory] = useState([]);
    const [habitsNoDone, setHabitsNoDone] = useState([]);
    const [arrayDays, setArrayDays] = useState([]);
    const [habitsOfTheDay, sethabitsOfTheDay] = useState([]);
    const componentRef = useRef();

    useEffect(() => {
        
        const promise = getHistory();
        promise.then((res) => {
            setHistory(res.data);
        })
        
    }, []);
    
    useEffect(() => {

        const days = [];
        const habitsNoDone = [];
        const today = dayjs().format("DD/MM/YYYY");

        history.forEach((item) => {

            item.habits.map((habit) =>
                !habit.done
                    ? habitsNoDone.push(dayjs(habit.date).format("DD/MM/YYYY"))
                    : null
            );

            item.habits.map((habit) => {
                days.push(dayjs(habit.date).format("DD/MM/YYYY"));
                return days;
            });
            
            return;
        });

        const remove = days.filter((day) => day !== today);
        setArrayDays(remove);

        const habitsNoDoneFilter = habitsNoDone.filter((day) => day !== today);
        setHabitsNoDone(habitsNoDoneFilter);

    }, [history]);

    function handleOnClick (value) {

        const date = dayjs(value).format("DD/MM/YYYY");

        history.map((item) => 
            item.day === date ? ( 
                    sethabitsOfTheDay(item),
                    componentRef.current.scrollIntoView({ behavior: 'smooth' })
                ): (
                    null
                ));

    }

    return (
        <>
            <HabitsMain>
                <div className="top">
                    <h1>Histórico</h1>                    
                </div>
        
                <CalendarBox>
                    <Calendar 
                        showFixedNumberOfWeeks={true}
                        calendarType="US"
                        tileClassName={({ date, view }) =>
                          view === "month" &&
                          arrayDays.includes(dayjs(date).format("DD/MM/YYYY"))
                            ? habitsNoDone.includes(dayjs(date).format("DD/MM/YYYY"))
                              ? "noDone"
                              : "done"
                            : null
                        }
                        formatDay={(locale, date) => dayjs(date).format("DD")}
                        onClickDay={(value, event) => handleOnClick (value)}
                    />
                </CalendarBox>
    
                <div ref={componentRef}>
                    {habitsOfTheDay.length !== 0 ? (
                        <RenderHabitsDay 
                            item={habitsOfTheDay}
                        />
                    ) : (
                        null
                    )} 
                </div>             
                
            </HabitsMain>
        </>
    )
}

function RenderHabitsDay ({item}) {
    return (
        <> 
            <h3>Hábitos do dia {item.day}</h3>
            {item.habits.map((habit) => (
                <HistoryBox key={habit.id} habit={habit}>
                    <h2>{habit.name}</h2>
                    {habit.done ? <CheckIcon /> : <XIcon />}
                </HistoryBox>
            ))}      
        </>
    )
}
