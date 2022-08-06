import { useContext } from 'react';
import styled from 'styled-components';

import { ProfileImage } from "../Common/ProfileImage";

export default function Header () {

    const { image } = useContext(ProfileImage);

    return (        
        <Head>
            <h1>TrackIt</h1>
            <div>
                <img src={image} alt='profileimg'/>
            </div>
        </Head>        
    )
}

const Head = styled.div`

    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    position: fixed;
    top: 0;

    h1 {
        padding: 15px;
        font-family: 'Playball', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 38.98px;
        color: #FFFFFF;
    }

    div {
        padding: 15px;
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 98.5px;
        object-fit: cover;
    }
`