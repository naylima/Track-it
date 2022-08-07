import { BsCheckSquareFill, BsXSquareFill } from "react-icons/bs";
import styled from 'styled-components';

export const CalendarBox = styled.div`
    
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
        background-color: #EA5766;
    }

    .done {
        background-color: #8CC654;
    }

`

export const HistoryBox = styled.div`
    width: 355px;
    height: auto;
    margin-top: 15px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 5px;

    h2 {
        font-size: 20px;
        color: ${ ({habit}) => (habit.done ? "#8CC654" : "#EA5766")};
    }
    
`
export const CheckIcon = styled(BsCheckSquareFill) `
    width: 30px;
    height: 30px;
    cursor:pointer;
    color: #8CC654;
`
export const XIcon = styled(BsXSquareFill) `
    width: 30px;
    height: 30px;
    cursor:pointer;
    color: #EA5766;
`
