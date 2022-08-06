import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;

    form {
        height: auto;
        margin: 25px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    input {
        width: 303px;
        height: 45px;
        padding-left: 10px;
        margin-bottom: 5px;
        font-size: 20px;
        color: #52B6FF;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        :disabled {
            color: #AFAFAF;
            background: #F2F2F2;
        }

        ::placeholder {
            font-size: 20px;
            line-height: 25px;
            color: #DBDBDB;
        }

        :focus {
            outline: none;
        }        
    }

    button {
        width: 100%;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        color: #FFFFFF;
        background: #52B6FF;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        :active {
            transform: scale(0.98);
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        }

        :disabled {
            opacity: 0.7;
        }

    }

    p {
        font-size: 14px;
        text-decoration-line: underline;
        cursor: pointer;
        color: #52B6FF;
    }

`
export default Container;