import { useState, React } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { signUp } from '../Common/Service';
import Container from '../Style/Container';
import Loader from './Loader';

import logo from '../assets/img/logo.png'

export default function Registration() {

    const navigate = useNavigate();
    const [isDisabled, setIsDisable] = useState(false)

    const[form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });

    function handleForm (event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    function sendForm (e) {
        e.preventDefault();

       const promise = signUp(form);
       setIsDisable(true);
        
        promise.then( () => {
            navigate("/")
        })
        
        promise.catch((res) => {
            alert(`${res.response.data.message}`);
            setIsDisable(false);
        });
    }

    return (
        <Container>

            <img src={logo} alt='logo'/>

            <form onSubmit={sendForm}>
                <input 
                    type="email"                    
                    placeholder="email" 
                    name="email"
                    disabled={isDisabled}
                    value={form.email}              
                    onChange={handleForm}
                    required
                    >
                </input>
                <input 
                    type="password"                
                    placeholder="senha" 
                    name="password"
                    disabled={isDisabled}
                    value={form.password}          
                    onChange={handleForm}
                    required
                    >
                </input>
                <input 
                    type="text"                
                    placeholder="nome"
                    name="name" 
                    disabled={isDisabled} 
                    value={form.name}               
                    onChange={handleForm}
                    required
                    >
                </input>
                <input 
                    type="url"                
                    placeholder="foto"
                    name="image" 
                    disabled={isDisabled}
                    value={form.image}              
                    onChange={handleForm}
                    required
                    >
                </input>
                <button type="submit" disabled={isDisabled}>
                {isDisabled ? (
                    <Loader />
                ) : (
                    "Cadastrar"
                )}
                </button>
            </form>

            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>

        </Container>
    )
}

