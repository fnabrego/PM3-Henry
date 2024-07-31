import React, { useEffect, useState } from "react"
import Style from "./Ladding.module.css"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { accessStorage } from "../../helpers/storeAction"

const Ladding = () => {
    const navigate = useNavigate();
    const {user, session} =  accessStorage();
    const userData = useSelector((state) => state.actualUser.userData.user);
    
    console.log('esto es userdata en lading: ' + {userData})
    
    useEffect(() => {
        if(userData && user) {
            navigate('/home')
        }
      }, [navigate]);

    const [currentSlide, setCurrentSlide] = useState(0); 

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); 
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5); 
    };

    return (
            <section className={Style.ladding}>
                
                <div className={Style.container}>
                    <div className={Style.welcome}>
                        <h2>Bienvenido/a</h2>
                        {/* <a className={Style.logo}>
                            <img src='https://mageducativa.cl/wp-content/uploads/2023/01/Bienestar-y-salud.png' alt="import" title="Principal" width="200px"/>
                        </a> */}
                    </div>
                    <div className={Style.carousel}>
                        <div className={Style.carrusel_slides}>
                            <div className={Style.carousel__slide} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <h2>¡Hola! </h2>
                                <h3>
                                    Soy Eric Cartman, psicólogo clínico con una  sólida 
                                    formación y experiencia en el campo de la psicología. 
                                    Mi objetivo es proporcionar un ambiente seguro y 
                                    comprensivo donde puedas explorar tus pensamientos, 
                                    sentimientos y preocupaciones.
                                </h3>
                            </div>
                            <div className={Style.carousel__slide} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <h2>Sobre Mí</h2>
                                <h3>
                                    Soy licenciado/a en Psicología por la Universisad Siglo XXV y cuento con una maestría en Pedagogía Infatojuvenil. Mi enfoque 
                                    terapéutico se basa en una combinación de técnicas de terapia cognitivo-conductual, terapia de aceptación y compromiso, y 
                                    enfoques humanistas. Creo firmemente en la importancia de la conexión terapéutica y el trabajo colaborativo para lograr el 
                                    bienestar emocional.
                                </h3>
                            </div>
                            <div className={Style.carousel__slide} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <h2>Mi Enfoque de Trabajo</h2>
                                <h3>
                                    En mi práctica, me dedico a trabajar con personas que están atravesando una variedad de desafíos emocionales, incluyendo 
                                    ansiedad, depresión, estrés, relaciones interpersonales, y más. Utilizo un enfoque centrado en el cliente, adaptando mis 
                                    intervenciones a las necesidades y objetivos únicos de cada individuo.
                                </h3>
                            </div>
                            <div className={Style.carousel__slide} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <h2>Creando un Espacio de Confianza</h2>
                                <h3>
                                    Entiendo lo difícil que puede ser dar el primer paso hacia la terapia, por lo que me esfuerzo por crear un espacio de 
                                    confianza y respeto mutuo desde el primer encuentro. Mi objetivo es trabajar contigo para identificar tus fortalezas 
                                    y áreas de crecimiento, y juntos desarrollar estrategias para superar los desafíos que enfrentas.
                                </h3>
                            </div>
                            <div className={Style.carousel__slide} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <h2>¿Listo/a para Dar el Primer Paso?</h2>
                                <h3>
                                Si estás listo/a para comenzar tu viaje hacia el bienestar emocional, estaré aquí para apoyarte en cada paso del camino. 
                                Puedes solicitar una cita a través de la función de solicitud de turnos en esta página web, o simplemente contáctame 
                                para obtener más información sobre mis servicios.
                                </h3>
                            </div>
                        </div>
                    <div className={Style.carousel__nav}>
                        <button className={Style.carousel__button} onClick={prevSlide}>{'<'}</button>
                        <button className={Style.carousel__button} onClick={nextSlide}>{'>'}</button>
                    </div>
                    </div>
                </div>

                <div className={Style.options}>
                    <div className={Style.option}>
                        <NavLink to={'/login'} className={Style.navlink}>Ingresar</NavLink>
                        <span className={Style.subtitle}>Ingresá para solicitar un turno</span>
                    </div>
                    <div className={Style.option}>
                        <NavLink to={'/register'} className={Style.navlink}>Registrarme</NavLink>
                        <span className={Style.subtitle}>Registrate para poder ingresar</span>
                    </div>
                </div>
            </section>
);
}

export default Ladding