import React from 'react';
import styles from './Index.module.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import Logo from './../../components/Logo/Index'


const Index = () => {
        const name = "";
        const email = "";
        const password = "";

        const handleRegister = (e) => {
            e.preventDefault();
             // alert("PÓKI NIE MA BACKENDU: \n" +
             //  "Login: " + this.state.text + "\n" +
             //  "Hasło: " + this.state.password)
       }

       const handleGoogleLogin = (e) => {
        e.preventDefault();     
        axios.get("http://localhost:8080/oauth2/authorization/google").then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        });
    }

    return(
        <>
            <Logo/>
            <div className="wrapper">
                <button onClick={handleGoogleLogin}>Zaloguj się przez Google</button>

                <p>LUB</p>

                <form onSubmit={handleRegister}>
                    <input 
                        type="name" 
                        value={name.value} 
                        onChange={name.onChange} 
                        placeholder={"Nazwa użytkownika"}
                    />
                    <input 
                        type="email" 
                        value={email.value} 
                        onChange={email.onChange} 
                        placeholder={"Adres e-mail"}
                    />
                    <input 
                        type="password" 
                        value={password.value} 
                        onChange={password.onChange}
                        placeholder={"Hasło"}
                    />
                    <input 
                        type="button" 
                        value="Zaloguj"
                    /> 
                </form>

                <div className="register-block">
                <p>
                    Masz konto?
                    </p>
                    <Link to="/login" exact={false}>Zaloguj się</Link>  
                </div>
            </div>   
        </>
    )
}

export default Index;