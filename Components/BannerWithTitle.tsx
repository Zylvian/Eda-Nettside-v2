import pageicon from "../media/images/eda_logo.png"
import bannerimage from "../media/images/banner-image.png"
import {useEffect, useState} from "react";

export default function BannerWithTitle() {

    const [slogan, setSlogan] = useState("");
    useEffect(() => setSlogan(SloganChooser));

    return (
        <div className={"banner-with-title"}>
            <img className={"banner-with-title__logo"} src={pageicon.src} alt="Eda logo"/>
            <h1 className={"banner-with-title__title"}> {slogan} </h1>
        </div>
    )
}

function SloganChooser(){
    const slogans = [
        "INGEN BAD MANNERS, BARE MAD BANGERS",
        "VI MAKER MAD BANGERS"
    ]
    const random_index = Math.floor(Math.random() * slogans.length);
    return slogans[random_index];
}
