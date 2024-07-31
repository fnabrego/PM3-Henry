import React from "react"
import Style from "./Navbar.module.css"
import { NavLink, useNavigate} from "react-router-dom"
import { setUserData } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { clearStorage } from "../../helpers/storeAction";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
      const handleLogout = () => {
        clearStorage()
        dispatch(setUserData(null))
        navigate('/');
      }

    return (
            <div className={Style.navbar} >
                    <div className={Style.logo}>
                        <img src='https://mageducativa.cl/wp-content/uploads/2023/01/Bienestar-y-salud.png' alt="import" title="Principal" width="70px"/>
                    </div>

                    <div className={Style.item}>
                        { <NavLink className={Style.navlink} to="/home">Inicio</NavLink>}
                    </div>

                    <div className={Style.item}>
                        { <NavLink className={Style.navlink} to="/newAppointment">Solicitar</NavLink>}
                    </div>

                    <div className={Style.item}>
                        {<NavLink className={Style.navlink} to="/myAppointments">Mis Turnos</NavLink>}
                    </div>

                    <div className={Style.item}>
                        {<input className={Style.salir} type="button" value="Salir" onClick={handleLogout}/>}
                    </div>
            </div>
        );
}
export default Navbar