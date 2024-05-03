import React, {useEffect} from "react";
import './main.css';
import img from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import img4 from '../../Assets/img(4).jpg';
import img5 from '../../Assets/img(5).jpg';
import img6 from '../../Assets/img(6).jpg';
import img7 from '../../Assets/img(7).jpg';
import img8 from '../../Assets/img(8).jpg';
import img9 from '../../Assets/img(9).jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bariloche',
        location: "Rio Negro - Argentina",
        grade: "Cultural relax",
        fees: "$700",
        description: "The epitome of romance, Bariloche is one of the best travel destinations in the world"
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: "Tango Piazzola",
        location: "Buenos Aires",
        grade: "Dinner & Tango Show",
        fees: "$300",
        description: "One of the hotest places in Buenos Aires to enjoy a Tango Show"
    }, 

    {
        id: 3,
        imgSrc: img3,
        destTitle: "City Tour",
        location: "Buenos Aires",
        grade: "Cultural Tour",
        fees: "$50",
        description: "Various tours around the city"
    }, 

    {
        id: 4,
        imgSrc: img4,
        destTitle: "Museo Bellas Artes",
        location: "Buenos Aires",
        grade: "Cultural Tour",
        fees: "$50",
        description: "Wordl class museum"
    }, 

    {
        id: 5,
        imgSrc: img5,
        destTitle: "Lujan Zoo",
        location: "Lujan - Buenos Aires",
        grade: "Exotic tour",
        fees: "$100",
        description: "Zoo with various animals"
    }, 

    {
        id: 6,
        imgSrc: img6,
        destTitle: "Tigre Tour",
        location: "Tigre - Buenos Aires",
        grade: "Tour",
        fees: "$70",
        description: "Boat ride across the Lujan River in the town of Tigre"
    }, 

    {
        id: 7,
        imgSrc: img7,
        destTitle: "Parque de la Costa",
        location: "Tigre - Buenos Aires",
        grade: "Entertainment",
        fees: "$100",
        description: "Entrance to the coastal park, with various games and entertainment such as theater and others."
    }, 

    {
        id: 8,
        imgSrc: img8,
        destTitle: "Jardin Botanico de Buenos Aires",
        location: "Buenos Aires",
        grade: "Tour",
        fees: "$50",
        description: "Guided walk through the botanical garden of the city of Buenos Aires"
    }, 

    {
        id: 9,
        imgSrc: img9,
        destTitle: "La bombonera",
        location: "Buenos Aires",
        grade: "Tour",
        fees: "$100",
        description: "Guided walk through the mitical BOMBONERA stadium of Boca jr in the city of Buenos Aires"
    }, 



    
]

const Main = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="main container section">

            <div className="secTitle">
                <h3  data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>

            </div>

            <div className="secContent grid">

            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} data-aos="fade up" className="singleDestination">

                            <div className="imageDiv" >
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>

                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex"> 
                                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                                </button>
                            </div>

                        </div>
                    )
                })
            }

            </div>

        </section>
    )
}

export default Main