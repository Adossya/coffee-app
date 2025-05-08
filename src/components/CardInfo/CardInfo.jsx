import { useEffect, useState, useTransition } from "react";
import Divider from "../Divider/Divider";


import "./index.scss"
import { useNavigate, useParams } from "react-router-dom";
import data from '../../data/data.json';
import { useContext } from "react";
import { ShowContext } from "../showContext/showContext";


const CardInfo = () => {
    const params = useParams();

    const [coffee, setCoffee] = useState(null);

    const {setShow} = useContext(ShowContext);

    useEffect(()=> {
        setCoffee(data.find((item) => item.id == params.id))
    },[]);

    const navigate = useNavigate();
    const handleClick = () => {
        setShow(true); // или какое-то другое действие
        navigate(-1);
      };



    return (  
        coffee ? (
            <div className="card-info">
                <div className="container">
                    <div className="card-info__wrapper">
                            <div className="card-info__img">
                                <img src="../../img/cardphoto.jpg" alt="card-info_img" />
                            </div>
                            <div className="card-info__item">
                            <h3 className="card-info__title">About it</h3>
                                <Divider color="black"/>
                                <div className="card-info__country"><b>Country: </b>{coffee.country}</div>
                                <div className="card-info__description"><b>Description: </b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, quidem quam unde sunt ex numquam nihil eius totam illum iure odit deleniti repudiandae porro ipsa enim nesciunt. Eligendi, cupiditate doloribus!
                                </div>
                                <div className="card-info__price"><b>Price: </b>{coffee.price}</div>
                            </div>
                            <button onClick={handleClick} className="card-info__back-button">Back</button>
                    </div>
                </div>
            </div>
        ) : (
            <div className="card-info">
                <div className="container">

                </div>
            </div>
        )
 

    );
}
 
export default CardInfo;