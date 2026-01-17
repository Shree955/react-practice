import {useState} from "react";
import {FaStar} from "react-icons/fa";
import './style.css';

export default function StarRatings({noOfStars = 5}){
    const [ratings , setRatings] = useState(0);
    const [hover , setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRatings(getCurrentIndex);
        
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
        setHover(ratings);
    }

    return(
        <div className ="star-ratings">
            {[...Array(noOfStars)].map((_ , index) => {
                index +=1;

                return(
                    <FaStar
                    key={index}
                    className={index <=(hover || ratings) ? "active" : "inactive"}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                    ></FaStar>
                );
            })}
        </div>
    );
}