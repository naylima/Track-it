import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { Progress } from "../Common/Progress";

export default function Footer () {

    const { progress } = useContext(Progress);

    return (
        <Foot>
            <Link to={"/habitos"}>
                <p>Hábitos</p>
            </Link>
            <div>
                <ProgressBar>
                    <Link to={"/hoje"}>
                        <CircularProgressbar
                            value={progress}
                            text={"Hoje"}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                textSize: "18px",
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent",
                                cursor: "pointer",
                            })}
                        />
                    </Link>
                </ProgressBar>
            </div>
            <Link to={"/historico"}>
                <p>Histórico</p>
            </Link>
        </Foot>
    )
}

const Foot = styled.div`

    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #FFFFFF;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;

    position: fixed;
    bottom: 0;

    p {

        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }

    a {
        text-decoration-line: none;
    }

`
const ProgressBar = styled.div`

  width: 91px;
  height: 91px;

  position: absolute;
  bottom: 10px;
  right: 50%;
  left: 50%;
  transform: translate(-50%);

`;