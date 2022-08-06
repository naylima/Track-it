import { Weekday } from "../Style/HabitsMain";

const weekdays = [
    { id: 0, day: "D" },
    { id: 1, day: "S" },
    { id: 2, day: "T" },
    { id: 3, day: "Q" },
    { id: 4, day: "Q" },
    { id: 5, day: "S" },
    { id: 6, day: "S" },
  ];

export default function ChooseDays ({ event, form, setForm }) {

    function SelectDay(selectedId) {

        const days = form.days;

        if (days.includes(selectedId)) {

        const remove = days.filter((id) => id !== selectedId);
        setForm({ ...form, days: remove });

        } else {

        setForm({ ...form, days: [...days, selectedId] });

        }
    }

    return (
        <>
            {weekdays.map((day, index) => (
                <Weekday
                    key={index}
                    days={form.days}
                    id={day.id}
                    event={event}
                    onClick={() => (event ? SelectDay(day.id) : false)}
                >
                    {day.day}
                </Weekday>
            ))}
            
        </>
    )

}