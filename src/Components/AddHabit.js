import React, { useState, useContext } from "react";

import { Progress } from "../Common/Progress";
import { creatHabit, getHabits, getHabitsToday } from "../Common/Service";
import { AddHabitBox, Weekdays } from "../Style/HabitsMain";
import ChooseDays from "./ChooseDays";
import { ThreeDots } from  'react-loader-spinner';

export default function AddHabit ( { setIsClicked, setHabitList } ) {
    
    const { setProgress} = useContext(Progress);
    const [isDisabled, setIsDisable] = useState(false);

    const[form, setForm] = useState({
        name:"",
        days:[],
    });

    function handleForm (event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    function sendForm (){
        if (form.name === "" || form.days.length === 0) {

            alert("Verifique as informações e tente novamente!")

        } else {

            const promise = creatHabit(form);
            setIsDisable(true);
    
            promise.then(() => {
                setIsClicked(false);

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

            promise.catch((res) => {
            alert(`${res.response.data.message}`);
                setIsDisable(false);
            });
        }        
    }

    return (
        <AddHabitBox>
            <input
                type="text"                
                placeholder="nome do hábito"
                name="name"
                disabled={isDisabled} 
                value={form.name}              
                onChange={handleForm}
                required
            >
            </input>
            <Weekdays>
                    <ChooseDays 
                        event={true} 
                        form={form} 
                        setForm={setForm} 
                        disabled={isDisabled}
                    />         
            </Weekdays>
            <div className="buttons">
                <p onClick={() => {
                        setIsClicked(false)}}>
                        Cancelar
                </p>
                <button onClick={sendForm} disabled={isDisabled} >
                    {isDisabled ? (
                        <ThreeDots color="#FFFFFF" height={35} width={45} />
                    ) : (
                        "Salvar"
                    )}
                </button>
            </div>
        </AddHabitBox>
    )
}
