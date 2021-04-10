import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import style from "../Footer/Footer.module.css";
import { Link } from 'react-router-dom';

export default function SocialFollow() {
    return (
        <div className={style.socialContainer}>
            <h3 className={style.words}>Follow us on:</h3>
            <Link to={{ pathname:"https://www.youtube.com/user/fabwibmer"}}  target="/blank"
                className={style.youtube}>
                <FontAwesomeIcon icon={faYoutube} size="2x" className={style.social} />
            </Link>
            <Link to={{ pathname:"https://www.facebook.com/"}} target="/blank"
                className={style.facebook}>
                <FontAwesomeIcon icon={faFacebook} size="2x" className={style.social}/>
            </Link>
            <Link to={{ pathname:"https://www.twitter.com/"}} target="/blank" className={style.twitter}>
                <FontAwesomeIcon icon={faTwitter} size="2x" className={style.social}/>
            </Link>
            <Link to={{ pathname:"https://www.instagram.com/"}} target="/blank"
                className={style.instagram}>
                <FontAwesomeIcon icon={faInstagram} size="2x" className={style.social}/>
            </Link>
        </div>
    );
}