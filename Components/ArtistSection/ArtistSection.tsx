
import dileabstract from "../../media/images/dilettant-abstract.png"
import olababstract from "../../media/images/olab-abstract.png"
import dilecutout from "../../media/images/dilettant-cutout.png"
import olabcutout from "../../media/images/olab-cutout.png"

import ArtistComp from "./ArtistComp";

class Artist {
    constructor(name, tagline, image, icon) {
        // @ts-ignore
        this.name = name;
        // @ts-ignore
        this.tagline = tagline;
        // @ts-ignore
        this.image = image;
        // @ts-ignore
        this.icon = icon;
    }
}

export default function ArtistSection(){

    // const artistData = [
    //     {
    //         "name":"Dilettant",
    //         "tagline": "Han lave med skjegg",
    //         "artist_image": dilecutout,
    //         "artist_icon": dileabstract
    //     }
    // ]

    const artists = [
        new Artist("Dilettant", "Han lave med skjegg", dilecutout, dileabstract),
        new Artist("Ola B", "Han slappe fra Hardanger", olabcutout, olababstract)
    ];

    console.log(artists)

    return (
        <div className={"artist-section"}>

            <ArtistComp side={"left"} artistdata={artists[0]}/>
            <ArtistComp side={"right"} artistdata={artists[1]}/>

            {/*<ArtistComp side={"right"}/>*/}

            {/* ARTIST 2 */}

            {/*<div className={"artist-section__artist"}>*/}

            {/*    <img*/}
            {/*        className={"artist-section__icon"}*/}
            {/*        src={olababstract.src}*/}
            {/*        alt="Ola B abstract image"/>*/}

            {/*    <img*/}
            {/*        className={"artist-section__photo"}*/}
            {/*        src={olabcutout.src}*/}
            {/*        alt="Ola B photo"/>*/}

            {/*    <div className={"artist-section__text__left"}>*/}
            {/*        <h3 className={"artist-section__text__major artist-section__text__right"}>*/}
            {/*            OLA B*/}
            {/*        </h3>*/}

            {/*        <h4 className={"artist-section__text__minor"}>*/}
            {/*            HAN SLAPPE FRA HARDANGER*/}
            {/*        </h4>*/}
            {/*    </div>*/}

            {/*</div>*/}

            {/* END*/}


        </div>
    )
}

function ArtistSectionOld() {
    return (
        <div className={"artist-section"}>

            <div className={"artist-section__artist"}>

                <div className={"artist-section__text__left"}>
                    <h4 className={"artist-section__text__minor"}>
                        HAN LAVE MED SKJEGG
                    </h4>

                    <h3 className={"artist-section__text__major"}>
                        DILETTANT
                    </h3>
                </div>

                <img
                    className={"artist-section__photo"}
                    src={dilecutout.src}
                    alt="Dilettant photo"/>
                <img
                    className={"artist-section__icon"}
                    src={dileabstract.src}
                    alt="Dilettant abstract image"
                />
            </div>

            {/* ARTIST 2 */}

            <div className={"artist-section__artist"}>

                <img
                    className={"artist-section__icon"}
                    src={olababstract.src}
                    alt="Ola B abstract image"/>

                <img
                    className={"artist-section__photo"}
                    src={olabcutout.src}
                    alt="Ola B photo"/>

                <div className={"artist-section__text__left"}>
                    <h3 className={"artist-section__text__major artist-section__text__right"}>
                        OLA B
                    </h3>

                    <h4 className={"artist-section__text__minor"}>
                        HAN SLAPPE FRA HARDANGER
                    </h4>
                </div>

            </div>

        {/* END*/}


        </div>
    )
}