import { useState, useEffect, useContext } from "react";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

import { Progress } from "../Common/Progress";
import { TodayTrack } from "./TodayTrack";
import { HabitsMain } from '../Style/HabitsMain';
import { getHabitsToday } from "../Common/Service";

export default function Today () {

    const [data, setData] = useState([]);
    const {progress, setProgress} = useContext(Progress);
    
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", {
        weekdays: [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        ],
    });
    var dayNow = dayjs().format("dddd, DD/MM");

    useEffect(() => {

        const promise = getHabitsToday();

        promise.then((res) => {
            setData(res.data);

            const total = res.data.length;
            const done = res.data.filter( data => (data.done === true));
            setProgress(Math.round((done.length/total) * 100));
        })

    }, [setData]);

    return (
        <>
            <HabitsMain>

                <div className="top">
                    <h1>{dayNow}</h1>                    
                </div>
                <p>
                    { (progress === 0) ? (
                        "Nenhum hábito concluído ainda"
                    ):(
                        <span>
                            {progress}% dos hábitos concluídos
                        </span>
                    )}
                </p>               

                {data.map((habit, index) => (
                    <TodayTrack
                        key={index}
                        id={habit.id}
                        done={habit.done}
                        name={habit.name}
                        currentSequence={habit.currentSequence}
                        highestSequence={habit.highestSequence}
                        setData={setData}
                        setProgress={setProgress}
                    />
                ))}

            </HabitsMain>
        </>
    )
}