import React from 'react';
import styles from './Index.module.css';
import { Link } from 'react-router-dom';

import Logo from './../../components/Logo/Index';
import GoogleSign from './../../assets/svgs/GoogleSign';

const Index = () => {
        const email = "";
        const password = "";

        const handleLogin = (e) => {
            e.preventDefault();
       }

    return(
        <>
        <div className={styles.wrapper}>               
                <div className={styles.mainContent}>
                    <Logo />
                    <form onSubmit={handleLogin}>
                        <input 
                            type="email" 
                            value={email.value} 
                            onChange={email.onChange} 
                            placeholder={"Nazwa użytkownika..."}
                            className={styles.input}
                        />
                        <input 
                            type="password" 
                            value={password.value} 
                            onChange={password.onChange}
                            placeholder={"Hasło..."}
                            className={styles.input}
                        />
                        <input 
                            type="button" 
                            value="Zaloguj się" 
                            onClick={handleLogin}
                            className={`${styles.input} ${styles.submit}`}
                        /> 
                    </form>
                    <div className={styles.horizontalRuler}>
                        <p className={styles.connective}>lub</p>  
                    </div>
                    <a className={styles.googleButton} role="button" href="http://localhost:8080/oauth2/authorization/google" >
                       <span className={styles.googleIcone}> 
                            <GoogleSign />
                       </span>                     
                       <span className={styles.googleText}> 
                            Kontynuuj z Google
                       </span>
                    </a>
                    <Link className={styles.passwordLink} to="/password/reset" exact={false}>Nie pamiętasz hasła?</Link>
                </div>
                <div className={styles.subContent}>
            <span className={styles.span}>Nie masz konta?</span>
            <Link className={styles.registerLink} to="/registration" exact={false}> Zarejestruj się</Link>
        </div>
        </div>

        
        </>
    )
}

export default Index;