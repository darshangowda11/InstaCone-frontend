import React from "react";
import { BsThreeDots, BsFillHeartFill } from "react-icons/bs";
import {SlPaperPlane} from "react-icons/sl";
import "./card.css"


export default function InstaCard({user}){
    return <section className="card">
        <h4 className="name"> {user.name}</h4> 
        <p className="location">{user.location}</p>
        <img className="image" src={user.PostImage} alt="postimg"/>
        <BsThreeDots className="dots"/>
        <BsFillHeartFill className="heart"></BsFillHeartFill>
        <SlPaperPlane className="plane"></SlPaperPlane>
        <time className="date">{user.date}</time>
        <sub className="likes">{user.likes}likes : 25</sub>
        <div className="descriptions">{user.description}</div>
    </section>
}
