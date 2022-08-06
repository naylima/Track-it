import React, { useState, useContext }  from 'react';
import { Link, useNavigate } from "react-router-dom";

import { ProfileImage } from "../Common/ProfileImage";
import { getUser } from '../Common/Service';
import Container from '../Style/Container';
import logo from '../assets/img/logo.png';
import Loader from './Loader';

export default function Login() {

    const { setImage } = useContext(ProfileImage);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisable] = useState(false);

    function sendForm(e) {
        e.preventDefault();

        const body = {
            email,
            password
        }

        const promise = getUser(body);
        setIsDisable(true);

        promise.then((res) => {

            const image = res.data.image;
            setImage(image);

            const token = res.data.token;
            localStorage.setItem("trackit", JSON.stringify({token: token}));
            
            navigate(
                "/habitos",
            );
        })

        promise.catch((res) => {
            alert(`${res.response.data.message}`);
            setIsDisable(false);
            setEmail("");
            setPassword("");
        });
    }

    return (
        <Container>
            <img src={logo} alt='logo'/>
            <form onSubmit={sendForm}>
                <input 
                    type="email"                    
                    placeholder="email"
                    disabled={isDisabled}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required                    
                    >
                </input>
                <input 
                    type="password"                
                    placeholder="senha"
                    disabled={isDisabled} 
                    value={password}
                    onChange={e => setPassword(e.target.value)}               
                    required
                    >
                </input>
                <button type="submit" disabled={isDisabled}>
                    {isDisabled ? (
                        <Loader />
                    ) : (
                        "Entrar"
                    )}
                </button>
            </form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

