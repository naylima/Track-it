import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import styled from "styled-components";

import { getHistory } from "../Common/Service";
import { HabitsMain } from '../Style/HabitsMain';
import { useState, useEffect } from 'react';

export default function History () {

    const [history, setHistory] = useState([]);
    const [habitsNoDone, setHabitsNoDone] = useState([]);
    const [arrayDays, setArrayDays] = useState([]);

    useEffect(() => {
        
        const promise = getHistory();
        promise.then((res) => {
            console.log(res.data);
            setHistory(res.data);
        })
        
    }, []);
    
    useEffect(() => {

        const days = [];
        const habitsNoDone = [];
        const today = dayjs().format("DD/MM/YYYY");

        history.forEach((day) => {

            day.habits.map((habit) =>
                !habit.done
                    ? habitsNoDone.push(dayjs(habit.date).format("DD/MM/YYYY"))
                    : null
            );

            day.habits.map((habit) => {
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
                    />
                </CalendarBox>  

            </HabitsMain>
        </>
    )
}

const CalendarBox = styled.div`
    
    .react-calendar {
    width: 100%;
    height: auto;
    margin-top: 10px;
    border: none;
    border-radius: 10px;

        .react-calendar__month-view__weekdays {
            padding-bottom: 23px;
        }

        .react-calendar__month-view__days {

            button {
            padding-top: 14px;
            padding-bottom: 14px;
            clip-path: circle();
            }
        }
    }

    .react-calendar.hidden {
        display: none;
    }

    .noDone {
        background-color: #ea5766;
    }

    .done {
        background-color: #8cc654;
    }


`