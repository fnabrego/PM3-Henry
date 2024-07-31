import React, { useEffect } from "react"
import Style from "./Home.module.css"
import { useNavigate } from "react-router-dom";
import { accessStorage } from "../../helpers/storeAction";


const Home = ()=>{
    const navigate = useNavigate();
    const {user, session} =  accessStorage();
    console.log('Usuario en home: '+ user);
    useEffect(() => {
        if(!session && !user) {
            setIsChecked();
            navigate('/')
        }
      }, [navigate]);
 
    useEffect(() => {
        const handlePopState = () => {
            setRefreshKey(prevKey => prevKey + 1);
        }
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        }
    }, []);

    return (
        <section className={Style.homing}>
            <div className={Style.container}>
                <div className={Style.label}>
                    <label className={Style.label} htmlFor="username">Usuario: </label>
                    <span id="username">{user.name}</span>
                </div>
                <div className={Style.label}>
                    <label className={Style.label} htmlFor="mail">mail: </label>
                    <span id="mail">{user.email}</span>
                </div>
                <div className={Style.label}>
                    <label className={Style.label} htmlFor="birthdate">Nacimiento: </label>
                    <span id="birthdate">{user.birthdate}</span>
                </div>
                <div className={Style.label}>
                    <label className={Style.label} htmlFor="nDni">DNI: </label>
                    <span id="nDni">{user.nDni}</span>
                </div>
            </div>
        </section>
    )
}
export default Home