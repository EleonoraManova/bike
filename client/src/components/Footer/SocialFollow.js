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
            <Link to="https://www.youtube.com/user/fabwibmer"
                className={style.youtube}>
                <FontAwesomeIcon icon={faYoutube} size="2x" className={style.social} />
            </Link>
            <Link to="https://www.facebook.com/"
                className={style.facebook}>
                <FontAwesomeIcon icon={faFacebook} size="2x" className={style.social}/>
            </Link>
            <Link to="https://www.twitter.com/" className={style.twitter}>
                <FontAwesomeIcon icon={faTwitter} size="2x" className={style.social}/>
            </Link>
            <Link to="https://www.instagram.com/"
                className={style.instagram}>
                <FontAwesomeIcon icon={faInstagram} size="2x" className={style.social}/>
            </Link>
        </div>
    );
}