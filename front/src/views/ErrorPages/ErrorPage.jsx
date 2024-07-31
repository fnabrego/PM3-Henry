import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Style from "./ErrorPage.module.css"

function ErrorPages(props){
    const [countdown, setcontdown] = useState(5);
    const navigate = useNavigate();
    useEffect(()=>{
        const time = setTimeout(()=>{
            if(countdown === 1) navigate("/home");
            setcontdown(countdown => countdown -1);
        }, 1000);
        return()=>clearTimeout(time)
    }, [countdown]);

    useEffect(()=> ()=>{
        setcontdown(5);
    },[])


    return(
        <>
            <div className={Style.card}>
                <p>Tranquilo, te llevaremos a la página principal.</p> 
            </div>
        </>
    )

}
export default ErrorPages