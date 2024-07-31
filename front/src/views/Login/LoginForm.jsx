import React, { useEffect, useState } from "react";
import Style from "./LoginForm.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import validateLogin from "../../helpers/validateLogin";
import { useDispatch } from "react-redux";
import { postUserL } from "../../services/userService";
import { setUserData } from "../../redux/userSlice";
import { accessStorage, loadStorage } from "../../helpers/storeAction";

const LoginForm = ({onsubmit}) => {
  const {user, session} =  accessStorage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(user|session) navigate('/home')
  }, [navigate]);
    const [credentialData, setCredentialData] = useState({
      username: '',
      password: ''
    });
    const [errors, setErrors] = useState({
      username: '',
      password: ''
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setCredentialData({ ...credentialData, [name]: value });
      setErrors(validateLogin({ ...credentialData, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      
      async function fetchData() {
          const {login, user} = await postUserL(credentialData);
          dispatch(setUserData({login, user}));
          loadStorage(user, login)
          alert('Bienvenido: '+ user.name)
          navigate('/home')
        }
      fetchData();
    }

    return (
          <section className={Style.login}>
            <a href="/" className={Style.logo}>
              <img src='https://mageducativa.cl/wp-content/uploads/2023/01/Bienestar-y-salud.png' alt="import" title="Principal" width="300px"/>
            </a>
            <div className={Style.container}>
              <form className={Style.form} onSubmit={handleSubmit}>
                <label className={Style.label} htmlFor="username">Usuario</label>
                <input 
                required type="text" id="username" name="username"
                autoComplete="username" placeholder="Ingrese Usuario" 
                onChange={handleChange}
                value={credentialData.username}
                className={errors.username ? Style.errorIn : Style.input}/>
                {errors.username && <span htmlFor="username" className={Style.error}>{errors.username}</span>}
                
                <label className={Style.label} htmlFor="password">Contraseña</label> 
                <input 
                required type="password" id="password" name="password"
                autoComplete="current-password" placeholder="Ingrese Contraseña"
                onChange={handleChange}
                value={credentialData.password}
                className={errors.password ? Style.errorIn : Style.input}/>
                {errors.password && <span htmlFor="password" className={Style.error}>{errors.password}</span>}
                
                
                <br/><br/>
                <div className={Style.options}>
                  <div className={Style.option}>
                    <input className={Style.navlink} type="submit" value="Ingresar" disabled={errors.username||errors.password}/>
                  </div>
                  <div className={Style.option}>
                    <NavLink to='/register' className={Style.navlink}>Registrate!</NavLink>
                  </div>
                </div>

              </form>
            </div>
          </section>
    )
}

export default LoginForm;