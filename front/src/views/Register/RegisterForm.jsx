import React, { useEffect, useState } from "react"
import Style from "./RegisterForm.module.css"
import { NavLink, useNavigate  } from "react-router-dom";
import validateUser from "../../helpers/validateUser";
import { postUserR } from "../../services/userService";
import { accessStorage } from "../../helpers/storeAction";

const RegisterForm = ({onSubmit}) => {
  const navigate = useNavigate();
  const {user, session} =  accessStorage();
  
  useEffect(() => {
    if(user|session) navigate('/home')
  }, [navigate]);

    const [userData, setUserData] = useState({
      username: '', password: '', name: '', email: '', birthdate: '', nDni: 0
    });

    const [errors, setErrors] = useState({
      username: '', password: '', name: '', email: '', birthdate: '', nDni: ''
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === 'name') {
        const capitalizedValue = value.replace(/\b\w/g, (match) => match.toUpperCase());
        setUserData({ ...userData, [name]: capitalizedValue });
      } else {
        setUserData({ ...userData, [name]: value });
      }
      setErrors(validateUser({ ...userData, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      async function fetchData() {
          const newUser = await postUserR(userData);
          alert(`Datos Registrados ${newUser.name}`)
          navigate('/')
        }
      fetchData();
    }
    
    return (
        <section className={Style.register}>
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
                value={userData.username}
                className={errors.username ? Style.errorIn : Style.input}/>
                {errors.username && <span htmlFor="username" className={Style.error}>{errors.username}</span>}
                
                <label className={Style.label} htmlFor="password">Contraseña</label>
                <input 
                required type="password" id="password" name="password"
                autoComplete="current-password" placeholder="Ingrese Contraseña"
                onChange={handleChange}
                value={userData.password}
                className={errors.password ? Style.errorIn : Style.input}/>
                {errors.password && <span htmlFor="password" className={Style.error}>{errors.password}</span>}

                <label className={Style.label} htmlFor="name">Nombre Completo</label>
                <input required type="text" id="name" name="name"
                placeholder="Ingrese Nombre"
                onChange={handleChange}
                value={userData.name}
                className={errors.name ? Style.errorIn : Style.input}/>
                {errors.name && <span htmlFor="name" className={Style.error}>{errors.name}</span>}
                
                <label className={Style.label} htmlFor="email">Correo</label>
                <input required type="email" id="email" name="email"
                placeholder="Ingrese correo"
                onChange={handleChange}
                value={userData.email}
                className={errors.email ? Style.errorIn : Style.input}/>
                {errors.email && <span htmlFor="email" className={Style.error}>{errors.email}</span>}
                
                <label className={Style.label} htmlFor="birthdate">Fecha de Nacimiento</label>

                <input required type="date" id="birthdate" name="birthdate"
                placeholder="Ingrese Fecha de Nacimiento"
                onChange={handleChange}
                value={userData.birthdate}
                className={errors.birthdate ? Style.errorIn : Style.input}/>
                {errors.birthdate && <span htmlFor="birthdate" className={Style.error}>{errors.birthdate}</span>}
                
                <label className={Style.label} htmlFor="nDni">N° DNI</label> 
                <input required type="number" id="nDni" name="nDni"
                placeholder="Ingrese DNI"
                onChange={handleChange}
                value={userData.nDni}
                className={errors.nDni ? Style.errorIn : Style.input}/>
                {errors.nDni && <span htmlFor="nDni" className={Style.error}>{errors.nDni}</span>}
                
                <div className={Style.options}>
                  <div className={Style.option}>
                    <input className={Style.navlink} type="submit" value="Crear Usuario" disabled={errors.username||errors.password|| errors.name || errors.email||errors.email||errors.nDni}/>
                  </div>
                  <div className={Style.option}>
                    <NavLink to='/login' className={Style.navlink} >Lo tengo!</NavLink>
                  </div>
                </div>
            </form>
          </div>
        </section>
    )
}

export default RegisterForm;