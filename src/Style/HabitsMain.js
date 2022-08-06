import styled from 'styled-components';

export const HabitsMain = styled.div`
width: 100%;
min-height: 100vh;
padding: 85px 15px;
padding-bottom: 110px;
display: flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
background-color: #E5E5E5;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;

p {
    align-self: flex-start;
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
}

span {
    color: #8FC549;
}

.top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.top h1 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
}

.top button {    
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    font-size: 27px;
    line-height: 34px;
    color: #FFFFFF;
}

button:active {
    transform: scale(0.98);
    box-shadow: inset 0 0 0.5em #c9c9c9;
}

`
export const Text = styled.div`
margin-top: 30px;
font-size: 18px;
line-height: 22px;
color: #666666;
`
export const AddHabitBox = styled.div`
width: 355px;
height: auto;
margin-top: 15px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: space-around;
box-sizing: border-box;

background: #FFFFFF;
border-radius: 5px;

input {
    width: 310px;
    height: 45px;
    padding-left: 10px;
    align-self: center;
    font-size: 20px;
    color: #666666;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px;

    :disabled {
            color: #AFAFAF;
            background: #F2F2F2;
    }

    ::placeholder{
        font-size: 20px;
        line-height: 25px;
        color: #D4D4D4;
    }

    :focus {
        outline: none;
    }
}

.buttons {
    display: flex;
    align-self: flex-end;
    align-items: center;
    margin-top: 35px;
}

p {
    font-size: 16px;
    color: #52B6FF;
    cursor: pointer;
}

button {
    width: 84px;
    height: 35px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #FFFFFF;
    background: #52B6FF;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    :disabled {
            opacity: 0.7;
    }
}
`
export const HabitBox = styled.div`
    width: 355px;
    height: auto;
    margin-top: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;

    background: #FFFFFF;
    border-radius: 5px;

    h2 {
        font-size: 20px;
        color: #666666;
    }

    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .trash {
        cursor: pointer;
    }
    
`

export const Weekdays = styled.div`
display: flex;
align-self: flex-start;
margin-top: 10px;
`

export const Weekday = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;

    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #CFCFCF;
    cursor: ${ ({event}) => (event ? "pointer" : "default")};

    color: ${ ({days, id}) => (days.includes(id) ? "#FFFFFF" : "#DBDBDB")};
    background-color: ${ ({days, id}) => (days.includes(id) ? "#CFCFCF" : "#FFFFFF")};
`